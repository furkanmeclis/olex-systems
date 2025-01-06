import {Head, router} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import React, {useRef, useState} from "react";
import {Card} from "primereact/card";
import {Button} from "primereact/button";
import Create from "@/Pages/Worker/Customers/Create.jsx";
import {Dialog} from "primereact/dialog";
import {Toast} from "primereact/toast";
import {motion} from "framer-motion";
import CustomButton from "@/Components/CustomButton";

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

    // Animasyon varyantları
    const cardVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.5}
        }
    };

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Anasayfa</h2>}
    >
        <Head title="Anasayfa"/>
        <Toast ref={toast}/>
        <div className="py-6">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}
                >
                    <motion.div variants={cardVariants}>
                        <Card
                            className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br transform hover:-translate-y-1"
                            title={
                                <div className="flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-200">
                                    <i className="pi pi-users text-red-500"></i>
                                    Müşteriler
                                </div>
                            }
                            subTitle={
                                <div className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                                    <i className="pi pi-users"></i> {metrics.customers} Adet Müşteri
                                </div>
                            }
                        >
                            <div className="flex flex-wrap gap-2">
                                <CustomButton
                                    label="Müşteriler"
                                    icon="pi-users"
                                    color="red"
                                    onClick={() => router.visit(route('worker.customers.index'))}
                                />
                                <CustomButton
                                    label="Müşteri Ekle"
                                    icon="pi-plus"
                                    color="red"
                                    outlined={true}
                                    onClick={() => setCreateModal(true)}
                                />
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div variants={cardVariants}>
                        <Card
                            className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br transform hover:-translate-y-1"
                            title={
                                <div className="flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-200">
                                    <i className="pi pi-file text-pink-500"></i>
                                    Hizmetler
                                </div>
                            }
                            subTitle={
                                <div className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                                    <i className="pi pi-file"></i> {metrics.services} Adet Hizmet Kaydı
                                </div>
                            }
                        >
                            <div className="flex flex-wrap gap-2">
                                <CustomButton
                                    label="Hizmetler"
                                    icon="pi-file"
                                    color="pink"
                                    onClick={() => router.visit(route('worker.services.index'))}
                                />
                                <CustomButton
                                    label="Hizmet Ekle"
                                    icon="pi-plus"
                                    color="pink"
                                    outlined={true}
                                    onClick={() => router.visit(route('worker.services.create'))}
                                />
                            </div>
                        </Card>
                    </motion.div>
                </motion.div>

                <Dialog 
                    header="Müşteri Ekle" 
                    style={{width: '50vw'}} 
                    breakpoints={{'960px': '75vw', '641px': '100vw'}}
                    onHide={handleCloseModal} 
                    maximizable 
                    visible={createModal} 
                    footer={
                        <div className="flex justify-end gap-2">
                            <CustomButton
                                label="Vazgeç"
                                icon="pi-times"
                                color="secondary"
                                onClick={handleCloseModal}
                                loading={loading}
                                outlined={true}
                            />
                            <CustomButton
                                label="Kaydet"
                                icon="pi-save"
                                color="success"
                                loading={loading}
                                onClick={() => {
                                    setFormSubmittedCreate(true);
                                    formRefCreate.current.click();
                                }}
                            />
                        </div>
                    }
                >
                    <Create 
                        csrf_token={csrf_token} 
                        setUsers={() => {}}
                        visible={createModal}
                        setVisible={setCreateModal}
                    />
                </Dialog>
            </div>
        </div>
    </AuthenticatedLayout>
}
