import React from 'react';

export const SSBLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="80" height="80" rx="8" fill="#029159"/>
    <g transform="translate(5, 2)">
      <path 
        d="M5 5 H 65 V 40 C 65 60, 55 70, 35 70 C 15 70, 5 60, 5 40 V 5 Z" 
        fill="white"
      />
      <g stroke="#029159" strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path d="M20 18 C 30 14, 40 14, 50 18" />
        <path d="M20 24 C 30 20, 40 20, 50 24" />
        <path d="M20 30 C 30 26, 40 26, 50 30" />
        <path d="M35 18 V 30" />
      </g>
      <g fill="#029159">
        <path d="M28 60 V 45 H 40 V 52 H 47 V 38 H 35 V 60 Z" />
        <rect x="29" y="54" width="4" height="4" fill="white" />
      </g>
    </g>
  </svg>
);
