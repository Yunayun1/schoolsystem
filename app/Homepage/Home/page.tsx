import Header from '../Combine/Header';
import Navbar from '../Combine/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../Home/home.module.css'; // Import styles from the Components/Styles

const Home = () => { 

  return (
    <div className={styles.container}>
      <Header /> 
      <Navbar /> 
      <div className={styles.background}></div>

      {/* Events Section */}
      <div className={styles.eventsSection}>
        <h2 className={styles.eventsTitle}>Events</h2>
        <div className={styles.eventsContainer}>
          <button className={styles.navigationButton}>{'<'}</button>
          <div className={styles.eventCard}>
            <div className={styles.eventImageContainer}>
              <Image src="/event1.jpg" alt="Event 1" width={300} height={400} className={styles.eventImage} />
            </div>
            <h3 className={styles.eventTitle}>កម្មវិធីសប្បុរសធម៍លើកទី១៤</h3>
            <p className={styles.eventDetail}>
              <span><Image src="/celenda.jpg" alt="Date" width={50} height={30} /></span> 11-12/01/2025
            </p>
            <p className={styles.eventDetail}>
              <span><Image src="/alarm.jpg" alt="Time" width={30} height={30} /></span> 08:00 am - 08:30 pm
            </p>
            <p className={styles.eventDetail}>
              <span><Image src="/location.jpg" alt="Location" width={20} height={30} /></span> RUPP
            </p>
          </div>
          <div className={styles.eventCard}>
            <div className={styles.eventImageContainer}>
              <Image src="/event1.jpg" alt="Event 2" width={300} height={400} className={styles.eventImage} />
            </div>
            <h3 className={styles.eventTitle}>កម្មវិធីសប្បុរសធម៍លើកទី១៤</h3>
            <p className={styles.eventDetail}>
              <span><Image src="/celenda.jpg" alt="Date" width={50} height={30} /></span> 11-12/01/2025
            </p>
            <p className={styles.eventDetail}>
              <span><Image src="/alarm.jpg" alt="Time" width={30} height={30} /></span> 08:00 am - 08:30 pm
            </p>
            <p className={styles.eventDetail}>
              <span><Image src="/location.jpg" alt="Location" width={20} height={30} /></span> RUPP
            </p>
          </div>
          <div className={styles.eventCard}>
            <div className={styles.eventImageContainer}>
              <Image src="/event1.jpg" alt="Event 3" width={300} height={400} className={styles.eventImage} />
            </div>
            <h3 className={styles.eventTitle}>កម្មវិធីសប្បុរសធម៍លើកទី១៤</h3>
            <p className={styles.eventDetail}>
              <span><Image src="/celenda.jpg" alt="Date" width={50} height={30} /></span> 11-12/01/2025
            </p>
            <p className={styles.eventDetail}>
              <span><Image src="/alarm.jpg" alt="Time" width={30} height={30} /></span> 08:00 am - 08:30 pm
            </p>
            <p className={styles.eventDetail}>
              <span><Image src="/location.jpg" alt="Location" width={20} height={30} /></span> RUPP
            </p>
          </div>
          <button className={styles.navigationButton}>{'>'}</button>
        </div>
      </div>

      {/* About Section */}
      <div className={styles.aboutSection}>
        <h3 className={styles.aboutTitle}>About Royal University of Phnom Penh</h3>
        <p className={styles.aboutDescription}>
          RUPP is the leading university in Cambodia, focusing on higher education, research, and technological innovation.
          We strive to create a progressive and sustainable environment for learning and growth.
        </p>
      </div>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerAbout}>
            <h4>About Royal University of Phnom Penh</h4>
            <p>
              RUPP is the leading university in Cambodia, focusing on higher education, research, and technological innovation. We strive to create a progressive and sustainable environment for learning and growth.
            </p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.footerLinkSection}>
              <h5>Quick Links</h5>
              <ul>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/help">Help</Link></li>
              </ul>
            </div>

            <div className={styles.footerLinkSection}>
              <h5>Contact</h5>
              <ul>
                <li>Email: <Link href="mailto:contact@rupp.edu.kh">contact@rupp.edu.kh</Link></li>
                <li>Phone: +855 23 999 111</li>
                <li>Address: Street 200, Phnom Penh, Cambodia</li>
              </ul>
            </div>
          </div>

          <div className={styles.footerSocial}>
            <h5>Follow Us</h5>
            <div className={styles.socialLinks}>
              <Link href="https://facebook.com/RUPP" target="_blank" rel="noopener noreferrer">Facebook</Link>
              <Link href="https://twitter.com/RUPP" target="_blank" rel="noopener noreferrer">Twitter</Link>
              <Link href="https://linkedin.com/school/RUPP" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
              <Link href="https://instagram.com/RUPP" target="_blank" rel="noopener noreferrer">Instagram</Link>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2025 Royal University of Phnom Penh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
