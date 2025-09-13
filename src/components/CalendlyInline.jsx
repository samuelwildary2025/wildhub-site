import React from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyInline = ({ url = 'https://calendly.com/samuelwildary/30min', height = '450px' }) => {
  return (
    <div className="w-full">
      <InlineWidget 
        url={url}
        styles={{
          height: height,
          minWidth: '320px'
        }}
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: true,
          hideLandingPageDetails: true,
          primaryColor: '3b82f6', // Azul do Tailwind
          textColor: '1f2937' // Cinza escuro do Tailwind
        }}
      />
    </div>
  );
};

export default CalendlyInline;