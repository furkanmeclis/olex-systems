import {Head} from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import React from "react";
import OrderIndex from '@/Pages/Super/Orders/Index.jsx';
const Orders = ({auth,ordersAll,csrf_token,statuses}) => {
    return <Authenticated user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Siparişler</h2>}>
        <Head title="Siparişler"/>
        <div className="py-6">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg px-4 py-2">
                    <OrderIndex ordersAll={ordersAll} auth={auth} dealerOrderPage csrf_token={csrf_token} salesmans={[]} statuses={statuses} />
                </div>
            </div>
        </div>
    </Authenticated>
}
export default Orders;
