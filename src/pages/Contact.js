import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-header">
          <h1>Contact Information</h1>
          <p className="contact-intro">
            I'm here to help you take the first step towards positive change.
            Reach out to schedule a <strong>free 15 min</strong> consultation or ask any questions you may
            have.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">📞</div>
                <div>
                  <h3>Phone</h3>
                  <p>435-610-1559</p>
                  <span>Available during office hours for text messages</span>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">✉️</div>
                <div>
                  <h3>Email</h3>
                  <p>tiffany@peacefulembodiment.co</p>
                  <span>
                    I respond to emails on office days, typically within 1
                    business day
                  </span>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Office Location</h3>
                  <p>
                    321 N Mall Drive
                    <br />
                    Suite VW 105
                    <br />
                    St George, UT
                  </p>
                  <span>
                    My office is in the same suite as Enlightened Counseling
                  </span>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">💻</div>
                <div>
                  <h3>Online Sessions</h3>
                  <p>Available via secure video platform</p>
                  <span>Flexible scheduling options</span>
                </div>
              </div>
            </div>

            <div className="office-hours">
              <h3>Office Hours</h3>
              <div className="hours-list">
                <div className="hours-item">
                  <span>Wednesday</span>
                  <span>Mornings (Telehealth Only)</span>
                </div>
                <div className="hours-item">
                  <span>Saturday</span>
                  <span>In-Person and Telehealth</span>
                </div>
              </div>
              <p className="hours-note">
                I do my best to respond to messages within 1 business day, but I
                respond to emails on office days.
              </p>
            </div>
          </div>
        </div>

        <div className="emergency-notice">
          <h3>⚠️ Crisis Support</h3>
          <p>
            If you are experiencing a mental health emergency, please call 911
            or go to your nearest emergency room. For 24/7 crisis support, you
            can also call the National Suicide Prevention Lifeline at 988.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
