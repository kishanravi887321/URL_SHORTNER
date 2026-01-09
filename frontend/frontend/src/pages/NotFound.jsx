import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { FiHome, FiSearch } from 'react-icons/fi';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="404 - Page Not Found | URL Shortener"
        description="The page you're looking for doesn't exist. Go back to the homepage to shorten your URLs."
      />
      
      <main className="main-content">
        <section className="not-found">
          <div className="container">
            <div className="not-found-content">
              <h1 className="not-found-code">404</h1>
              <h2>Oops! Page Not Found</h2>
              <p>
                The page you're looking for doesn't exist or has been moved. 
                Don't worry, let's get you back on track!
              </p>
              <div className="not-found-actions">
                <Link to="/" className="btn btn-primary">
                  <FiHome /> Go Home
                </Link>
                <Link to="/features" className="btn btn-secondary">
                  <FiSearch /> View Features
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NotFound;
