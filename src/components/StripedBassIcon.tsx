import React from 'react';

interface StripedBassIconProps {
  className?: string;
  color?: string;
}

export const StripedBassIcon: React.FC<StripedBassIconProps> = ({
  className = 'w-32 h-auto',
}) => {
  return (
    <img
      src="/images/0.png"
      alt="Cape Cod Striped Bass illustration"
      className={`${className} object-contain`}
      referrerPolicy="no-referrer"
    />
  );
};

