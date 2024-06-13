import React from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVimeo } from '@fortawesome/free-brands-svg-icons';
import { faPlayCircle, faLink } from '@fortawesome/free-solid-svg-icons';
import styles from './Project2.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LandingF1 from '../../assets/Project2Pics/LandingF1.png'
import HomeF1 from '../../assets/Project2Pics/HomeF1.png'
import FormF1 from '../../assets/Project2Pics/FormF1.png'
import ImagesSlider from '../../components/ImagesSlider/ImagesSlider.jsx';

const images = [
  LandingF1,
  HomeF1,
  FormF1,
];

const Project2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true,
  };
  const [isPopupOpenImage, setIsPopupOpenImage] = useState(false);

  const openImagePopup = () => {
    setIsPopupOpenImage(true);
  };

  const closePopup = () => {
    setIsPopupOpenImage(false);
  };

  return (
    <div className={styles.project}>
      <div className={styles.content}>
      <div className={styles.slider}>
        <Slider {...settings}>
        {images.map((image, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img src={image ? image : 'Picture not found'} alt={`Project Image ${index + 1}`} className={styles.image}  onClick={openImagePopup}/>
            </div>
          ))}
        </Slider>
      </div>
      {isPopupOpenImage && (
            <div className={styles.popupContainer}>
              <ImagesSlider images={images} />
              <button className={styles.closeButton} onClick={closePopup}> X </button>
            </div>
          )}
      <div className={styles.projectDescription}>
        <h2>F1 - Driver Project_</h2>
        <p>Passionate about ongoing learning and applying best development practices, I continuously seek to improve my skills. I initiated my solo project, F1 - LEGENDS, where I gained valuable experience using external APIs to fetch data, implement filters, controlled forms and manage databases and models.</p>
      </div>
      </div>
      <div className={styles.projectLinks}>
        <a href="https://vimeo.com/952367284" target="_blank" rel="noopener noreferrer" className={`${styles.iconLink} ${styles.disabled}`} disabled>
          <FontAwesomeIcon icon={faVimeo} size="3x" />
        </a>
        <a href="https://full-stack-project-front.vercel.app/" target="_blank" rel="noopener noreferrer" className={`${styles.liveDemoButton} ${styles.disabled}`} disabled>
          <FontAwesomeIcon icon={faPlayCircle} size="1x" /> Live Demo
        </a>
      </div>
    </div>
  );
};

export default Project2;

