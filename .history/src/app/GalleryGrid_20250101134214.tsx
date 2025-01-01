import React from 'react';
import BlurImage from './BlurImage';

// Update the type from Image[] to ImageType[]
const GalleryGrid = ({ images }: { images: ImageType[] }) => {
  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {images.map((image) => (
        <BlurImage key={image.id} image={image} />
      ))}
    </div>
  );
};

export default GalleryGrid;
