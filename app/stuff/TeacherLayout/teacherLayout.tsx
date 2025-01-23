// TeacherLayout.tsx
import Sidebar from './Sidebar'; // Adjust the import path if necessary
import TopBar from './TopBar'; // If you have a TopBar
import styles from './teacher.module.css';

interface TeacherLayoutProps {
  children: React.ReactNode;
  className?: string; // Optional className prop
}

const TeacherLayout: React.FC<TeacherLayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`${styles.layout} ${className}`}>
      <TopBar /> {/* This is your top navigation bar */}
      <div className={styles.container}>
        <Sidebar /> {/* This is your sidebar */}
        <main className={styles.mainContent}>{children}</main> {/* Main content goes here */}
      </div>
    </div>
  );
};

export default TeacherLayout;
