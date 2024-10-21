import {Head, router} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import React, {useRef, useState} from "react";
import {Card} from "primereact/card";
import {Button} from "primereact/button";
import Create from "@/Pages/Worker/Customers/Create.jsx";
import {Dialog} from "primereact/dialog";
import {Toast} from "primereact/toast";

export default function ({auth, csrf_token, metrics}) {
    const [loading, setLoading] = useState(false);
    const [createModal, setCreateModal] = useState(false);
    const handleCloseModal = () => {
        if (createModal) {
            setCreateModal(false);
        }
    };
    const [formSubmittedCreate, setFormSubmittedCreate] = useState(false);
    const formRefCreate = React.useRef(null);
    const toast = useRef();

    return <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Anasayfa</h2>}
    >
        <Head title="Anasayfa"/>
        <Toast ref={toast}/>
        <div className="py-6">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"}>
                    <Card title={"Müşteriler"} subTitle={<>
                        <i className={"pi pi-users"}></i> {metrics.customers} Adet Müşteri
                    </>}>
                        <Button label="Müşteriler" icon="pi pi-users" className="p-button-raised p-button-rounded mr-3"
                                onClick={() => {
                                    router.visit(route('worker.customers.index'));
                                }}/><Button label="Müşteri Ekle" icon="pi pi-plus" className="p-button-raised p-button-rounded"
                                onClick={() => {
                                    setCreateModal(true);
                                }}/>
                    </Card>
                    <Card title={"Hizmetler"} subTitle={<>
                        <i className={"pi pi-file"}></i> {metrics.services} Adet Hizmet Kaydı
                    </>}>
                        <Button label="Hizmetler" icon="pi pi-file" className="p-button-raised p-button-rounded mr-3"
                                onClick={() => {
                                    router.visit(route('worker.services.index'));
                                }}/><Button label="Hizmet Ekle" icon="pi pi-plus" className="p-button-raised p-button-rounded"
                                onClick={() => {
                                    router.visit(route('worker.services.create'));
                                }}/>
                    </Card>
                </div>
                <Dialog header="Müşteri Ekle" style={{width: '50vw'}} breakpoints={{'960px': '75vw', '641px': '100vw'}}
                        onHide={handleCloseModal} maximizable visible={createModal} footer={<>
                    <Button label="Vazgeç" icon="pi pi-times" size={"small"} link onClick={handleCloseModal}
                            loading={loading}/>
                    <Button label="Kaydet" icon="pi pi-save" size={"small"} type={"button"} className="p-button-success"
                            loading={loading}
                            onClick={() => {
                                setFormSubmittedCreate(true);
                                formRefCreate.current.click();
                            }}/>
                </>}>
                    <Create createModal={createModal} csrf_token={csrf_token} toast={toast}
                            onHide={handleCloseModal} setUsers={() => {
                    }} formRef={formRefCreate}
                            setFormSubmitted={setFormSubmittedCreate}
                            workerHome
                            formSubmitted={formSubmittedCreate} loading={loading} setLoading={setLoading}/>
                </Dialog>
            </div>
        </div>
    </AuthenticatedLayout>
}
