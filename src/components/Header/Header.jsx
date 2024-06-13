import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.title}>
    <h1 className={styles.thinkTitle}>think</h1>
    <h1 className={styles.separator}> | </h1>
    <h1 className={styles.believeTitle}>BELIEVE</h1>
    <h1 className={styles.separator}> | </h1>
    <h1 className={styles.codeTitle}>code_</h1>
    </div>
  </header>
);

export default Header;
