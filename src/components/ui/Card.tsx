import React from 'react';
import { motion } from 'framer-motion';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined' | 'lemurian';
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = true 
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  
  const variants = {
    default: 'bg-sand shadow-md',
    elevated: 'bg-sand shadow-lg hover:shadow-xl',
    outlined: 'bg-sand border-2 border-lilac/30 hover:border-aquamarine/50',
    lemurian: 'bg-gradient-to-br from-sand to-lilac/20 shadow-lg lemurian-pattern'
  };
  
  const hoverClasses = hover ? 'hover:scale-[1.02] hover:shadow-xl' : '';
  const classes = `${baseClasses} ${variants[variant]} ${hoverClasses} ${className}`;
  
  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;