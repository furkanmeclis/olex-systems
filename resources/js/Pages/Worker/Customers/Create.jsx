import {InputText} from "primereact/inputtext";
import {BlockUI} from 'primereact/blockui';
import {useFormik} from "formik";
import * as Yup from "yup";
import {Message} from "primereact/message";
import {SelectButton} from 'primereact/selectbutton';
import {Badge} from "primereact/badge";
import React, {useMemo, useRef, useState} from "react";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import {Toast} from "primereact/toast";
import {motion} from "framer-motion";
import {InputMask} from "primereact/inputmask";

const validationSchema = Yup.object().shape({
    type: Yup.string().required('Müşteri tipi seçimi zorunludur'),
    name: Yup.string().required('Müşteri/Firma Adı zorunludur'),
    email: Yup.string().email('Geçerli bir e-posta adresi giriniz').required('E-posta adresi zorunludur'),
    phone: Yup.string().required('Telefon numarası zorunludur'),
    address: Yup.string().required('Adres zorunludur'),
    vatName: Yup.string().when('type', {
        is: 'company',
        then: () => Yup.string().required('Vergi adı zorunludur'),
        otherwise: () => Yup.string()
    }),
    vatNumber: Yup.string().when('type', {
        is: 'company',
        then: () => Yup.string().required('Vergi numarası zorunludur'),
        otherwise: () => Yup.string()
    }),
    vatOffice: Yup.string().when('type', {
        is: 'company',
        then: () => Yup.string().required('Vergi dairesi zorunludur'),
        otherwise: () => Yup.string()
    })
});

export default function Create({csrf_token, setUsers, visible, setVisible, workerHome = false}) {
    const toast = useRef(null);
    const [loading, setLoading] = useState(false);

    const alertA = (severity, summary, detail) => {
        toast.current.show({severity: severity, summary: summary, detail: detail});
    }

    const formik = useFormik({
        initialValues: {
            type: 'individual',
            name: '',
            email: '',
            phone: '',
            address: '',
            contact: [],
            vatName: '',
            vatNumber: '',
            vatOffice: ''
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            setLoading(true);
            let formData = new FormData();
            Object.keys(values).forEach(key => {
                if (key === 'contact') {
                    formData.append('notification_settings', JSON.stringify(values[key]));
                } else {
                    formData.append(key, values[key]);
                }
            });

            fetch(route('worker.customers.store'), {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': csrf_token
                },
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.status) {
                        if (workerHome) {
                            alertA('success', 'Başarılı', data.message);
                            setTimeout(() => {
                                setVisible(false);
                            }, 1000)
                        } else {
                            alertA('success', 'Başarılı', data.message);
                            setTimeout(() => {
                                setVisible(false);
                                setUsers(data.customers);
                            }, 1000)
                        }
                    } else {
                        alertA('error', 'Hata', data.message);
                    }
                })
                .catch(() => {
                    alertA('error', 'Hata', 'Bir hata oluştu');
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    });

    const isCompany = useMemo(() => formik.values.type === 'company', [formik.values.type]);

    const customerTypes = [
        {
            icon: 'pi pi-user',
            value: 'individual',
            label: 'Bireysel'
        },
        {
            icon: 'pi pi-building',
            value: 'company',
            label: 'Kurumsal'
        }
    ];

    const notificationTypes = [
        {icon: 'pi pi-envelope', value: 'email', label: 'E-posta'},
        {icon: 'pi pi-send', value: 'sms', label: 'SMS'},
        {icon: 'pi pi-bell', value: 'push', label: 'Bildirim'}
    ];

    return (
        <>
            <Toast ref={toast}/>
            <Dialog
                header={`${isCompany ? 'Kurumsal' : 'Bireysel'} Müşteri Ekle`}
                visible={visible}
                style={{width: '50vw'}}
                breakpoints={{'960px': '75vw', '641px': '100vw'}}
                onHide={() => setVisible(false)}
                maximizable
                footer={
                    <div className="flex justify-end gap-2">
                        <Button
                            label="Vazgeç"
                            icon="pi pi-times"
                            onClick={() => setVisible(false)}
                            className="p-button-text"
                            disabled={loading}
                        />
                        <Button
                            label="Kaydet"
                            icon="pi pi-check"
                            onClick={formik.handleSubmit}
                            loading={loading}
                        />
                    </div>
                }
            >
                <BlockUI blocked={loading}>
                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4">
                            <div className="field">
                                <label className="font-bold mb-2 block">
                                    Müşteri Tipi
                                </label>
                                <SelectButton
                                    value={formik.values.type}
                                    onChange={(e) => formik.setFieldValue('type', e.value)}
                                    options={customerTypes}
                                    itemTemplate={(option) => (
                                        <motion.div
                                            whileHover={{scale: 1.02}}
                                            whileTap={{scale: 0.98}}
                                            className="flex items-center gap-2 px-4 py-2"
                                        >
                                            <i className={option.icon}/>
                                            <span>{option.label}</span>
                                        </motion.div>
                                    )}
                                    className="w-full"
                                />
                            </div>

                            <div className="field">
                                <label htmlFor="name" className="font-bold block mb-2">
                                    {isCompany ? 'Firma Adı' : 'Müşteri Adı'}
                                    <span className="text-red-500">*</span>
                                </label>
                                <InputText
                                    id="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    className={formik.errors.name && formik.touched.name ? 'p-invalid w-full' : 'w-full'}
                                />
                                {formik.errors.name && formik.touched.name && (
                                    <small className="p-error">{formik.errors.name}</small>
                                )}
                            </div>

                            <div className="field">
                                <label htmlFor="email" className="font-bold block mb-2">
                                    E-posta Adresi
                                    <span className="text-red-500">*</span>
                                </label>
                                <InputText
                                    id="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    className={formik.errors.email && formik.touched.email ? 'p-invalid w-full' : 'w-full'}
                                />
                                {formik.errors.email && formik.touched.email && (
                                    <small className="p-error">{formik.errors.email}</small>
                                )}
                            </div>

                            <div className="field">
                                <label htmlFor="phone" className="font-bold block mb-2">
                                    Telefon Numarası
                                    <span className="text-red-500">*</span>
                                </label>
                                <InputMask
                                    id="phone"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    mask="(999) 999-9999"
                                    placeholder="(5XX) XXX-XXXX"
                                    className={formik.errors.phone && formik.touched.phone ? 'p-invalid w-full' : 'w-full'}
                                />
                                {formik.errors.phone && formik.touched.phone && (
                                    <small className="p-error">{formik.errors.phone}</small>
                                )}
                            </div>

                            <div className="field">
                                <label htmlFor="address" className="font-bold block mb-2">
                                    Adres
                                    <span className="text-red-500">*</span>
                                </label>
                                <InputText
                                    id="address"
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    className={formik.errors.address && formik.touched.address ? 'p-invalid w-full' : 'w-full'}
                                />
                                {formik.errors.address && formik.touched.address && (
                                    <small className="p-error">{formik.errors.address}</small>
                                )}
                            </div>

                            {isCompany && (
                                <motion.div
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, y: 20}}
                                    className="flex flex-col gap-4"
                                >
                                    <div className="field">
                                        <label htmlFor="vatName" className="font-bold block mb-2">
                                            Vergi Adı
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <InputText
                                            id="vatName"
                                            value={formik.values.vatName}
                                            onChange={formik.handleChange}
                                            className={formik.errors.vatName && formik.touched.vatName ? 'p-invalid w-full' : 'w-full'}
                                        />
                                        {formik.errors.vatName && formik.touched.vatName && (
                                            <small className="p-error">{formik.errors.vatName}</small>
                                        )}
                                    </div>

                                    <div className="field">
                                        <label htmlFor="vatNumber" className="font-bold block mb-2">
                                            Vergi Numarası
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <InputText
                                            id="vatNumber"
                                            value={formik.values.vatNumber}
                                            onChange={formik.handleChange}
                                            className={formik.errors.vatNumber && formik.touched.vatNumber ? 'p-invalid w-full' : 'w-full'}
                                        />
                                        {formik.errors.vatNumber && formik.touched.vatNumber && (
                                            <small className="p-error">{formik.errors.vatNumber}</small>
                                        )}
                                    </div>

                                    <div className="field">
                                        <label htmlFor="vatOffice" className="font-bold block mb-2">
                                            Vergi Dairesi
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <InputText
                                            id="vatOffice"
                                            value={formik.values.vatOffice}
                                            onChange={formik.handleChange}
                                            className={formik.errors.vatOffice && formik.touched.vatOffice ? 'p-invalid w-full' : 'w-full'}
                                        />
                                        {formik.errors.vatOffice && formik.touched.vatOffice && (
                                            <small className="p-error">{formik.errors.vatOffice}</small>
                                        )}
                                    </div>
                                </motion.div>
                            )}

                            <div className="field">
                                <label className="font-bold block mb-2">
                                    İletişim Tercihleri
                                </label>
                                <SelectButton
                                    multiple
                                    value={formik.values.contact}
                                    onChange={(e) => formik.setFieldValue('contact', e.value)}
                                    options={notificationTypes}
                                    itemTemplate={(option) => {
                                        const isSelected = formik.values.contact?.includes(option.value);
                                        return (
                                            <motion.div
                                                whileHover={{scale: 1.02}}
                                                whileTap={{scale: 0.98}}
                                                className="flex items-center gap-2 px-4 py-2"
                                            >
                                                <i className={`${option.icon} ${isSelected ? 'text-primary' : ''}`}/>
                                                <span>{option.label}</span>
                                            </motion.div>
                                        );
                                    }}
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </form>
                </BlockUI>
            </Dialog>
        </>
    );
}
