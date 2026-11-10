import React from 'react';

// Exact image paths from user upload organized by ordered name
const ROW_1_IMAGE = '/assets/aistudio/1_630e4a4f.jpeg';

const ROW_2_IMAGES = [
  '/assets/aistudio/2_5dcc9120.jpeg',
  '/assets/aistudio/3_722f77f0.jpeg',
  '/assets/aistudio/4_35673ce7.jpeg',
];

const ROW_3_IMAGES = [
  '/assets/aistudio/5_e193d011.jpeg',
  '/assets/aistudio/6_9a26c456.jpeg',
  '/assets/aistudio/7_afcdcdde.jpeg',
];

const ROW_4_IMAGES = [
  '/assets/aistudio/8_e3054e3c.jpeg',
  '/assets/aistudio/9_ecfff497.jpeg',
  '/assets/aistudio/10_d183c094.jpeg',
];

const ROW_5_IMAGE = '/assets/aistudio/11_4f4a954c.jpeg';

export const PhotosView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 py-6 sm:py-10 space-y-4 sm:space-y-6 md:space-y-8">
      {/* Page Title — NO SUBTITLES */}
      <div className="text-center">
        <h1 className="font-serif text-3xl sm:text-5xl text-[#24394d] font-normal tracking-tight">
          Photo Gallery
        </h1>
      </div>

      {/* Row 1: Image '1' (Single Landscape) */}
      <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-xs border border-[#ded5c1]/80 bg-[#f7f4ee]">
        <img
          src={ROW_1_IMAGE}
          alt="Noah and Abby photo 1"
          className="w-full aspect-[3/2] object-cover block select-none pointer-events-none"
          loading="eager"
        />
      </div>

      {/* Row 2: Images '2', '3', '4' (3 Columns) */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
        {ROW_2_IMAGES.map((src, idx) => (
          <div
            key={`row-2-${idx}`}
            className="overflow-hidden rounded-xl sm:rounded-2xl shadow-xs border border-[#ded5c1]/80 bg-[#f7f4ee]"
          >
            <img
              src={src}
              alt={`Noah and Abby photo ${idx + 2}`}
              className="w-full aspect-[2/3] object-cover block select-none pointer-events-none"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Row 3: Images '5', '6', '7' (3 Columns) */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
        {ROW_3_IMAGES.map((src, idx) => (
          <div
            key={`row-3-${idx}`}
            className="overflow-hidden rounded-xl sm:rounded-2xl shadow-xs border border-[#ded5c1]/80 bg-[#f7f4ee]"
          >
            <img
              src={src}
              alt={`Noah and Abby photo ${idx + 5}`}
              className="w-full aspect-[2/3] object-cover block select-none pointer-events-none"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Row 4: Images '8', '9', '10' (3 Columns) */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
        {ROW_4_IMAGES.map((src, idx) => (
          <div
            key={`row-4-${idx}`}
            className="overflow-hidden rounded-xl sm:rounded-2xl shadow-xs border border-[#ded5c1]/80 bg-[#f7f4ee]"
          >
            <img
              src={src}
              alt={`Noah and Abby photo ${idx + 8}`}
              className="w-full aspect-[2/3] object-cover block select-none pointer-events-none"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Row 5: Image '11' (Single Landscape) */}
      <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-xs border border-[#ded5c1]/80 bg-[#f7f4ee]">
        <img
          src={ROW_5_IMAGE}
          alt="Noah and Abby photo 11"
          className="w-full aspect-[3/2] object-cover block select-none pointer-events-none"
          loading="lazy"
        />
      </div>
    </div>
  );
};
