import React from 'react';
import { motion } from 'framer-motion';
import checkSvg from '../assets/kontrol-randevusu.svg';
import { classNames } from 'primereact/utils';
import { Skeleton } from 'primereact/skeleton';
const VehicleCard = ({
    brandLogo = "https://www.carlogos.org/car-logos/bmw-logo-2020-blue-white.png",
    serieName,
    modelName,
    modelYear,
    carPlate,
    serviceDayMonth,
    serviceYear,
    serviceUrl,
    isSkeleton = false
}) => {
    return (
        <>
            {isSkeleton && <div className={classNames('bg-gradient-to-b from-[#2e2f31] to-[#1a1b1d] rounded-xl border border-[#373739] overflow-hidden mb-2',{
                "hidden": !isSkeleton
            })}>
                <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                    {/* Brand Logo */}
                    <div className="w-12 h-12 flex-shrink-0">
                        <Skeleton shape="square" size="3rem" className="mr-2" />
                    </div>

                    {/* Vehicle Info */}
                    <div>
                        <div className="flex items-baseline">
                            <Skeleton className="mb-2" width='10rem' />
                        </div>
                        <div className="flex items-center space-x-1">
                            <Skeleton shape="text" className="w-full" width='2rem' />
                            <span className="text-gray-400">|</span>
                            <Skeleton shape="text" className="w-full" width='2rem'  />
                            <span className="text-gray-400">|</span>
                            <Skeleton shape="text" className="w-full" width='4rem'  />
                        </div>
                    </div>
                </div>
                {/* Service Date & Button */}
                <div className="flex items-center space-x-3">

                <span className="h-10 border border-green-900/30"></span>
                    <div className="text-right">
                        <div className="text-gray-400 text-sm mb-1">
                            <Skeleton shape="text" className="text-gray-400 text-sm" width='2rem'  />
                        </div>
                        <div className="text-gray-400 font-medium text-sm">
                            <Skeleton shape="text" className="text-gray-400 font-medium text-sm" width='2rem'  />
                        </div>
                    </div>
                    <a
                        href={"#"}
                        className="bg-green-800/30 w-10 h-10 hover:bg-green-800/50 text-white rounded-lg border border-green-700/30 transition-colors duration-200 flex justify-center items-center space-x-2"
                    >
                        <img src={checkSvg} alt="Check" className="h-5 w-5" />
                    </a>
                </div>
            </div>
            </div>}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className={classNames("bg-gradient-to-b from-[#2e2f31] to-[#1a1b1d] rounded-xl border border-[#373739] overflow-hidden mb-2",{
                "hidden": isSkeleton
            })}
        >
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                    {/* Brand Logo */}
                    <div className="w-12 h-12 flex-shrink-0">
                        <img
                            src={brandLogo}
                            alt="Brand Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Vehicle Info */}
                    <div>
                        <div className="flex items-baseline">
                            <h3 className="text-white font-semibold">{serieName}</h3>
                        </div>
                        <div className="flex items-center space-x-1 ">
                            <span className="text-gray-400 text-xs">{modelYear}</span>
                            <span className="text-gray-400">|</span>
                            <span className="text-gray-400 text-xs">{modelName}</span>
                            <span className="text-gray-400">|</span>
                            <span className="text-gray-200 font-medium text-xs">{carPlate}</span>
                        </div>
                    </div>
                </div>
                {/* Service Date & Button */}
                <div className="flex items-center space-x-3">

                <span className="h-10 border border-green-900/30"></span>
                    <div className="text-right">
                        <div className="text-gray-400 text-sm">{serviceDayMonth}</div>
                        <div className="text-gray-400 font-medium text-sm">
                            {serviceYear}
                        </div>
                    </div>
                    <a
                        href={serviceUrl}
                        target="_blank"
                        className="bg-green-800/30 w-10 h-10 hover:bg-green-800/50 text-white rounded-lg border border-green-700/30 transition-colors duration-200 flex justify-center items-center space-x-2"
                    >
                        <img src={checkSvg} alt="Check" className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </motion.div>
        </>
    );
};

export default VehicleCard;
