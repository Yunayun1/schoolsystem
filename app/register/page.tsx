'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './register.module.css'; // Add your CSS styles
import Link from 'next/link';

const RegisterPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensures that the DOM manipulations only happen on the client side
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevents rendering during SSR, ensures the component is mounted on the client side first
  }
  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image
            src="/logo.png" // Replace with your logo path
            alt="University Logo"
            width={120}
            height={120}
          />
        </div>
        <h1>សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ</h1>
        <h2>Royal University Of Phnom Penh</h2>
        <div className={styles.welcomeText}>
          <h3>Welcome student login form.</h3>
          <p>
            The Royal University of Phnom Penh (RUPP), established in 1960,
            has continuously evolved to meet the needs of its students and the demands of modern education.
            As part of this evolution, RUPP has introduced a new school management platform designed to enhance academic transparency and accessibility.
            This innovative system enables students to conveniently check their exam scores and track their GPA,
            fostering a more streamlined approach to academic management. These advancements reflect the university&apos;s commitment to leveraging technology to support student success and achieve its vision for continued growth and development.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.right}>
        <h1>Register</h1>
        <p>Are you registering as a student or a teacher?</p>
        <div className={styles.buttonContainer}>
          {/* Student Button */}
          <Link href="/student">
            <button className={styles.button}>Student</button>
          </Link>

          {/* Teacher Button */}
          <Link href="/teacher">
            <button className={styles.button}>Teacher</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
