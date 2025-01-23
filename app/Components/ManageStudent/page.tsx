"use client";

import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../lib/firebase"; // Replace with your Firebase config path
import AdminLayout from '../AdminLayout/adminLayout';
import styles from './ManageStuden.module.css';

interface Student {
  id: string; // Firestore document ID
  fullName: string;
  email: string;
  lastLogin: string;
  joinedDate: string;
}

const ManageStudentPage = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const studentsCollection = collection(db, "student"); // Firestore collection
      const snapshot = await getDocs(studentsCollection);

      const studentsData = snapshot.docs.map((doc) => ({
        id: doc.id, // Firestore document ID
        ...doc.data(),
      })) as Student[];

      setStudents(studentsData);
    };

    fetchStudents();
  }, []);

  const deleteStudent = async (id: string) => {
    try {
      await deleteDoc(doc(db, "student", id)); // Delete document from Firestore
      setStudents(students.filter((student) => student.id !== id)); // Update local state
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <AdminLayout>
      {/* Topbar */}
      <div className={styles.topbar}>Manage Students</div>

      {/* Student Table */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Last Login</th>
            <th>Joined</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.fullName}</td>
              <td>{student.email}</td>
              <td>{student.lastLogin}</td>
              <td>{student.joinedDate}</td>
              <td>
                <button
                  className={styles.deleteButton}
                  onClick={() => deleteStudent(student.id)}
                >
                  Delete
                </button>
                <button className={styles.editButton}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default ManageStudentPage;
