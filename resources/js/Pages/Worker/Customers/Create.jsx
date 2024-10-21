import {InputText} from "primereact/inputtext";
import {BlockUI} from 'primereact/blockui';
import {useFormik} from "formik";
import * as Yup from "yup";
import {Message} from "primereact/message";
import {SelectButton} from 'primereact/selectbutton';
import {Badge} from "primereact/badge";
import {useMemo, useState} from "react";

export default function Create({
                                   csrf_token,
                                   toast,
                                   onHide,
                                   setUsers,
                                   formRef,
                                   formSubmitted,
                                   workerHome = false,
                                   setLoading
                               }) {
    const {values, handleSubmit, handleChange, dirty, setFieldValue, errors, setErrors} = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            image: '',
            gender: '',
            player_id: '',
            address: '',
            contact: [],
            type: 'individual',
            vatName: '',
            vatNumber: '',
            vatOffice: ''
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
            fetch(route('worker.customers.store'), {
                method: 'POST', headers: {
                    'X-CSRF-TOKEN': csrf_token
                }, body: formData

            }).then(response => response.json()).then(data => {
                if (data.status) {
                    if (workerHome) {
                        toast.current.show({
                            severity: 'success', summary: 'Başarılı', detail: data.message
                        });
                        setTimeout(() => {
                            onHide();
                        }, 1000)
                    } else {
                        toast.current.show({
                            severity: 'success', summary: 'Başarılı Veriler Yenileniyor 1sn..', detail: data.message,
                        });
                        setTimeout(() => {
                            onHide();
                            setUsers(data.customers);
                        }, 1000)
                    }
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
            })
        }
    })
    const isIndividual = useMemo(() => values.type === 'individual', [values.type]);

    return (<BlockUI template={<i className="pi pi-spin pi-spinner" style={{fontSize: '3rem'}}></i>}>
        <form className="p-fluid" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-x-3 mb-3">
                <div className={"col-span-2 grid gap-y-2"}>
                    {formSubmitted && Object.keys(errors).length > 0 && <>
                        {Object.entries(errors).map(([key, value]) => (
                            <Message severity="warn" key={key} text={value}/>))}
                    </>}
                </div>
                <div className={"mb-3"}>
                    <label htmlFor="address" className="font-bold">
                        Müşteri Tipi <span className={"font-semibold text-red-400"}>*</span>
                    </label>
                    <SelectButton value={values.type} onChange={(e) => setFieldValue('type', e.value)}
                                  itemTemplate={(option) => {
                                      return <div className={"w-full text-center"}><i
                                          className={option.icon + " p-overlay-badge"} style={{fontSize: '1.5rem'}}>

                                      </i> {option.label}</div>
                                  }}
                                  optionLabel="value"
                                  options={[{
                                      icon: 'pi pi-user', value: 'individual', label: 'Bireysel'
                                  }, {
                                      icon: 'pi pi-home', value: 'company', label: 'Kurumsal'
                                  },]}/>
                </div>
                <div className={"col-span-2"}>
                    <label htmlFor="name" className="font-bold">
                        {isIndividual ? "Müşteri" : "Firma"} Adı <span className={"font-semibold text-red-400"}>*</span>
                    </label>
                    <InputText id="name" name={"name"} onChange={handleChange} value={values.name || ''} autoFocus/>

                </div>

            </div>
            <div className={"mb-3"}>
                <label htmlFor="email" className="font-bold">
                    {isIndividual ? "Müşteri" : "Firma"} E-Posta Adresi <span
                    className={"font-semibold text-red-400"}>*</span>
                </label>
                <InputText id="email" type={"email"} name={"email"} onChange={handleChange} value={values.email || ''}/>
            </div>
            <div className={"mb-3"}>
                <label htmlFor="phone" className="font-bold">
                    {isIndividual ? "Müşteri" : "Firma"} Telefon No <span
                    className={"font-semibold text-red-400"}>*</span>
                </label>
                <InputText id="phone" type={"tel"} name={"phone"} onChange={handleChange} value={values.phone || ''}/>
            </div>
            <div className={"mb-3"}>
                <label htmlFor="address" className="font-bold">
                    {isIndividual ? "Müşteri" : "Firma"} Adresi <span className={"font-semibold text-red-400"}>*</span>
                </label>
                <InputText id="address" type={"text"} name={"address"} onChange={handleChange}
                           value={values.address || ''}/>
            </div>
            {!isIndividual && <>
                <div className={"mb-3"}>
                    <label htmlFor="vatName" className="font-bold">
                        {isIndividual ? "Müşteri" : "Firma"} Vergi Adı <span
                        className={"font-semibold text-red-400"}>*</span>
                    </label>
                    <InputText id="vatName" type={"text"} name={"vatName"} onChange={handleChange}
                               value={values.vatName || ''}/>
                </div>
                <div className={"mb-3"}>
                    <label htmlFor="vatNumber" className="font-bold">
                        {isIndividual ? "Müşteri" : "Firma"} Vergi Numarası <span
                        className={"font-semibold text-red-400"}>*</span>
                    </label>
                    <InputText id="vatName" type={"text"} name={"vatNumber"} onChange={handleChange}
                               value={values.vatNumber || ''}/>
                </div>
                <div className={"mb-3"}>
                    <label htmlFor="vatOffice" className="font-bold">
                        {isIndividual ? "Müşteri" : "Firma"} Vergi Dairesi <span
                        className={"font-semibold text-red-400"}>*</span>
                    </label>
                    <InputText id="vatName" type={"text"} name={"vatOffice"} onChange={handleChange}
                               value={values.vatOffice || ''}/>
                </div>
            </>}
            <div className={"mb-3"}>
                <label htmlFor="address" className="font-bold">
                    İletişim Tercihleri
                </label>
                <SelectButton multiple value={values.contact} onChange={(e) => setFieldValue('contact', e.value)}
                              itemTemplate={(option) => {
                                  let isSelected = values.contact && values.contact.includes(option.value);
                                  return <div className={"w-full text-center"}><i
                                      className={option.icon + " p-overlay-badge"} style={{fontSize: '1.5rem'}}>
                                      {isSelected && <Badge severity="success" value={<i className={"pi pi-check"}></i>}
                                                            style={{fontSize: '1px'}}></Badge>}
                                  </i></div>
                              }}
                              optionLabel="value"
                              options={[{icon: 'pi pi-envelope', value: 'email'}, {
                                  icon: 'pi pi-send', value: 'sms'
                              }, {icon: 'pi pi-bell', value: 'push'},]}/>
            </div>
            <button type={"submit"} style={{display: "none"}} ref={formRef}></button>
        </form>
    </BlockUI>);
}
