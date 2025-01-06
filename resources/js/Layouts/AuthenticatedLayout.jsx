import {useEffect, useRef, useState} from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import {Link, usePage} from '@inertiajs/react';
import {Tag} from 'primereact/tag';
import {Toast} from "primereact/toast";
import { motion, AnimatePresence } from 'framer-motion';

export default function Authenticated({user, header, children}) {
    const toast = useRef(null);
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const {flash} = usePage().props;

    useEffect(() => {
        if (flash.success !== null) {
            toast.current.show({severity: 'success', summary: 'İşlem Başarılı', detail: flash.success});
        }
        if (flash.error !== null) {
            toast.current.show({severity: 'error', summary: 'Hata', detail: flash.error});
        }
    }, [flash]);

    const badgeRole = () => {
        switch (user.role) {
            case 'super':
                return <Tag severity="danger" value="Super"/>;
            case 'admin':
                return <Tag severity="warning" value="Admin"/>;
            case 'worker':
                return <Tag severity="success" value="Worker"/>;
            default:
                return <Tag severity="help" value="Central"/>;
        }
    }

    const routes = [{
        name: 'Anasayfa',
        href: route('dashboard'),
        active: route().current('dashboard'),
        roles: ['super', 'central', 'central_salesman', 'central_contact', 'central_worker', 'admin'],
        icon: 'pi pi-home'
    }, {
        name: 'Merkez Çalışanları',
        href: route('super.central.index'),
        active: route().current('super.central*'),
        roles: ['super'],
        icon: 'pi pi-users'
    }, {
        name: 'Bayiler',
        href: route('super.dealers.index'),
        active: route().current('super.dealers*'),
        roles: ['super'],
        icon: 'pi pi-building'
    }, {
        name: 'Çalışanlar',
        href: route('super.workers.index'),
        active: route().current('super.workers*'),
        roles: ['super'],
        icon: 'pi pi-user'
    }, {
        name: 'Ürünler',
        href: route('super.products.index'),
        active: route().current('super.products*'),
        roles: ['super'],
        icon: 'pi pi-box'
    }, {
        name: 'Siparişler',
        href: route('super.orders.index'),
        active: route().current('super.orders*'),
        roles: ['super'],
        icon: 'pi pi-shopping-cart'
    }, {
        name: 'Stok Yönetimi',
        href: route('super.stock-management.index'),
        active: route().current('super.stock-management*'),
        roles: ['super'],
        icon: 'pi pi-database'
    }, {
        name: 'Müşteriler',
        href: route('super.customers.index'),
        active: route().current('super.customers*'),
        roles: ['super'],
        icon: 'pi pi-users'
    }, {
        name: 'Bildirim & SMS',
        href: route('super.notifySms.index'),
        active: route().current('super.notifySms*'),
        roles: ['super'],
        icon: 'pi pi-bell'
    },
    // Central Routes
    {
        name: 'Bayiler',
        href: route('central.dealers.index'),
        active: route().current('central.dealers*'),
        roles: ['central', 'central_salesman', 'central_contact'],
        icon: 'pi pi-building'
    }, {
        name: 'Çalışanlar',
        href: route('central.workers.index'),
        active: route().current('central.workers*'),
        roles: ['central', 'central_salesman', 'central_contact'],
        icon: 'pi pi-users'
    }, {
        name: 'Ürünler',
        href: route('central.products.index'),
        active: route().current('central.products*'),
        roles: ['central', 'central_salesman', 'central_contact', 'central_worker'],
        icon: 'pi pi-box'
    }, {
        name: 'Siparişler',
        href: route('central.orders.index'),
        active: route().current('central.orders*'),
        roles: ['central', 'central_salesman', 'central_contact', 'central_worker'],
        icon: 'pi pi-shopping-cart'
    }, {
        name: 'Stok Yönetimi',
        href: route('central.stock-management.index'),
        active: route().current('central.stock-management*'),
        roles: ['central', 'central_salesman', 'central_contact', 'central_worker'],
        icon: 'pi pi-database'
    }, {
        name: 'Müşteriler',
        href: route('central.customers.index'),
        active: route().current('central.customers*'),
        roles: ['central', 'central_salesman', 'central_contact'],
        icon: 'pi pi-users'
    },
    // Dealer Routes
    {
        name: "Siparişler",
        href: route('dealer.orders'),
        active: route().current('dealer.orders'),
        roles: ['admin'],
        icon: 'pi pi-shopping-cart'
    }, {
        name: 'Hizmetler',
        href: route('dealer.services'),
        active: route().current('dealer.services'),
        roles: ['admin'],
        icon: 'pi pi-wrench'
    }, {
        name: 'Müşteriler',
        href: route('dealer.customers'),
        active: route().current('dealer.customers'),
        roles: ['admin'],
        icon: 'pi pi-users'
    }, {
        name: 'Çalışanlar',
        href: route('dealer.workers.index'),
        active: route().current('dealer.workers*'),
        roles: ['admin'],
        icon: 'pi pi-user'
    }, {
        name: 'Stok Kayıtları',
        href: route('dealer.stockRecords'),
        active: route().current('dealer.stockRecords'),
        roles: ['admin'],
        icon: 'pi pi-database'
    }, {
        name: 'Bayi Ayarları',
        href: route('dealer.settings'),
        active: route().current('dealer.settings'),
        roles: ['admin'],
        icon: 'pi pi-cog'
    },
    // Worker Routes
    {
        name: 'Anasayfa',
        href: route('worker.index'),
        active: route().current('worker.index'),
        roles: ['worker'],
        icon: 'pi pi-home'
    }, {
        name: 'Müşteriler',
        href: route('worker.customers.index'),
        active: route().current('worker.customers*'),
        roles: ['worker'],
        icon: 'pi pi-users'
    }, {
        name: 'Hizmetler',
        href: route('worker.services.index'),
        active: route().current('worker.services*'),
        roles: ['worker'],
        icon: 'pi pi-wrench'
    }];

    return (
        <div className="min-h-screen bg-[#1a1f2c]">
            <Toast ref={toast}/>
            
            {/* Mobile Header - Sticky */}
            <div className="lg:hidden">
                <div className="fixed top-0 left-0 right-0 z-40 bg-[#1e2533]/95 backdrop-blur-xl border-b border-slate-700/50">
                    <div className="flex items-center justify-between px-4 py-3">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 rounded-lg text-[var(--primary-500)] hover:text-white transition-colors flex items-center gap-2"
                        >
                            <i className={`pi ${isSidebarOpen ? 'pi-times' : 'pi-bars'} text-xl`}></i>
                        </button>
                        <img 
                            src="/uploads/olex-logo-yatay.svg" 
                            alt="Olex Films Logo" 
                            className="h-8 w-auto"
                        />
                        <div className="w-10"></div> {/* Dengeleme için boş div */}
                    </div>
                </div>
                <div className="h-14"></div> {/* Header'ın yüksekliği kadar boşluk */}
            </div>

            {/* Sidebar */}
            <AnimatePresence>
                {(isSidebarOpen || window.innerWidth >= 1024) && (
                    <motion.div
                        initial={{ x: -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="fixed top-0 left-0 h-full w-72 bg-[#1e2533]/95 backdrop-blur-xl border-r border-slate-700/50 z-40 overflow-y-auto lg:translate-x-0"
                    >
                        <div className="p-6">
                            <Link href={route("dashboard")} className="block mb-8">
                                <img 
                                    src="/uploads/olex-logo-yatay.svg" 
                                    alt="Olex Films Logo" 
                                    className="h-12 w-auto mx-auto"
                                />
                            </Link>

                            {/* User Info */}
                            <div className="mb-8 p-4 rounded-xl bg-[#252d3d] border border-slate-700/50">
                                <div className="flex items-center gap-3 mb-1.5">
                                    <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-medium">
                                        {user.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="text-white font-medium">{user.name}</div>
                                        <div className="text-gray-400 text-sm">{user.email}</div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="inline-flex items-center gap-1.5">
                                        {badgeRole()}
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation */}
                            <nav className="space-y-1">
                                {routes.map(({name, href, active, roles, icon}, index) => {
                                    if (roles.includes(user.role) || roles.includes("*")) {
                                        return (
                                            <Link
                                                key={index}
                                                href={href}
                                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                                                    active
                                                        ? 'bg-gradient-to-r from-[var(--primary-700)] to-[var(--primary-500)] text-white'
                                                        : 'text-gray-400 hover:bg-[#252d3d] hover:text-white'
                                                }`}
                                            >
                                                <i className={`${icon} text-lg`}></i>
                                                <span>{name}</span>
                                                {active && (
                                                    <motion.div
                                                        layoutId="activeIndicator"
                                                        className="w-1.5 h-1.5 rounded-full bg-white ml-auto"
                                                    />
                                                )}
                                            </Link>
                                        );
                                    }
                                    return null;
                                })}
                            </nav>
                            
                            {/* Footer Actions */}
                            <div className="mt-8 space-y-2">
                                <Link
                                    href={route('profile.edit')}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                                        route().current("profile.edit")
                                            ? 'bg-gradient-to-r from-[var(--primary-700)] to-[var(--primary-500)] text-white'
                                            : 'text-gray-400 hover:bg-[#252d3d] hover:text-white'
                                    }`}
                                >
                                    <i className="pi pi-user text-lg"></i>
                                    <span>Profil</span>
                                </Link>
                                <Link
                                    href={route('logout')}
                                    method="post"
                                    as="button"
                                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-red-500 hover:text-white transition-all duration-200"
                                >
                                    <i className="pi pi-sign-out text-lg"></i>
                                    <span>Çıkış Yap</span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="lg:pl-72 min-h-screen">
                {header && (
                    <header className="bg-[#1e2533]/80 backdrop-blur-sm border-b border-slate-700/50 shadow-lg">
                        <div className=" mx-auto py-6 px-4">
                            {header}
                        </div>
                    </header>
                )}
                <div className=" mx-auto py-6">
                    {children}
                </div>
            </main>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsSidebarOpen(false)}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
                />
            )}
        </div>
    );
}
