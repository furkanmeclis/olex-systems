import React from 'react';
import { motion } from 'framer-motion';
import { classNames } from 'primereact/utils';
import { Skeleton } from 'primereact/skeleton';

const ProductServiceStatusWidget = ({
    productName,
    productCode,
    startDate,
    endDate,
    progress = 75, // 0-100 arası değer
    status = 'active', // active, expired, warning
    isSkeleton = false
}) => {
    const getStatusColor = () => {
        switch (status) {
            case 'active':
                return 'from-green-500/20 to-green-500/40';
            case 'warning':
                return 'from-yellow-500/20 to-yellow-500/40';
            case 'expired':
                return 'from-red-500/20 to-red-500/40';
            default:
                return 'from-green-500/20 to-green-500/40';
        }
    };

    const progressBarVariants = {
        initial: { width: 0 },
        animate: { 
            width: `${progress}%`,
            transition: { duration: 1, ease: "easeOut" }
        }
    };

    if (isSkeleton) {
        return (
            <div className="bg-gradient-to-b from-[#2e2f31] to-[#1a1b1d] rounded-xl border border-[#373739] overflow-hidden mb-2 p-4">
                <div className="flex flex-col space-y-3">
                    <div className="flex justify-between items-center">
                        <Skeleton width="150px" height="20px" />
                        <Skeleton width="100px" height="20px" />
                    </div>
                    <Skeleton width="100%" height="8px" borderRadius="4px" />
                    <div className="flex justify-between items-center">
                        <Skeleton width="80px" height="16px" />
                        <Skeleton width="80px" height="16px" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-b from-[#2e2f31] to-[#1a1b1d] rounded-xl border border-[#373739] overflow-hidden mb-2"
        >
            <div className="p-4 space-y-3">
                {/* Başlık ve Kod */}
                <div className="flex justify-between items-center">
                    <div className="text-white font-medium">{productName}</div>
                    <div className="text-gray-400 text-sm">{productCode} - <span className='text-white'>34 AFM 44</span></div>
                </div>

                {/* Progress Bar */}
                <div className="relative h-2 bg-gray-700/30 rounded-full overflow-hidden">
                    <motion.div
                        variants={progressBarVariants}
                        initial="initial"
                        animate="animate"
                        className={classNames(
                            "absolute h-full rounded-full bg-gradient-to-r",
                            getStatusColor()
                        )}
                    />
                </div>

                {/* Tarihler */}
                <div className="flex justify-between text-xs">
                    <div className="text-gray-400">
                        Başlangıç: <span className="text-white">{startDate}</span>
                    </div>
                    <div className="text-gray-400">
                        Bitiş: <span className="text-white">{endDate}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductServiceStatusWidget;
