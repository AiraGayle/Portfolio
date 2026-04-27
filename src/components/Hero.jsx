import React from 'react';
import './Hero.css';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />
      <div className="hero-content">
         <div className="fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="hero-tag">Full-time CS Student</div>
        </div>
        <div className="fade-in" style={{ animationDelay: '0.25s' }}>
            <h1 className="hero-name">
            Aira Gayle Uy
            </h1>
        </div>
         <div className="fade-in" style={{ animationDelay: '0.4s' }}>
        <p className="hero-sub">
          Experienced with building wep apps and mobile apps
        </p>
        </div>
         <div className="fade-in" style={{ animationDelay: '0.55s' }}>
        <div className="hero-btns">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
        </div>
        </div>
        <div className="fade-in" style={{ animationDelay: '0.7s' }}>
        <div className="hero-quote-wrapper">
            <div className="hero-quote">
                <Typewriter
                onInit={(typewriter) => {
                    typewriter
                    .changeDelay(40)
                    .typeString("I'm still at the root node, traversing the tree one step at a time.")
                    .callFunction(() => {
                        // Hide the cursor after done
                        document.querySelector('.Typewriter__cursor').style.display = 'none';
                    })
                    .start();
                }}
                />
            </div>
        </div>
        </div>
      </div>
    </section>
  );
}