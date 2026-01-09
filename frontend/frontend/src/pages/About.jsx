import SEO from '../components/SEO';
import { FiTarget, FiHeart, FiAward } from 'react-icons/fi';

const About = () => {
  return (
    <>
      <SEO 
        title="About Us - URL Shortener | Our Mission & Story"
        description="Learn about our mission to make link sharing simple and efficient. Discover the team behind the URL shortener trusted by millions."
        keywords="about url shortener, our mission, link shortener company, about us"
        canonicalUrl="https://urlshortner.saksin.online/about"
      />
      
      <main className="main-content">
        {/* Hero Section */}
        <section className="page-hero">
          <div className="container">
            <h1>About Us</h1>
            <p>Making the web more accessible, one short link at a time</p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="about-section">
          <div className="container">
            <div className="about-grid">
              <div className="about-card">
                <div className="about-icon">
                  <FiTarget />
                </div>
                <h3>Our Mission</h3>
                <p>
                  We believe that sharing should be simple. Our mission is to provide 
                  the most reliable, fast, and user-friendly URL shortening service 
                  that empowers individuals and businesses to share their content 
                  effortlessly across the web.
                </p>
              </div>
              
              <div className="about-card">
                <div className="about-icon">
                  <FiHeart />
                </div>
                <h3>Our Values</h3>
                <p>
                  Simplicity, reliability, and user privacy are at the core of everything 
                  we do. We're committed to providing a service that's not only powerful 
                  but also respects your data and delivers consistent performance.
                </p>
              </div>
              
              <div className="about-card">
                <div className="about-icon">
                  <FiAward />
                </div>
                <h3>Our Promise</h3>
                <p>
                  We promise to keep our core service free forever. No hidden fees, 
                  no surprise limitations. We believe everyone deserves access to 
                  professional-grade link management tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="story-section">
          <div className="container">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                URLShortener was born from a simple frustration: why are long URLs so 
                difficult to share? In 2024, we set out to create a solution that would 
                make link sharing as easy as possible.
              </p>
              <p>
                What started as a simple tool has grown into a comprehensive platform 
                trusted by millions of users worldwide. From individual bloggers to 
                Fortune 500 companies, our service helps people share their content 
                more effectively every day.
              </p>
              <p>
                Today, we continue to innovate and improve, always keeping our users' 
                needs at the forefront of everything we do. We're proud to be part of 
                your digital journey.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="about-stats">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">1M+</span>
                <span className="stat-label">Links Shortened</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">500K+</span>
                <span className="stat-label">Happy Users</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">150+</span>
                <span className="stat-label">Countries Reached</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Uptime</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <div className="section-header">
              <h2>Get In Touch</h2>
              <p>Have questions? We'd love to hear from you.</p>
            </div>
            <div className="contact-info">
              <p>Email: <a href="mailto:support@saksin.online">support@saksin.online</a></p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
