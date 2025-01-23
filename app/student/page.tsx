'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './student.module.css'; // Add your CSS styles
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth ,db } from '../../lib/firebase';

const RegisterPage = () => {
  const router = useRouter();
  const [selectedCollege, setSelectedCollege] = useState('');
  const [error, setError] = useState<string | null>(null); // To handle errors
  const [success, setSuccess] = useState<string | null>(null); 



  // Define majors for each college
  const collegeMajors: Record<string, string[]> = {
    science: [
      'Department of Biology',
      'Department of Chemistry',
      'Department of Computer Science',
      'Department of Environmental Science',
      'Department of Mathematics',
      'Department of Physics',
    ],
    humanities: [
      'Department of Geography',
      'Department of History',
      'Department of International Business Management',
      'Department of Khmer Literature',
      'Department of Linguistics',
      'Department of Media and Communication',
      'Department of Philosophy',
      'Department of Psychology',
      'Department of Sociology',
      'Department of Social Work',
      'Department of Tourism',
    ],
    engineering: [
      'Automation and Supply Chain Systems Engineering',
      'Bioengineering',
      'Data Science Engineering',
      'Environmental Engineering',
      'Information Technology Engineering',
      'Telecommunication and Electronic Engineering',
    ],
    development: [
      'Community Development',
      'Economic Development',
      'Natural Resources Management and Development',
    ],
    education: [
      'Higher Education Development and Management',
      'Lifelong Learning',
    ],
  };

  // Get the filtered majors based on selected college and search term
  const filteredMajors =
    selectedCollege && collegeMajors[selectedCollege]
      ? collegeMajors[selectedCollege]

      : [];

      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
      
        const formData = new FormData(e.currentTarget);
        const data = {
          name: `${formData.get('firstname')} ${formData.get('lastname')}`,
          college: formData.get('college'),
          major: formData.get('major'),
          generation: formData.get('batch'),
          classGroup: formData.get('class'),
          shift: formData.get('shift'),
          email: formData.get('email'),
          password: formData.get('password'),
          role: 'student',
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
          await setDoc(doc(db, 'student', user.uid), {
            name: data.name,
            college: data.college,
            major: data.major,
            generation: data.generation,
            classGroup: data.classGroup,
            shift: data.shift,
            email: data.email,
            role: data.role,
            createdAt: new Date(),
          });
    
          // Step 3: Handle success
          setSuccess('Registration successful!');
          router.push('/Homepage'); // Adjust this route to match your application
        } catch (error: unknown) {
          if (error instanceof Error) {
            setError(error.message || 'An error occurred during registration');
          } else {
            setError('An unknown error occurred');
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
          <h3>Welcome to student registration form.</h3>
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
        <h2>Student Registration</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Name */}
          <div className={styles.inputGroup}>
            <label>ឈ្មោះឡាតាំង</label>
            <div className={styles.dualInput}>
              <input
                type="text"
                name="firstname"
                placeholder="Family Name"
                required
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last name"
                required
              />
            </div>
          </div>

          {/* College */}
          <div className={styles.inputGroup}>
            <label htmlFor="college">College *</label>
            <select
              id="college"
              name="college"
              value={selectedCollege}
              onChange={(e) => setSelectedCollege(e.target.value)}
              required
            >
              <option value="">Select College</option>
              <option value="science">Faculty of Science</option>
              <option value="humanities">Faculty of Social Sciences and Humanities</option>
              <option value="engineering">Faculty of Engineering</option>
              <option value="development">Faculty of Development Studies</option>
              <option value="education">Faculty of Education</option>
            </select>
          </div>

          {/* Major */}
          <div className={styles.inputGroup}>
            <label htmlFor="major">Major *</label>
            <select id="major" name="major" required>
              <option value="">Select Major</option>
              {filteredMajors.map((major, index) => (
                <option key={index} value={major}>
                  {major}
                </option>
              ))}
            </select>
          </div>

          {/* Generation */}
          <div className={styles.inputGroup}>
            <label htmlFor="batch">Generation *</label>
            <input
              type="text"
              id="batch"
              name="batch"
              placeholder="Enter Generation"
              required
            />
          </div>

          {/* Class */}
          <div className={styles.inputGroup}>
            <label htmlFor="class">Class *</label>
            <input
              type="text"
              id="class"
              name="class"
              placeholder="Enter your class (A3)"
              required
            />
          </div>

          {/* Shift */}
          <div className={styles.inputGroup}>
            <label htmlFor="shift">Shift *</label>
            <select id="shift" name="shift" required>
              <option value="">Select Shift</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
              <option value="weekend">Weekend</option>
            </select>
          </div>

          {/* Email */}
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Buttons */}
          <div className={styles.buttons}>
            
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

export default RegisterPage;
