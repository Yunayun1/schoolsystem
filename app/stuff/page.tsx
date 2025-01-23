import TeacherLayout from './TeacherLayout/teacherLayout'; // Adjust path if necessary
import styles from './stuff.module.css'; // Optional: Create and add styles for this page

const DashboardPage = () => {
  return (
    <TeacherLayout>
      <div className={styles.dashboardContent}>
        <h1>Welcome to the Teacher Dashboard</h1>
        <p>This is the main page for managing teachers, students, and more!</p>
        
        {/* Example section for Teacher management */}
        <section className={styles.managementSection}>
          <h2>Manage Teachers</h2>
          <ul>
            <li>Add a new teacher</li>
            <li>Update teacher details</li>
            <li>View teacher list</li>
          </ul>
        </section>
      </div>
    </TeacherLayout>
  );
};

export default DashboardPage;
