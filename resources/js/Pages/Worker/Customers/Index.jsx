import {Head, router} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";

import React, {useState, useRef, useEffect} from 'react';
import {classNames} from 'primereact/utils';
import {FilterMatchMode, FilterOperator} from 'primereact/api';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {Image} from 'primereact/image';
import {Button} from 'primereact/button';
import {Tooltip} from "primereact/tooltip";
import {ConfirmPopup, confirmPopup} from 'primereact/confirmpopup';
import {Toolbar} from 'primereact/toolbar';
import {Dialog} from 'primereact/dialog';
import {Toast} from 'primereact/toast';
import {OverlayPanel} from 'primereact/overlaypanel';
import {Checkbox} from 'primereact/checkbox';
import Create from "@/Pages/Worker/Customers/Create.jsx";
import Update from "@/Pages/Worker/Customers/Update.jsx";
import {Avatar} from "primereact/avatar";
import {useLocalStorage} from "primereact/hooks"
import {Dropdown} from 'primereact/dropdown';
import {Calendar} from 'primereact/calendar';

export default function Index({auth, customersAll, csrf_token, page = true}) {
    const toast = useRef(null);
    const op = useRef(null);
    const [filters, setFilters] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
        id: {value: null, matchMode: FilterMatchMode.EQUALS},
        type: {value: null, matchMode: FilterMatchMode.EQUALS},
        name: {value: null, matchMode: FilterMatchMode.STARTS_WITH},
        email: {value: null, matchMode: FilterMatchMode.CONTAINS},
        phone: {value: null, matchMode: FilterMatchMode.CONTAINS},
        'worker.name': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
        address: {value: null, matchMode: FilterMatchMode.CONTAINS},
        vat_name: {value: null, matchMode: FilterMatchMode.STARTS_WITH},
        vat_number: {value: null, matchMode: FilterMatchMode.EQUALS},
        vat_office: {value: null, matchMode: FilterMatchMode.STARTS_WITH},
        created_at: {value: null, matchMode: FilterMatchMode.DATE_IS},
        updated_at: {value: null, matchMode: FilterMatchMode.DATE_IS}
    });
    const [loading, setLoading] = useState(false);
    const [loadingX, setLoadingX] = useState(false);
    const [loadingC, setLoadingC] = useState(false);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [updateWorker, setUpdateWorker] = useState({});
    const formRef = useRef();
    const formRefCreate = useRef();
    const [users, setUsers] = useState(customersAll);
    const columns = [
        'id',
        'type',
        'name',
        'email',
        'phone',
        'worker_name',
        'address',
        'vat_info',
        'updated_at',
        'created_at',
        'actions'
    ];
    const columnsTurkishNames = {
        'id': 'ID',
        'type': 'Müşteri Tipi',
        'name': 'Müşteri/Firma Adı',
        'phone': 'Telefon',
        'email': 'Email',
        'address': 'Adres',
        'vat_info': 'Vergi Bilgileri',
        'worker_name': 'Ekleyen Çalışan',
        'updated_at': 'Güncellenme Tarihi',
        'created_at': 'Eklenme Tarihi',
        'actions': 'İşlemler'
    }
    const LocalStorageName = page === true ? "worker-customers-table-columns" : "worker-customers-table-columns-2";
    const [selectedColumns, setSelectedColumns] = useLocalStorage([
        'id',
        'type',
        'name',
        'email',
        'phone',
        'updated_at',
        'actions'
    ], LocalStorageName)
    const [updateModal, setUpdateModal] = useState(false);
    const [createModal, setCreateModal] = useState(false);
    const clearFilter = () => {
        setFilters({
            global: {value: null, matchMode: FilterMatchMode.CONTAINS},
            id: {value: null, matchMode: FilterMatchMode.EQUALS},
            type: {value: null, matchMode: FilterMatchMode.EQUALS},
            name: {value: null, matchMode: FilterMatchMode.STARTS_WITH},
            email: {value: null, matchMode: FilterMatchMode.CONTAINS},
            phone: {value: null, matchMode: FilterMatchMode.CONTAINS},
            'worker.name': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
            address: {value: null, matchMode: FilterMatchMode.CONTAINS},
            vat_name: {value: null, matchMode: FilterMatchMode.STARTS_WITH},
            vat_number: {value: null, matchMode: FilterMatchMode.EQUALS},
            vat_office: {value: null, matchMode: FilterMatchMode.STARTS_WITH},
            created_at: {value: null, matchMode: FilterMatchMode.DATE_IS},
            updated_at: {value: null, matchMode: FilterMatchMode.DATE_IS}
        });
        setGlobalFilterValue('');
    };
    const onGlobalFilterChange = (e, action = false) => {
        const value = action ? e : e.target.value;
        let _filters = {...filters};
        _filters['global'].value = value;
        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const handleCloseModal = () => {
        if (updateModal) {
            setUpdateModal(false);
        }
        if (createModal) {
            setCreateModal(false);
        }
    };
    const renderHeader = () => {
        return (
            <div className="flex justify-between items-center">
                
                <div className="flex items-center gap-2">
                    <Button icon="pi pi-cog" onClick={(e) => op.current.toggle(e)} 
                            tooltip="Kolonları Yönet" tooltipOptions={{position: 'left'}} />
                    <Button icon="pi pi-plus" onClick={() => setCreateModal(true)} 
                            tooltip="Yeni Müşteri Ekle" tooltipOptions={{position: 'left'}} />
                </div>
            </div>
        );
    };
    const header = renderHeader();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formSubmittedCreate, setFormSubmittedCreate] = useState(false);
    const updateWorkerPrepare = (user) => {
        if (!updateModal) {
            setUpdateWorker(user);
            setUpdateModal(true);
        }
    };

    const customerTypeTemplate = (rowData) => {
        return (
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                rowData.type === 'company' 
                    ? 'bg-purple-100 text-purple-800' 
                    : 'bg-green-100 text-green-800'
            }`}>
                {rowData.type === 'company' ? 'Kurumsal' : 'Bireysel'}
            </span>
        );
    };

    const vatInfoTemplate = (rowData) => {
        if (rowData.type !== 'company') return '-';
        return (
            <div className="text-sm">
                <p><strong>Vergi Adı:</strong> {rowData.vat_name || '-'}</p>
                <p><strong>Vergi No:</strong> {rowData.vat_number || '-'}</p>
                <p><strong>Vergi Dairesi:</strong> {rowData.vat_office || '-'}</p>
            </div>
        );
    };

    const TableContent = () => {
        return <>
            <Tooltip target=".custom-target-icon"/>
            <ConfirmPopup/>
            <Toast ref={toast}/>
            <OverlayPanel ref={op}>
                <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                        <h3>Kolonları Yönet</h3>
                    </div>
                    <div className="flex flex-col">
                        {columns.map((column, index) => {
                            return <div key={index} className="flex my-1 items-center">
                                <Checkbox inputId={column} checked={selectedColumns.includes(column)} onChange={(e) => {
                                    let _selectedColumns = [...selectedColumns];
                                    if (e.checked) {
                                        _selectedColumns.push(column);
                                    } else {
                                        _selectedColumns = _selectedColumns.filter(col => col !== column);
                                    }
                                    setSelectedColumns(_selectedColumns);
                                }}/>
                                <label htmlFor={column} className="ml-2">{columnsTurkishNames[column]}</label>
                            </div>
                        })}
                        <div className="flex justify-end mt-4">
                            <Button label="Kaydet" severity={"success"} size={"small"} onClick={() => {
                                op.current.hide();
                            }}/>
                        </div>
                    </div>
                </div>
            </OverlayPanel>
            <DataTable value={users} removableSort paginator
                       paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                       rowsPerPageOptions={[5, 10, 25, 50]} rows={10} dataKey="id" filters={filters}
                       filterDisplay="row"
                       loading={loading}
                       globalFilterFields={['id', 'type', 'name', 'email', 'phone', 'worker.name', 'address', 'vat_name', 'vat_number', 'vat_office']}
                       header={header}
                       emptyMessage="Müşteri bulunamadı."
                       currentPageReportTemplate="{first}. ile {last}. arası toplam {totalRecords} kayıttan">

                {selectedColumns.includes('id') && <Column field="id" header="#" sortable filter filterPlaceholder="ID Ara"/>}
                {selectedColumns.includes('type') && 
                    <Column 
                        field="type" 
                        header="Müşteri Tipi" 
                        sortable 
                        filter 
                        filterElement={(options) => (
                            <Dropdown
                                value={options.value}
                                options={[
                                    { label: 'Bireysel', value: 'individual' },
                                    { label: 'Kurumsal', value: 'company' }
                                ]}
                                onChange={(e) => options.filterCallback(e.value)}
                                placeholder="Tümü"
                                className="p-column-filter"
                                showClear
                            />
                        )}
                        body={customerTypeTemplate}
                    />
                }
                {selectedColumns.includes('name') && <Column field="name" header="Müşteri/Firma Adı" sortable filter filterPlaceholder="İsim Ara"/>}
                {selectedColumns.includes('email') && <Column field="email" header="Email" sortable filter filterPlaceholder="Email Ara"/>}
                {selectedColumns.includes('phone') && <Column field="phone" header="Telefon No" sortable filter filterPlaceholder="Telefon Ara"/>}
                {selectedColumns.includes('worker_name') && <Column field="worker.name" header="Ekleyen Çalışan" sortable filter filterPlaceholder="Çalışan Ara"/>}
                {selectedColumns.includes('address') && <Column field="address" header="Adres" sortable filter filterPlaceholder="Adres Ara"/>}
                {selectedColumns.includes('vat_info') && 
                    <Column field="vat_info" header="Vergi Bilgileri" body={vatInfoTemplate}/>}
                {selectedColumns.includes('created_at') &&
                    <Column 
                        field="created_at" 
                        header="Eklenme Tarihi" 
                        sortable 
                        filter 
                        filterElement={(options) => (
                            <Calendar
                                value={options.value}
                                onChange={(e) => options.filterCallback(e.value)}
                                dateFormat="dd/mm/yy"
                                placeholder="Tarih Seç"
                                className="p-column-filter"
                            />
                        )}
                        body={(rowData) => new Date(rowData.created_at).toLocaleString()}
                    />
                }
                {selectedColumns.includes('updated_at') &&
                    <Column 
                        field="updated_at" 
                        header="Güncellenme Tarihi" 
                        sortable 
                        filter 
                        filterElement={(options) => (
                            <Calendar
                                value={options.value}
                                onChange={(e) => options.filterCallback(e.value)}
                                dateFormat="dd/mm/yy"
                                placeholder="Tarih Seç"
                                className="p-column-filter"
                            />
                        )}
                        body={(rowData) => new Date(rowData.updated_at).toLocaleString()}
                    />
                }
                {selectedColumns.includes('actions') && <Column header="İşlemler" body={(user) => {
                    return <div className="flex justify-center gap-x-2">
                        <Button 
                            icon="pi pi-pencil" 
                            size="small" 
                            tooltip="Müşteriyi Düzenle"
                            tooltipOptions={{ position: 'top' }} 
                            severity="warning" 
                            onClick={() => updateWorkerPrepare(user)}
                        />
                    </div>
                }}/>}
            </DataTable>
            <Update visible={updateModal} toast={toast} user={updateWorker} csrf_token={csrf_token}
                    setVisible={setUpdateModal} setUsers={setUsers}/>
            <Create csrf_token={csrf_token} setUsers={setUsers}
                    visible={createModal}
                    setVisible={setCreateModal}
            />
        </>
    }
    return page === true ? (<AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Müşteriler</h2>}
    >
        <Head title="Müşteriler"/>

        <div className="py-6">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <TableContent/>
                </div>
            </div>
        </div>

    </AuthenticatedLayout>) : (<TableContent/>);
}
