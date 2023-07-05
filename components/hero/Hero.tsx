import React from 'react';

import classes from './hero.module.css';


interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <div className={classes.hero}>
      <img className={classes.image} src={imageUrl} alt={title} />
      <div className={classes.content}>
        <h1 className={classes.title}>{title}</h1>
        <p className={classes.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;
