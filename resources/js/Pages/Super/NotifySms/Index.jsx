import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router} from '@inertiajs/react';
import React, {useRef} from "react";
import {Toast} from "primereact/toast";
import {Message} from "primereact/message";

export default function Index({auth, csrf_token}) {
    const toast = useRef(null)
    return (<AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Bildirim & SMS</h2>}
    >
        <Head title="Bildirim & SMS"/>
        <Toast ref={toast}/>
        <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                      <Message severity={"info"}
                               className={"w-full"}
                               text={"Optimizasyon Çalışmaları Devam Etmektedir.En Kısa Sürede Açılacaktır."}
                               />
                    </div>
            </div>
        </div>
    </AuthenticatedLayout>);
}
