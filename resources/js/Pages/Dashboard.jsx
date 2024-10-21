import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router} from '@inertiajs/react';
import {Card} from "primereact/card";
import React from "react";
import {Button} from "primereact/button";

export default function Dashboard({auth, metrics}) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Anasayfa</h2>}
        >
            <Head title="Anasayfa"/>
            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"}>
                        {(auth.user.role === "super") && <>

                            <Card title={"Bayiler"} subTitle={<>
                                <i className={"pi pi-users"}></i> {metrics.dealers} Adet Bayi
                            </>}>
                                <Button label="Bayiler" icon="pi pi-users" className="p-button-raised p-button-rounded"
                                        onClick={() => {
                                            router.visit(route('super.dealers.index'));
                                        }}/>
                            </Card>
                            <Card title={"Çalışanlar"} subTitle={<>
                                <i className={"pi pi-users"}></i> {metrics.workers} Adet Bayi Çalışanı
                            </>}>
                                <Button label="Çalışanlar" icon="pi pi-users"
                                        className="p-button-raised p-button-rounded" onClick={() => {
                                    router.visit(route('super.workers.index'));
                                }}/>
                            </Card>
                            <Card title={"Ürünler"} subTitle={<>
                                <i className={"pi pi-box"}></i> {metrics.products} Adet Ürün
                            </>}>
                                <Button label="Ürünler" icon="pi pi-box" className="p-button-raised p-button-rounded"
                                        onClick={() => {
                                            router.visit(route('super.products.index'));
                                        }}/>
                            </Card>
                            <Card title={"Bayi Ürün Siparişleri"} subTitle={<>
                                <i className={"pi pi-database"}></i> {metrics.orders} Adet Sipariş
                            </>}>
                                <Button label="Siparişler" icon="pi pi-database"
                                        className="p-button-raised p-button-rounded" onClick={() => {
                                    router.visit(route('super.orders.index'));
                                }}/>
                            </Card>

                            <Card title={"Müşteriler"} subTitle={<>
                                <i className={"pi pi-users"}></i> {metrics.customers} Adet Müşteri
                            </>}>
                                <Button label="Müşteriler" icon="pi pi-users"
                                        className="p-button-raised p-button-rounded" onClick={() => {
                                    router.visit(route('super.customers.index'));
                                }}/>
                            </Card>
                            <Card title={"Hizmetler"} subTitle={<>
                                <i className={"pi pi-file"}></i> {metrics.services} Adet Hizmet Kaydı
                            </>}>
                            </Card>
                        </>}
                        {String(auth.user.role).includes("central") && <>

                            <Card title={"Bayiler"} subTitle={<>
                                <i className={"pi pi-users"}></i> {metrics.dealers} Adet Bayi
                            </>}>
                                <Button label="Bayiler" icon="pi pi-users" className="p-button-raised p-button-rounded"
                                        onClick={() => {
                                            router.visit(route('central.dealers.index'));
                                        }}/>
                            </Card>
                            <Card title={"Çalışanlar"} subTitle={<>
                                <i className={"pi pi-users"}></i> {metrics.workers} Adet Bayi Çalışanı
                            </>}>
                                <Button label="Çalışanlar" icon="pi pi-users"
                                        className="p-button-raised p-button-rounded" onClick={() => {
                                    router.visit(route('central.workers.index'));
                                }}/>
                            </Card>
                            <Card title={"Ürünler"} subTitle={<>
                                <i className={"pi pi-box"}></i> {metrics.products} Adet Ürün
                            </>}>
                                <Button label="Ürünler" icon="pi pi-box" className="p-button-raised p-button-rounded"
                                        onClick={() => {
                                            router.visit(route('central.products.index'));
                                        }}/>
                            </Card>
                            <Card title={"Bayi Ürün Siparişleri"} subTitle={<>
                                <i className={"pi pi-database"}></i> {metrics.orders} Adet Sipariş
                            </>}>
                                <Button label="Siparişler" icon="pi pi-database"
                                        className="p-button-raised p-button-rounded" onClick={() => {
                                    router.visit(route('central.orders.index'));
                                }}/>
                            </Card>

                            <Card title={"Müşteriler"} subTitle={<>
                                <i className={"pi pi-users"}></i> {metrics.customers} Adet Müşteri
                            </>}>
                                <Button label="Müşteriler" icon="pi pi-users"
                                        className="p-button-raised p-button-rounded" onClick={() => {
                                    router.visit(route('super.customers.index'));
                                }}/>
                            </Card>
                        </>}
                        {(auth.user.role === "admin") && <>
                            <Card title={"Çalışanlar"} subTitle={<>
                                <i className={"pi pi-users"}></i> {metrics.workers} Adet Çalışan
                            </>}>
                                <Button label="Çalışanlar" icon="pi pi-users"
                                        className="p-button-raised p-button-rounded" onClick={() => {
                                    router.visit(route('dealer.workers.index'));
                                }}/>
                            </Card>
                            <Card title={"Siparişler"} subTitle={<>
                                <i className={"pi pi-database"}></i> {metrics.orders} Adet Sipariş
                            </>}>
                                <Button label="Siparişler" icon="pi pi-database"
                                        className="p-button-raised p-button-rounded" onClick={() => {
                                    router.visit(route('dealer.orders'));
                                }}/>
                            </Card>
                            <Card title={"Müşteriler"} subTitle={<>
                                <i className={"pi pi-users"}></i> {metrics.customers} Adet Müşteri
                            </>}>
                                <Button label="Müşteriler" icon="pi pi-users"
                                        className="p-button-raised p-button-rounded" onClick={() => {
                                    router.visit(route('dealer.customers'));
                                }}/>
                            </Card>
                            <Card title={"Hizmetler"} subTitle={<>
                                <i className={"pi pi-file"}></i> {metrics.services} Adet Hizmet Kaydı
                            </>}>
                                <Button label="Hizmetler" icon="pi pi-file" className="p-button-raised p-button-rounded"
                                        onClick={() => {
                                            router.visit(route('dealer.services'));
                                        }}/>
                            </Card>
                        </>}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
