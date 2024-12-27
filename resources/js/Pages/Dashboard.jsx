import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router} from '@inertiajs/react';
import {Card} from "primereact/card";
import React from "react";
import {Button} from "primereact/button";
import {Toast} from "primereact/toast";
import {Chart} from "primereact/chart";
import {BlockUI} from "primereact/blockui";

export default function Dashboard({auth, metrics, csrf_token}) {
    const [statics, setStatics] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const toast = React.useRef(null);
    const [chartData, setChartData] = React.useState({});
    const [chartDataBrand, setChartDataBrand] = React.useState({});
    const [chartDataDealer, setChartDataDealer] = React.useState({});
    const [chartOptions, setChartOptions] = React.useState({});
    const [chartDataWorker,setChartDataWorker] = React.useState({});
    const [productsChartOptions, setProductsChartOptions] = React.useState({});
    const [productsChartData, setProductsChartData] = React.useState({});
    const [dealerCustomerData, setDealerCustomerData] = React.useState({});
    const [chartDataServiceWorker, setChartDataServiceWorker] = React.useState({});
    const [chartProductStockData, setChartProductStockData] = React.useState({});
    const getStatics = () => {
        setLoading(true)
        const documentStyle = getComputedStyle(document.documentElement);
        fetch(route(`${auth.user.role === "super" ? "super" : "dealer"}.staticsData`), {
            method: 'POST', headers: {
                'X-CSRF-TOKEN': csrf_token
            },

        }).then(response => response.json()).then(data => {
            setChartData({
                labels: data.chart.chart.labels, datasets: [{
                    label: "Tamamlanan Hizmetler",
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    borderColor: documentStyle.getPropertyValue('--blue-600'),
                    data: data.chart.chart.data,
                    borderRadius: 10
                }]
            });
            setChartDataBrand({
                labels: data.chart.brands.labels, datasets: [{
                    label: "Marka Dağılımı",
                    backgroundColor: documentStyle.getPropertyValue('--primary-500'),
                    borderColor: documentStyle.getPropertyValue('--primary-600'),
                    data: data.chart.brands.data,
                    borderRadius: 10
                }]
            });
            if(auth.user.role === "super"){
                setChartDataDealer({
                    labels: data.chart.dealer.labels, datasets: [{
                        label: "Hizmet Bayi Dağılımı",
                        backgroundColor: documentStyle.getPropertyValue('--green-500'),
                        borderColor: documentStyle.getPropertyValue('--green-600'),
                        data: data.chart.dealer.data,
                        borderRadius: 10
                    }]
                });
                setProductsChartData({
                    labels: data.chart.products.labels, datasets: [{
                        label: "Ürün Dağılımı",
                        backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
                        borderColor: documentStyle.getPropertyValue('--yellow-600'),
                        data: data.chart.products.data,
                        borderRadius: 10
                    }]
                })
                setDealerCustomerData({
                    labels: data.chart.dealerCustomer.labels, datasets: [{
                        label: "Bayi Müşteri Dağılımı",
                        backgroundColor: documentStyle.getPropertyValue('--red-500'),
                        borderColor: documentStyle.getPropertyValue('--red-600'),
                        data: data.chart.dealerCustomer.data,
                        borderRadius: 10
                    }]
                })
                setChartDataServiceWorker({
                    labels: data.chart.serviceWorker.labels, datasets: [{
                        label: "Çalışan Hizmet Dağılımı",
                        backgroundColor: documentStyle.getPropertyValue('--green-500'),
                        borderColor: documentStyle.getPropertyValue('--green-600'),
                        data: data.chart.serviceWorker.data,
                        borderRadius: 10
                }]
                });
                setChartProductStockData({
                    labels: data.chart.productStock.labels,
                    datasets: [{
                        label: "Kullanılmayan",
                        backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                        borderColor: documentStyle.getPropertyValue('--blue-600'),
                        data: data.chart.productStock.data.map(item => item.unused),
                    },{
                        label: "Kullanılan",
                        backgroundColor: documentStyle.getPropertyValue('--green-500'),
                        borderColor: documentStyle.getPropertyValue('--green-600'),
                        data: data.chart.productStock.data.map(item => item.used)
                    }]
                })
            }
            if(auth.user.role === "admin"){
                setChartDataWorker({
                    labels: data.chart.worker.labels, datasets: [{
                        label: "Çalışan Hizmet Dağılımı",
                        backgroundColor: documentStyle.getPropertyValue('--green-500'),
                        borderColor: documentStyle.getPropertyValue('--green-600'),
                        data: data.chart.worker.data,
                        borderRadius: 10
                    }]
                });
            }
        }).catch((error) => {
            console.error('Error:', error);
            toast.current.show({
                severity: 'error', summary: 'Hata', detail: "CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."
            });
        }).finally(() => {
            setLoading(false);
        })
    }
    React.useEffect(() => {
        getStatics();
    }, []);

    React.useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const options = {
            maintainAspectRatio: false, aspectRatio: 0.8, plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            }, scales: {
                x: {
                    ticks: {
                        color: textColorSecondary, font: {
                            weight: 500
                        }
                    }, grid: {
                        display: false, drawBorder: false
                    }
                }, y: {
                    min:0,
                    ticks: {
                        color: textColorSecondary,

                    }, grid: {
                        color: surfaceBorder, drawBorder: false
                    }
                }
            }
        };
        setChartOptions(options);
        setProductsChartOptions({
            indexAxis: 'y',
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
                    min:0,
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
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        })
    }, []);
    return (<AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Anasayfa</h2>}
    >
        <Head title="Anasayfa"/>
        <Toast ref={toast}/>
        <div className="py-6">
            <div className="max-w-[100rem] mx-auto sm:px-6 lg:px-8">
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"}>
                    {(auth.user.role === "super") && <>


                        <Card title={"Bayiler"} subTitle={<>
                            <i className={"pi pi-users"}></i> {metrics.dealers} Adet Bayi
                        </>}>
                            <Button label="Bayiler" icon="pi pi-users" className="p-button-raised p-button-rounded"
                                    onClick={() => {
                                        router.visit(route('super.dealers.index'));
                                    }}/>
                        </Card>
                        <Card title={"Çalışanlar"} subTitle={<>
                            <i className={"pi pi-users"}></i> {metrics.workers} Adet Bayi Çalışanı
                        </>}>
                            <Button label="Çalışanlar" icon="pi pi-users"
                                    className="p-button-raised p-button-rounded" onClick={() => {
                                router.visit(route('super.workers.index'));
                            }}/>
                        </Card>
                        <Card title={"Ürünler"} subTitle={<>
                            <i className={"pi pi-box"}></i> {metrics.products} Adet Ürün
                        </>}>
                            <Button label="Ürünler" icon="pi pi-box" className="p-button-raised p-button-rounded"
                                    onClick={() => {
                                        router.visit(route('super.products.index'));
                                    }}/>
                        </Card>
                        <Card title={"Bayi Ürün Siparişleri"} subTitle={<>
                            <i className={"pi pi-database"}></i> {metrics.orders} Adet Sipariş
                        </>}>
                            <Button label="Siparişler" icon="pi pi-database"
                                    className="p-button-raised p-button-rounded" onClick={() => {
                                router.visit(route('super.orders.index'));
                            }}/>
                        </Card>

                        <Card title={"Müşteriler"} subTitle={<>
                            <i className={"pi pi-users"}></i> {metrics.customers} Adet Müşteri
                        </>}>
                            <Button label="Müşteriler" icon="pi pi-users"
                                    className="p-button-raised p-button-rounded" onClick={() => {
                                router.visit(route('super.customers.index'));
                            }}/>
                        </Card>
                        <Card title={"Hizmetler"} subTitle={<>
                            <i className={"pi pi-file"}></i> {metrics.services} Adet Hizmet Kaydı
                        </>}>
                        </Card>
                    </>}
                    {String(auth.user.role).includes("central") && <>

                        <Card title={"Bayiler"} subTitle={<>
                            <i className={"pi pi-users"}></i> {metrics.dealers} Adet Bayi
                        </>}>
                            <Button label="Bayiler" icon="pi pi-users" className="p-button-raised p-button-rounded"
                                    onClick={() => {
                                        router.visit(route('central.dealers.index'));
                                    }}/>
                        </Card>
                        <Card title={"Çalışanlar"} subTitle={<>
                            <i className={"pi pi-users"}></i> {metrics.workers} Adet Bayi Çalışanı
                        </>}>
                            <Button label="Çalışanlar" icon="pi pi-users"
                                    className="p-button-raised p-button-rounded" onClick={() => {
                                router.visit(route('central.workers.index'));
                            }}/>
                        </Card>
                        <Card title={"Ürünler"} subTitle={<>
                            <i className={"pi pi-box"}></i> {metrics.products} Adet Ürün
                        </>}>
                            <Button label="Ürünler" icon="pi pi-box" className="p-button-raised p-button-rounded"
                                    onClick={() => {
                                        router.visit(route('central.products.index'));
                                    }}/>
                        </Card>
                        <Card title={"Bayi Ürün Siparişleri"} subTitle={<>
                            <i className={"pi pi-database"}></i> {metrics.orders} Adet Sipariş
                        </>}>
                            <Button label="Siparişler" icon="pi pi-database"
                                    className="p-button-raised p-button-rounded" onClick={() => {
                                router.visit(route('central.orders.index'));
                            }}/>
                        </Card>

                        <Card title={"Müşteriler"} subTitle={<>
                            <i className={"pi pi-users"}></i> {metrics.customers} Adet Müşteri
                        </>}>
                            <Button label="Müşteriler" icon="pi pi-users"
                                    className="p-button-raised p-button-rounded" onClick={() => {
                                router.visit(route('super.customers.index'));
                            }}/>
                        </Card>
                    </>}
                    {(auth.user.role === "admin") && <>
                        <Card title={"Çalışanlar"} subTitle={<>
                            <i className={"pi pi-users"}></i> {metrics.workers} Adet Çalışan
                        </>}>
                            <Button label="Çalışanlar" icon="pi pi-users"
                                    className="p-button-raised p-button-rounded" onClick={() => {
                                router.visit(route('dealer.workers.index'));
                            }}/>
                        </Card>
                        <Card title={"Siparişler"} subTitle={<>
                            <i className={"pi pi-database"}></i> {metrics.orders} Adet Sipariş
                        </>}>
                            <Button label="Siparişler" icon="pi pi-database"
                                    className="p-button-raised p-button-rounded" onClick={() => {
                                router.visit(route('dealer.orders'));
                            }}/>
                        </Card>
                        <Card title={"Müşteriler"} subTitle={<>
                            <i className={"pi pi-users"}></i> {metrics.customers} Adet Müşteri
                        </>}>
                            <Button label="Müşteriler" icon="pi pi-users"
                                    className="p-button-raised p-button-rounded" onClick={() => {
                                router.visit(route('dealer.customers'));
                            }}/>
                        </Card>
                        <Card title={"Hizmetler"} subTitle={<>
                            <i className={"pi pi-file"}></i> {metrics.services} Adet Hizmet Kaydı
                        </>}>
                            <Button label="Hizmetler" icon="pi pi-file" className="p-button-raised p-button-rounded"
                                    onClick={() => {
                                        router.visit(route('dealer.services'));
                                    }}/>
                        </Card>
                    </>}
                </div>
                <div className={"mt-2"}>
                    <BlockUI blocked={loading}
                             template={<i className="pi pi-spin pi-spinner"
                                          style={{fontSize: '3rem'}}></i>}>
                        {auth.user.role === "super" && <BlockUI blocked={loading}
                                                                template={<i className="pi pi-spin pi-spinner"
                                                                             style={{fontSize: '3rem'}}></i>}>
                            <Card title={"Ürün Kullanım Grafiği"}  >
                                <Chart type="bar" data={productsChartData} options={productsChartOptions}/>
                            </Card>
                            <Card title={"Ürün Stok Grafiği"} className={"mt-2"}>
                            <Chart type="bar" data={chartProductStockData} options={productsChartOptions}/>
                        </Card>
                        </BlockUI>}
                        <Card title={"Hizmet Dağılımı"} className={"mt-2"}>
                            <Chart type="bar" data={chartData} options={chartOptions}/>
                        </Card>
                    </BlockUI>

                    {auth.user.role === "super" && <BlockUI blocked={loading}
                                                            template={<i className="pi pi-spin pi-spinner"
                                                                         style={{fontSize: '3rem'}}></i>}>
                        <Card title={"Hizmet Bayi Dağılımı"} className={"mt-2"}>
                            <Chart type="bar" data={chartDataDealer} options={chartOptions}/>
                        </Card>
                        <Card title={"Çalışan Hizmet Dağılımı"} className={"mt-2"}>
                        <Chart type="bar" data={chartDataServiceWorker} options={productsChartOptions}/>
                    </Card>
                        <Card title={"Bayi Müşteri Dağılımı"} className={"mt-2"}>
                            <Chart type="bar" data={dealerCustomerData} options={productsChartOptions}/>
                        </Card>
                    </BlockUI>}
                    <BlockUI blocked={loading}
                             template={<i className="pi pi-spin pi-spinner" style={{fontSize: '3rem'}}></i>}>
                        <Card title={"Hizmet Marka Dağılımı"} className={"mt-2"}>
                            <Chart type="bar" data={chartDataBrand} options={productsChartOptions}/>
                        </Card>
                    </BlockUI>
                    {auth.user.role === "admin" && <BlockUI blocked={loading}
                                                            template={<i className="pi pi-spin pi-spinner" style={{fontSize: '3rem'}}></i>}>
                        <Card title={"Çalışan Performans Grafiği"} className={"mt-2"}>
                            <Chart type="bar" data={chartDataWorker} options={chartOptions}/>
                        </Card>
                    </BlockUI>}
                </div>
            </div>
        </div>
    </AuthenticatedLayout>);
}
