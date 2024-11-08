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
            name: user.name,
            email: user.email,
            phone: user.phone,
            image: user.avatar,
            gender: user.gender,
            player_id: user.player_id,
            address: user.address,
            contact: notificationSettings
        }, validationSchema: Yup.object().shape({
            name: Yup.string().required('Müşteri Adı Zorunludur.'),
            email: Yup.string().email('Geçerli Bir E-Posta Adresi Giriniz.').required('E-Posta Adresi Zorunludur.'),
            phone: Yup.string().required('Telefon Numarası Zorunludur.'),

        }), onSubmit: values => {
            setLoading(true);
            let formData = new FormData();
            formData.append('name', values.name);
            formData.append('email', values.email);
            formData.append('phone', values.phone);
            formData.append('notification_settings', JSON.stringify(values.contact));
            formData.append('address', values.address);
            formData.append('player_id', values.player_id);
            formData.append('_method', 'PUT');
            fetch(route(`${superPage ? "super" : "dealer"}.customers.update`, user.id), {
                method: 'POST', headers: {
                    'X-CSRF-TOKEN': csrf_token
                }, body: formData

            }).then(response => response.json()).then(data => {
                if (data.status) {
                    alertA('success', 'Başarılı', data.message);
                    setTimeout(() => {
                        setUsers(data.customers);
                        setVisible(false);
                    }, 500);
                } else {
                    alertA('error', 'Hata', data.message);
                }
            }).catch((error) => {
                console.log(error)
                alertA('error', 'Hata', 'Bir Hata Oluştu');
            }).finally(() => {
                setLoading(false);
            })
        }
    });

    return (<>
        <Toast ref={toast}/>
        <Dialog header="Müşteriyi Düzenle" style={{width: '50vw'}} breakpoints={{'960px': '75vw', '641px': '100vw'}}
                onHide={() => setVisible(false)} maximizable visible={visible} footer={<>
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
                        <div className={"col-span-2"}>
                            <label htmlFor="name" className="font-bold">
                                Müşteri Adı <span className={"font-semibold text-red-400"}>*</span>
                            </label>
                            <InputText id="name" name={"name"} onChange={handleChange} value={values.name || ''}
                                       autoFocus/>

                        </div>

                    </div>
                    <div className={"mb-3"}>
                        <label htmlFor="email" className="font-bold">
                            Müşteri E-Posta Adresi <span className={"font-semibold text-red-400"}>*</span>
                        </label>
                        <InputText id="email" type={"email"} name={"email"} onChange={handleChange}
                                   value={values.email || ''}/>
                    </div>
                    <div className={"mb-3"}>
                        <label htmlFor="phone" className="font-bold">
                            Müşteri Telefon No <span className={"font-semibold text-red-400"}>*</span>
                        </label>
                        <InputText id="phone" type={"tel"} name={"phone"} onChange={handleChange}
                                   value={values.phone || ''}/>
                    </div>
                    <div className={"mb-3"}>
                        <label htmlFor="address" className="font-bold">
                            Müşteri Adresi <span className={"font-semibold text-red-400"}>*</span>
                        </label>
                        <InputText id="address" type={"text"} name={"address"} onChange={handleChange}
                                   value={values.address || ''}/>
                    </div>
                    <div className={"mb-3"}>
                        <label htmlFor="player_id" className="font-bold">
                            Müşteri Device Id
                        </label>
                        <InputText id="player_id" type={"text"} name={"player_id"} onChange={handleChange}
                                   value={values.player_id || ''}/>
                    </div>
                    <div className={"mb-3"}>
                        <label htmlFor="address" className="font-bold">
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
                                      options={[{icon: 'pi pi-envelope', value: 'email'}, {
                                          icon: 'pi pi-send', value: 'sms'
                                      }, {icon: 'pi pi-bell', value: 'push'},]}/>
                    </div>
                </form>
            </BlockUI>
        </Dialog>
    </>)
}
