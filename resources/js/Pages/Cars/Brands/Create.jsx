import React, {useState, useRef} from 'react';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Checkbox} from 'primereact/checkbox';
import {FileUpload} from 'primereact/fileupload';
import axios from 'axios';

export default function Create({visible, setVisible, toast, setBrands}) {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        is_active: true,
        logo: null
    });
    const [previewUrl, setPreviewUrl] = useState(null);
    const fileUploadRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('is_active', formData.is_active ? '1' : '0');
            if (formData.logo) {
                formDataToSend.append('logo', formData.logo);
            }

            const response = await axios.post(route('super.car.brands.store'), formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            setBrands(prev => [...prev, response.data.brand]);
            toast.current.show({
                severity: 'success',
                summary: 'Başarılı',
                detail: 'Marka başarıyla eklendi',
                life: 3000
            });
            setVisible(false);
            setFormData({name: '', is_active: true, logo: null});
            setPreviewUrl(null);
        } catch (error) {
            toast.current.show({
                severity: 'error',
                summary: 'Hata',
                detail: error.response?.data?.message || 'Bir hata oluştu',
                life: 3000
            });
        } finally {
            setLoading(false);
        }
    };

    const onFileSelect = (e) => {
        const file = e.files[0];
        if (file) {
            setFormData(prev => ({...prev, logo: file}));
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const clearFile = () => {
        setFormData(prev => ({...prev, logo: null}));
        setPreviewUrl(null);
        if (fileUploadRef.current) {
            fileUploadRef.current.clear();
        }
    };

    const footerContent = (
        <div>
            <Button label="İptal" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text"/>
            <Button label="Kaydet" icon="pi pi-check" onClick={handleSubmit} loading={loading}/>
        </div>
    );

    return (
        <Dialog header="Yeni Marka Ekle" visible={visible} style={{width: '50vw'}}
                onHide={() => setVisible(false)} footer={footerContent}>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="logo">Logo</label>
                    <div className="flex items-center gap-4">
                        {previewUrl ? (
                            <div className="relative">
                                <img src={previewUrl} alt="Preview" className="w-24 h-24 object-contain border rounded"/>
                                <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-sm absolute -top-2 -right-2"
                                        onClick={clearFile}/>
                            </div>
                        ) : (
                            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                                <i className="pi pi-image text-gray-500 text-xl"/>
                            </div>
                        )}
                        <FileUpload ref={fileUploadRef} mode="basic" accept="image/*" maxFileSize={2000000}
                                   customUpload uploadHandler={onFileSelect} auto chooseLabel="Logo Seç"
                                   className="flex-1"/>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Marka Adı</label>
                    <InputText
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                    />
                </div>

                <div className="flex gap-2 items-center">
                    <Checkbox
                        inputId="is_active"
                        checked={formData.is_active}
                        onChange={(e) => setFormData(prev => ({...prev, is_active: e.checked}))}
                    />
                    <label htmlFor="is_active">Aktif</label>
                </div>
            </div>
        </Dialog>
    );
} 