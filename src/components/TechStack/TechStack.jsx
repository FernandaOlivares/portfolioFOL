import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faHtml5, faCss3Alt, faNodeJs, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import reduxLogo from '../../assets/reduxLogo.svg';
import expressjsLogo from '../../assets/expressjsLogo.svg';
import styles from './TechStack.module.css';

const techs = [
  { name: 'JavaScript', icon: faJs },
  { name: 'React', icon: faReact },
  { name: 'HTML', icon: faHtml5 },
  { name: 'CSS', icon: faCss3Alt },
  { name: 'Redux', icon: reduxLogo, className: styles.reduxLogo },
  { name: 'Node.js', icon: faNodeJs },
  { name: 'SQL', icon: faDatabase },
  { name: 'Express.js', icon: expressjsLogo },
  { name: 'Git', icon: faGitAlt }
];

const TechStack = () => (
    <div>
    <div>
    <h2 className={styles.title}>Tech Stack_</h2>
    </div>
  <div className={styles.techStack}>
    {techs.map((tech, index) => (
      <div key={index} className={styles.techItem}>
        {typeof tech.icon === 'string' ? (
          <img src={tech.icon} alt={tech.name} className={`${styles.techIcon} ${tech.className || ''}`} />
        ) : (
          <FontAwesomeIcon icon={tech.icon} size="3x" />
        )}
        <span className={styles.tooltip}>{tech.name}</span>
      </div>
    ))}
  </div>
  </div>
);

export default TechStack;
