import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import React from "react";
import WorkerServicesPage from "@/Pages/Worker/Services/Index.jsx";
import {Head} from "@inertiajs/react";

const Services  = (props) => {
    return <Authenticated user={props.auth.user} header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Hizmetler</h2>}>
        <Head title="Hizmetler"/>
        <div className="py-6">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg px-4 py-2">
                    <WorkerServicesPage auth={props.auth} servicesAll={props.servicesAll} csrf_token={props.csrf_token} page={false} />
                </div>
            </div>
        </div>
    </Authenticated>
}
export default Services;
