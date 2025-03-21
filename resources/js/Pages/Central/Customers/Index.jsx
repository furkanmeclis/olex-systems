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
import Update from "@/Pages/Central/Customers/Update.jsx";
import {useLocalStorage} from "primereact/hooks"

export default function Index({auth, customersAll, csrf_token, page = true, superPage = true}) {
    const toast = useRef(null);
    const op = useRef(null);
    const [filters, setFilters] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
    });
    const [loading, setLoading] = useState(false);
    const [loadingX, setLoadingX] = useState(false);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [updateWorker, setUpdateWorker] = useState({});
    const formRef = useRef();
    const [users, setUsers] = useState(customersAll);
    const columns = ['id', 'name', 'email', 'phone', 'company_name', 'worker_name', 'company_address', 'address', 'updated_at', 'created_at', 'actions'];
    const columnsTurkishNames = {
        'id': 'ID',
        'name': 'Müşteri Adı',
        'phone': 'Telefon',
        'email': 'Email',
        'address': 'Müşteri Adresi',
        'company_name': 'Bayi Adı',
        'worker_name': 'Ekleyen Çalışan',
        'company_address': 'Bayi Adres',
        'updated_at': 'Güncellenme Tarihi',
        'created_at': 'Eklenme Tarihi',
        'actions': 'İşlemler'
    }
    const LocalStorageName = page === true ? "super-customers-table-columns" : "super-customers-table-columns-2";
    const [selectedColumns, setSelectedColumns] = useLocalStorage(['id', 'name', 'email', 'phone', 'company_name', 'worker_name', 'updated_at', 'actions'], LocalStorageName)
    const [updateModal, setUpdateModal] = useState(false);
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
    };
    const renderHeader = () => {
        return (<>
            <Toolbar start={() => <>
                <Button icon="pi pi-bars" size={"small"} severity={"info"} tooltip={"Kolonları Yönet"}
                        tooltipOptions={{
                            position: 'top'
                        }} onClick={(event) => {
                    op.current.toggle(event);
                }} className="mr-2"/>
                {/*<Button icon="pi pi-print" size={"small"} className="mr-2"/>*/}
                {selectedUsers.length > 0 && (<>
                    <Button size={"small"}
                            icon="pi pi-times" className="p-button-warning mr-2"
                            onClick={() => setSelectedUsers([])} tooltip={"Seçimi Temizle"} tooltipOptions={{
                        position: 'top'
                    }}/>
                </>)}
            </>}
            />
        </>);
    };
    const header = renderHeader();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const updateWorkerPrepare = (user) => {
        if (!updateModal) {
            setUpdateWorker(user);
            setUpdateModal(true);
        }
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
                       rowsPerPageOptions={[5, 10, 25, 50]} rows={10} dataKey="id"
                       filters={{
                           name: {value: "", matchMode: "contains"},
                           email: {value: "", matchMode: "contains"},
                           phone: {value: "", matchMode: "contains"},
                           "dealer.company.company_name": {value: "", matchMode: "contains"},
                           "worker.name": {value: "", matchMode: "contains"},
                           "dealer.company.company_address": {value: "", matchMode: "contains"},
                           address: {value: "", matchMode: "contains"},
                       }}
                       filterDisplay={"row"}
                       loading={false}
                       globalFilterFields={['name', 'email', 'phone', 'dealer.company.company_name', 'dealer.name', 'dealer.company.company_address']}
                       header={header}
                       emptyMessage="Müşteri bulunamadı."
                       currentPageReportTemplate="{first}. ile {last}. arası toplam {totalRecords} kayıttan">

                {selectedColumns.includes('id') && <Column field="id" sortable header="#"/>}
                {selectedColumns.includes('name') &&
                    <Column field="name" filter filterPlaceholder={"Ada Göre"} sortable header="Müşteri Adı"/>}
                {selectedColumns.includes('email') &&
                    <Column field="email" filter filterPlaceholder={"Emaile Göre"} sortable header="Email"/>}
                {selectedColumns.includes('phone') &&
                    <Column field="phone" filter filterPlaceholder={"Telefona Göre"} sortable header="Telefon No"/>}
                {selectedColumns.includes('company_name') &&
                    <Column field="dealer.company.company_name" filter filterPlaceholder={"Bayi Adına Göre"} sortable
                            header="Bayi Adı" body={(rowData) => {
                        return <Button label={rowData.dealer.name} link size={"small"} onClick={() => {
                            router.visit(route('central.dealers.show', rowData.dealer.id));
                        }}/>
                    }}/>}
                {selectedColumns.includes('worker_name') &&
                    <Column field="worker.name" sortable filter filterPlaceholder={"Çalışana Göre"}
                            header="Ekleyen Çalışan" body={(rowData) => {
                        return <Button label={rowData.worker.name} link size={"small"} onClick={() => {
                            //router.visit(route('central.workers.show', rowData.worker.id));
                        }}/>
                    }}/>}
                {selectedColumns.includes('company_address') &&
                    <Column field="dealer.company.company_address" sortable filter
                            filterPlaceholder={"Bayi Adresine Göre"} header="Bayi Adres"/>}
                {selectedColumns.includes('address') &&
                    <Column field="address" filter filterPlaceholder={"Adrese Göre"} sortable header="Müşteri Adresi"/>}
                {selectedColumns.includes('created_at') && <Column field="created_at" sortable header="Eklenme Tarihi"
                                                                   body={(rowData) => new Date(rowData.created_at).toLocaleString()}/>}
                {selectedColumns.includes('updated_at') &&
                    <Column field="updated_at" sortable header="Güncellenme Tarihi"
                            body={(rowData) => new Date(rowData.updated_at).toLocaleString()}/>}
                {selectedColumns.includes('actions') && <Column header="İşlemler" body={(user) => {
                    return <div className={"flex justify-center gap-x-2"}>
                        <Button icon="pi pi-pencil" size={"small"} tooltip={"Müşteriyi Düzenle"}
                                tooltipOptions={{
                                    position: 'top'
                                }} severity={"warning"} onClick={() => {
                            updateWorkerPrepare(user);
                        }}/>
                    </div>
                }}/>}
            </DataTable>
            <Dialog header="Müşteriyi Düzenle" style={{width: '50vw'}} breakpoints={{'960px': '75vw', '641px': '100vw'}}
                    onHide={handleCloseModal} maximizable visible={updateModal} footer={<>
                <Button label="Vazgeç" icon="pi pi-times" size={"small"} link onClick={handleCloseModal}
                        loading={loadingX}/>
                <Button label="Kaydet" icon="pi pi-save" size={"small"} className="p-button-success" loading={loadingX}
                        onClick={() => {
                            setFormSubmitted(true);
                            formRef.current.click();
                        }}/>
            </>}>
                <Update updateModal={updateModal} superPage={superPage} user={updateWorker} csrf_token={csrf_token}
                        toast={toast}
                        onHide={handleCloseModal} setUsers={setUsers} formRef={formRef}
                        setFormSubmitted={setFormSubmitted}
                        formSubmitted={formSubmitted} loading={loadingX} setLoading={setLoadingX} page={page}/>
            </Dialog>
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
