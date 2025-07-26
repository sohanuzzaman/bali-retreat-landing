import React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  as?: React.ElementType;
}

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '', 
  size = 'lg',
  as = 'div'
}) => {
  const sizes = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl', 
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  };
  
  const baseClasses = 'mx-auto px-4 sm:px-6 lg:px-8';
  const classes = `${baseClasses} ${sizes[size]} ${className}`;
  
  const Component = as;
  
  return React.createElement(Component, { className: classes }, children);
};

export default Container;