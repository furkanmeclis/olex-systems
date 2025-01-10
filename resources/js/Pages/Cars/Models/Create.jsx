import React, {useState} from 'react';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Checkbox} from 'primereact/checkbox';
import axios from 'axios';

export default function Create({visible, setVisible, toast, setModels, brand}) {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        brand_id: brand.id,
        is_active: true
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post(route('super.car.brands.models.store', brand.id), formData);
            
            setModels(prev => [...prev, response.data.model]);
            toast.current.show({
                severity: 'success',
                summary: 'Başarılı',
                detail: 'Model başarıyla eklendi',
                life: 3000
            });
            setVisible(false);
            setFormData({name: '', brand_id: brand.id, is_active: true});
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

    const footerContent = (
        <div>
            <Button label="İptal" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text"/>
            <Button label="Kaydet" icon="pi pi-check" onClick={handleSubmit} loading={loading}/>
        </div>
    );

    return (
        <Dialog header="Yeni Model Ekle" visible={visible} style={{width: '50vw'}}
                onHide={() => setVisible(false)} footer={footerContent}>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Model Adı</label>
                    <InputText
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="external_id">Harici ID</label>
                    <InputText
                        id="external_id"
                        value={formData.external_id}
                        onChange={(e) => setFormData(prev => ({...prev, external_id: e.target.value}))}
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