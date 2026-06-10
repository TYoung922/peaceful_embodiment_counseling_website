import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Your Journey of Healing</h1>
          <p className="hero-subtitle">
            Professional therapy services to support your mental health and
            personal growth
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              Schedule a Consultation
            </Link>
            <Link to="/services" className="btn btn-secondary">
              Learn About Services
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose Professional Therapy?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Compassionate Care</h3>
              <p>
                Experience a safe, non-judgmental environment where you can
                explore your thoughts and feelings openly.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Evidence-Based Approach</h3>
              <p>
                Treatment methods grounded in research and proven therapeutic
                techniques for lasting change.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Confidential & Secure</h3>
              <p>
                Your privacy is our priority. All sessions are confidential and
                conducted in a secure environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Take the First Step?</h2>
          <p>
            Contact me today to discuss how therapy can help you achieve your
            goals and improve your quality of life.
          </p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;


