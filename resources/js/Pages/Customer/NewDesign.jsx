import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Head, usePage } from "@inertiajs/react";
import { Sidebar } from 'primereact/sidebar';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import NfcCard from '@/Components/NfcCard';
import CustomerPageTop from '@/Components/CustomerPageTop';
import VehicleCard from '@/Components/VehicleCard';
import ProductServiceStatusWidget from '@/Components/ProductServiceStatusWidget';
import { Toast } from 'primereact/toast';
import { getToken } from "firebase/messaging";
import { messaging } from "@/firebase/index.js";
const NewDesign = ({ customerB, csrf_token, hash, services }) => {
    const page = usePage();

    const [customer, setCustomer] = useState(page.props.customerB);
    const [notifications, setNotifications] = useState(
        Object.entries(JSON.parse(customer.notification_settings)).map(([key, value]) => ({
            key,
            value
        }))
    );
    const [editSidebarVisible, setEditSidebarVisible] = useState(false);
    const [deleteSidebarVisible, setDeleteSidebarVisible] = useState(false);
    const [notificationSidebarVisible, setNotificationSidebarVisible] = useState(false);
    const [deletePassword, setDeletePassword] = useState('');

    const toggleNotification = (key) => {
        setNotifications(notifications.map(notification =>
            notification.key === key
                ? { ...notification, value: !notification.value }
                : notification
        ));
    };
    const [loading, setLoading] = useState(false);
    const carBody = useRef(null);
    const warrantyOp = useRef(null);
    const toast = useRef(null);
    const [opened, setOpened] = useState(customer.player_id !== null);
    const { VITE_APP_VAPID_KEY } = import.meta.env;
    const [serviceWorker, setServiceWorker] = useState(null);
    const [selectedService, setSelectedService] = useState(null);
    const [showIOSGuide, setShowIOSGuide] = useState(false);
    console.log(page.props.products);
    useEffect(() => {
        // iOS cihaz kontrolü ve kılavuz gösterimi
        if (['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform)) {
            setShowIOSGuide(true);
        }
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setShowIOSGuide(false);
        }


        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/messaging-sw.js')
                .then(function (registration) {
                    setServiceWorker(registration);
                })
                .catch(function (error) {
                    console.log('Service Worker kaydı başarısız:', error);
                });
        }
    }, []);

    const [contact, setContact] = useState(Object.entries(JSON.parse(customer.notification_settings)).map(([key, value]) => {
        if (value) {
            return key;
        } else {
            return null;
        }
    }).filter((item) => item !== null));
    const getPermissionGrant = useMemo(() => {
        let _push = notifications.find((item) => item.key === 'push');
        return _push ? _push.value : false;
    }, [notifications]);
    const [unSaved, setUnSaved] = useState(false);

    useEffect(() => {
        let oldContact = Object.entries(JSON.parse(customer.notification_settings)).map(([key, value]) => {
            if (value) {
                return key;
            } else {
                return null;
            }
        }).filter((item) => item !== null);
        oldContact.sort();
        contact.sort();
        if (JSON.stringify(oldContact) !== JSON.stringify(contact)) {
            setUnSaved(true);
        } else {
            setUnSaved(false);
        }
    }, [contact]);

    async function requestPermission() {
        const permission = await Notification.requestPermission();

        if (permission === "granted") {
            const token = await getToken(messaging, {
                vapidKey: VITE_APP_VAPID_KEY, serviceWorkerRegistration: serviceWorker
            });
            setLoading(true)
            let formdata = new FormData();
            formdata.append('player_id', token);
            formdata.append('action', 'token');
            fetch(route('customer.notifyUpdate', hash), {
                method: 'POST', headers: {
                    'X-CSRF-TOKEN': csrf_token
                }, body: formdata

            }).then(response => response.json()).then(data => {
                if (data.status) {
                    toast.current.show({
                        severity: 'success', summary: 'Başarılı', detail: data.message, life: 3000
                    });
                    setOpened(true);
                    setCustomer(data.customer);
                } else {
                    toast.current.show({
                        severity: 'error', summary: 'Hata', detail: data.message
                    });
                }
            }).catch((error) => {
                toast.current.show({
                    severity: 'error', summary: 'Hata', detail: "CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."
                });
            }).finally(() => {
                setLoading(false);
            });

        } else if (permission === "denied") {
            toast.current.show({
                severity: 'error', summary: 'Hata', detail: 'Bildirimler Engellendi', life: 3000
            });
            setContact(contact.filter((item) => item !== 'push'));
        }
    }

    const openBrowserNotifications = () => {
        if (['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform)) {
            if ('Notification' in window) {
                setLoading(true)
                requestPermission().then(r => console.log());
            } else {
                toast.current.show({
                    severity: 'info',
                    summary: 'Hata',
                    detail: 'Bildirimleri almak için tarayıcınızın URL bölümünde bulunan paylaş butonunu kullanarak uygulamamızı ana ekrana ekleyin. Bu sayede, uygulama yüklemeden hizmetlerinizi anında takip edebilirsiniz.',
                    life: 10000
                });
            }
        } else {
            setLoading(true)
            requestPermission().then(r => console.log());
        }
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen bg-gradient-to-b font-avaganti from-[#005d37] via-30% via-[#121f1c] to-[#000] pb-4"
        >
            <Head title="Müşteri Bilgileri" />
            <Toast ref={toast} />
            <CustomerPageTop customerName={customer.name} />

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div>
                    <div className='flex justify-center text-lg font-semibold text-white'>
                        Hizmetler
                    </div>
                    <div className='my-2'>
                        {page.props.services.map((service) => (
                            <VehicleCard
                                serieName={service.car.brand + " " + service.car.model}
                                modelName={service.car.generation}
                                modelYear={service.car.year}
                                carPlate={service.car.plate}
                                serviceDayMonth={("0" + new Date(service.created_at).getDay()).slice(-2) + "." + ("0" + (new Date(service.created_at).getMonth() + 1)).slice(-2)}
                                serviceYear={new Date(service.created_at).getFullYear()}
                                serviceUrl={route("warranty.index", service.service_no)}
                                brandLogo={service.car.brand_logo}
                            />
                        ))}
                    </div>

                </div>
                <div className=' justify-center text-lg font-semibold text-white'>
                    Garanti Süreleri
                </div>
                <div className='mt-2 mb-2'>
                    {page.props.products.map((service) => (
                        <ProductServiceStatusWidget
                            productName={service.product.name}
                            productCode={service.product_code}
                            startDate={service.warranty.start_date}
                            endDate={service.warranty.end_date}
                            progress={service.warranty.rate}
                        />
                    ))}
                </div>
                <div className="max-w-4xl mx-auto flex flex-row gap-2 justify-between">
                    <button
                        onClick={() => setNotificationSidebarVisible(true)}
                        className="flex-1 group relative overflow-hidden bg-gradient-to-br from-green-600/20 to-green-900/40 hover:from-green-500/30 hover:to-green-800/50 backdrop-blur-sm border border-green-900/30 text-white p-3 md:p-4 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-[1.02]"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 bg-green-500/20 rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-500"></div>
                        </div>
                        <div className="relative flex items-center gap-2">
                            <i className="pi pi-bell text-xl md:text-2xl text-green-400"></i>
                            <span className=" md:inline">İletişim Seçenekleri</span>
                        </div>
                    </button>

                    <button
                        onClick={() => setEditSidebarVisible(true)}
                        className="flex-1 group relative overflow-hidden hidden bg-gradient-to-br from-blue-600/20 to-blue-900/40 hover:from-blue-500/30 hover:to-blue-800/50 backdrop-blur-sm border border-blue-900/30 text-white p-3 md:p-4 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-[1.02]"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 bg-blue-500/20 rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-500"></div>
                        </div>
                        <div className="relative flex items-center gap-2">
                            <i className="pi pi-user-edit text-xl md:text-2xl text-blue-400"></i>
                            <span className="hidden md:inline">Düzenle</span>
                        </div>
                    </button>
                </div>
            </div>


            {/* İletişim Tercihleri Sidebar */}
            <Sidebar
                visible={notificationSidebarVisible}
                position="right"
                onHide={() => setNotificationSidebarVisible(false)}
                className="p-sidebar-md w-full md:w-[450px]"
                style={{ backgroundColor: '#001800' }}
                breakpoints={{ '960px': '75vw', '640px': '100vw' }}
                blockScroll
            >
                <div className="flex flex-col h-full">
                    <div className="flex-grow">
                        <h2 className="text-white text-xl font-semibold mb-6">İletişim Tercihleri</h2>
                        <div className="space-y-4">
                            {notifications.map((notification) => (
                                <div key={notification.key} className="bg-[#002200]/50 p-4 rounded-lg border border-green-900/20">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-white font-medium capitalize">
                                                {notification.key === 'email' ? 'E-posta Bildirimleri' :
                                                    notification.key === 'sms' ? 'SMS Bildirimleri' :
                                                        'Push Bildirimleri'}
                                            </h3>
                                            <p className="text-gray-400 text-sm mt-1">
                                                {notification.key === 'email' ? 'Önemli güncellemeler ve teklifler için' :
                                                    notification.key === 'sms' ? 'Acil durumlar ve önemli hatırlatmalar' :
                                                        'Anlık bildirimler ve güncellemeler'}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => toggleNotification(notification.key)}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${notification.value ? 'bg-green-600' : 'bg-gray-700'
                                                }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${notification.value ? 'translate-x-6' : 'translate-x-1'
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {showIOSGuide && (
                            <div className="max-w-4xl mx-auto px-4">
                                <div className="bg-[#E6B800]/10 border border-[#E6B800] rounded-lg p-4 mt-4">
                                    <div className="flex items-center">
                                        <i className="pi pi-info-circle text-[#E6B800] text-xl mr-3"></i>
                                        <p className="text-[#E6B800]">
                                            Bildirimleri almak için tarayıcınızın paylaş butonunu kullanarak uygulamamızı ana ekrana ekleyin.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {getPermissionGrant && (
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="bg-[#001800]/50 backdrop-blur-sm p-6 mt-3 rounded-xl border border-green-900/30 mb-8"
                            >
                                <h2 className="text-xl font-semibold text-white mb-6">Tarayıcı Bildirimleri</h2>
                                <div className="text-center">
                                    {opened === true ? (
                                        <Button
                                            label="Bildirimleri Etkinleştir"
                                            loading={loading}
                                            onClick={openBrowserNotifications}
                                            icon="pi pi-bell"
                                            className="bg-[#E6B800] hover:bg-[#FFD700] text-black font-medium border-none px-6 py-3"
                                        />
                                    ) : (
                                        <div className="text-[#E6B800] flex items-center justify-center gap-2">
                                            <i className="pi pi-check-circle text-xl"></i>
                                            <span>Bildirimler Aktif</span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </div>
                    <div className="mt-8 flex gap-2 border-t border-green-900/30 pt-4">
                        <button
                            onClick={() => setNotificationSidebarVisible(false)}
                            className="flex-1 bg-[#002200]/50 hover:bg-[#003300]/50 text-white p-3 rounded-xl transition-colors duration-200"
                        >
                            Kapat
                        </button>
                        <button
                            onClick={() => {
                                // Bildirim ayarlarını kaydet
                                setNotificationSidebarVisible(false);
                            }}
                            className="flex-1 bg-green-600/20 hover:bg-green-600/30 text-green-400 p-3 rounded-xl transition-colors duration-200"
                        >
                            Kaydet
                        </button>
                    </div>
                </div>
            </Sidebar>

            {/* Profil Düzenleme Sidebar */}
            <Sidebar
                visible={editSidebarVisible}
                position="right"
                onHide={() => setEditSidebarVisible(false)}
                className="p-sidebar-md w-full md:w-[450px]"
                style={{ backgroundColor: '#001800' }}
                breakpoints={{ '960px': '75vw', '640px': '100vw' }}
                blockScroll
            >
                <div className="flex flex-col h-full">
                    <div className="flex-grow">
                        <h2 className="text-white text-xl font-semibold mb-6">Profil Düzenle</h2>
                        <div className="space-y-4">
                            <div className="flex flex-col">
                                <label className="text-gray-400 mb-2">Ad Soyad</label>
                                <InputText value={customer.name} className="p-inputtext-sm" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-400 mb-2">E-posta</label>
                                <InputText value={customer.email} className="p-inputtext-sm" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-400 mb-2">Telefon</label>
                                <InputText value={customer.phone} className="p-inputtext-sm" />
                            </div>

                            <div className="mt-8 pt-4 border-t border-green-900/30">
                                <button
                                    onClick={() => setDeleteSidebarVisible(true)}
                                    className="w-full bg-red-900/20 hover:bg-red-900/30 text-red-400 p-3 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
                                >
                                    <i className="pi pi-trash"></i>
                                    <span>Hesabı Sil</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex gap-2 border-t border-green-900/30 pt-4">
                        <button
                            onClick={() => setEditSidebarVisible(false)}
                            className="flex-1 bg-[#002200]/50 hover:bg-[#003300]/50 text-white p-3 rounded-xl transition-colors duration-200"
                        >
                            Kapat
                        </button>
                        <button
                            onClick={() => {
                                // Profil bilgilerini kaydet
                                setEditSidebarVisible(false);
                            }}
                            className="flex-1 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 p-3 rounded-xl transition-colors duration-200"
                        >
                            Kaydet
                        </button>
                    </div>
                </div>
            </Sidebar>

            {/* Hesap Silme Sidebar */}
            <Sidebar
                visible={deleteSidebarVisible}
                position="right"
                onHide={() => setDeleteSidebarVisible(false)}
                className="p-sidebar-md w-full md:w-[450px]"
                style={{ backgroundColor: '#001800' }}
                breakpoints={{ '960px': '75vw', '640px': '100vw' }}
                blockScroll
            >
                <div className="flex flex-col h-full">
                    <div className="flex-grow">
                        <h2 className="text-white text-xl font-semibold mb-6">Hesabı Sil</h2>
                        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
                            <p className="text-red-400">
                                <i className="pi pi-exclamation-triangle mr-2"></i>
                                Dikkat! Bu işlem geri alınamaz. Hesabınızı sildiğinizde:
                            </p>
                            <ul className="list-disc list-inside text-red-400 mt-2 space-y-1">
                                <li>Tüm hizmetleriniz silinecek</li>
                                <li>Garanti kayıtlarınız silinecek</li>
                                <li>İletişim tercihleriniz silinecek</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <div className="flex flex-col">
                                <label className="text-gray-400 mb-2">Şifrenizi Girin</label>
                                <Password
                                    value={deletePassword}
                                    onChange={(e) => setDeletePassword(e.target.value)}
                                    toggleMask
                                    feedback={false}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex gap-2 border-t border-green-900/30 pt-4">
                        <button
                            onClick={() => setDeleteSidebarVisible(false)}
                            className="flex-1 bg-[#002200]/50 hover:bg-[#003300]/50 text-white p-3 rounded-xl transition-colors duration-200"
                        >
                            Vazgeç
                        </button>
                        <button
                            onClick={() => {
                                // Hesabı sil
                                setDeleteSidebarVisible(false);
                            }}
                            className="flex-1 bg-red-900/20 hover:bg-red-900/30 text-red-400 p-3 rounded-xl transition-colors duration-200"
                            disabled={!deletePassword}
                        >
                            Hesabı Sil
                        </button>
                    </div>
                </div>
            </Sidebar>
        </motion.div>
    );
};

export default NewDesign;