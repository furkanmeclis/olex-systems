import {InputText} from "primereact/inputtext";
import React, {useEffect, useMemo, useRef, useState} from "react";
import {Button} from "primereact/button";
import {BlockUI} from 'primereact/blockui';
import {useFormik} from "formik";
import * as Yup from "yup";
import {Message} from "primereact/message";
import {SelectButton} from 'primereact/selectbutton';
import {Badge} from "primereact/badge";
import {Toast} from "primereact/toast";
import {Dialog} from "primereact/dialog";
import {InputMask} from "primereact/inputmask";
import {motion} from "framer-motion";

export default function Update({csrf_token, setUsers, user, superPage, visible, setVisible}) {
    const toast = useRef(null);
    const [loading, setLoading] = useState(false);
    const notificationSettings = useMemo(() => {
        if (user?.notification_settings) {
            return Object.entries(JSON.parse(user.notification_settings)).map(([key, value]) => {
                if (value) {
                    return key;
                } else {
                    return null;
                }
            }).filter((item) => item !== null)
        } else {
            return [];
        }
    }, [user]);

    const alertA = (severity, summary, detail) => {
        toast.current.show({severity: severity, summary: summary, detail: detail});
    }

    const {
        values, handleSubmit, submitForm, submitCount, handleChange, dirty, setFieldValue, errors, setErrors
    } = useFormik({
        initialValues: {
            type: user.type || 'individual',
            name: user.name,
            email: user.email,
            phone: user.phone,
            image: user.avatar,
            gender: user.gender,
            player_id: user.player_id,
            address: user.address,
            contact: notificationSettings,
            vatName: user.vat_name || '',
            vatNumber: user.vat_number || '',
            vatOffice: user.vat_office || ''
        }, 
        validationSchema: Yup.object().shape({
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
        }), 
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
            formData.append('_method', 'PUT');

            fetch(route(`${superPage ? "super" : "dealer"}.customers.update`, user.id), {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': csrf_token
                },
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.status) {
                        alertA('success', 'Başarılı', data.message);
                        setTimeout(() => {
                            setUsers(data.customers);
                            setVisible(false);
                        }, 500);
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

    const isCompany = useMemo(() => values.type === 'company', [values.type]);

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

    return (<>
        <Toast ref={toast}/>
        <Dialog header={`${isCompany ? 'Kurumsal' : 'Bireysel'} Müşteri Düzenle`} visible={visible} style={{width: '50vw'}} 
                breakpoints={{'960px': '75vw', '641px': '100vw'}}
                onHide={() => setVisible(false)} maximizable 
                footer={<>
                    <Button label="Vazgeç" icon="pi pi-times" size={"small"} link onClick={() => setVisible(false)}
                            loading={loading}/>
                    <Button label="Kaydet" icon="pi pi-save" size={"small"} className="p-button-success" loading={loading}
                            onClick={() => {
                                submitForm().then(r => {
                                });
                            }}/>
                </>}>
            <BlockUI blocked={loading} template={<i className="pi pi-spin pi-spinner" style={{fontSize: '3rem'}}></i>}>
                <form className="p-fluid" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-x-3 mb-3">
                        <div className={"col-span-2 grid gap-y-2"}>
                            {submitCount > 0 && Object.keys(errors).length > 0 && <>
                                {Object.entries(errors).map(([key, value]) => (
                                    <Message severity="warn" key={key} text={value}/>))}
                            </>}
                        </div>
                        <div className="col-span-2">
                            <label className="font-bold mb-2 block">
                                Müşteri Tipi
                            </label>
                            <SelectButton
                                value={values.type}
                                onChange={(e) => setFieldValue('type', e.value)}
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

                        <div className={"col-span-2"}>
                            <label htmlFor="name" className="font-bold">
                                {isCompany ? 'Firma Adı' : 'Müşteri Adı'} <span className={"font-semibold text-red-400"}>*</span>
                            </label>
                            <InputText id="name" name={"name"} onChange={handleChange} value={values.name || ''}
                                       autoFocus/>
                        </div>
                    </div>

                    <div className={"mb-3"}>
                        <label htmlFor="email" className="font-bold">
                            E-posta Adresi <span className={"font-semibold text-red-400"}>*</span>
                        </label>
                        <InputText id="email" type={"email"} name={"email"} onChange={handleChange}
                                   value={values.email || ''}/>
                    </div>

                    <div className={"mb-3"}>
                        <label htmlFor="phone" className="font-bold">
                            Telefon Numarası <span className={"font-semibold text-red-400"}>*</span>
                        </label>
                        <InputMask
                            id="phone"
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            mask="(999) 999-9999"
                            placeholder="(5XX) XXX-XXXX"
                            className={errors.phone ? 'p-invalid w-full' : 'w-full'}
                        />
                    </div>

                    <div className={"mb-3"}>
                        <label htmlFor="address" className="font-bold">
                            Adres <span className={"font-semibold text-red-400"}>*</span>
                        </label>
                        <InputText id="address" type={"text"} name={"address"} onChange={handleChange}
                                   value={values.address || ''}/>
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
                                    value={values.vatName}
                                    onChange={handleChange}
                                    className={errors.vatName ? 'p-invalid w-full' : 'w-full'}
                                />
                                {errors.vatName && (
                                    <small className="p-error">{errors.vatName}</small>
                                )}
                            </div>

                            <div className="field">
                                <label htmlFor="vatNumber" className="font-bold block mb-2">
                                    Vergi Numarası
                                    <span className="text-red-500">*</span>
                                </label>
                                <InputText
                                    id="vatNumber"
                                    value={values.vatNumber}
                                    onChange={handleChange}
                                    className={errors.vatNumber ? 'p-invalid w-full' : 'w-full'}
                                />
                                {errors.vatNumber && (
                                    <small className="p-error">{errors.vatNumber}</small>
                                )}
                            </div>

                            <div className="field">
                                <label htmlFor="vatOffice" className="font-bold block mb-2">
                                    Vergi Dairesi
                                    <span className="text-red-500">*</span>
                                </label>
                                <InputText
                                    id="vatOffice"
                                    value={values.vatOffice}
                                    onChange={handleChange}
                                    className={errors.vatOffice ? 'p-invalid w-full' : 'w-full'}
                                />
                                {errors.vatOffice && (
                                    <small className="p-error">{errors.vatOffice}</small>
                                )}
                            </div>
                        </motion.div>
                    )}

                    <div className={"mb-3"}>
                        <label htmlFor="player_id" className="font-bold">
                            Device ID
                        </label>
                        <InputText id="player_id" type={"text"} name={"player_id"} onChange={handleChange}
                                   value={values.player_id || ''}/>
                    </div>

                    <div className={"mb-3"}>
                        <label className="font-bold block mb-2">
                            İletişim Tercihleri
                        </label>
                        <SelectButton multiple value={values.contact}
                                      onChange={(e) => setFieldValue('contact', e.value)}
                                      itemTemplate={(option) => {
                                          let isSelected = values.contact && values.contact.includes(option.value);
                                          return <div className={"w-full text-center"}><i
                                              className={option.icon + " p-overlay-badge"} style={{fontSize: '1.5rem'}}>
                                              {isSelected &&
                                                  <Badge severity="success" value={<i className={"pi pi-check"}></i>}
                                                         style={{fontSize: '1px'}}></Badge>}
                                          </i></div>
                                      }}
                                      optionLabel="value"
                                      options={[
                                          {icon: 'pi pi-envelope', value: 'email'},
                                          {icon: 'pi pi-send', value: 'sms'},
                                          {icon: 'pi pi-bell', value: 'push'}
                                      ]}/>
                    </div>
                </form>
            </BlockUI>
        </Dialog>
    </>)
}
