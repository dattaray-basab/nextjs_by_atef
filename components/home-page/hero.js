import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/Atef.jpg'
          alt='An image showing Atef'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm  Atef</h1>
      <p>
        For my school project I decided to learn how to create web sites using NextJS, which is a state-of-the-art full stack development franework from Vercel.
        My goal here is to explain how NextJS can be used to build starter web sites.
      </p>
    </section>
  );
}

export default Hero;