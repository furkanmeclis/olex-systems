import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import React from "react";
import {Head} from "@inertiajs/react";
import Profile from "@/Pages/Super/Dealers/Pages/Profile.jsx";
import {Toast} from "primereact/toast";
const Settings  = (props) => {
    const {auth} = props;
    const toast = React.useRef(null);
    const [detail, setDetail] = React.useState(props.company);
    const [loading, setLoading] = React.useState(false);
    return <Authenticated user={props.auth.user} header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Bayi Ayarları</h2>}>

        <Head title="Bayi Ayarları"/>
        <div className="py-6">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg px-4 py-2">
                    <Toast ref={toast}/>
                    <Profile superPage={false} detail={detail} setDetail={setDetail} csrf_token={props.csrf_token} loading={loading} setLoading={setLoading} dealer={auth.user} toast={toast} />
                </div>
            </div>
        </div>
    </Authenticated>
}
export default Settings;
