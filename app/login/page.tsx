'use client';

import Image from 'next/image';
import styles from './login.module.css';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Add the useRouter hook
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../lib/firebase';

const LoginPage = () => {
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Initialize router
  

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setLoading(true);
  
    if (validateInput(userInput)) {
      try {
        // Step 1: Authenticate the user
        const userCredential = await signInWithEmailAndPassword(auth, userInput, password);
        const user = userCredential.user;
  
        // Step 2: Retrieve user role from Firestore
        let userDocRef;
        let role = '';
        
        if (userInput.includes('@teacher.com')) {
          // Query the teacher collection
          userDocRef = doc(db, 'teacher', user.uid);
          role = 'teacher';
        } else if (userInput === "person@admin.com") {
          // Query the admin collection
          userDocRef = doc(db, 'admin', user.uid);
          role = 'admin';
        } else {
          // Query the student collection
          userDocRef = doc(db, 'student', user.uid);
          role = 'student';
        }
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();

        console.log("User Input Email:", userInput);
        console.log("UID from Authentication:", user.uid);
        console.log("Role being checked:", role);
        console.log("Document Reference Path:", userDocRef.path);
        
        if (userData?.role === role) {
          if (role === 'student') {
            router.push('/Homepage');
          } else if (role === 'teacher') {
            router.push('/stuff');
          } else if (role === 'admin') {
            router.push('/admin');
          }
        } else {
          setError('User role mismatch. Please contact support.');
        }
      } else {
        setError('User role not found. Please contact support.');
        console.log('User document does not exist');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setLoading(false);
    }
  } else {
    setLoading(false);
    setError('Please enter a valid Student ID or Email.');
  }
};

  const validateInput = (input: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    const studentIdRegex = /^[0-9]{6,10}$/; // Example: Student ID with 6-10 digits
    return emailRegex.test(input) || studentIdRegex.test(input);
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
        <h3>Welcome back!</h3>
        <p>Please sign in to continue.</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="studentId">Student ID | Gmail</label>
          <input 
            type="text" 
            id="studentId" 
            value={userInput} 
            onChange={(e) => {
             setUserInput(e.target.value);
             setError(""); // Clear error on input change 
          }}
           placeholder="Enter your ID or Email"
           required />
           {error && <p className={styles.error}>{error}</p>}
          <label htmlFor="password">Password</label>
          <input 
          type="password" 
          id="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter your password"
          required />
          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Login"}

          </button>
        </form>
        <div className={styles.footer}>
          <a href="#">Forget your password?</a>
        </div>
        <div className={styles.register}>
          <p>
            Do you have an account? <Link href="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
