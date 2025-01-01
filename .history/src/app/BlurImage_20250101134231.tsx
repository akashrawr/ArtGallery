import React, { useState } from 'react';
import NextImage from 'next/image';  // Renamed Image to NextImage
import cn from 'classnames';

type ImageType = {
  id: number;
  href: string;
  imageSrc: string;
  title: string;
  description: string;
};

const BlurImage = ({ image }: { image: ImageType }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <a href={image.href} className="group" translate="no">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <NextImage
          alt={image.description}
          src={image.imageSrc}
          layout="fill"
          objectFit="cover"
          className={cn(
            'duration-700 ease-in-out group-hover:opacity-75',
            isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700 notranslate">{image.description}</h3>
      <p className="mt-1 text-lg font-medium text-black-1000 font-bold notranslate">{image.title}</p>
    </a>
  );
};

export default BlurImage;
