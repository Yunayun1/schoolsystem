'use client';

import { useRouter } from 'next/navigation';
import { doc, setDoc } from "firebase/firestore"; 
import Image from 'next/image';
import styles from './teacher.module.css';
import React, { FC ,useState} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { auth,db } from "../../lib/firebase";

const TeacherRegister: FC = () => {
  
  const [error, setError] = useState<string | null>(null); // To handle errors
  const [success, setSuccess] = useState<string | null>(null); 
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      name: `${formData.get('Firstname')} ${formData.get('Lastname')}`,
      phoneNumber: formData.get('phone'),
      email: formData.get('email'),
      password: formData.get('password'),
      role: 'teacher',
    };

    try {
      // Step 1: Create the user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email as string,
        data.password as string
      );
  
      const user = userCredential.user;
  
      // Step 2: Save additional user data to Firestore
      await setDoc(doc(db, 'teacher', user.uid), {
        name: data.name,
        phoneNumber: data.phoneNumber,
        email: data.email,
        role: data.role,
        createdAt: new Date(),
      });
  
      // Step 3: Handle success
      setSuccess('Teacher registration successful!');
      router.push('/stuff'); // Adjust this route to match your application
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message || 'An error occurred during registration');
      } else {
        setError('An unknown error occurred.');
      }
    }
  };

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
          <h3>Welcome to the teacher login form.</h3>
          <p>
            The Royal University of Phnom Penh (RUPP), established in 1960,
            has continuously evolved to meet the needs of its students and the demands
            of modern education. As part of this evolution, RUPP has introduced a
            new school management platform designed to enhance academic transparency
            and accessibility. This innovative system enables students to conveniently
            check their exam scores and track their GPA, fostering a more streamlined
            approach to academic management. These advancements reflect the university
            commitment to leveraging technology to support student success and achieve
            its vision for continued growth and development.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.right}>
        <h2>Welcome to Teacher Registration</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3>Login Information</h3>
          <div className={styles.inputGroup}>
            <label>ឈ្មោះឡាតាំង</label>
            <div className={styles.dualInput}>
              <input
                type="text" name="Firstname" placeholder="Family Name"
                required
              />
              <input
                type="text" name="Lastname" placeholder="Last name"
                required
              />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Email (school email*)</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter your password"
            maxLength={6}
            required
             />
          </div>
          <div className={styles.buttons}>
            <Link href="/register">
              <button type="button" className={styles.backButton}>
                Back
              </button>
            </Link>
            <button type="submit" className={styles.submitButton}>
              Register
            </button>
          </div>
        </form>

        {error && <div className={styles.errorMessage}>{error}</div>}
        {success && <div className={styles.successMessage}>{success}</div>}
      </div>
    </div>
  );
};

export default TeacherRegister;