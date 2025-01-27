import React from 'react';

export default function LoadingSpinner() {
    return (
        <div className="flex flex-col items-center justify-center p-8 w-full">
            {/* Ana konteyner */}
            <div className="relative">
                {/* Dış halka */}
                <div
                    className="w-12 h-12 rounded-full border-4 border-green-200 dark:border-green-900 animate-pulse"></div>

                {/* Dönen iç halka */}
                <div className="absolute top-0 left-0 w-12 h-12">
                    <div
                        className="w-12 h-12 rounded-full border-4 border-t-green-500 dark:border-t-green-400 animate-spin"></div>
                </div>

                {/* Merkezdeki nokta */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-ping"></div>
                </div>
            </div>

            {/* Yükleniyor yazısı */}
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 animate-pulse">
                Yükleniyor...
            </div>
        </div>
    );
}
