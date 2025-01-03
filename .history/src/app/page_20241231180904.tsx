// Mark this component as a client component
'use client';

import Image from "next/image";
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import cn from 'classnames';

// Create the Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_KEY || ''
);

// Type definition for image data
type Image = {
  id: number;
  href: string;
  imageSrc: string;
  name: string;
  username: string;
}

// Gallery component (Server Component)
export default async function Gallery() {
  // Fetch images from Supabase
  const { data } = await supabase
    .from('images')  // Your Supabase table name
    .select('*')
    .order('id');  // Adjust the query to fit your needs

  // Return the gallery view
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {data?.map((image: Image) => (
          <BlurImage key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

// BlurImage component (Client Component)
function BlurImage({ image }: { image: Image }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <a href={image.href} className="group">
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
        <Image 
          src={image.imageSrc}
          alt={image.name} 
          fill
          objectFit="cover"
          className={cn(
            'group-hover:opacity-75 duration-700 ease-in-out',
            isLoading 
              ? 'grayscale blur-2xl scale-110'
              : 'grayscale-0 blur-0 scale-100'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{image.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">@{image.username}</p>
    </a>
  );
}
