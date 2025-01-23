// app/page.tsx
'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Change the import

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /login when visiting localhost:3000
    router.push('/login');
  }, [router]);

  return null; // Nothing will be rendered here, as it redirects immediately
};

export default Home;
