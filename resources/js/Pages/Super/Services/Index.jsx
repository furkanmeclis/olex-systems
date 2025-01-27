import {Head, router, WhenVisible} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import Services from "@/Pages/Super/Services/Services.jsx";
import React, {useState, useRef, useEffect} from 'react';
import {Toast} from 'primereact/toast';
import LoadingSpinner from "@/Components/LoadingSpinner.jsx";

export default function Index({auth, services, csrf_token}) {
    const toast = useRef(null);

    return (<AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Hizmetler</h2>}
    >
        <Head title="Hizmetler"/>
        <Toast ref={toast}/>
        <div className="py-6">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <WhenVisible data={"services"} fallback={<LoadingSpinner/>}>
                        <Services/>
                    </WhenVisible>
                </div>
            </div>
        </div>

    </AuthenticatedLayout>);
}
