import './bootstrap';
import '../css/app.css';
import "primereact/resources/themes/vela-green/theme.css";
import 'primeicons/primeicons.css';
import {createRoot} from 'react-dom/client';
import {createInertiaApp} from '@inertiajs/react';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {PrimeReactProvider, PrimeReactContext} from 'primereact/api';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({el, App, props}) {
        const root = createRoot(el);

        root.render(<><PrimeReactProvider value={{
            ripple: true
        }}>
            <App {...props} />
        </PrimeReactProvider>
        </>);
    },
    progress: {
        color: 'var(--primary-400)',
        showSpinner: true,
    }
});
