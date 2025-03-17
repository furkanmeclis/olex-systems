import React from 'react';
import { Link } from '@inertiajs/react';

export default function NewUi() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#004D2A] to-[#003D21]">
            {/* Logo Alanı */}
            <div className="p-8">
                <img src="/uploads/olex-logo-yatay.svg" alt="OLEX" className="h-14" />
            </div>

            {/* Ana İçerik */}
            <div className="px-8 py-4">
                {/* Karşılama Metni */}
                <div className="mb-12">
                    <h1 className="text-6xl font-extralight text-white mb-1">Merhaba,</h1>
                    <h2 className="text-6xl font-extralight text-white">Süleyman</h2>
                </div>

                {/* Hizmetler Başlığı */}
                <h3 className="text-[2.5rem] font-extralight text-white mb-8">Hizmetler</h3>

                {/* Araç Kartları */}
                <div className="space-y-3">
                    {/* BMW Kartı */}
                    <div className="bg-black/20 rounded-2xl p-5 flex items-center justify-between backdrop-blur-lg border border-white/5">
                        <div className="flex items-center gap-5">
                            <img src="https://www.bmw.com/favicon.ico" alt="BMW" className="w-14 h-14" />
                            <div>
                                <h4 className="text-white text-2xl font-light tracking-wide">Bmw 3 Serisi</h4>
                                <p className="text-white/60 text-sm mt-1">2024 | M340xd | 34 AFM 44</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-white/60 text-lg">5.02</p>
                            <p className="text-white/60 text-sm mb-2">2025</p>
                            <div className="flex items-center gap-2 text-[#00FF85] font-light">
                                <span>Garantiyi Görüntüle</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Porsche Kartı */}
                    <div className="bg-black/20 rounded-2xl p-5 flex items-center justify-between backdrop-blur-lg border border-white/5">
                        <div className="flex items-center gap-5">
                            <img src="https://www.porsche.com/favicon.ico" alt="Porsche" className="w-14 h-14" />
                            <div>
                                <h4 className="text-white text-2xl font-light tracking-wide">Porsche GT3</h4>
                                <p className="text-white/60 text-sm mt-1">2024 | Weissach | 34 AFM 33</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-white/60 text-lg">12.12</p>
                            <p className="text-white/60 text-sm mb-2">2024</p>
                            <div className="flex items-center gap-2 text-[#00FF85] font-light">
                                <span>Garantiyi Görüntüle</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Audi Kartı */}
                    <div className="bg-black/20 rounded-2xl p-5 flex items-center justify-between backdrop-blur-lg border border-white/5">
                        <div className="flex items-center gap-5">
                            <img src="https://www.audi.com/favicon.ico" alt="Audi" className="w-14 h-14" />
                            <div>
                                <h4 className="text-white text-2xl font-light tracking-wide">Audi A6 S-Line</h4>
                                <p className="text-white/60 text-sm mt-1">2023 | S-Line | 34 AFM 22</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-white/60 text-lg">10.12</p>
                            <p className="text-white/60 text-sm mb-2">2023</p>
                            <div className="flex items-center gap-2 text-[#00FF85] font-light">
                                <span>Garantiyi Görüntüle</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tüm Hizmetleri Görüntüle Linki */}
                <div className="text-center mt-4">
                    <Link href="#" className="text-white/50 text-sm">Tüm Hizmetleri Görüntüle</Link>
                </div>

                {/* Randevu Butonları */}
                <div className="grid grid-cols-2 gap-3 mt-10">
                    <button className="bg-black/20 backdrop-blur-lg text-white py-4 px-6 rounded-2xl flex items-center justify-center gap-3 border border-white/5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-light">Kontrol Randevusu</span>
                    </button>
                    <button className="bg-white text-black py-4 px-6 rounded-2xl flex items-center justify-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                        </svg>
                        <span className="font-light">Yeni Randevu</span>
                    </button>
                </div>

                {/* Garanti Devir Butonu */}
                <button className="w-full bg-[#00703C] text-white py-4 px-6 rounded-2xl mt-3 flex items-center justify-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="font-light">Aracınızın Garantisini Devredin</span>
                </button>

                {/* En Yakın Bayi */}
                <div className="mt-10">
                    <h3 className="text-[2.5rem] font-extralight text-white mb-4">En Yakın Olex Bayisi</h3>
                    <div className="bg-black/20 backdrop-blur-lg rounded-2xl h-48 border border-white/5">
                        {/* Harita komponenti buraya eklenecek */}
                    </div>
                </div>
            </div>
        </div>
    );
}
