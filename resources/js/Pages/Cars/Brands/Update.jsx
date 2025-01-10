import React, {useState, useRef, useEffect} from 'react';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Checkbox} from 'primereact/checkbox';
import {FileUpload} from 'primereact/fileupload';
import axios from 'axios';

export default function Update({visible, setVisible, toast, brand, setBrands}) {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: brand.name,
        is_active: brand.is_active,
        logo: null
    });
    const [previewUrl, setPreviewUrl] = useState(brand.logo);
    const fileUploadRef = useRef(null);

    useEffect(() => {
        setFormData({
            name: brand.name,
            is_active: brand.is_active,
            logo: null
        });
        setPreviewUrl(brand.logo);
    }, [brand]);

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
            formDataToSend.append('_method', 'PUT');

            const response = await axios.post(route('super.car.brands.update', brand.id), formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            setBrands(prev => prev.map(item => item.id === brand.id ? response.data.brand : item));
            toast.current.show({
                severity: 'success',
                summary: 'Başarılı',
                detail: 'Marka başarıyla güncellendi',
                life: 3000
            });
            setVisible(false);
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
        setPreviewUrl(brand.logo);
        if (fileUploadRef.current) {
            fileUploadRef.current.clear();
        }
    };

    const footerContent = (
        <div>
            <Button label="İptal" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text"/>
            <Button label="Güncelle" icon="pi pi-check" onClick={handleSubmit} loading={loading}/>
        </div>
    );

    return (
        <Dialog header="Marka Düzenle" visible={visible} style={{width: '50vw'}}
                onHide={() => setVisible(false)} footer={footerContent}>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="logo">Logo</label>
                    <div className="flex items-center gap-4">
                        {previewUrl ? (
                            <div className="relative">
                                <img src={previewUrl} alt="Preview" className="w-24 h-24 object-contain border rounded"/>
                                {formData.logo && (
                                    <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-sm absolute -top-2 -right-2"
                                            onClick={clearFile}/>
                                )}
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