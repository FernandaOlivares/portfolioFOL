import React from 'react';
import Header from '../components/Header/Header.jsx';
import Profile from '../components/Profile/Profile.jsx';
import About from '../components/About/About.jsx';
import TechStack from '../components/TechStack/TechStack.jsx';
import Project1 from '../components/Project1/Project1.jsx';
import Project2 from '../components/Project2/Project2.jsx';
import Footer from '../components/Footer/Footer.jsx';
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.container}>
    <div className={styles.header}><Header /></div>
    <div className={styles.profile}><Profile /></div>
    <div className={styles.about}><About /></div>
    <div className={styles.techStack}><TechStack /></div>
    <div className={styles.project1}><Project1 /></div>
    <div className={styles.project2}><Project2 /></div>
    <div className={styles.footer}><Footer /></div>
  </div>
);

export default Home;
