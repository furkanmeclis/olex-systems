import { Head, Link, router } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .email('Geçerli bir email adresi giriniz')
        .required('Email adresi zorunludur'),
});

export default function ForgotPassword({ status }) {
    const handleSubmit = (values, { setSubmitting }) => {
        router.post(route('password.email'), values, {
            onFinish: () => setSubmitting(false)
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#003300] via-[#004d00] to-[#001a00] flex items-center justify-center p-4">
            <Head title="Şifremi Unuttum" />
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <div className="bg-[#002200]/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-[#004400]/50">
                    <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-center mb-8"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                            className="w-48 h-auto mx-auto mb-6"
                        >
                            <img 
                                src="https://olexfilms.app/uploads/olex-logo-yatay.svg" 
                                alt="Olex Films Logo" 
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                        
                        <div className="space-y-1">
                            <p className="text-green-300 font-medium">Araç Koruma Filmi (PPF)</p>
                            <p className="text-green-300/80 text-sm">Cam Filmi</p>
                        </div>
                    </motion.div>

                    <div className="mb-6 text-sm text-green-300/90 text-center">
                        Parolanızı mı unuttunuz? Sorun değil. E-posta adresinizi girin, size şifre sıfırlama bağlantısı gönderelim.
                    </div>

                    {status && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mb-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center"
                        >
                            Şifre sıfırlama e-postası gönderildi.
                        </motion.div>
                    )}

                    <Formik
                        initialValues={{
                            email: '',
                        }}
                        validationSchema={ForgotPasswordSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched, isSubmitting }) => (
                            <Form className="space-y-6">
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="relative">
                                        <Field
                                            type="email"
                                            name="email"
                                            className={`w-full bg-green-900/30 border ${errors.email && touched.email ? 'border-red-500' : 'border-green-700'} text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 placeholder-green-300`}
                                            placeholder="Email Adresiniz"
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                            <i className={`pi pi-envelope ${errors.email && touched.email ? 'text-red-400' : 'text-green-400'}`}></i>
                                        </div>
                                    </div>
                                    {errors.email && touched.email && (
                                        <div className="mt-1 text-sm text-red-500">{errors.email}</div>
                                    )}
                                </motion.div>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex items-center justify-between gap-4"
                                >
                                    <Link
                                        href={route('login')}
                                        className="text-sm text-green-400 hover:text-green-300 transition-colors duration-300"
                                    >
                                        Giriş Sayfasına Dön
                                    </Link>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-green-600 text-white rounded-lg py-3 px-6 font-medium hover:bg-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-900 transition-all duration-300 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        <span className="relative z-10">
                                            {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                                        </span>
                                        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-green-500"></div>
                                    </button>
                                </motion.div>
                            </Form>
                        )}
                    </Formik>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-center mt-6 text-green-300 text-sm"
                >
                    &copy; {new Date().getFullYear()} Olex Systems. Tüm hakları saklıdır.
                </motion.div>
            </motion.div>
        </div>
    );
}
