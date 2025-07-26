import React from 'react';

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'subtitle';
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const Typography: React.FC<TypographyProps> = ({ 
  variant = 'body', 
  children, 
  className = '', 
  as 
}) => {
  const variants = {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-teal leading-tight',
    h2: 'text-3xl md:text-4xl lg:text-5xl font-playfair font-semibold text-teal leading-tight',
    h3: 'text-2xl md:text-3xl font-cinzel font-semibold text-teal leading-snug',
    h4: 'text-xl md:text-2xl font-cinzel font-medium text-teal leading-snug',
    h5: 'text-lg md:text-xl font-montserrat font-semibold text-teal leading-normal',
    h6: 'text-base md:text-lg font-montserrat font-semibold text-teal leading-normal',
    body: 'text-base font-montserrat text-teal leading-relaxed',
    caption: 'text-sm font-montserrat text-teal/70 leading-normal',
    subtitle: 'text-lg md:text-xl font-montserrat font-light text-teal/80 leading-relaxed'
  };
  
  const defaultElements = {
    h1: 'h1',
    h2: 'h2', 
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body: 'p',
    caption: 'span',
    subtitle: 'p'
  };
  
  const Component = as || (defaultElements[variant] as React.ElementType) || 'p';
  const classes = `${variants[variant]} ${className}`;
  
  return React.createElement(Component, { className: classes }, children);
};

export default Typography;