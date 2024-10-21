import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import React from "react";
import {Head} from "@inertiajs/react";
import StockIn from "@/Pages/Super/Dealers/Pages/StockIn.jsx";

const StockRecords  = (props) => {
    return <Authenticated user={props.auth.user} header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Müşteriler</h2>}>

        <Head title="Stok Kayıtları"/>
        <div className="py-6">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg px-4 py-2">
                    <StockIn stockRecords={props.stockRecords} />
                </div>
            </div>
        </div>
    </Authenticated>
}
export default StockRecords;
