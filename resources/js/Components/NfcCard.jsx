import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const NfcCard = ({ serviceNumber, url }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);
    const controls = useAnimation();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    // Mouse pozisyonuna göre kart rotasyonunu hesapla
    const handleMouseMove = (e) => {
        if (!cardRef.current || !isHovered) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Mouse pozisyonunu kartın merkezine göre normalize et (-1 ile 1 arasında)
        const normalizedX = (e.clientX - centerX) / (rect.width / 2);
        const normalizedY = (e.clientY - centerY) / (rect.height / 2);

        // Rotasyon açılarını hesapla (max 15 derece)
        setRotateY(normalizedX * 15);
        setRotateX(-normalizedY * 15); // Ters yönde rotasyon için eksi
        setMousePosition({ x: e.clientX - centerX, y: e.clientY - centerY });
    };

    // Border animasyonu için sequence
    useEffect(() => {
        const animateBorder = async () => {
            await controls.start({
                pathLength: 1,
                transition: { duration: 2, ease: "easeInOut" }
            });
        };
        animateBorder();
    }, [controls]);

    // Mouse leave olduğunda kartı sıfırla
    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={cardRef}
            className="relative w-[85.60mm] h-[53.98mm] rounded-2xl overflow-hidden cursor-pointer group"
            style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                transformStyle: 'preserve-3d',
                perspective: '1000px'
            }}
            animate={{
                rotateX: rotateX,
                rotateY: rotateY,
                transition: { type: "spring", stiffness: 300, damping: 30 }
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
        >
            {/* NFC Waves Animation */}
            <motion.div
                className="absolute top-4 right-4 w-6 h-6"
                style={{ transform: 'translateZ(20px)' }}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <svg viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                        fill="rgba(218, 165, 32, 0.3)"
                    />
                    <path
                        d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
                        fill="rgba(218, 165, 32, 0.5)"
                    />
                </svg>
            </motion.div>

            {/* Animasyonlu Border */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ 
                    filter: 'drop-shadow(0 0 10px rgba(218, 165, 32, 0.3))',
                    transform: 'translateZ(10px)'
                }}
            >
                <motion.rect
                    x="4"
                    y="4"
                    width="calc(100% - 8px)"
                    height="calc(100% - 8px)"
                    rx="16"
                    stroke="rgba(218, 165, 32, 0.8)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={controls}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                />
            </svg>

            {/* Logo ve Service Number */}
            <div 
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ transform: 'translateZ(30px)' }}
            >
                <motion.img
                    src="/uploads/olex-logo-yatay.svg"
                    alt="OLEX®"
                    className="w-32 mb-6"
                    style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
                    animate={{
                        scale: isHovered ? 1.05 : 1,
                        transition: { duration: 0.3 }
                    }}
                />
                <motion.div
                    className="text-[#DAA520] text-lg font-medium tracking-wider"
                    style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                    animate={{
                        scale: isHovered ? 1.1 : 1,
                        transition: { duration: 0.3 }
                    }}
                >
                    {serviceNumber}
                </motion.div>
            </div>

            {/* Hologram Effect */}
            <div 
                className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"
                style={{ transform: 'translateZ(5px)' }}
            />
            
            {/* Shine Effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                style={{ transform: 'translateZ(15px)' }}
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            />

            {/* Mouse gradient effect */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(218, 165, 32, 0.15) 0%, transparent 50%)`,
                    transform: 'translateZ(25px)'
                }}
            />
        </motion.div>
    );
};

export default NfcCard;
