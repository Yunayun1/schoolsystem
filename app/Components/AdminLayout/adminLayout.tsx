// app/Components/AdminLayout/adminLayout.tsx
import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import styles from './AdminLayout.module.css';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
