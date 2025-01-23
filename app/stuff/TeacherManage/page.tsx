'use client';

import React, { useState } from 'react';
import TeacherLayout from '../TeacherLayout/teacherLayout'; // Adjust path if necessary
import styles from './teacher.module.css';
import { db } from '../../../lib/firebase'; // Import the Firebase DB instance
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions

interface FormErrors {
  major?: string;
  department?: string;
  year?: string;
  semester?: string;
  generation?: string;
  className?: string;
  subject?: string;
  cardName?: string;
}

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

const CreateClassForm: React.FC = () =>  {
  const [major, setMajor] = useState('');
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [generation, setGeneration] = useState('');
  const [className, setClassName] = useState('');
  const [subject, setSubject] = useState('');
  const [cardName, setCardName] = useState('');
  const [errors, setErrors] = useState<FormErrors>({}); // For form validation errors

  const handleMajorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMajor = event.target.value;
    setMajor(selectedMajor);
    setDepartment(''); // Reset department when major changes
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!major) newErrors.major = 'Major category is required';
    if (!department) newErrors.department = 'Department is required';
    if (!year) newErrors.year = 'Year is required';
    if (!semester) newErrors.semester = 'Semester is required';
    if (!generation) newErrors.generation = 'Generation is required';
    if (!className) newErrors.className = 'Class name is required';
    if (!subject) newErrors.subject = 'Subject is required';
    if (!cardName) newErrors.cardName = 'Card name is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const classData = {
        major,
        department,
        year,
        semester,
        generation,
        className,
        subject,
        cardName,
      };

      try {
        // Save data to Firestore
        const docRef = await addDoc(collection(db, 'classes'), classData); // 'classes' is your collection name
        console.log('Class created successfully:', docRef.id);
        alert('Class created successfully!');
      } catch (error) {
        console.error('Error creating class:', error);
        alert('Error creating class. Please try again later.');
      }
    }
  };

  return (
    <TeacherLayout>
      <div className={styles.card}>
        <h2>Create Class</h2>
        <form className={styles.addClassForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="major">Major Category</label>
            <select
              id="major"
              name="major"
              value={major}
              onChange={handleMajorChange}
              className={errors.major ? styles.errorInput : ''}
            >
              <option value="">Select Major Category</option>
              <option value="science">Science</option>
              <option value="humanities">Humanities</option>
              <option value="engineering">Engineering</option>
              <option value="development">Development</option>
              <option value="education">Education</option>
            </select>
            {errors.major && <span className={styles.errorMessage}>{errors.major}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="department">Department</label>
            <select
              id="department"
              name="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              disabled={!major}
              className={errors.department ? styles.errorInput : ''}
            >
              <option value="">Select Department</option>
              {major && collegeMajors[major]?.map((dept, index) => (
                <option key={index} value={dept}>{dept}</option>
              ))}
            </select>
            {errors.department && <span className={styles.errorMessage}>{errors.department}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="year">Year</label>
            <select
              id="year"
              name="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className={errors.year ? styles.errorInput : ''}
            >
              <option value="">Select Year</option>
              <option value="Year1">Year 1</option>
              <option value="Year2">Year 2</option>
              <option value="Year3">Year 3</option>
              <option value="Year4">Year 4</option>
            </select>
            {errors.year && <span className={styles.errorMessage}>{errors.year}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="semester">Semester</label>
            <select
              id="semester"
              name="semester"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className={errors.semester ? styles.errorInput : ''}
            >
              <option value="">Select Semester</option>
              <option value="Semester1">Semester 1</option>
              <option value="Semester2">Semester 2</option>
            </select>
            {errors.semester && <span className={styles.errorMessage}>{errors.semester}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="generation">Generation</label>
            <input
              type="text"
              id="generation"
              name="generation"
              value={generation}
              onChange={(e) => setGeneration(e.target.value)}
              className={errors.generation ? styles.errorInput : ''}
            />
            {errors.generation && <span className={styles.errorMessage}>{errors.generation}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="className">Class Name</label>
            <input
              type="text"
              id="className"
              name="className"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              className={errors.className ? styles.errorInput : ''}
            />
            {errors.className && <span className={styles.errorMessage}>{errors.className}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={errors.subject ? styles.errorInput : ''}
            />
            {errors.subject && <span className={styles.errorMessage}>{errors.subject}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="cardName">Card Name</label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              className={errors.cardName ? styles.errorInput : ''}
            />
            {errors.cardName && <span className={styles.errorMessage}>{errors.cardName}</span>}
          </div>

          <button type="submit">Create Class</button>
        </form>
      </div>
    </TeacherLayout>
  );
};

export default CreateClassForm;
