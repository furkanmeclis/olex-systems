import OrderIndex from '@/Pages/Super/Orders/Index.jsx';

const Orders = ({
                    auth,
                    csrf_token,
                    ordersAll,
                    salesmans,
                    statuses
                }) => {
    return (
        <OrderIndex ordersAll={ordersAll}
                    salesmans={salesmans}
                    statuses={statuses}
                    auth={auth}
                    csrf_token={csrf_token}
                    dealerPage={true}
        />
    );
}
export default Orders;
