import {useEffect, useRef, useState} from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import {Link, usePage} from '@inertiajs/react';
import {Tag} from 'primereact/tag';
import {Toast} from "primereact/toast";

export default function Authenticated({user, header, children}) {
    const toast = useRef(null);
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
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
                return <>
                    <Tag severity="danger" value="Super"/>
                </>;
            case 'admin':
                return <>
                    <Tag severity="warning" value="Admin"/>
                </>
            case 'worker':
                return <>
                    <Tag severity="success" value="Worker"/>
                </>
            default:
                return <>
                    <Tag severity="help" value="Central"/>
                </>
        }
    }
    const routes = [{
        name: 'Anasayfa',
        href: route('dashboard'),
        active: route().current('dashboard'),
        roles: ['super', 'central', 'central_salesman', 'central_contact', 'central_worker', 'admin']
    }, {
        name: 'Merkez Çalışanları',
        href: route('super.central.index'),
        active: route().current('super.central*'),
        roles: ['super']
    }, {
        name: 'Bayiler', href: route('super.dealers.index'), active: route().current('super.dealers*'), roles: ['super']
    }, {
        name: 'Çalışanlar',
        href: route('super.workers.index'),
        active: route().current('super.workers*'),
        roles: ['super']
    }, {
        name: 'Ürünler',
        href: route('super.products.index'),
        active: route().current('super.products*'),
        roles: ['super']
    }, {
        name: 'Siparişler',
        href: route('super.orders.index'),
        active: route().current('super.orders*'),
        roles: ['super']
    }, {
        name: 'Stok Yönetimi',
        href: route('super.stock-management.index'),
        active: route().current('super.stock-management*'),
        roles: ['super']
    }, {
        name: 'Müşteriler',
        href: route('super.customers.index'),
        active: route().current('super.customers*'),
        roles: ['super']
    }, //Central Routes
        {
            name: 'Bayiler',
            href: route('central.dealers.index'),
            active: route().current('central.dealers*'),
            roles: ['central', 'central_salesman', 'central_contact']
        }, {
            name: 'Çalışanlar',
            href: route('central.workers.index'),
            active: route().current('central.workers*'),
            roles: ['central', 'central_salesman', 'central_contact']
        }, {
            name: 'Ürünler',
            href: route('central.products.index'),
            active: route().current('central.products*'),
            roles: ['central', 'central_salesman', 'central_contact', 'central_worker']
        }, {
            name: 'Siparişler',
            href: route('central.orders.index'),
            active: route().current('central.orders*'),
            roles: ['central', 'central_salesman', 'central_contact', 'central_worker']
        }, {
            name: 'Stok Yönetimi',
            href: route('central.stock-management.index'),
            active: route().current('central.stock-management*'),
            roles: ['central', 'central_salesman', 'central_contact', 'central_worker']
        }, {
            name: 'Müşteriler',
            href: route('central.customers.index'),
            active: route().current('central.customers*'),
            roles: ['central', 'central_salesman', 'central_contact']
        }, //Dealer Routes
        {
            name: "Siparişler", href: route('dealer.orders'), active: route().current('dealer.orders'), roles: ['admin']
        }, {
            name: 'Hizmetler',
            href: route('dealer.services'),
            active: route().current('dealer.services'),
            roles: ['admin']
        }, {
            name: 'Müşteriler',
            href: route('dealer.customers'),
            active: route().current('dealer.customers'),
            roles: ['admin']
        }, {
            name: 'Çalışanlar',
            href: route('dealer.workers.index'),
            active: route().current('dealer.workers*'),
            roles: ['admin']
        }, {
            name: 'Stok Kayıtları',
            href: route('dealer.stockRecords'),
            active: route().current('dealer.stockRecords'),
            roles: ['admin']
        }, {
            name: 'Bayi Ayarları',
            href: route('dealer.settings'),
            active: route().current('dealer.settings'),
            roles: ['admin']
        }, //Worker Routes
        {
            name: 'Anasayfa', href: route('worker.index'), active: route().current('worker.index'), roles: ['worker']
        }, {
            name: 'Müşteriler',
            href: route('worker.customers.index'),
            active: route().current('worker.customers*'),
            roles: ['worker']
        }, {
            name: 'Hizmetler',
            href: route('worker.services.index'),
            active: route().current('worker.services*'),
            roles: ['worker']
        },];
    return (<div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Toast ref={toast}/>
            <nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href={route("dashboard")}>
                                    <ApplicationLogo
                                        className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200"/>
                                </Link>
                            </div>

                            <div className="hidden space-x-2 sm:-my-px sm:ms-10 sm:flex">
                                {routes.map(({name, href, active, roles}, index) => {
                                    if (roles.includes(user.role) || roles.includes("*")) {
                                        return (<NavLink key={index} href={href} active={active}>
                                            {name}
                                        </NavLink>)
                                    } else {
                                        return null;
                                    }
                                })}
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                            <div className="ms-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                            >
                                               <span>
                                                    {badgeRole()} {user.name}
                                               </span>

                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profil</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Çıkış Yap
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        {routes.map(({name, href, active, roles}, index) => {
                            if (roles.includes(user.role) || roles.includes("*")) {
                                return (<ResponsiveNavLink key={index} href={href} active={active}>
                                    {name}
                                </ResponsiveNavLink>)
                            } else {
                                return null;
                            }
                        })}
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
                        <div className="px-4">
                            <div
                                className="font-medium text-base text-gray-800 dark:text-gray-200">{badgeRole()} {user.name}</div>
                            <div className="font-medium text-sm text-gray-500">{user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>Profil</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Çıkış Yap
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (<header className="bg-white dark:bg-gray-800 shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>)}

            <main>{children}</main>
        </div>);
}
