import React from 'react';

interface CoastalStripeBorderProps {
  className?: string;
  orientation?: 'vertical' | 'horizontal';
  width?: string;
}

export const CoastalStripeBorder: React.FC<CoastalStripeBorderProps> = ({
  className = '',
  orientation = 'vertical',
  width = 'w-8 sm:w-14 md:w-20',
}) => {
  if (orientation === 'horizontal') {
    return (
      <div className={`w-full h-2.5 sm:h-3.5 overflow-hidden relative ${className}`} aria-hidden="true">
        <img
          src="/images/watercolor_stripes.png"
          alt=""
          className="w-full h-full object-cover object-center select-none opacity-90"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative h-full overflow-hidden ${width} ${className}`}
      aria-hidden="true"
    >
      <img
        src="/images/watercolor_stripes.png"
        alt="Watercolor coastal blue stripes"
        className="w-full h-full object-cover object-left-top select-none"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

