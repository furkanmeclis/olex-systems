import {Link, Head, router} from '@inertiajs/react';
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import svgImage from "@/assets/bg.svg"
import {Button} from "primereact/button";
import {InputMask} from "primereact/inputmask";
import {useRef, useState} from "react";
import {Toast} from "primereact/toast";
import {InputOtp} from "primereact/inputotp";
import {motion} from "framer-motion";

import OtpInput from 'react-otp-input';

export default function Welcome({auth, csrf_token}) {
    const toast = useRef(null);
    const [phone, setPhone] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isSended, setIsSended] = useState(false);
    const [otp, setOtp] = useState('');
    const [customerId, setCustomerId] = useState('');
    const [resend, setResend] = useState(false);
    const resetStatus = () => {
        setTimeout(() => {
            setResend(true);
        }, (1000 * 10));
        setTimeout(() => {
            setIsSended(false);
            setOtp('');
            setCustomerId('');
        }, (1000 * 60 * 5));
    }
    const otpLogin = (event, custom = false) => {
        setResend(false);
        setLoading(true);
        let formData = new FormData();
        formData.append('phone', phone);
        fetch(route('customer-otp-login'), {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': csrf_token
            },
            body: formData
        }).then(response => response.json()).then(data => {
            if (data.status) {
                toast.current.show({
                    severity: 'success',
                    summary: 'Başarılı',
                    detail: data.message,
                    life: 3000
                });
                if (!custom) {
                    resetStatus();
                }
                setCustomerId(data.customer_id);
                setIsSended(true);
            } else {
                toast.current.show({
                    severity: 'error',
                    summary: 'Hata',
                    detail: data.message,
                    life: 3000
                });
            }
        }).catch((error) => {
            toast.current.show({
                severity: 'error',
                summary: 'Hata',
                detail: "CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."
            });
        }).finally(() => {
            setLoading(false);
        });
    }
    const otpVerify = () => {
        setLoading(true);
        let formData = new FormData();
        formData.append('customer_id', customerId);
        formData.append('otp', otp);
        fetch(route('customer-otp-verify'), {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': csrf_token
            },
            body: formData
        }).then(response => response.json()).then(data => {
            if (data.status) {
                router.visit(route("customer.notify", data.hash))
            } else {
                toast.current.show({
                    severity: 'error',
                    summary: 'Hata',
                    detail: data.message,
                    life: 3000
                });
            }
        }).catch((error) => {
            toast.current.show({
                severity: 'error',
                summary: 'Hata',
                detail: "CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."
            });
        }).finally(() => {
            setLoading(false);
        });
    }

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <>
            <Head title="OLEX Films"/>
            <Toast ref={toast}/>
            <motion.div 
                initial="hidden"
                animate="visible"
                className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50"
            >
                <motion.img
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    id="background"
                    className="absolute -left-20 top-0 max-w-[877px]"
                    src={svgImage}
                />
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#006400] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        {!isOpen && (
                            <motion.header 
                                variants={fadeIn}
                                className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3"
                            >
                                <motion.div 
                                    className="flex lg:justify-center lg:col-start-2"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <ApplicationLogo className="w-24 h-24"/>
                                </motion.div>

                                <nav className="-mx-3 flex flex-1 justify-end">
                                    {auth.user ? (
                                        <Link
                                            href={route('dashboard')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Yönetim Paneli
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href={route('login')}
                                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                            >
                                                Giriş Yap
                                            </Link>
                                        </>
                                    )}
                                </nav>
                            </motion.header>
                        )}

                        {!isOpen && (
                            <motion.header 
                                variants={fadeIn}
                                className="w-full flex items-center justify-center gap-2 py-10"
                            >
                                <motion.div 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex lg:justify-center lg:col-start-2"
                                >
                                    <Button label={"Müşteri Girişi"} icon={"pi pi-user"}
                                        text
                                        onClick={() => {
                                            setIsOpen(true)
                                            setResend(false);
                                            setOtp('');
                                            setCustomerId('');
                                            setIsSended(false);
                                            setPhone('');
                                        }}
                                    />
                                </motion.div>
                            </motion.header>
                        )}

                        {isOpen && (
                            <motion.div 
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="w-full flex items-center justify-center"
                            >
                                <motion.div 
                                    variants={staggerContainer}
                                    initial="hidden"
                                    animate="visible"
                                    className={"lg:w-[60%] w-[90%] bg-black rounded p-4 relative"}
                                >
                                    <motion.div 
                                        variants={fadeIn}
                                        className="absolute top-[-55px] left-0"
                                    >
                                        <Button icon={"pi pi-arrow-left"}
                                            raised
                                            text
                                            rounded
                                            onClick={() => setIsOpen(false)}
                                        />
                                    </motion.div>
                                    
                                    <motion.div 
                                        variants={fadeIn}
                                        className={"flex justify-center"}
                                    >
                                        <span className="inline-block text-2xl font-bold bg-gradient-to-r from-[var(--primary-600)] via-[var(--primary-400)] to-[var(--primary-600)] bg-clip-text text-transparent mb-3">
                                            {isSended ? "Doğrulama Kodunu Giriniz" : " OLEX Films Müşteri Girişi"}
                                        </span>
                                    </motion.div>
                                    
                                    <div className={"flex justify-center my-3"}>
                                        {resend && <Button label={"Tekrar Gönder"} icon={"pi pi-refresh"}
                                                           className={"ml-2"}
                                                           text
                                                           onClick={(e) => otpLogin(e, true)}/>}
                                    </div>
                                    {!isSended && <InputMask className={"w-full mb-3"} value={phone}
                                                             placeholder={"Telefon Numarası"}
                                                             onChange={(e) => setPhone(e.target.value)}
                                                             mask="0(999) 999-9999"/>}
                                    {isSended && <div className={"w-full flex justify-center mb-3"}>

                                        <OtpInput
                                            value={otp}
                                            onChange={setOtp}
                                            numInputs={6}
                                            inputType={"tel"}
                                            mode={"number"}
                                            inputStyle={{
                                                width: "2em"
                                            }}
                                            renderSeparator={<span>&nbsp;</span>}
                                            renderInput={(props) => (
                                                <input
                                                    {...props}
                                                    autoComplete={"one-time-code"}
                                                    className="w-12 h-12 text-center text-lg font-medium border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary-600)]"
                                                />
                                            )}
                                        />
                                    </div>}

                                    <div className={"flex justify-center"}>
                                        {!isSended && <Button label={"Giriş Yap"} loading={loading} size={"small"}
                                                              icon={"pi pi-sign-in"}
                                                              onClick={otpLogin}/>}
                                        {isSended &&
                                            <Button label={"Doğrula"} loading={loading} size={"small"} icon={"pi pi-check"}
                                                    onClick={otpVerify}/>}
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}

                        <motion.footer 
                            variants={fadeIn}
                            className="py-16 text-center text-sm text-black dark:text-white/70"
                        >
                            OLEX Films &copy; {new Date().getFullYear()} All Rights Reserved.
                        </motion.footer>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
