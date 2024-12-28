import React from 'react';
import { motion } from 'framer-motion';

const CustomButton = ({ 
    label, 
    icon, 
    onClick, 
    className = "",
    color = "blue" // default color
}) => {
    const baseClasses = `
        flex items-center justify-center gap-2 
        px-4 py-2 
        rounded-lg 
        font-semibold 
        text-white 
        shadow-lg 
        transition-all duration-300
        hover:shadow-xl
        active:scale-95
        disabled:opacity-50 
        disabled:cursor-not-allowed
    `;

    const colorVariants = {
        blue: "bg-blue-500 hover:bg-blue-600",
        green: "bg-green-500 hover:bg-green-600",
        yellow: "bg-yellow-500 hover:bg-yellow-600",
        purple: "bg-purple-500 hover:bg-purple-600",
        red: "bg-red-500 hover:bg-red-600",
        pink: "bg-pink-500 hover:bg-pink-600"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseClasses} ${colorVariants[color]} ${className}`}
            onClick={onClick}
        >
            {icon && <i className={`pi ${icon} text-lg`}></i>}
            {label}
        </motion.button>
    );
};

export default CustomButton; 