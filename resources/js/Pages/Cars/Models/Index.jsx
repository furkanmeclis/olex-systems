import {Head} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import React, {useState, useRef} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import {ConfirmPopup, confirmPopup} from 'primereact/confirmpopup';
import {Toolbar} from 'primereact/toolbar';
import {Toast} from 'primereact/toast';
import Create from "@/Pages/Cars/Models/Create.jsx";
import Update from "@/Pages/Cars/Models/Update.jsx";
import axios from "axios";
import { router } from "@inertiajs/react";

export default function Index({auth, models: initialModels, brand}) {
    const toast = useRef(null);
    const [selectedModel, setSelectedModel] = useState(null);
    const [selectedModels, setSelectedModels] = useState([]);
    const [createModal, setCreateModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [models, setModels] = useState(initialModels);

    const handleBulkStatus = async (status) => {
        if (!selectedModels.length) {
            toast.current.show({
                severity: 'warn',
                summary: 'Uyarı',
                detail: 'Lütfen en az bir model seçin',
                life: 3000
            });
            return;
        }

        try {
            setLoading(true);
            await axios.post(route('super.car.brands.models.bulk-status', brand.id), {
                ids: selectedModels.map(model => model.id),
                status: status
            });
            
            setModels(prev => prev.map(model => {
                if (selectedModels.find(selected => selected.id === model.id)) {
                    return {...model, is_active: status};
                }
                return model;
            }));
            
            setSelectedModels([]);
            
            toast.current.show({
                severity: 'success',
                summary: 'Başarılı',
                detail: 'Modeller başarıyla güncellendi',
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

    const confirmDelete = (model) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Bu modeli silmek istediğinize emin misiniz?',
            icon: 'pi pi-exclamation-triangle',
            accept: async () => {
                try {
                    setLoading(true);
                    await axios.delete(route('super.car.brands.models.destroy', {
                        brand: brand.id,
                        model: model.id
                    }));
                    setModels(prev => prev.filter(item => item.id !== model.id));
                    toast.current.show({
                        severity: 'success',
                        summary: 'Başarılı',
                        detail: 'Model başarıyla silindi',
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
                {selectedModels.length > 0 && (
                    <>
                        <Button size="small" tooltipOptions={{position:'top'}} tooltip="Seçilenleri Aktif Et" icon="pi pi-check" onClick={() => handleBulkStatus(true)} loading={loading}/>
                        <Button size="small" tooltipOptions={{position:'top'}} tooltip="Seçilenleri Deaktif Et" icon="pi pi-times" severity="danger" onClick={() => handleBulkStatus(false)} loading={loading}/>
                    </>
                )}
            </div>
        );
    };
    const rightToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button size="small" tooltipOptions={{position:'top'}} tooltip="Yeni Model" icon="pi pi-plus" severity="success" onClick={() => setCreateModal(true)}/>
            </div>
        );
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <div className="flex gap-2">
                <Button icon="pi pi-pencil" rounded outlined severity="success" onClick={() => {
                    setSelectedModel(rowData);
                    setUpdateModal(true);
                }}/>
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDelete(rowData)}/>
            </div>
        );
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center gap-2">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        {brand.name} Modelleri
                    </h2>
                    <Button 
                        link 
                        className="!p-0 !min-w-0 underline font-normal"
                        onClick={() => router.visit(route('super.car.brands.index'))}
                    >
                        (Markalara Dön)
                    </Button>
                </div>
            }
        >
            <Head title={`${brand.name} Modelleri`}/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <Toast ref={toast}/>
                        <ConfirmPopup/>

                        <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}/>

                        <DataTable value={models} dataKey="id" loading={loading}
                                 paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]}
                                 paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                                 currentPageReportTemplate="{first}. ile {last}. arası toplam {totalRecords} kayıttan"
                                 filterDisplay="row"
                                 selection={selectedModels}
                                 removableSort
                                 onSelectionChange={e => setSelectedModels(e.value)}
                                 filters={{
                                     name: {value: "", matchMode: "contains"}
                                 }}
                                 emptyMessage="Model bulunamadı.">
                            <Column selectionMode="multiple" exportable={false} />
                            <Column field="id" header="ID" sortable />
                            <Column field="name" filter filterPlaceholder="Modele Göre" header="Model Adı" sortable style={{width: '45%'}}/>
                            
                            <Column field="is_active" header="Durum" sortable style={{width: '10%'}}
                                    body={(rowData) => rowData.is_active ? 'Aktif' : 'Pasif'}/>
                            <Column body={actionBodyTemplate} exportable={false} style={{width: '20%'}} />
                        </DataTable>

                        <Create visible={createModal} setVisible={setCreateModal} toast={toast} 
                               setModels={setModels} brand={brand}/>
                        {selectedModel && (
                            <Update visible={updateModal} setVisible={setUpdateModal} toast={toast} 
                                    model={selectedModel} setModels={setModels} brand={brand}/>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
} 