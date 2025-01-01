'use client'; // Marking the component as a client component

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import Head from 'next/head';
import GalleryHeader from './GalleryHeader';
import GalleryGrid from './GalleryGrid';
import ShareModal from './ShareModal';
import { useRouter } from 'next/router'; // Import useRouter from next/router

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

  // Initialize useRouter here (client-side)
  const router = useRouter();

  // Function to navigate to the login page
  const navigateToLogin = () => {
    router.push('/LoginPage'); // Navigate to the login page
  };

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
        {/* Pass navigateToLogin as a prop to GalleryHeader */}
        <GalleryHeader openModal={() => setIsOpen(true)} navigateToLogin={navigateToLogin} />
        <GalleryGrid images={images} />
      </div>

      <ShareModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </>
  );
}
