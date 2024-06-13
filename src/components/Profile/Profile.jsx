import React from 'react';
import styles from './Profile.module.css';
import profilePicture from '../../assets/ProfilePicture/profilePicture.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const Profile = () => (
  <div className={styles.profile}>
    <img src={profilePicture} alt="Profile" className={styles.photo} />
    <h2 className={styles.name}>Fernanda Olivares Lisperguer</h2>
    <h3 className={styles.title}>[ Full Stack Developer ]</h3>
    <p className={styles.techStack}>
    <FontAwesomeIcon icon={faMapMarkerAlt} /> Santiago | Chile</p>
    <p className={styles.techStack}>-</p>
    <p className={styles.techStack}>JavaScript | React | HTML | CSS | Redux | Node.js | SQL | Express.js | Git</p>
    <p className={styles.techStack}>-</p>
    <p className={styles.techStack}>|Spanish - Native |</p>
    <p className={styles.techStack}>| English - C2 Advanced |</p>
    <p className={styles.techStack}>| French - B1 Intermediate |</p>
  </div>
);

export default Profile;
