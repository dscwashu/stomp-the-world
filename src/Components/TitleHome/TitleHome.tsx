
import styles from './TitleHome.module.css'

export function TitleHome() {
  return (
    <div className={styles['title-block']}>
      <h1> STOMP THE WORLD </h1>
    </div>
  )
}



/* tryiing to add "washu" effect animation
/*
'use client';

import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const TitleHome = () => {
  useEffect(() => {
    gsap.to('.image-wrapper', {
      opacity: 1,
      duration: 2,
      ease: 'power2.inOut',
    });

    gsap.to('.text-wrapper', {
      opacity: 1,
      duration: 2,
      delay: 1,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <div className="container">
      <div className="image-wrapper">
        <img src="your-image.jpg" alt="Background" className="background-image" />
      </div>
      <div className="text-wrapper">
        <h1>Welcome to WashU</h1>
        <p>Innovating for the Future</p>
      </div>
    </div>
  );
};

export default TitleHome;
*/
