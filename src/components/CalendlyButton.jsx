import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CalendlyButton = ({ children, className, size = "lg", variant = "default", icon: Icon }) => {
  return (
    <Button 
      size={size} 
      variant={variant}
      className={className}
      asChild
    >
      <Link to="/agendar">
        {children}
        {Icon && <Icon className="ml-2 w-4 h-4" />}
      </Link>
    </Button>
  );
};

export default CalendlyButton;