import {DeviceFrameset, DeviceSelector, DeviceEmulator} from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import OlexLogo from "@/Components/OlexLogo.jsx";
import {Head} from '@inertiajs/react';
import {Dialog} from 'primereact/dialog';
import React, {useEffect} from "react";
import useServiceTemplate from "@/Pages/Worker/Pdf.jsx";
import {Button} from "primereact/button";
import {ScrollPanel} from "primereact/scrollpanel";
import {IPhoneMockup} from "react-device-mockup";

const WarrantyIndex = ({serviceNumber, csrf_token}) => {
    const [visible, setVisible] = React.useState(false);
    // 375x812 for iPhone X
    const [serviceData, setServiceData] = React.useState({});
    const [appliedServices, setAppliedServices] = React.useState([]);
    const getServiceData = () => {
        fetch(route('worker.pdfSourceDataService', serviceNumber), {
            method: 'GET', headers: {
                'X-CSRF-TOKEN': csrf_token
            },

        }).then(response => response.json()).then(data => {
            if (data.status) {

                const mergedServices = data.data.applied_services.reduce((acc, item) => {
                    if (!acc[item.category]) {
                        acc[item.category] = item;
                    } else {
                        acc[item.category].multiple = true;
                        acc[item.category].name += ", " + item.name;
                        if (acc[item.category].warranty !== item.warranty) {
                            acc[item.category].warrantyMultiple = true;
                            acc[item.category].warranty = acc[item.category].warranty + " • " + item.warranty;
                        }
                    }
                    return acc;
                }, {});
                setServiceData({...data.data, applied_services: Object.values(mergedServices)});
            } else {

            }
        }).catch((error) => {

        }).finally(() => {

        })
    }
    useEffect(() => {
        getServiceData();
    }, [])
    const Content = ({mobile = false}) => {
        return serviceData?.brand_logo ?
            <div className={"bg-gradient-to-b  pt-10 h-full from-[#008951] to-[#003d24] " + (mobile && " pb-10 pt-15")}>
                <div className={"flex justify-center"}>
                    <OlexLogo text={true} dark className={"w-1/3"}/>
                </div>
                <h1 className={"font-avaganti text-center mt-4 mb-2 text-white"}>
                    Araç Bilgileri
                </h1>
                <div className=" mx-4 rounded-[14px] overflow-hidden border border-[#47a27d] font-avaganti">
                    <table className="w-full rounded-lg">
                        <thead className="bg-[#003821] text-white">
                        <tr className="border-b-2 border-[#00482b]">
                            <td colSpan={2}>
                                <div className="flex justify-between items-center py-2 px-4">
                                    <span className="text-center tracking-wide title w-full">
                                        <img src={serviceData.brand_logo}
                                             className={"h-[20px] mr-2 object-contain inline-flex"}
                                             alt="brandLogo"/>{serviceData.brand} <br/>
                                        {serviceData.model} {serviceData.generation} ({serviceData.year})
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b-1 border-[#00482b] bg-[#003821]">
                            <td className={"border-r-2 border-[#00482b] w-1/2"}>
                                <div className="flex justify-between items-center py-2 px-4">
                                    <div className="flex justify-between flex-col">
                                        <span className="text-sm">Hizmet Numarası:</span>
                                        <span>{serviceData.service_no}</span>

                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex justify-between items-center py-2 px-4">
                                    <div className="flex justify-between flex-col">
                                        <span className="text-sm">Plaka:</span>
                                        <div className={"flex justify-start gap-x-2"}>
                                                <span
                                                    className={"h-6 w-6 rounded bg-blue-800 p-1 text-sm flex justify-center items-center"}>TR</span>
                                            <span>{serviceData.plate}</span>
                                        </div>

                                    </div>
                                </div>
                            </td>
                        </tr>
                        </thead>

                    </table>
                </div>
                {serviceData?.applied_services?.length > 0 && <>
                    <h1 className={"font-avaganti text-center mt-4 mb-2 text-white"}>
                        Hizmet Bilgileri
                    </h1>
                    {serviceData?.applied_services?.map((product, index) => <>
                        <div className="mb-2 mx-4 rounded-[14px] overflow-hidden border border-[#47a27d] font-avaganti">
                            <table className="w-full rounded-lg">
                                <thead className="bg-[#003a22] text-white">
                                <tr className="border-b-2 border-[#00482b]">
                                    <td colSpan={2}>
                                        <div className="flex justify-between items-center py-2 px-4 gap-x-2">
                                            <img src={"/uploads/olex-logo-yatay.svg"} className={"w-1/4"}
                                                 alt={"olex  logo"}/>
                                            <span className="text-end tracking-wide w-full">
                                        {product.category}
                                    </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b-1 border-[#00482b] bg-[#002315]">
                                    <td className={"border-r-2 border-[#00482b] w-1/2"}>
                                        <div className="flex justify-between items-center py-2 px-4">
                                            <div className="flex justify-between flex-col text-sm">
                                                <span className="text-sm">Ürün:</span>
                                                <span
                                                    className={product?.multiple === true ? "text-sm" : ""}>{product.name}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex justify-between items-center py-2 px-4">
                                            <div className="flex justify-between flex-col text-sm">
                                                <span className="text-sm">Garanti:</span>
                                                <span
                                                    className={product?.warrantyMultiple === true ? "text-sm" : ""}
                                                    dangerouslySetInnerHTML={{__html: product.warranty.replace("X", '<i class="pi pi-exclamation-triangle text-red-600"></i>')}}></span>

                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                </thead>

                            </table>
                        </div>
                    </>)}
                </>}
                <h1 className={"font-avaganti text-center mt-4 mb-2 text-white"}>
                    Hizmet Veren Şube
                </h1>
                <div className="mb-8 mx-4 rounded-[14px] overflow-hidden border border-[#47a27d] font-avaganti">
                    <table className="w-full rounded-lg">
                        <thead className="bg-[#002315] text-white">
                        <tr className="border border-[#00482b]">
                            <td colSpan={2}>
                                <div className="flex justify-between items-center py-2 px-4 gap-x-2">

                                    <img src={"/uploads/olex-logo-yatay.svg"} className={"w-1/4"} alt={"olex  logo"}/>
                                    <span className="flex justify-between text-md items-end flex-col">
                                            <span>{serviceData.dealer.company_name} Şubesi</span>
                                            <span
                                                className={"text-sm"}>{serviceData.dealer.company_city} - {serviceData.dealer.company_country}</span>
                                        </span>
                                </div>
                            </td>
                        </tr>
                        </thead>

                    </table>
                </div>
                <div className={"w-full flex justify-center items-center"}>
                    <button onClick={() => {
                        window.open(route('warranty.pdf', serviceNumber), '_blank');
                        //setVisible(true);
                    }}
                            className={"py-2 px-6 bg-white rounded-lg text-black font-avaganti tracking-tight hover:font-bold delay-100 ring-0 outline-0 focus:outline-none focus:ring-2 focus:ring-green-300 focus:font-bold"}>
                        Dijital Sertifikayı Görüntüle
                    </button>
                </div>
                <div className={"w-full flex justify-center items-center mt-8 "}>
                    <span className={"font-thin text-[12px]"}><b
                        className={"font-bold text-white"}>OLEX Films &copy;</b> <span
                        className={"text-gray-200 dark:text-gray-400"}>{new Date().getFullYear()} All Rights Reserved.</span></span>
                </div>
            </div> : <></>;
    }
    const {handlePrint, ServiceTemplate} = useServiceTemplate({
        onAfterPrint: () => {
            setTimeout(() => {
                setVisible(false);
            }, 1500)
        }, ...serviceData
    });
    return (<>

        <Head title="Garanti Sorgulama"/>
        <div className={"flex justify-center items-center"}>
            <div className={"sm:hidden w-full"}>
                <Content mobile/>
            </div>
            <div className={"hidden sm:block my-4"}>
                <IPhoneMockup
                    screenWidth={400}
                    frameColor={"#000"}
                    hideStatusBar
                    transparentNavBar>
                    <Content/>
                </IPhoneMockup>
            </div>
        </div>
        <Dialog header="Dijital Sertifika" visible={visible} footer={() => {
            return <div className={"mt-4"}>
                <Button label="Yazdır" onClick={handlePrint} className={"mr-2"}/>
            </div>
        }} style={{width: '50vw'}} breakpoints={{'960px': '75vw', '641px': '100vw'}} onHide={() => {
            if (!visible) return;
            setVisible(false);
        }}>
            <div className={""}>
                <ServiceTemplate/>
            </div>
        </Dialog>
    </>);
}
export default WarrantyIndex;
