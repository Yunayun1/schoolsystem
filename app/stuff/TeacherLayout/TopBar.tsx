import React from "react";
import Image from "next/image"; // Import Image from next/image
import styles from "./Topbar.module.css";

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      {/* Replace <img> with <Image> */}
      <Image
        src="/logo.png" // Path to the image
        alt="Logo" // Alternative text
        width={50} // Adjust the width of the image
        height={50} // Adjust the height of the image
        className={styles.logo} // Add CSS class for styling
        priority // Optional: Ensures the image is loaded as high priority
      />
      <div className={styles.title}>Teacher Dashboard</div>
    </div>
  );
};

export default Topbar;
