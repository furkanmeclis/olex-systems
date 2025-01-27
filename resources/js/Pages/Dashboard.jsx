import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router} from '@inertiajs/react';
import {Card} from "primereact/card";
import React, {useMemo} from "react";
import {Toast} from "primereact/toast";
import {BlockUI} from "primereact/blockui";
import {motion} from "framer-motion";
import CustomButton from "@/Components/CustomButton";
import CustomChart from "@/Components/CustomChart";

export default function Dashboard({auth, metrics, csrf_token}) {
    const [loading, setLoading] = React.useState(false);
    const toast = React.useRef(null);
    const [verticalChartOptions, setVerticalChartOptions] = React.useState({});
    const [horizontalChartOptions, setHorizontalChartOptions] = React.useState({});
    const [chartVisibility, setChartVisibility] = React.useState({});
    const [chartData, setChartData] = React.useState({
        serviceChart: {},
        brandChart: {},
        dealerChart: {},
        workerChart: {},
        productsChart: {},
        dealerCustomerChart: {},
        serviceWorkerChart: {},
        productStockChart: {},
    });

    const applyData = (chartKey, data) => {
        setChartData(prevState => ({
            ...prevState,
            [chartKey]: data
        }));
    };
    const staticUrl = useMemo(() => {
        if (auth.user.role === "super") {
            return route("super.staticsData");
        } else if (auth.user.role === "admin") {
            return route("dealer.staticsData");
        } else if (auth.user.role.includes("central")) {
            return route("central.staticsDataCentral");
        }
    }, [auth.user.role]);
    const cardVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.5}
        }
    };

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const getStatics = () => {
        setLoading(true)
        const documentStyle = getComputedStyle(document.documentElement);
        fetch(staticUrl, {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': csrf_token
            },
        }).then(response => response.json()).then(data => {
            if (auth.user.role === "super") {
                applyData('serviceChart', {
                    labels: data.chart.chart.labels,
                    datasets: [{
                        label: "Tamamlanan Hizmetler",
                        backgroundColor: '#60A5FA',
                        borderColor: '#3B82F6',
                        data: data.chart.chart.data,
                        borderRadius: 10
                    }]
                });
                applyData('brandChart', {
                    labels: data.chart.brands.labels,
                    datasets: [{
                        label: "Marka Dağılımı",
                        backgroundColor: '#F472B6',
                        borderColor: '#EC4899',
                        data: data.chart.brands.data,
                        borderRadius: 10
                    }]
                });
                applyData('dealerChart', {
                    labels: data.chart.dealer.labels,
                    datasets: [{
                        label: "Hizmet Bayi Dağılımı",
                        backgroundColor: '#34D399',
                        borderColor: '#10B981',
                        data: data.chart.dealer.data,
                        borderRadius: 10
                    }]
                });
                applyData('productsChart', {
                    labels: data.chart.products.labels,
                    datasets: [{
                        label: "Ürün Dağılımı",
                        backgroundColor: '#A78BFA',
                        borderColor: '#8B5CF6',
                        data: data.chart.products.data,
                        borderRadius: 10
                    }]
                });
                applyData('dealerCustomerChart', {
                    labels: data.chart.dealerCustomer.labels,
                    datasets: [{
                        label: "Bayi Müşteri Dağılımı",
                        backgroundColor: '#FBBF24',
                        borderColor: '#F59E0B',
                        data: data.chart.dealerCustomer.data,
                        borderRadius: 10
                    }]
                });
                applyData('serviceWorkerChart', {
                    labels: data.chart.serviceWorker.labels,
                    datasets: [{
                        label: "Çalışan Hizmet Dağılımı",
                        backgroundColor: '#FB7185',
                        borderColor: '#F43F5E',
                        data: data.chart.serviceWorker.data,
                        borderRadius: 10
                    }]
                });
                applyData('productStockChart', {
                    labels: data.chart.productStock.labels,
                    datasets: [{
                        label: "Kullanılmayan",
                        backgroundColor: '#38BDF8',
                        borderColor: '#0EA5E9',
                        data: data.chart.productStock.data.map(item => item.unused),
                    }, {
                        label: "Kullanılan",
                        backgroundColor: '#4ADE80',
                        borderColor: '#22C55E',
                        data: data.chart.productStock.data.map(item => item.used)
                    }]
                });
            }

            if (auth.user.role === "admin") {
                applyData('serviceChart', {
                    labels: data.chart.chart.labels,
                    datasets: [{
                        label: "Tamamlanan Hizmetler",
                        backgroundColor: '#60A5FA',
                        borderColor: '#3B82F6',
                        data: data.chart.chart.data,
                        borderRadius: 10
                    }]
                });

                applyData('brandChart', {
                    labels: data.chart.brands.labels,
                    datasets: [{
                        label: "Marka Dağılımı",
                        backgroundColor: '#F472B6',
                        borderColor: '#EC4899',
                        data: data.chart.brands.data,
                        borderRadius: 10
                    }]
                });
                applyData('workerChart', {
                    labels: data.chart.worker.labels,
                    datasets: [{
                        label: "Çalışan Hizmet Dağılımı",
                        backgroundColor: '#2DD4BF',
                        borderColor: '#14B8A6',
                        data: data.chart.worker.data,
                        borderRadius: 10
                    }]
                });
            }
            if (auth.user.role.includes("central")) {
                applyData('dealerOrders', {
                    labels: data.chart.dealerOrders.labels,
                    datasets: [{
                        label: "Bayi Siparişleri",
                        backgroundColor: '#FBBF24',
                        borderColor: '#F59E0B',
                        data: data.chart.dealerOrders.data,
                        borderRadius: 10
                    }]
                });
                applyData('productOrders', {
                    labels: data.chart.productOrders.labels,
                    datasets: [{
                        label: "Ürün Siparişleri",
                        backgroundColor: '#38BDF8',
                        borderColor: '#0EA5E9',
                        data: data.chart.productOrders.data,
                        borderRadius: 10
                    }]
                });
                applyData('productStock', {
                    labels: data.chart.productStock.labels,
                    datasets: [{
                        label: "Toplam",
                        backgroundColor: '#38BDF8',
                        borderColor: '#0EA5E9',
                        data: data.chart.productStock.data.map(item => item.total),
                    }, {
                        label: "Satılan",
                        backgroundColor: '#4ADE80',
                        borderColor: '#22C55E',
                        data: data.chart.productStock.data.map(item => item.dealer)
                    }]
                });
            }
        }).catch((error) => {
            console.error('Error:', error);
            toast.current.show({
                severity: 'error',
                summary: 'Hata',
                detail: "CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."
            });
        }).finally(() => {
            setLoading(false);
        });
    };

    React.useEffect(() => {
        getStatics();
    }, []);

    React.useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    min: 0,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
            }
        };

        setHorizontalChartOptions(options);
        setVerticalChartOptions({
            ...options,
            indexAxis: 'y',
        });
    }, []);

    // LocalStorage'dan gizli grafikleri yükleme
    React.useEffect(() => {
        const savedHiddenCharts = localStorage.getItem('hiddenCharts');
        if (savedHiddenCharts) {
            setChartVisibility(JSON.parse(savedHiddenCharts));
        }
    }, []);

    // Görünürlük değişikliği
    const handleVisibilityChange = (chartId, isVisible) => {
        const newVisibility = {
            ...chartVisibility,
            [chartId]: isVisible
        };
        setChartVisibility(newVisibility);
        localStorage.setItem('hiddenCharts', JSON.stringify(newVisibility));
    };

    // Tüm gizli grafikleri göster
    const showAllHiddenCharts = () => {
        setChartVisibility({});
        localStorage.removeItem('hiddenCharts');
    };

    // Gizli grafik sayısını hesapla
    const hiddenChartsCount = Object.values(chartVisibility).filter(v => v === false).length;

    return (<AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Anasayfa</h2>}
    >
        <Head title="Anasayfa"/>
        <Toast ref={toast}/>
        <div className="py-6">
            <div className="max-w-[100rem] mx-auto sm:px-6 lg:px-8">
                {/* Gizli grafikleri gösterme butonu */}
                {hiddenChartsCount > 0 && (
                    <div className="mb-4">
                        <CustomButton
                            label={`Gizli Grafikleri Göster (${hiddenChartsCount})`}
                            icon="pi-eye"
                            color="secondary"
                            onClick={showAllHiddenCharts}
                            className="w-full md:w-auto"
                        />
                    </div>
                )}

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}
                >
                    {(auth.user.role === "super") && <>
                        <motion.div variants={cardVariants}>
                            <Card
                                className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br  transform hover:-translate-y-1"
                                title={
                                    <div
                                        className="flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-200">
                                        <i className="pi pi-users text-blue-500"></i>
                                        Bayiler
                                    </div>
                                }
                                subTitle={
                                    <div className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                                        <i className="pi pi-users"></i> {metrics.dealers} Adet Bayi
                                    </div>
                                }
                            >
                                <CustomButton
                                    label="Bayiler"
                                    icon="pi-users"
                                    color="blue"
                                    onClick={() => router.visit(route('super.dealers.index'))}
                                />
                            </Card>
                        </motion.div>

                        <motion.div variants={cardVariants}>
                            <Card
                                className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br  transform hover:-translate-y-1"
                                title={
                                    <div
                                        className="flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-200">
                                        <i className="pi pi-users text-green-500"></i>
                                        Çalışanlar
                                    </div>
                                }
                                subTitle={
                                    <div className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                                        <i className="pi pi-users"></i> {metrics.workers} Adet Bayi Çalışanı
                                    </div>
                                }
                            >
                                <CustomButton
                                    label="Çalışanlar"
                                    icon="pi-users"
                                    color="green"
                                    onClick={() => router.visit(route('super.workers.index'))}
                                />
                            </Card>
                        </motion.div>

                        <motion.div variants={cardVariants}>
                            <Card
                                className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br  transform hover:-translate-y-1"
                                title={
                                    <div
                                        className="flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-200">
                                        <i className="pi pi-box text-yellow-500"></i>
                                        Ürünler
                                    </div>
                                }
                                subTitle={
                                    <div className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                                        <i className="pi pi-box"></i> {metrics.products} Adet Ürün
                                    </div>
                                }
                            >
                                <CustomButton
                                    label="Ürünler"
                                    icon="pi-box"
                                    color="yellow"
                                    onClick={() => router.visit(route('super.products.index'))}
                                />
                            </Card>
                        </motion.div>

                        <motion.div variants={cardVariants}>
                            <Card
                                className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br  transform hover:-translate-y-1"
                                title={
                                    <div
                                        className="flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-200">
                                        <i className="pi pi-database text-purple-500"></i>
                                        Bayi Ürün Siparişleri
                                    </div>
                                }
                                subTitle={
                                    <div className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                                        <i className="pi pi-database"></i> {metrics.orders} Adet Sipariş
                                    </div>
                                }
                            >
                                <CustomButton
                                    label="Siparişler"
                                    icon="pi-database"
                                    color="purple"
                                    onClick={() => router.visit(route('super.orders.index'))}
                                />
                            </Card>
                        </motion.div>

                        <motion.div variants={cardVariants}>
                            <Card
                                className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br  transform hover:-translate-y-1"
                                title={
                                    <div
                                        className="flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-200">
                                        <i className="pi pi-users text-red-500"></i>
                                        Müşteriler
                                    </div>
                                }
                                subTitle={
                                    <div className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                                        <i className="pi pi-users"></i> {metrics.customers} Adet Müşteri
                                    </div>
                                }
                            >
                                <CustomButton
                                    label="Müşteriler"
                                    icon="pi-users"
                                    color="red"
                                    onClick={() => router.visit(route('super.customers.index'))}
                                />
                            </Card>
                        </motion.div>

                        <motion.div variants={cardVariants}>
                            <Card
                                className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br  transform hover:-translate-y-1"
                                title={
                                    <div
                                        className="flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-200">
                                        <i className="pi pi-file text-pink-500"></i>
                                        Hizmetler
                                    </div>
                                }
                                subTitle={
                                    <div className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                                        <i className="pi pi-file"></i> {metrics.services} Adet Hizmet Kaydı
                                    </div>
                                }
                            >
                                <CustomButton
                                    label="Hizmetler"
                                    icon="pi-file"
                                    color="pink"
                                    onClick={() => router.visit(route('super.services'))}
                                />
                            </Card>
                        </motion.div>
                    </>}
                    {String(auth.user.role).includes("central") && <>
                        <motion.div variants={cardVariants}>
                            <Card
                                className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br  transform hover:-translate-y-1"
                                title={
                                    <div
                                        className="flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-200">
                                        <i className="pi pi-users text-blue-500"></i>
                                        Bayiler
                                    </div>
                                }
                                subTitle={
                                    <div className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                                        <i className="pi pi-users"></i> {metrics.dealers} Adet Bayi
                                    </div>
                                }
                            >
                                <CustomButton
                                    label="Bayiler"
                                    icon="pi-users"
                                    color="blue"
                                    onClick={() => router.visit(route('central.dealers.index'))}
                                />
                            </Card>
                        </motion.div>

                        <motion.div variants={cardVariants}>
                            <Card
                                className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br  transform hover:-translate-y-1"
                                title={
                                    <div
                                        className="flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-200">
                                        <i className="pi pi-users text-green-500"></i>
                                        Çalışanlar
                                    </div>
                                }
                                subTitle={
                                    <div className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                                        <i className="pi pi-users"></i> {metrics.workers} Adet Bayi Çalışanı
                                    </div>
                                }
                            >
                                <CustomButton
                                    label="Çalışanlar"
                                    icon="pi-users"
                                    color="green"
                                    onClick={() => router.visit(route('central.workers.index'))}
                                />
                            </Card>
                        </motion.div>

                        <motion.div variants={cardVariants}>
                            <Card
                                className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br  transform hover:-translate-y-1"
                                title={
                                    <div
                                        className="flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-200">
                                        <i className="pi pi-box text-yellow-500"></i>
                                        Ürünler
                                    </div>
                                }
                                subTitle={
                                    <div className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                                        <i className="pi pi-box"></i> {metrics.products} Adet Ürün
                                    </div>
                                }
                            >
                                <CustomButton
                                    label="Ürünler"
                                    icon="pi-box"
                                    color="yellow"
                                    onClick={() => router.visit(route('central.products.index'))}
                                />
                            </Card>
                        </motion.div>

                        <motion.div variants={cardVariants}>
                            <Card
                                className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br  transform hover:-translate-y-1"
                                title={
                                    <div
                                        className="flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-200">
                                        <i className="pi pi-database text-purple-500"></i>
                                        Bayi Ürün Siparişleri
                                    </div>
                                }
                                subTitle={
                                    <div className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                                        <i className="pi pi-database"></i> {metrics.orders} Adet Sipariş
                                    </div>
                                }
                            >
                                <CustomButton
                                    label="Siparişler"
                                    icon="pi-database"
                                    color="purple"
                                    onClick={() => router.visit(route('central.orders.index'))}
                                />
                            </Card>
                        </motion.div>

                        <motion.div variants={cardVariants}>
                            <Card
                                className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br  transform hover:-translate-y-1"
                                title={
                                    <div
                                        className="flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-200">
                                        <i className="pi pi-users text-red-500"></i>
                                        Müşteriler
                                    </div>
                                }
                                subTitle={
                                    <div className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                                        <i className="pi pi-users"></i> {metrics.customers} Adet Müşteri
                                    </div>
                                }
                            >
                                <CustomButton
                                    label="Müşteriler"
                                    icon="pi-users"
                                    color="red"
                                    onClick={() => router.visit(route('super.customers.index'))}
                                />
                            </Card>
                        </motion.div>
                        <motion.div variants={cardVariants}>
                            <Card
                                className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br  transform hover:-translate-y-1"
                                title={
                                    <div
                                        className="flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-200">
                                        <i className="pi pi-file text-pink-500"></i>
                                        Hizmetler
                                    </div>
                                }
                                subTitle={
                                    <div className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                                        <i className="pi pi-file"></i> {metrics.services} Adet Hizmet Kaydı
                                    </div>
                                }
                            >
                                <CustomButton
                                    label="Hizmetler"
                                    icon="pi-file"
                                    color="pink"
                                    onClick={() => router.visit(route('central.services'))}
                                />
                            </Card>
                        </motion.div>
                    </>}
                    {(auth.user.role === "admin") && <>
                        <motion.div variants={cardVariants}>
                            <Card
                                className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br  transform hover:-translate-y-1"
                                title={
                                    <div
                                        className="flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-200">
                                        <i className="pi pi-users text-green-500"></i>
                                        Çalışanlar
                                    </div>
                                }
                                subTitle={
                                    <div className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                                        <i className="pi pi-users"></i> {metrics.workers} Adet Çalışan
                                    </div>
                                }
                            >
                                <CustomButton
                                    label="Çalışanlar"
                                    icon="pi-users"
                                    color="green"
                                    onClick={() => router.visit(route('dealer.workers.index'))}
                                />
                            </Card>
                        </motion.div>

                        <motion.div variants={cardVariants}>
                            <Card
                                className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br  transform hover:-translate-y-1"
                                title={
                                    <div
                                        className="flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-200">
                                        <i className="pi pi-database text-purple-500"></i>
                                        Siparişler
                                    </div>
                                }
                                subTitle={
                                    <div className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                                        <i className="pi pi-database"></i> {metrics.orders} Adet Sipariş
                                    </div>
                                }
                            >
                                <CustomButton
                                    label="Siparişler"
                                    icon="pi-database"
                                    color="purple"
                                    onClick={() => router.visit(route('dealer.orders'))}
                                />
                            </Card>
                        </motion.div>

                        <motion.div variants={cardVariants}>
                            <Card
                                className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br  transform hover:-translate-y-1"
                                title={
                                    <div
                                        className="flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-200">
                                        <i className="pi pi-users text-red-500"></i>
                                        Müşteriler
                                    </div>
                                }
                                subTitle={
                                    <div className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                                        <i className="pi pi-users"></i> {metrics.customers} Adet Müşteri
                                    </div>
                                }
                            >
                                <CustomButton
                                    label="Müşteriler"
                                    icon="pi-users"
                                    color="red"
                                    onClick={() => router.visit(route('dealer.customers'))}
                                />
                            </Card>
                        </motion.div>

                        <motion.div variants={cardVariants}>
                            <Card
                                className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br  transform hover:-translate-y-1"
                                title={
                                    <div
                                        className="flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-200">
                                        <i className="pi pi-file text-pink-500"></i>
                                        Hizmetler
                                    </div>
                                }
                                subTitle={
                                    <div className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                                        <i className="pi pi-file"></i> {metrics.services} Adet Hizmet Kaydı
                                    </div>
                                }
                            >
                                <CustomButton
                                    label="Hizmetler"
                                    icon="pi-file"
                                    color="pink"
                                    onClick={() => router.visit(route('dealer.services'))}
                                />
                            </Card>
                        </motion.div>
                    </>}
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.3}}
                    className={"mt-6"}
                >
                    <BlockUI blocked={loading}
                             template={<i className="pi pi-spin pi-spinner text-primary-500"
                                          style={{fontSize: '3rem'}}></i>}>

                        {/* Super admin grafikleri */}
                        {auth.user.role === "super" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                                {chartVisibility['products'] !== false && (
                                    <Card className="shadow-lg bg-gradient-to-br ">
                                        <CustomChart
                                            type="bar"
                                            data={chartData.productsChart}
                                            horizontalOptions={verticalChartOptions}
                                            verticalOptions={horizontalChartOptions}
                                            title="Ürün Kullanım Grafiği"
                                            chartId="products"
                                            onVisibilityChange={handleVisibilityChange}
                                        />
                                    </Card>
                                )}

                                {chartVisibility['productStock'] !== false && (
                                    <Card className="shadow-lg bg-gradient-to-br ">
                                        <CustomChart
                                            type="bar"
                                            data={chartData.productStockChart}
                                            horizontalOptions={verticalChartOptions}
                                            verticalOptions={horizontalChartOptions}
                                            title="Ürün Stok Grafiği"
                                            chartId="productStock"
                                            onVisibilityChange={handleVisibilityChange}
                                        />
                                    </Card>
                                )}

                                {chartVisibility['services'] !== false && (
                                    <Card className="shadow-lg bg-gradient-to-br ">
                                        <CustomChart
                                            type="bar"
                                            data={chartData.serviceChart}
                                            horizontalOptions={verticalChartOptions}
                                            verticalOptions={horizontalChartOptions}
                                            title="Hizmet Dağılımı"
                                            chartId="services"
                                            onVisibilityChange={handleVisibilityChange}
                                        />
                                    </Card>
                                )}

                                {chartVisibility['dealer'] !== false && (
                                    <Card className="shadow-lg bg-gradient-to-br ">
                                        <CustomChart
                                            type="bar"
                                            data={chartData.dealerChart}
                                            horizontalOptions={verticalChartOptions}
                                            verticalOptions={horizontalChartOptions}
                                            title="Hizmet Bayi Dağılımı"
                                            chartId="dealer"
                                            onVisibilityChange={handleVisibilityChange}
                                        />
                                    </Card>
                                )}

                                {chartVisibility['serviceWorker'] !== false && (
                                    <Card className="shadow-lg bg-gradient-to-br ">
                                        <CustomChart
                                            type="bar"
                                            data={chartData.serviceWorkerChart}
                                            horizontalOptions={verticalChartOptions}
                                            verticalOptions={horizontalChartOptions}
                                            title="Çalışan Hizmet Dağılımı"
                                            chartId="serviceWorker"
                                            onVisibilityChange={handleVisibilityChange}
                                        />
                                    </Card>
                                )}

                                {chartVisibility['dealerCustomer'] !== false && (
                                    <Card className="shadow-lg bg-gradient-to-br ">
                                        <CustomChart
                                            type="bar"
                                            data={chartData.dealerCustomerChart}
                                            horizontalOptions={verticalChartOptions}
                                            verticalOptions={horizontalChartOptions}
                                            title="Bayi Müşteri Dağılımı"
                                            chartId="dealerCustomer"
                                            onVisibilityChange={handleVisibilityChange}
                                        />
                                    </Card>
                                )}

                                {chartVisibility['brands'] !== false && (
                                    <Card className="shadow-lg bg-gradient-to-br  md:col-span-2 xl:col-span-3">
                                        <CustomChart
                                            type="bar"
                                            data={chartData.brandChart}
                                            horizontalOptions={verticalChartOptions}
                                            verticalOptions={horizontalChartOptions}
                                            title="Hizmet Marka Dağılımı"
                                            chartId="brands"
                                            onVisibilityChange={handleVisibilityChange}
                                        />
                                    </Card>
                                )}
                            </div>
                        )}
                        {auth.user.role.includes("central") && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {chartVisibility['dealerOrders'] !== false && (
                                    <Card className="shadow-lg bg-gradient-to-br ">
                                        <CustomChart
                                            type="bar"
                                            data={chartData.dealerOrders}
                                            horizontalOptions={verticalChartOptions}
                                            verticalOptions={horizontalChartOptions}
                                            title="Bayi Siparişleri"
                                            chartId="dealerOrders"
                                            onVisibilityChange={handleVisibilityChange}
                                        />
                                    </Card>
                                )}
                                {chartVisibility['productOrders'] !== false && (
                                    <Card className="shadow-lg bg-gradient-to-br ">
                                        <CustomChart
                                            type="bar"
                                            data={chartData.productOrders}
                                            horizontalOptions={verticalChartOptions}
                                            verticalOptions={horizontalChartOptions}
                                            title="Ürün Siparişleri"
                                            chartId="productOrders"
                                            onVisibilityChange={handleVisibilityChange}
                                        />
                                    </Card>
                                )}
                                {chartVisibility['productStock'] !== false && (
                                    <Card className="shadow-lg bg-gradient-to-br  md:col-span-2 xl:col-span-3">
                                        <CustomChart
                                            type="bar"
                                            data={chartData.productStock}
                                            horizontalOptions={verticalChartOptions}
                                            verticalOptions={horizontalChartOptions}
                                            title="Ürün Stokları"
                                            chartId="productStock"
                                            onVisibilityChange={handleVisibilityChange}
                                        />
                                    </Card>
                                )}
                            </div>
                        )}
                        {/* Admin grafikleri */}
                        {auth.user.role === "admin" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {chartVisibility['services'] !== false && (
                                    <Card className="shadow-lg bg-gradient-to-br ">
                                        <CustomChart
                                            type="bar"
                                            data={chartData.serviceChart}
                                            horizontalOptions={verticalChartOptions}
                                            verticalOptions={horizontalChartOptions}
                                            title="Hizmet Dağılımı"
                                            chartId="services"
                                            onVisibilityChange={handleVisibilityChange}
                                        />
                                    </Card>
                                )}

                                {chartVisibility['workers'] !== false && (
                                    <Card className="shadow-lg bg-gradient-to-br ">
                                        <CustomChart
                                            type="bar"
                                            data={chartData.workerChart}
                                            horizontalOptions={verticalChartOptions}
                                            verticalOptions={horizontalChartOptions}
                                            title="Çalışan Performans Grafiği"
                                            chartId="workers"
                                            onVisibilityChange={handleVisibilityChange}
                                        />
                                    </Card>
                                )}

                                {chartVisibility['brands'] !== false && (
                                    <Card className="shadow-lg bg-gradient-to-br  md:col-span-2">
                                        <CustomChart
                                            type="bar"
                                            data={chartData.brandChart}
                                            horizontalOptions={verticalChartOptions}
                                            verticalOptions={horizontalChartOptions}
                                            title="Hizmet Marka Dağılımı"
                                            chartId="brands"
                                            onVisibilityChange={handleVisibilityChange}
                                        />
                                    </Card>
                                )}
                            </div>
                        )}
                    </BlockUI>
                </motion.div>
            </div>
        </div>
    </AuthenticatedLayout>);
}
