import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-header">
          <h1>About Me</h1>
          <p className="about-intro">
            I'm Tiffany Larson, a licensed therapist dedicated to helping
            individuals navigate life's challenges and discover their inner
            strength.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h2>My Background</h2>
            <p>
              I am a Licensed Clinical Social Worker in Utah, licensed since 2016. 
              I work with adults (18+) to help navigate life's challenges, trauma, 
              and personal growth. My approach combines evidence-based therapeutic 
              techniques with genuine compassion and understanding.
            </p>

            <h3>License & Credentials</h3>
            <ul>
              <li>Licensed Clinical Social Worker in Utah since 2016</li>
              <li>Ages: 18+</li>
            </ul>

            <h3>Therapeutic Modalities</h3>
            <p>I utilize a variety of evidence-based approaches tailored to your unique needs:</p>
            <ul>
              <li>CBT (Cognitive Behavioral Therapy)</li>
              <li>DBT (Dialectical Behavior Therapy)</li>
              <li>EMDR</li>
              <li>Health at Every Size</li>
              <li>General trauma treatment and somatic practices</li>
              <li>Feminist Theory</li>
            </ul>

            <h3>Specialties</h3>
            <p>I specialize in working with individuals experiencing:</p>
            <ul>
              <li>Trauma/PTSD</li>
              <li>Faith transitions/deconstruction</li>
              <li>Disordered eating/body image</li>
              <li>Women's issues</li>
              <li>LGBTQ+</li>
            </ul>

            <h3>My Approach</h3>
            <p>
              I believe that therapy is a collaborative process where we work
              together to identify your goals and develop strategies to achieve
              them. My therapeutic approach is warm, non-judgmental, and
              tailored to meet your unique needs.
            </p>
          </div>

          <div className="about-image">
            <img
              src="/images/headshot.jpeg"
              alt="Tiffany Larson, Licensed Therapist"
              className="therapist-photo"
            />
          </div>
        </div>

        <div className="values-section">
          <h2>My Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h4>Empathy</h4>
              <p>
                I strive to understand your unique perspective and experiences
                with genuine compassion.
              </p>
            </div>
            <div className="value-item">
              <h4>Respect</h4>
              <p>
                Your dignity, autonomy, and personal values are always honored
                in our work together.
              </p>
            </div>
            <div className="value-item">
              <h4>Growth</h4>
              <p>
                I believe in your capacity for change and personal development
                at any stage of life.
              </p>
            </div>
            <div className="value-item">
              <h4>Authenticity</h4>
              <p>
                Our therapeutic relationship is built on honesty, transparency,
                and genuine connection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
