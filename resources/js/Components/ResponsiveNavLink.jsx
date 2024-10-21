import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${
                active
                    ? 'border-[var(--primary-400)] dark:border-[var(--primary-600)] text-[var(--primary-700)] dark:text-[var(--primary-300)] bg-[var(--primary-50)] dark:bg-[var(--primary-900)] focus:text-[var(--primary-800)] dark:focus:text-[var(--primary-200)] focus:bg-[var(--primary-100)] dark:focus:bg-[var(--primary-900)] focus:border-[var(--primary-700)] dark:focus:border-[var(--primary-300)]'
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600'
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
