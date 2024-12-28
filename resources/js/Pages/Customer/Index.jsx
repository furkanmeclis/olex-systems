import {Fieldset} from 'primereact/fieldset';
import {FloatLabel} from 'primereact/floatlabel';
import {InputText} from 'primereact/inputtext';
import {SelectButton} from "primereact/selectbutton";
import {Badge} from "primereact/badge";
import React, {useEffect, useRef, useState} from "react";
import {Button} from "primereact/button";
import {getToken} from "firebase/messaging";
import {messaging} from "@/firebase/index.js";
import {Toast} from 'primereact/toast';
import {Head} from "@inertiajs/react";
import {Column} from "primereact/column";
import {Tag} from "primereact/tag";
import {confirmPopup} from "primereact/confirmpopup";
import {DataTable} from "primereact/datatable";
import CarBody from "@/Components/CarBody.jsx";
import {OverlayPanel} from "primereact/overlaypanel";
import { motion } from 'framer-motion';

const Index = ({customerB, csrf_token, hash, services}) => {
    const [loading, setLoading] = useState(false);
    const carBody = useRef(null);
    const warrantyOp = useRef(null);
    const [customer, setCustomer] = useState(customerB);
    const toast = useRef(null);
    const [opened, setOpened] = useState(customer.player_id !== null);
    const {VITE_APP_VAPID_KEY} = import.meta.env;
    const [serviceWorker, setServiceWorker] = useState(null);
    const [selectedService, setSelectedService] = useState(null);
    const [showIOSGuide, setShowIOSGuide] = useState(false);

    useEffect(() => {
        // iOS cihaz kontrolü ve kılavuz gösterimi
        if (['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform)) {
            setShowIOSGuide(true);
        }

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/messaging-sw.js')
                .then(function (registration) {
                    console.log('Service Worker Kaydı Başarılı:', registration);
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
            className="min-h-screen bg-gradient-to-br from-[#001100] to-[#002200]"
        >
            <Head title="Müşteri Bilgileri"/>
            <Toast ref={toast}/>
            <OverlayPanel ref={carBody} showCloseIcon closeOnEscape>
                <CarBody editable={false} value={selectedService?.body} onChange={() => {}}/>
            </OverlayPanel>

            {/* iOS Kılavuzu */}
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

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="flex justify-center mb-12">
                    <img className="h-16" src="/uploads/olex-logo-yatay.svg" alt="OLEX® Films"/>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#001800]/50 backdrop-blur-sm p-6 rounded-xl border border-green-900/30"
                    >
                        <div className="text-gray-400 text-sm mb-2">Müşteri Adı</div>
                        <div className="text-white text-lg font-medium">{customer.name}</div>
                    </motion.div>

                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#001800]/50 backdrop-blur-sm p-6 rounded-xl border border-green-900/30"
                    >
                        <div className="text-gray-400 text-sm mb-2">E-posta</div>
                        <div className="text-white text-lg font-medium">{customer.email}</div>
                    </motion.div>

                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-[#001800]/50 backdrop-blur-sm p-6 rounded-xl border border-green-900/30"
                    >
                        <div className="text-gray-400 text-sm mb-2">Telefon</div>
                        <div className="text-white text-lg font-medium">{customer.phone}</div>
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-[#001800]/50 backdrop-blur-sm p-6 rounded-xl border border-green-900/30 mb-8"
                >
                    <h2 className="text-xl font-semibold text-white mb-6">Bildirim Tercihleri</h2>
                    <div className="flex justify-center gap-3 mb-6">
                        {[
                            {icon: 'pi pi-envelope', value: 'email', label: 'E-posta'},
                            {icon: 'pi pi-phone', value: 'sms', label: 'SMS'},
                            {icon: 'pi pi-bell', value: 'push', label: 'Bildirim'}
                        ].map((option) => {
                            const isSelected = contact && contact.includes(option.value);
                            return (
                                <button
                                    key={option.value}
                                    onClick={() => {
                                        if (isSelected) {
                                            setContact(contact.filter(item => item !== option.value));
                                        } else {
                                            setContact([...contact, option.value]);
                                        }
                                    }}
                                    className={`flex flex-col items-center px-4 py-2 rounded-lg transition-all duration-200 min-w-[80px] ${
                                        isSelected 
                                            ? 'bg-gradient-to-r from-[#004d00] to-[#E6B800] text-white shadow-lg' 
                                            : 'bg-[#001100] hover:bg-[#002200] text-gray-400'
                                    }`}
                                >
                                    <i className={`${option.icon} text-lg mb-1`}></i>
                                    <span className="text-xs">{option.label}</span>
                                </button>
                            );
                        })}
                    </div>
                    {unSaved && (
                        <Button 
                            label="Tercihleri Kaydet"
                            icon="pi pi-save"
                            onClick={() => {
                                let formdata = new FormData();
                                formdata.append('settings', JSON.stringify(contact));
                                formdata.append('action', 'settings');
                                fetch(route('customer.notifyUpdate', hash), {
                                    method: 'POST',
                                    headers: {
                                        'X-CSRF-TOKEN': csrf_token
                                    },
                                    body: formdata
                                }).then(response => response.json()).then(data => {
                                    if (data.status) {
                                        toast.current.show({
                                            severity: 'success',
                                            summary: 'Başarılı',
                                            detail: data.message,
                                            life: 3000
                                        });
                                        setContact(Object.entries(JSON.parse(data.customer.notification_settings)).map(([key, value]) => {
                                            if (value) {
                                                return key;
                                            } else {
                                                return null;
                                            }
                                        }).filter((item) => item !== null));
                                        setCustomer(data.customer);
                                    } else {
                                        toast.current.show({
                                            severity: 'error',
                                            summary: 'Hata',
                                            detail: data.message
                                        });
                                    }
                                }).catch((error) => {
                                    toast.current.show({
                                        severity: 'error',
                                        summary: 'Hata',
                                        detail: "CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."
                                    });
                                });
                            }}
                            className="w-full bg-gradient-to-r from-[#004d00] to-[#E6B800] hover:from-[#006600] hover:to-[#FFD700] text-white font-medium border-none"
                        />
                    )}
                </motion.div>

                {contact && contact.includes('push') && (
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="bg-[#001800]/50 backdrop-blur-sm p-6 rounded-xl border border-green-900/30 mb-8"
                    >
                        <h2 className="text-xl font-semibold text-white mb-6">Tarayıcı Bildirimleri</h2>
                        <div className="text-center">
                            {opened === false ? (
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

                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="bg-[#001800]/50 backdrop-blur-sm p-6 rounded-xl border border-green-900/30"
                >
                    <h2 className="text-xl font-semibold text-white mb-6">Hizmet Geçmişi</h2>
                    <div className="grid grid-cols-1 gap-4">
                        {services.map((service) => (
                            <div 
                                key={service.id}
                                className="bg-[#001100]/80 p-4 rounded-lg border border-green-900/30 hover:border-[#E6B800]/30 transition-all duration-200"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-[#E6B800] font-medium mb-1">
                                            Hizmet No: {service.service_no}
                                        </div>
                                        <div className="text-gray-400">
                                            {service.car.brand} - {service.car.model}
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={(event) => {
                                                setSelectedService(service);
                                                carBody.current.toggle(event);
                                            }}
                                            className="p-2 rounded-lg bg-[#002200] hover:bg-[#003300] text-green-400 transition-all duration-200"
                                        >
                                            <i className="pi pi-car text-lg"></i>
                                        </button>
                                        <button
                                            onClick={() => {
                                                window.open(route("warranty.index", service.service_no), "_blank");
                                            }}
                                            className="p-2 rounded-lg bg-[#002200] hover:bg-[#003300] text-green-400 transition-all duration-200"
                                        >
                                            <i className="pi pi-external-link text-lg"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Index;
