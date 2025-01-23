'use client';
import React, { useState, useEffect } from "react";
import Header from "../Combine/Header";
import Navbar from "../Combine/Navbar";
import Image from "next/image"; // Importing the Image component
import styles from "./account.module.css";
import { db } from "../../../lib/firebase";  // Firebase configuration file
import { doc, getDoc } from "firebase/firestore"; // Firestore methods


interface UserData {
  name: string;
  college: string;
  major: string;
  generation: string;
  classGroup: string;
  shift: string;
  email: string;
}

const ProfileCard: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState("Kenneth Valdez");
  const [userData, setUserData] = useState<UserData | null >(null); // Store fetched user data

  useEffect(() => {
    const fetchData = async () => {
      const userId = "some-unique-user-id"; // Get this from logged-in user session
      const userDocRef = doc(db, "student", userId);
      const docSnap = await getDoc(userDocRef);

      if (docSnap.exists()) {
        setUserData(docSnap.data() as UserData);
      } else {
        console.log("No such document!");
      }
    };

    fetchData();
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please upload a valid image file.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <div className={styles.centerContent}>
        <h1 className={styles.title}>Student Information</h1>
      </div>
      <div className={styles.card}>
        <div className={styles.profileSection}>
          <div className={styles.imageContainer}>
            {image ? (
              <Image 
                src={image} 
                alt="Profile" 
                width={150}   
                height={150}  
                className={styles.profileImage}
              />
            ) : (
              <div className={styles.placeholderImage}>Upload</div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className={styles.uploadInput}
            />
          </div>
          <h2 className={styles.name}>
            {isEditing ? (
              <input
                type="text"
                value={fullName}
                onChange={handleNameChange}
                className={styles.nameInput}
              />
            ) : (
              fullName
            )}
          </h2>
        </div>
        <div className={styles.infoSection}>
          <table className={styles.infoTable}>
            <tbody>
              <tr>
                <td><strong>Full Name:</strong></td>
                <td>{userData ? `${userData.name}` : "Loading..."}</td>
              </tr>
              <tr>
                <td><strong>College:</strong></td>
                <td>{userData ? userData.college : "Loading..."}</td>
              </tr>
              <tr>
                <td><strong>Major:</strong></td>
                <td>{userData ? userData.major : "Loading..."}</td>
              </tr>
              <tr>
                <td><strong>Generation:</strong></td>
                <td>{userData ? userData.generation : "Loading..."}</td>
              </tr>
              <tr>
                <td><strong>Class Group:</strong></td>
                <td>{userData ? userData.classGroup : "Loading..."}</td>
              </tr>
              <tr>
                <td><strong>Shift:</strong></td>
                <td>{userData ? userData.shift : "Loading..."}</td>
              </tr>
              <tr>
                <td><strong>Email:</strong></td>
                <td>{userData ? userData.email : "Loading..."}</td>
              </tr>
            </tbody>
          </table>
          <button className={styles.editButton} onClick={handleEditClick}>Edit</button>
          {isEditing && (
            <button className={styles.saveButton} onClick={handleSaveClick}>Save</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
