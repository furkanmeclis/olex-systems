import React, {useEffect} from "react";
import useServiceTemplate from "@/Pages/Worker/Pdf.jsx";
import { SpeedDial } from 'primereact/speeddial';
import {Head} from "@inertiajs/react";
const WarrantyPdf = ({serviceNumber,csrf_token}) => {
    const [visible, setVisible] = React.useState(false);
    // 375x812 for iPhone X
    const [serviceData, setServiceData] = React.useState({});
    const getServiceData = () => {
        fetch(route('worker.pdfSourceDataService',serviceNumber), {
            method: 'GET',
            headers: {
                'X-CSRF-TOKEN': csrf_token
            },

        }).then(response => response.json()).then(data => {
            if (data.status) {
                setServiceData(
                    data.data
                )
            } else {

            }
        }).catch((error) => {

        }).finally(() => {

        })
    }
    useEffect(() => {
        getServiceData();
    }, [])
    const {handlePrint,ServiceTemplate} = useServiceTemplate({
        onAfterPrint:() => {
            setTimeout(() => {
                setVisible(false);
            },1500)
        },
        ...serviceData
    });
    return (<><ServiceTemplate/>
            <Head>
                <title>Garanti Belgesi</title>
                <meta name="description" content="Sertifika"/>
                <meta name="keywords" content="Sertifika"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="robots" content="index, follow"/>
                <link rel="canonical" href={window.location.href}/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <SpeedDial model={[
            {
                label: 'Yazdır',
                tooltip: 'Yazdır',
                icon: 'pi pi-print',
                command: () => {
                    handlePrint();
                }
            },
            {
                label: 'Paylaş',
                icon: 'pi pi-external-link',
                visible: !navigator.share,
                command: () => {
                   if(navigator.share) {
                       navigator.share({
                           title: 'Garanti Belgesi',
                           text: 'Garanti Belgesi',
                           url: window.location.href
                       }).then(() => {
                           console.log('Thanks for sharing!');
                       })
                           .catch(console.error);
                   }
                }
            }
        ]} direction="up" style={{ right: "10px", bottom: "10px",position:"fixed" }} showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClassName="p-button-outlined"/></>
    );
}
export default WarrantyPdf;
