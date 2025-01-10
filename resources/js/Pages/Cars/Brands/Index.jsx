import {Head} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import React, {useState, useRef} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import {Tooltip} from "primereact/tooltip";
import {ConfirmPopup, confirmPopup} from 'primereact/confirmpopup';
import {Toolbar} from 'primereact/toolbar';
import {Toast} from 'primereact/toast';
import Create from "@/Pages/Cars/Brands/Create.jsx";
import Update from "@/Pages/Cars/Brands/Update.jsx";
import axios from "axios";
import { router } from "@inertiajs/react";
export default function Index({auth, brands: initialBrands}) {
    const toast = useRef(null);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [createModal, setCreateModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [brands, setBrands] = useState(initialBrands);

    const handleBulkStatus = async (status) => {
        if (!selectedBrands.length) {
            toast.current.show({
                severity: 'warn',
                summary: 'Uyarı',
                detail: 'Lütfen en az bir marka seçin',
                life: 3000
            });
            return;
        }

        try {
            setLoading(true);
            await axios.post(route('super.car.brands.bulk-status'), {
                ids: selectedBrands.map(brand => brand.id),
                status: status
            });
            
            setBrands(prev => prev.map(brand => {
                if (selectedBrands.find(selected => selected.id === brand.id)) {
                    return {...brand, is_active: status};
                }
                return brand;
            }));
            
            setSelectedBrands([]);
            
            toast.current.show({
                severity: 'success',
                summary: 'Başarılı',
                detail: 'Markalar başarıyla güncellendi',
                life: 3000
            });
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

    const importData = async () => {
        try {
            setLoading(true);
            const response = await axios.post(route('super.car.data.import'));
            toast.current.show({
                severity: 'success',
                summary: 'Başarılı',
                detail: response.data.message,
                life: 3000
            });
        } catch (error) {
            console.log(error);
            toast.current.show({
                severity: 'error',
                summary: 'Hata',
                detail: error.response?.data?.error || 'Bir hata oluştu',
                life: 3000
            });
        } finally {
            setLoading(false);
        }
    };

    const resetData = async () => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Tüm araç verilerini silmek istediğinize emin misiniz?',
            icon: 'pi pi-exclamation-triangle',
            accept: async () => {
                try {
                    setLoading(true);
                    const response = await axios.post(route('super.car.brands.reset'));
                    toast.current.show({
                        severity: 'success',
                        summary: 'Başarılı',
                        detail: response.data.message,
                        life: 3000
                    });
                    setBrands([]);
                } catch (error) {
                    toast.current.show({
                        severity: 'error',
                        summary: 'Hata',
                        detail: error.response?.data?.error || 'Bir hata oluştu',
                        life: 3000
                    });
                } finally {
                    setLoading(false);
                }
            }
        });
    };

    const confirmDelete = (brand) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Bu markayı silmek istediğinize emin misiniz?',
            icon: 'pi pi-exclamation-triangle',
            accept: async () => {
                try {
                    setLoading(true);
                    await axios.delete(route('super.car.brands.destroy', brand.id));
                    setBrands(prev => prev.filter(item => item.id !== brand.id));
                    toast.current.show({
                        severity: 'success',
                        summary: 'Başarılı',
                        detail: 'Marka başarıyla silindi',
                        life: 3000
                    });
                } catch (error) {
                    toast.current.show({
                        severity: 'error',
                        summary: 'Hata',
                        detail: error.response?.data?.error || 'Bir hata oluştu',
                        life: 3000
                    });
                } finally {
                    setLoading(false);
                }
            }
        });
    };

    const leftToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                 {selectedBrands.length > 0 && (
                    <>
                        <Button tooltipOptions={{position: 'top'}} tooltip="Seçilenleri Aktif Et" size="small" icon="pi pi-check" onClick={() => handleBulkStatus(true)} loading={loading}/>
                        <Button tooltipOptions={{position: 'top'}} tooltip="Seçilenleri Deaktif Et" size="small" icon="pi pi-times" severity="danger" onClick={() => handleBulkStatus(false)} loading={loading}/>
                    </>
                )}
            </div>
        );
    };
    const rightToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button tooltipOptions={{position: 'top'}} tooltip="Yeni Marka" size="small" icon="pi pi-plus" severity="success" onClick={() => setCreateModal(true)}/>
                <Button tooltipOptions={{position: 'top'}} tooltip="Toplu İçe Aktar" size="small" icon="pi pi-upload" onClick={importData} loading={loading}/>
            </div>
        );
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <div className="flex gap-2">
                <Button icon="pi pi-pencil" rounded outlined severity="success" onClick={() => {
                    setSelectedBrand(rowData);
                    setUpdateModal(true);
                }}/>
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDelete(rowData)}/>
            </div>
        );
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Araç Markaları</h2>}
        >
            <Head title="Araç Markaları"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <Toast ref={toast}/>
                        <ConfirmPopup/>

                        <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate} />

                        <DataTable value={brands} dataKey="id" loading={loading}
                                removableSort
                                 paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]}
                                 paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                                 currentPageReportTemplate="{first}. ile {last}. arası toplam {totalRecords} kayıttan"
                                 filterDisplay="row"
                                 selection={selectedBrands}
                                 onSelectionChange={e => setSelectedBrands(e.value)}
                                 filters={{
                                     name: {value: "", matchMode: "contains"}
                                 }}
                                 emptyMessage="Marka bulunamadı.">
                            <Column selectionMode="multiple" exportable={false} style={{width: '3rem'}}/>
                            <Column field="id" header="ID" sortable />
                            <Column field="logo" header="Logo"  
                                   body={(rowData) => rowData.logo ? 
                                       <img src={rowData.logo} alt={rowData.name} className="w-16 h-16 object-contain rounded-lg bg-gray-100 dark:bg-gray-700 p-2"/> : 
                                       <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                                           <i className="pi pi-image text-gray-500 text-xl"/>
                                       </div>
                                   }/>
                            <Column field="name" filter filterPlaceholder="Markaya Göre" header="Marka Adı" sortable />
                            <Column field="models_count" header="Model Sayısı" sortable 
                                    body={(rowData) => (
                                        <Button
                                            link
                                            onClick={() => router.visit(route('super.car.brands.models.index', rowData.id))}
                                            className="p-0 underline font-normal"
                                        >
                                            {rowData.models_count} Model
                                        </Button>
                                    )}/>
                            <Column field="is_active" header="Durum" sortable style={{width: '10%'}}
                                    body={(rowData) => rowData.is_active ? 'Aktif' : 'Pasif'}/>
                            <Column body={actionBodyTemplate} exportable={false} style={{width: '20%'}}/>
                        </DataTable>

                        <Create visible={createModal} setVisible={setCreateModal} toast={toast} setBrands={setBrands}/>
                        {selectedBrand && (
                            <Update visible={updateModal} setVisible={setUpdateModal} toast={toast} 
                                    brand={selectedBrand} setBrands={setBrands}/>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
} 