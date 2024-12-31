'use client'; // This is a client component

import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Image from 'next/image';
import cn from 'classnames';

// Define your Image type
type Image = {
  id: number;
  href: string;
  imageSrc: string;
  name: string;
  username: string;
};

// Fetch the data directly in the component (from Supabase)
export default function Gallery() {
  // Supabase URL and Key from environment variables
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL and Key must be set in your environment variables.');
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  // Fetch the images data from Supabase
  const [images, setImages] = useState<Image[]>([]);
  const fetchData = async () => {
    const { data, error } = await supabase
      .from('images') // Assuming 'images' is the table name
      .select('*')
      .order('id');
    
    if (error) {
      console.error(error);
    } else {
      setImages(data || []);
    }
  };

  // Fetch data when the component mounts
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {images.map((image) => (
          <BlurImage key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

function BlurImage({ image }: { image: Image }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <a href={image.href} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt={image.name}
          src={image.imageSrc}
          layout="fill"
          objectFit="cover"
          className={cn(
            'duration-700 ease-in-out group-hover:opacity-75',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{image.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{image.username}</p>
    </a>
  );
}
