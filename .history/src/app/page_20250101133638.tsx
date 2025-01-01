import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import Head from 'next/head';
import GalleryHeader from './components/GalleryHeader';

import ShareModal from './components/ShareModal';
import { useRouter } from 'next/router';
import BlurImage from './components/BlurImage'; // Import the BlurImage component

type Image = {
  id: number;
  href: string;
  imageSrc: string;
  title: string;
  description: string;
};

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<Image[]>([]);

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL and Key must be set in your environment variables.');
  }

  const supabase = createClient(supabaseUrl, supabaseKey);


  useEffect(() => {
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

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>ArtyFiji</title>
        <meta name="description" content="Discover beautiful artwork and creative expressions on ArtyFiji." />
      </Head>

      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        
        {/* Example usage of BlurImage */}
        {images.map((image) => (
          <BlurImage key={image.id} image={image} />
        ))}
        
      </div>

      <ShareModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </>
  );
}
