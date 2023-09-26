import Image from "next/image"
import classes from './hero.module.css'

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image 
        src='/images/site/tk2.jpg' 
        alt='dev' 
        width={300} 
        height={300} />
      </div>
      <h1>Hi, I'm Kelello</h1>
      <p>
        I blog about software development - especially backend
      </p>
    </section>
  )
}

export default Hero;