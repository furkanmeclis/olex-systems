export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-[var(--primary-600)] shadow-sm focus:ring-[var(--primary-500)] dark:focus:ring-[var(--primary-600)] dark:focus:ring-offset-gray-800 ' +
                className
            }
        />
    );
}
