import React from 'react';
import Header from '../../Combine/Header';
import Navbar from '../../Combine/Navbar';
import styles from '../firstYear/firstYear.module.css';  // Ensure correct import

const GPA = () => {
  const semester2Data = [
    { ee: 1, subjectKh: 'គណិតវិទ្យា', subjectEn: 'Mathematics', credit: 3, score: 95, grade: 'A' },
    { ee: 2, subjectKh: 'រូបវិទ្យា', subjectEn: 'Physics', credit: 4, score: 88, grade: 'B+' },
    { ee: 3, subjectKh: 'គីមីវិទ្យា', subjectEn: 'Chemistry', credit: 3, score: 92, grade: 'A-' },
    { ee: 4, subjectKh: 'ជីវវិទ្យា', subjectEn: 'Biology', credit: 2, score: 85, grade: 'B' },
    { ee: 5, subjectKh: 'ភាសាអង់គ្លេស', subjectEn: 'English', credit: 2, score: 93, grade: 'A' },
    { ee: 6, subjectKh: 'វិទ្យាសាស្រ្តកុំព្យូទ័រ', subjectEn: 'Computer Science', credit: 3, score: 90, grade: 'A-' },
    { ee: 7, subjectKh: 'ប្រវត្តិវិទ្យា', subjectEn: 'History', credit: 3, score: 87, grade: 'B+' },
    { ee: 8, subjectKh: 'សេដ្ឋកិច្ចវិទ្យា', subjectEn: 'Economics', credit: 3, score: 94, grade: 'A' },
  ];

  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <div className={styles.background}></div>
      <h2 className={styles.transcriptTitle}>ព្រឹត្តិប័ត្រពិន្ទុ</h2>
      <h2 className={styles.transcriptTitle}>Academic Transcript</h2>
      <table className={styles.transcriptTable}>
        <caption className={styles.studentID}>ID: 000001</caption>
        <caption className={styles.studentID}>ឆ្នាំសិក្សា : 2022 - 2023</caption>
        <caption className={styles.semester} style={{ color: 'red' }}>Year 1</caption>
        <caption className={styles.semester} style={{ color: 'red' }}>Semester 2</caption>
        <caption className={styles.studentGPA}>GPA: 4.0</caption>
        <thead>
          <tr>
            <th>EE</th>
            <th>មុខវិជ្ជាទូទៅ</th>
            <th>General Subjects</th>
            <th>Credit</th>
            <th>Score</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {semester2Data.map((row) => (
            <tr key={row.ee}>
              <td>{row.ee}</td>
              <td>{row.subjectKh}</td>
              <td>{row.subjectEn}</td>
              <td>{row.credit}</td>
              <td>{row.score}</td>
              <td>{row.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.noted}>
        <p>Noted:</p>
        <div className={styles.notedColumns}>
          <div className={styles.leftColumn}>
            <p>A = 85% - 100% = ល្អប្រសើរ</p>
            <p>B+ = 80% - 85% = ល្អណាស់</p>
            <p>B = 70% - 79% = ល្អ</p>
            <p>C+ = 65% - 69% = ល្អបង្គួរ</p>
          </div>
          <div className={styles.rightColumn}>
            <p>C = 50% - 64% = មធ្យម</p>
            <p>D = 45% - 49% = ខ្សោយ</p>
            <p>E = 40% - 49% = ខ្សោយណាស់</p>
            <p>F &lt;= 39% = ធ្លាក់</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GPA;
