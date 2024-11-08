import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import React from "react";
import {Head} from "@inertiajs/react";
import Index from "@/Pages/Super/Customers/Index.jsx";

const Customers  = (props) => {
    return <Authenticated user={props.auth.user} header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Müşteriler</h2>}>

        <Head title="Müşteriler"/>
        <div className="py-6">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg px-4 py-2">
                    <Index {...props}  page={false} superPage={false} />
                </div>
            </div>
        </div>
    </Authenticated>
}
export default Customers;
