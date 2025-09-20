
import React from 'react';

export const TrophyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M16.5 3A3 3 0 0013.5 6H12v2.25c.341.104.653.26.938.465a.75.75 0 01-1.06 1.06A4.5 4.5 0 0010.5 9V6H7.5A3 3 0 004.5 3H3a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V6h.75a1.5 1.5 0 011.5 1.5v3.313A6.001 6.001 0 009 15.313V21a.75.75 0 00.75.75h4.5a.75.75 0 00.75-.75v-5.687a6.001 6.001 0 00-1.5-3.375V7.5A1.5 1.5 0 0116.5 6h.75v.75a.75.75 0 00.75.75h1.5a.75.75 0 00.75-.75v-3A.75.75 0 0021 3h-1.5a3 3 0 00-3-3zm-3.003 9.003a4.5 4.5 0 004.496-4.256A1.5 1.5 0 0116.5 6h-9a1.5 1.5 0 01-1.493 1.747A4.5 4.5 0 0010.5 12v.003z"
      clipRule="evenodd"
    />
  </svg>
);
