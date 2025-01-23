import Header from '../Combine/Header';
import Navbar from '../Combine/Navbar';
import Link from 'next/link';
import styles from '../About/About.module.css';


const About = () => {
  return (
    <div className={styles.container}>
      <Header /> {/* Keep the Header as it is */}
      <Navbar/> {/* Keep the Navbar as it is */}
      <div className={styles.background}></div>

      {/* About Us Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h2 className={styles.heroTitle}>About Us</h2>
          <p className={styles.heroSubtitle}>
            Discover the mission, vision, and values that define the Royal University of Phnom Penh.
          </p>
        </div>
        <div className={styles.heroImage}></div>
      </section>

      {/* Mission & Vision Section */}
      <section className={styles.missionVision}>
        <h2 className={styles.sectionTitle}>Our Mission & Vision</h2>
        <div className={styles.missionVisionContent}>
          <div className={styles.mission}>
            <h3>Mission</h3>
            <p>
              At Royal University of Phnom Penh, we are committed to providing world-class education,
              fostering innovation, and shaping future leaders through a comprehensive and inclusive
              learning environment.
            </p>
          </div>
          <div className={styles.vision}>
            <h3>Vision</h3>
            <p>
              Our vision is to be a globally recognized institution, empowering students to become
              innovative thinkers and leaders who contribute to the development of Cambodia and
              beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className={styles.ourTeam}>
        <h2 className={styles.sectionTitle}>Our Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <h3>Dok Vottey</h3>
            <p>
              Student - ITE Department. Passionate about technology and innovation, working on
              enhancing educational tools for students.
            </p>
          </div>
          <div className={styles.teamMember}>
            <h3>Ra Thida</h3>
            <p>
              Student - ITE Department. Focused on developing solutions that improve digital learning
              experiences.
            </p>
          </div>
          <div className={styles.teamMember}>
            <h3>Sok Channa</h3>
            <p>
              Student - ITE Department. Striving to create impactful educational projects that bridge
              the gap between technology and education.
            </p>
          </div>
          <div className={styles.teamMember}>
            <h3>Se SreyNoch</h3>
            <p>
              Student - ITE Department. Enthusiastic about leveraging technology to drive sustainable
              solutions in education.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className={styles.history}>
        <h2 className={styles.sectionTitle}>Our History</h2>
        <div className={styles.historyTimeline}>
          <div className={styles.historyItem}>
            <h3>Founded in 1960</h3>
            <p>
              Royal University of Phnom Penh was established with the aim of providing higher
              education in Cambodia, with a strong focus on research and academic excellence.
            </p>
          </div>
          <div className={styles.historyItem}>
            <h3>International Collaboration</h3>
            <p>
              Throughout the years, RUPP has built collaborations with top universities around the
              world, improving its educational offerings and student exchange programs.
            </p>
          </div>
          <div className={styles.historyItem}>
            <h3>Digital Transformation</h3>
            <p>
              In recent years, RUPP has been at the forefront of adopting digital tools and
              technology to enhance learning experiences and administrative processes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <p>For inquiries, please reach out via email or visit us at the campus.</p>
        <p>
          Email: <a href="mailto:contact@rupp.edu.kh">contact@rupp.edu.kh</a>
        </p>
        <p>Phone: +855 23 999 111</p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2025 Royal University of Phnom Penh. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <Link href="/privacy">Privacy Policy</Link> |{' '}
          <Link href="/terms">Terms of Service</Link>
        </div>
      </footer>

      {/* Background Image */}
      <div className={styles.background}></div>
    </div>
  );
};

export default About;
