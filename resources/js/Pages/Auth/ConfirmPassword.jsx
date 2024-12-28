import { Head, router } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ConfirmPasswordSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Şifre en az 6 karakter olmalıdır')
        .required('Şifre zorunludur'),
});

export default function ConfirmPassword() {
    const handleSubmit = (values, { setSubmitting }) => {
        router.post(route('password.confirm'), values, {
            onFinish: () => setSubmitting(false)
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#003300] via-[#004d00] to-[#001a00] flex items-center justify-center p-4">
            <Head title="Şifre Onaylama" />
            
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
                            <p className="text-green-300/80 text-sm">Cam Filmi & Seramik Kaplama</p>
                        </div>
                    </motion.div>

                    <div className="mb-6 text-sm text-green-300/90 text-center">
                        Bu, uygulamanın güvenli bir alanıdır. Devam etmeden önce lütfen şifrenizi doğrulayın.
                    </div>

                    <Formik
                        initialValues={{
                            password: '',
                        }}
                        validationSchema={ConfirmPasswordSchema}
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
                                            type="password"
                                            name="password"
                                            className={`w-full bg-green-900/30 border ${errors.password && touched.password ? 'border-red-500' : 'border-green-700'} text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 placeholder-green-300`}
                                            placeholder="Şifreniz"
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                            <i className={`pi pi-lock ${errors.password && touched.password ? 'text-red-400' : 'text-green-400'}`}></i>
                                        </div>
                                    </div>
                                    {errors.password && touched.password && (
                                        <div className="mt-1 text-sm text-red-500">{errors.password}</div>
                                    )}
                                </motion.div>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-green-600 text-white rounded-lg py-3 px-4 font-medium hover:bg-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-900 transition-all duration-300 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        <span className="relative z-10">
                                            {isSubmitting ? 'Onaylanıyor...' : 'Onayla'}
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
