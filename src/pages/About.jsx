import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages.css";

const About = () => {
  return (
    <div className="static-page">
      <div className="static-container">
        <div className="page-hero">
          <p className="page-hero-eyebrow">About</p>
          <h1 className="page-hero-title">Jiroframe</h1>
          <p className="page-hero-tagline">
            Your destination for movies &amp; TV — elegant, fast, and always up
            to date.
          </p>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>Welcome to Jiroframe</h2>
            <p>
              Welcome to Jiroframe, your favorite destination for exploring the
              vast world of Movies and TV shows. Our mission is to provide an
              elegant and user-friendly interface for discovering new content,
              tracking trending titles, and enjoying a seamless viewing
              experience.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Technology</h2>
            <p>
              This project was built using modern web technologies including
              React.js, Vite, and Cloudflare Pages to demonstrate a responsive
              and dynamic front-end application. We source our data from The
              Movie Database (TMDB) API to ensure up-to-date and accurate
              information about movies and TV shows.
            </p>
          </section>

          <section className="about-section">
            <h2>Features</h2>
            <div className="features-grid">
              <div className="feature-card-v2">
                <div className="feature-card-v2-header">
                  <span className="feature-card-v2-icon">🎯</span>
                  <h3 className="feature-card-v2-title">Trending Content</h3>
                </div>
                <p className="feature-card-v2-desc">
                  Discover the most popular movies and TV shows updated weekly
                </p>
              </div>

              <div className="feature-card-v2">
                <div className="feature-card-v2-header">
                  <span className="feature-card-v2-icon">🔍</span>
                  <h3 className="feature-card-v2-title">Smart Search</h3>
                </div>
                <p className="feature-card-v2-desc">
                  Find your favorite content with our powerful search
                  functionality
                </p>
              </div>

              <div className="feature-card-v2">
                <div className="feature-card-v2-header">
                  <span className="feature-card-v2-icon">⚡</span>
                  <h3 className="feature-card-v2-title">Fast Performance</h3>
                </div>
                <p className="feature-card-v2-desc">
                  Optimized for speed with modern web technologies
                </p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Our Commitment</h2>
            <p>
              We are committed to providing the best user experience while
              respecting content creators. We encourage our users to support the
              entertainment industry by watching content through official
              platforms and services.
            </p>
            <p>
              Jiroframe is developed as a demonstration of modern web
              development practices and is intended for educational and
              entertainment purposes.
            </p>
          </section>

          <section className="about-section contact-section">
            <h2>Get In Touch</h2>
            <p>
              Have questions, suggestions, or feedback? We'd love to hear from
              you!
            </p>
            <div className="contact-info">
              <a
                href="https://github.com/codewithjiro/Jiroframe"
                target="_blank"
                rel="noopener noreferrer"
                className="about-github-badge"
              >
                🐙 github.com/codewithjiro/Jiroframe
              </a>
            </div>
          </section>
        </div>

        <div className="static-links">
          <Link to="/disclaimer" className="static-link">
            View Disclaimer
          </Link>
          <Link to="/" className="static-link">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
