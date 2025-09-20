import React from 'react';

export const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c.414 0 .78.25.936.633l2.144 5.18 5.543.403a.968.968 0 01.546 1.7l-4.21 3.74 1.297 5.42a.969.969 0 01-1.45 1.05L12 17.772l-4.806 2.504a.969.969 0 01-1.45-1.05l1.297-5.42-4.21-3.74a.968.968 0 01.546-1.7l5.543-.403 2.144-5.18A.968.968 0 0112 2.25z"
      clipRule="evenodd"
    />
  </svg>
);
