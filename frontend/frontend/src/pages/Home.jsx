import SEO from '../components/SEO';
import UrlShortenerForm from '../components/UrlShortenerForm';
import FeatureCard from '../components/FeatureCard';
import { FiZap, FiShield, FiLink2, FiBarChart2, FiGlobe, FiSmartphone } from 'react-icons/fi';

const Home = () => {
  const features = [
    {
      icon: FiZap,
      title: 'Lightning Fast',
      description: 'Shorten URLs instantly with our high-performance servers. No waiting, no delays.'
    },
    {
      icon: FiShield,
      title: 'Secure & Reliable',
      description: 'Your links are safe with us. We use industry-standard security protocols.'
    },
    {
      icon: FiLink2,
      title: 'Easy to Use',
      description: 'Simply paste your long URL and get a short link in seconds. No signup required.'
    },
    {
      icon: FiBarChart2,
      title: 'Analytics Ready',
      description: 'Track your link performance with detailed analytics and insights.'
    },
    {
      icon: FiGlobe,
      title: 'Custom Domains',
      description: 'Use your own custom domain for branded short links.'
    },
    {
      icon: FiSmartphone,
      title: 'Mobile Friendly',
      description: 'Works perfectly on all devices - desktop, tablet, and mobile.'
    }
  ];

  return (
    <>
      <SEO 
        title="URL Shortener - Shorten Your Links Instantly | Free & Fast"
        description="Free URL shortener to create short links. Make your long URLs shorter, trackable, and shareable. Fast, reliable, and easy to use. No signup required!"
        keywords="url shortener, link shortener, short url, tiny url, shorten link, free url shortener, custom short links"
      />
      
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Shorten Your Links,
                <span className="gradient-text"> Expand Your Reach</span>
              </h1>
              <p className="hero-subtitle">
                Transform long, messy URLs into short, shareable links in seconds. 
                Free, fast, and incredibly simple.
              </p>
              
              <UrlShortenerForm />
              
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">1M+</span>
                  <span className="stat-label">Links Created</span>
                </div>
                <div className="stat">
                  <span className="stat-number">99.9%</span>
                  <span className="stat-label">Uptime</span>
                </div>
                <div className="stat">
                  <span className="stat-number">150+</span>
                  <span className="stat-label">Countries</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features" id="features">
          <div className="container">
            <div className="section-header">
              <h2>Why Choose Us?</h2>
              <p>Powerful features to help you manage and share your links effectively</p>
            </div>
            
            <div className="features-grid">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works">
          <div className="container">
            <div className="section-header">
              <h2>How It Works</h2>
              <p>Three simple steps to shorten your URLs</p>
            </div>
            
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Paste Your URL</h3>
                <p>Enter your long URL in the input field above</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Click Shorten</h3>
                <p>Our system generates a unique short link instantly</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Share Everywhere</h3>
                <p>Copy and share your new short link anywhere</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Shorten Your First Link?</h2>
              <p>Join millions of users who trust us with their links</p>
              <a href="#top" className="btn btn-primary btn-lg">Get Started Free</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
