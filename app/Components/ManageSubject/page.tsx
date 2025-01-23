'use client';

import React, { useState } from 'react';
import AdminLayout from '../AdminLayout/adminLayout';
import styles from './ManageSubject.module.css';

interface Subject {
  id: number;
  subject: string;
  department: string;
  teacherName: string;
}

const ManageSubjectPage = () => {
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: 1, subject: 'Mathematics', department: 'Science', teacherName: 'John Doe' },
    { id: 2, subject: 'English Literature', department: 'Arts', teacherName: 'Jane Smith' },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedSubject, setEditedSubject] = useState<Partial<Subject>>({});

  const handleEditClick = (id: number) => {
    const subjectToEdit = subjects.find((subject) => subject.id === id);
    if (subjectToEdit) {
      setEditingId(id);
      setEditedSubject({ ...subjectToEdit });
    }
  };

  const handleInputChange = (field: keyof Subject, value: string) => {
    setEditedSubject((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveClick = () => {
    setSubjects((prev) =>
      prev.map((subject) =>
        subject.id === editingId
          ? { ...subject, ...editedSubject }
          : subject
      )
    );
    setEditingId(null); // Exit editing mode
  };

  const handleCancelClick = () => {
    setEditingId(null); // Cancel editing mode
    setEditedSubject({});
  };

  return (
    <AdminLayout>
      {/* Topbar */}
      <div className={styles.topbar}>Manage Subjects</div>

      {/* Red Popup Box */}
      <div className={styles.popupBox}>Subject Management</div>

      {/* Subject Table */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Subject</th>
            <th>Department</th>
            <th>Teacher Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject.id}>
              <td>{subject.id}</td>
              <td>
                {editingId === subject.id ? (
                  <input
                    type="text"
                    value={editedSubject.subject || ''}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                  />
                ) : (
                  subject.subject
                )}
              </td>
              <td>
                {editingId === subject.id ? (
                  <input
                    type="text"
                    value={editedSubject.department || ''}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                  />
                ) : (
                  subject.department
                )}
              </td>
              <td>
                {editingId === subject.id ? (
                  <input
                    type="text"
                    value={editedSubject.teacherName || ''}
                    onChange={(e) => handleInputChange('teacherName', e.target.value)}
                  />
                ) : (
                  subject.teacherName
                )}
              </td>
              <td>
                {editingId === subject.id ? (
                  <>
                    <button className={styles.saveButton} onClick={handleSaveClick}>
                      Save
                    </button>
                    <button className={styles.cancelButton} onClick={handleCancelClick}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    className={styles.editButton}
                    onClick={() => handleEditClick(subject.id)}
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default ManageSubjectPage;
