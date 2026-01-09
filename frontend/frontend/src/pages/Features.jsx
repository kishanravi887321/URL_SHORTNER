import SEO from '../components/SEO';
import FeatureCard from '../components/FeatureCard';
import { 
  FiZap, FiShield, FiLink2, FiBarChart2, FiGlobe, 
  FiSmartphone, FiClock, FiShare2, FiLock, FiRefreshCw,
  FiTrendingUp, FiUsers
} from 'react-icons/fi';

const Features = () => {
  const allFeatures = [
    {
      icon: FiZap,
      title: 'Instant URL Shortening',
      description: 'Generate short URLs in milliseconds with our optimized infrastructure. No delays, just results.'
    },
    {
      icon: FiShield,
      title: 'Enterprise-Grade Security',
      description: 'SSL encryption, spam protection, and malware scanning keep your links and users safe.'
    },
    {
      icon: FiLink2,
      title: 'Custom Short Links',
      description: 'Create memorable, branded short URLs that reflect your identity and are easy to share.'
    },
    {
      icon: FiBarChart2,
      title: 'Detailed Analytics',
      description: 'Track clicks, geographic data, referrers, and devices to understand your audience better.'
    },
    {
      icon: FiGlobe,
      title: 'Custom Domains',
      description: 'Use your own domain for complete brand consistency across all your shortened links.'
    },
    {
      icon: FiSmartphone,
      title: 'Mobile Optimized',
      description: 'Fully responsive design ensures perfect functionality across all devices and screen sizes.'
    },
    {
      icon: FiClock,
      title: 'Link Expiration',
      description: 'Set expiration dates on your links for time-sensitive campaigns and promotions.'
    },
    {
      icon: FiShare2,
      title: 'Easy Sharing',
      description: 'One-click sharing to social media platforms and instant copy to clipboard functionality.'
    },
    {
      icon: FiLock,
      title: 'Password Protection',
      description: 'Add password protection to your links for exclusive content and private sharing.'
    },
    {
      icon: FiRefreshCw,
      title: 'Link Editing',
      description: 'Update the destination URL anytime without changing your short link.'
    },
    {
      icon: FiTrendingUp,
      title: 'API Access',
      description: 'Integrate our powerful URL shortening capabilities into your own applications.'
    },
    {
      icon: FiUsers,
      title: 'Team Collaboration',
      description: 'Work together with your team to manage and track links in one central dashboard.'
    }
  ];

  return (
    <>
      <SEO 
        title="Features - URL Shortener | Powerful Link Management Tools"
        description="Discover all the powerful features of our URL shortener. Custom domains, analytics, link expiration, password protection, and more."
        keywords="url shortener features, link management, custom domains, link analytics, short url features"
        canonicalUrl="https://urlshortner.saksin.online/features"
      />
      
      <main className="main-content">
        {/* Hero Section */}
        <section className="page-hero">
          <div className="container">
            <h1>Powerful Features</h1>
            <p>Everything you need to create, manage, and track your shortened URLs</p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="features-page">
          <div className="container">
            <div className="features-grid">
              {allFeatures.map((feature, index) => (
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

        {/* Comparison Section */}
        <section className="comparison">
          <div className="container">
            <div className="section-header">
              <h2>Why We're Different</h2>
              <p>See how we compare to other URL shorteners</p>
            </div>
            
            <div className="comparison-table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="highlight">URLShortener</th>
                    <th>Others</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Free Short Links</td>
                    <td className="highlight">✓ Unlimited</td>
                    <td>Limited</td>
                  </tr>
                  <tr>
                    <td>Custom Domains</td>
                    <td className="highlight">✓ Included</td>
                    <td>Paid Add-on</td>
                  </tr>
                  <tr>
                    <td>Link Analytics</td>
                    <td className="highlight">✓ Detailed</td>
                    <td>Basic</td>
                  </tr>
                  <tr>
                    <td>API Access</td>
                    <td className="highlight">✓ Free</td>
                    <td>Premium Only</td>
                  </tr>
                  <tr>
                    <td>No Ads</td>
                    <td className="highlight">✓ Always</td>
                    <td>With Premium</td>
                  </tr>
                  <tr>
                    <td>Link Expiration</td>
                    <td className="highlight">✓ Free</td>
                    <td>Paid Feature</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Features;
