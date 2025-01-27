import {Head, Link, router, usePage} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";

import React, {useState, useRef, useEffect} from 'react';
import {FilterMatchMode, FilterOperator} from 'primereact/api';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Tooltip} from "primereact/tooltip";
import {ConfirmPopup, confirmPopup} from 'primereact/confirmpopup';
import {Toolbar} from 'primereact/toolbar';
import {Toast} from 'primereact/toast';
import {OverlayPanel} from 'primereact/overlaypanel';
import {Checkbox} from 'primereact/checkbox';
import {useLocalStorage} from "primereact/hooks"
import {Tag} from "primereact/tag";
import CarBody from "@/Components/CarBody.jsx";

export default function Services() {
    const {services} = usePage().props;
    const [loading, setLoading] = useState(false);
    const toast = useRef(null);
    const op = useRef(null);
    const warrantyOp = useRef(null);
    const carBody = useRef(null);
    const [filters, setFilters] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const columns = ['id', 'service_no', 'customer_name', 'dealer_name', 'worker_name', "warranty", 'status', 'car', 'updated_at', 'created_at', 'actions', "note"];
    const columnsTurkishNames = {
        'id': 'ID',
        'service_no': 'Hizmet Numarası',
        'dealer_name': 'Bayi Adı',
        'customer_name': 'Müşteri Adı',
        'worker_name': 'Ekleyen Çalışan',
        "warranty": "Garanti Bilgileri",
        'status': 'Durumu',
        'car': 'Araç',
        'updated_at': 'Güncellenme Tarihi',
        'created_at': 'Eklenme Tarihi',
        'actions': 'İşlemler',
        'note': 'Not'
    }
    const LocalStorageName = "services-for-super-table-columns-2";
    const [selectedColumns, setSelectedColumns] = useLocalStorage(['id', 'service_no', 'customer_name', 'dealer_name', 'status', 'car', 'created_at', 'actions'], LocalStorageName)
    const onGlobalFilterChange = (e, action = false) => {
        const value = action ? e : e.target.value;
        let _filters = {...filters};

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
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
            </>}
                     end={() => <>

                    <span className="p-input-icon-left">
                            <i className="pi pi-search"/>
                            <InputText size={"small"} value={globalFilterValue} onChange={onGlobalFilterChange}
                                       placeholder="Hizmetlerde Arama Yapın"/>
                    </span>{globalFilterValue !== '' && (<Button size={"small"}
                                                                 icon="pi pi-times" className="p-button-info ml-2"
                                                                 onClick={() => onGlobalFilterChange('', true)}
                                                                 tooltip={"Filtreyi Temizle"} tooltipOptions={{
                         position: 'top'
                     }}/>)}
                     </>}/>
        </>);
    };
    const header = renderHeader();
    const [selectedService, setSelectedService] = useState(null);
    const noteOp = useRef(null);
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
            <OverlayPanel ref={noteOp} showCloseIcon closeOnEscape>
                <p>
                    <span dangerouslySetInnerHTML={{__html: selectedService?.note}}></span>
                </p>
            </OverlayPanel>
            <OverlayPanel ref={warrantyOp} showCloseIcon closeOnEscape>
                {selectedService && selectedService.status === "completed" && <>
                    <ul>
                        {selectedService.warranty.map((warranty, index) => <li>{warranty.name} - {warranty.label}</li>)}
                    </ul>
                </>}
            </OverlayPanel>
            <OverlayPanel ref={carBody} showCloseIcon closeOnEscape>
                <CarBody editable={false} value={selectedService?.body} onChange={() => {
                }}/>
            </OverlayPanel>
            <DataTable value={services} removableSort paginator
                       paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                       rowsPerPageOptions={[5, 10, 25, 50]} rows={10} dataKey="id" filters={filters}
                       loading={loading}
                       globalFilterFields={['service_no', 'worker_name', 'car', 'customer_name', 'status']}
                       header={header}
                       emptyMessage="Hizmet bulunamadı."
                       currentPageReportTemplate="{first}. ile {last}. arası toplam {totalRecords} kayıttan">

                {selectedColumns.includes('id') && <Column field="id" sortable header="#"/>}
                {selectedColumns.includes('service_no') && <Column field="service_no" sortable header="Hizmet Numarası"
                                                                   body={({service_no}) => <Button label={service_no}
                                                                                                   link onClick={() => {
                                                                       window.open(route("warranty.index", service_no), "_blank")
                                                                   }}/>}/>}
                {selectedColumns.includes('customer_name') &&
                    <Column field="customer.name" sortable header="Müşteri Adı"/>}
                {selectedColumns.includes('dealer_name') &&
                    <Column field="dealer.name" sortable header="Ekleyen Bayi"
                            body={(rowData) => (<Link href={route("super.dealers.show", rowData.dealer.id)}
                                                      className={"text-green-400"}>

                                <Button label={rowData.dealer.name}
                                        size={"small"}
                                        link/>
                            </Link>)}/>}
                {selectedColumns.includes('worker_name') &&
                    <Column field="worker.name" sortable header="Ekleyen Çalışan"/>}
                {selectedColumns.includes('warranty') &&
                    <Column field="warranty_x" align={"center"} header="Garanti Bilgileri" body={(service) => {
                        return <div>
                            {service.status === "completed" && <Button icon="pi pi-calendar" onClick={(event) => {
                                setSelectedService(service);
                                warrantyOp.current.toggle(event);

                            }} tooltip={"Garanti Bilgileri"} severity={"success"}/>}
                        </div>
                    }}/>}
                {selectedColumns.includes('status') && <Column field="status" sortable header="Durumu"
                                                               body={({status_label, status_severity}) => <Tag
                                                                   value={status_label} severity={status_severity}/>}/>}
                {selectedColumns.includes('car') &&
                    <Column field="car.brand" sortable header="Araç" body={(service) => {
                        return <Button label={service.car.brand + "-" + service.car.model} size={"small"} link
                                       onClick={(event) => {
                                           setSelectedService(service);
                                           carBody.current.toggle(event);

                                       }}/>
                    }}/>}
                {selectedColumns.includes('note') &&
                    <Column field="note" sortable header="Hizmet Notu" body={(service) => {
                        return <Button label={"Notu Görüntüle"} size={"small"} link
                                       onClick={(event) => {
                                           setSelectedService(service);
                                           noteOp.current.toggle(event);
                                       }}/>
                    }}/>}
                {selectedColumns.includes('created_at') && <Column field="created_at" sortable header="Eklenme Tarihi"
                                                                   body={(rowData) => new Date(rowData.created_at).toLocaleString()}/>}
                {selectedColumns.includes('updated_at') &&
                    <Column field="updated_at" sortable header="Güncellenme Tarihi"
                            body={(rowData) => new Date(rowData.updated_at).toLocaleString()}/>}

            </DataTable>

        </>
    }
    return (<TableContent/>);
}
