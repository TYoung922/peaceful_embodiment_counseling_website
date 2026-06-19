import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="services-header">
          <h1>Services</h1>
          <p className="services-intro">
            I offer a range of therapeutic services designed to support your
            mental health and personal growth. Each service is tailored to meet
            your individual needs. <br />
            <strong>
              Telehealth appointments available on Mondays and Saturdays. With
              an in person option on Saturdays.
            </strong>
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            {/* <div className="service-icon">🧠</div> */}
            <h3>Individual Therapy</h3>
            <p>
              One-on-one sessions focused on your personal goals, challenges,
              and growth. We'll work together to figure out what you want and
              how to get there. Some common areas I work with are:
            </p>
            <ul>
              <li>Anxiety and stress management</li>
              <li>Depression treatment</li>
              <li>Trauma recovery</li>
              <li>Life transitions</li>
              <li>Boundaries</li>
              <li>Navigating mental load and emotional labor</li>
              <li>
                Grief and ambiguous loss (something that did or didn't happen
                the way you planned or hoped)
              </li>
            </ul>
          </div>

          {/* <div className="service-card">
            <div className="service-icon">👥</div>
            <h3>Couples Counseling</h3>
            <p>
              Strengthen your relationship through improved communication,
              conflict resolution, and deeper emotional connection.
            </p>
            <ul>
              <li>Communication skills</li>
              <li>Conflict resolution</li>
              <li>Trust rebuilding</li>
              <li>Intimacy enhancement</li>
            </ul>
          </div> */}

          {/* <div className="service-card">
            <div className="service-icon">👨‍👩‍👧‍👦</div>
            <h3>Family Therapy</h3>
            <p>
              Address family dynamics, improve relationships, and create
              healthier patterns of interaction within your family system.
            </p>
            <ul>
              <li>Parent-child relationships</li>
              <li>Blended family challenges</li>
              <li>Family communication</li>
              <li>Behavioral issues</li>
            </ul>
          </div> */}

          <div className="service-card">
            {/* <div className="service-icon">🧘‍♀️</div> */}
            <h3>Mindfulness & Stress Reduction</h3>
            <p>
              Learn evidence-based techniques to manage stress, improve focus,
              and enhance your overall well-being.
            </p>
            <ul>
              <li>Meditation techniques</li>
              <li>Breathing exercises</li>
              <li>Mindfulness practices</li>
              <li>Stress management tools</li>
            </ul>
          </div>

          {/* <div className="service-card">
            <div className="service-icon">🎯</div>
            <h3>Life Coaching</h3>
            <p>
              Set and achieve personal and professional goals with structured
              support and accountability.
            </p>
            <ul>
              <li>Goal setting and planning</li>
              <li>Career transitions</li>
              <li>Personal development</li>
              <li>Work-life balance</li>
            </ul>
          </div> */}

          <div className="service-card">
            {/* <div className="service-icon">📞</div> */}
            <h3>Online Therapy</h3>
            <p>
              Convenient and secure virtual sessions that allow you to receive
              therapy from the comfort of your own space.
            </p>
            <ul>
              <li>Video sessions</li>
              <li>Phone consultations</li>
              <li>Flexible scheduling</li>
              <li>Secure platform</li>
            </ul>
          </div>
        </div>

        <div className="pricing-section">
          <h2>Session Information</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Individual Session</h3>
              <div className="price">$150</div>
              <p>Per session</p>
            </div>
          </div>

          <div className="insurance-section">
            <h3>Insurance & Payment</h3>
            <p className="insurance-note">
              I accept the following insurance plans:
            </p>
            <ul className="insurance-list">
              <li>EMI Health</li>
              <li>Intermountain EAP</li>
              <li>Lyra</li>
              <li>Out of Network</li>
            </ul>
            <p className="insurance-note">I also accept HSA/FSA cards.</p>
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready to Begin?</h2>
          <p>
            Take the first step towards positive change. Contact me to schedule
            your initial consultation.
          </p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Schedule Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
