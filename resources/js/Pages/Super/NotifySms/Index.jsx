import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router} from '@inertiajs/react';
import React, {useRef, useState} from "react";
import {Toast} from "primereact/toast";
import {Message} from "primereact/message";
import {InputTextarea} from "primereact/inputtextarea";
import {Accordion, AccordionTab} from "primereact/accordion";
import {Checkbox} from "primereact/checkbox";
import {Button} from "primereact/button";
import useSmsCounter from "@/libs/useSmsCounter.js";
import {ConfirmPopup, confirmPopup} from "primereact/confirmpopup";
import {InputText} from "primereact/inputtext";
import {SelectButton} from "primereact/selectbutton";

export default function Index({auth, csrf_token}) {
    const smsRoles = [
        {name: "Sistem Yöneticileri", key: "super"},
        {name: "Merkez Çalışanları", key: "central"},
        {name: "Bayiler", key: "dealer"},
        {name: "Bayi Çalışanları", key: "worker"},
        {name: "Müşteriler", key: "customer"}
    ];

    const {message, setMessage, smsCount, charCount} = useSmsCounter();
    const [selectedRoles, setSelectedRoles] = useState(smsRoles);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [url, setUrl] = useState("https://www.instagram.com/olexfilms")
    const onSmsRoleChange = (e) => {
        let _selectedRoles = [...selectedRoles];

        if (e.checked)
            _selectedRoles.push(e.value);
        else
            _selectedRoles = _selectedRoles.filter(role => role.key !== e.value.key);

        setSelectedRoles(_selectedRoles);
    };
    const toast = useRef(null);
    const [loading, setLoading] = useState(false);

    const sendMessage = (event) => {
        if (message.length === 0) {
            toast.current.show({
                severity: 'warn',
                summary: 'Hata',
                detail: "Mesaj Boş Olamaz",
                life: 3000
            });
            return;
        }

        confirmPopup({
            target: event.currentTarget,
            message: `SMS Gönderilecek. Onaylıyor musunuz?`,
            icon: "pi pi-info-circle",
            acceptClassName: "p-button-success",
            acceptLabel: "Gönder",
            rejectLabel: "İptal",
            accept: () => {
                setLoading(true);
                let formData = new FormData();
                formData.append('message', message);
                formData.append("target", selectedRoles.map(t => t.key).join(","))
                fetch(route("super.notifySms.sendSMS"), {
                    method: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': csrf_token
                    },
                    body: formData
                }).then(response => response.json()).then(data => {
                    if (data.status) {
                        toast.current.show({
                            severity: 'success',
                            summary: 'Başarılı',
                            detail: data.message
                        });
                        setMessage("");
                    } else {
                        toast.current.show({
                            severity: 'error',
                            summary: 'Hata',
                            detail: data.message
                        });
                    }
                }).finally(() => {
                    setLoading(false);
                });
            }
        });
    }
    const sendNotification = (event) => {
        if (title === "") {
            toast.current.show({
                severity: 'warn',
                summary: 'Hata',
                detail: "Başlık Boş Olamaz",
                life: 3000
            });
            return;
        }
        if (content === "") {
            toast.current.show({
                severity: 'warn',
                summary: 'Hata',
                detail: "İçerik Boş Olamaz",
                life: 3000
            });
            return;
        }

        if (url === "") {
            toast.current.show({
                severity: 'warn',
                summary: 'Hata',
                detail: "Url Boş Olamaz",
                life: 3000
            });
            return;
        }
        confirmPopup({
            target: event.currentTarget,
            message: `Bu Bildirim Gönderimi İçin Onaylıyor Musunuz?`,
            icon: "pi pi-info-circle",
            acceptLabel: "Gönder",
            acceptIcon: "pi pi-bell",
            rejectIcon: "pi pi-times",
            rejectLabel: "Vazgeç",
            defaultFocus: 'accept',
            accept: () => {
                setLoading(true);
                let formData = new FormData();
                formData.append('title', title);
                formData.append('content', content);
                formData.append('url', url);
                fetch(route('super.notifySms.sendNotification'), {
                    method: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': csrf_token
                    },
                    body: formData
                }).then(response => response.json()).then(data => {
                    if (data.status) {
                        toast.current.show({
                            severity: 'success',
                            summary: 'Başarılı',
                            detail: data.message,
                            life: 3000
                        });
                        setTitle("");
                        setContent("");
                        setUrl("https://www.instagram.com/olexfilms")
                    } else {
                        toast.current.show({
                            severity: 'error',
                            summary: 'Hata',
                            detail: data.message,
                            life: 3000
                        });
                    }
                }).catch((error) => {
                    toast.current.show({
                        severity: 'error',
                        summary: 'Hata',
                        detail: "CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."
                    });
                }).finally(() => {
                    setLoading(false);
                });
            },
        });
    }
    return (<AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Bildirim &
            SMS</h2>}
    >
        <Head title="Bildirim & SMS"/>
        <ConfirmPopup/>
        <Toast ref={toast}/>
        <div className="py-6">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Accordion className={"p-0"} activeIndex={0}>
                    <AccordionTab header={"Sms Gönderimi"}>
                        <div className="flex flex-col gap-2 mb-3">
                            <label htmlFor="username" className={"font-semibold"}>Sms İçeriği [{charCount} Karakter
                                / {smsCount} SMS]</label>
                            <InputTextarea id="username" value={message} onChange={(e) => setMessage(e.target.value)}
                                           aria-describedby="username-help"/>
                        </div>
                        <p className={"font-semibold mb-3"}>
                            Gönderim Hedefi
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
                            {smsRoles.map((category) => {
                                return (
                                    <div key={category.key} className="flex align-items-center">
                                        <Checkbox inputId={category.key} name="category" value={category}
                                                  onChange={onSmsRoleChange}
                                                  checked={selectedRoles.some((item) => item.key === category.key)}/>
                                        <label htmlFor={category.key} className="ml-2">
                                            {category.name}
                                        </label>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="w-full flex justify-end">
                            <Button label={"Gönder"} size={"small"} onClick={sendMessage} loading={loading}
                                    icon={"pi pi-send"}/>
                        </div>
                    </AccordionTab>
                    <AccordionTab header="Bildirim Gönder">
                        <div className="p-fluid">
                            <div className="p-field mb-3">
                                <label htmlFor="title" className={"font-semibold"}>Başlık</label>
                                <InputText id="title" value={title} onChange={(e) => setTitle(e.target.value)}
                                           placeholder="Başlık Giriniz"/>
                            </div>
                            <div className="p-field mb-3">
                                <label htmlFor="content" className={"font-semibold"}>İçerik</label>
                                <InputTextarea id="content" value={content} onChange={(e) => setContent(e.target.value)}
                                               rows={3} cols={20} autoResize placeholder="Bildirim İçeriğini Giriniz"/>
                            </div>
                            <div className="p-field mb-3">
                                <label htmlFor="url" className={"font-semibold"}>Url</label>
                                <InputText id="url" value={url} onChange={(e) => setUrl(e.target.value)}
                                           placeholder="Bir URL Giriniz"/>
                                <small>(Gireceğiniz URL'e Yönlendirilir.)</small>
                            </div>
                        </div>
                        <div className="w-full flex justify-end">
                            <Button label={"Gönder"} size={"small"} onClick={sendNotification} loading={loading}
                                    icon={"pi pi-bell"}/>
                        </div>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    </AuthenticatedLayout>);
}
