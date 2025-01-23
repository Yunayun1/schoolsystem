import Header from '../Combine/Header';
import Navbar from '../Combine/Navbar';
import styles from './schedule.module.css'; // Import styles from the Components/Styles

const Homepage = () => {
  // Example schedule data, with timeslots for each day (Monday to Saturday)
  const scheduleData = [
    { time: '7:00 - 7:30 AM', monday: 'Math (Teacher Wat)', tuesday: 'NE (Teacher Wat)', wednesday: '', thursday: '', friday: '', saturday: '' },
    { time: '7:30 - 8:00 AM', monday: '', tuesday: 'NE (Teacher Wat)', wednesday: '', thursday: '', friday: '', saturday: '' },
    { time: '8:00 - 8:30 AM', monday: 'History (Teacher John)', tuesday: '', wednesday: 'English (Teacher Lily)', thursday: '', friday: '', saturday: '' },
    { time: '8:30 - 9:00 AM', monday: '', tuesday: 'Biology (Teacher Emma)', wednesday: '', thursday: '', friday: '', saturday: '' },
    { time: '9:00 - 9:30 AM', monday: 'Chemistry (Teacher Smith)', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '' },
    { time: '9:30 - 10:00 AM', monday: '', tuesday: 'Physics (Teacher Lee)', wednesday: '', thursday: '', friday: '', saturday: '' },
    { time: '10:00 - 10:30 AM', monday: '', tuesday: '', wednesday: 'Math (Teacher Wat)', thursday: '', friday: '', saturday: '' },
    { time: '10:30 - 11:00 AM', monday: '', tuesday: '', wednesday: '', thursday: 'Geography (Teacher Rosa)', friday: '', saturday: '' },
    { time: '11:00 - 11:30 AM', monday: '', tuesday: '', wednesday: '', thursday: '', friday: 'PE (Teacher Clark)', saturday: '' },
    { time: '11:30 - 12:00 PM', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: 'Music (Teacher Vann)' },
  ];

  return (
    <div className={styles.container}>
      <Header /> {/* Keep the Header as it is */}
      <Navbar  /> {/* Keep the Navbar as it is */}
      <div className={styles.background}></div>

      {/* Schedule Section */}
      <section className={styles.scheduleContent}>
        <h2 className={styles.scheduleTitle}>Class Schedule</h2>
        <table className={styles.scheduleTable}>
          <thead>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, index) => (
              <tr key={index}>
                <td>{item.time}</td>
                <td>{item.monday}</td>
                <td>{item.tuesday}</td>
                <td>{item.wednesday}</td>
                <td>{item.thursday || ''}</td>
                <td>{item.friday || ''}</td>
                <td>{item.saturday || ''}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Noted Section */}
        <div className={styles.notedSection}>
          <h3 className={styles.notedTitle}>Noted</h3>
          <p className={styles.notedDescription}>
            NE = Network Engineering
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
