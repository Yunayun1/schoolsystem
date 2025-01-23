import Header from '../Combine/Header';
import Navbar from '../Combine/Navbar';
import styles from '../Help/help.module.css'; // Import styles from the Components/Styles

const Homepage = () => {
  return (
    <div className={styles.container}>
      <Header /> {/* Keep the Header as it is */}
      <Navbar  /> {/* Keep the Navbar as it is */}
      <div className={styles.background}></div>

      {/* Help Categories */}
      <section className={styles.helpContent}>
        {/* Account Issues */}
        <div className={styles.helpCategory}>
          <h2 className={styles.helpCategoryTitle}>Account Issues</h2>
          <p className={styles.helpCategoryDescription}>
            Learn how to reset your password, manage your account settings, and more.
          </p>
        </div>

        {/* Technical Support */}
        <div className={styles.helpCategory}>
          <h2 className={styles.helpCategoryTitle}>Technical Support</h2>
          <p className={styles.helpCategoryDescription}>
            Troubleshoot errors, software problems, and find technical solutions.
          </p>
        </div>

        {/* Frequently Asked Questions */}
        <div className={styles.helpCategory}>
          <h2 className={styles.helpCategoryTitle}>Frequently Asked Questions</h2>
          <p className={styles.helpCategoryDescription}>
            Find answers to common questions about our services and products.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
