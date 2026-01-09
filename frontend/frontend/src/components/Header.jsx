import { Link } from 'react-router-dom';
import { FiLink } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <FiLink className="logo-icon" />
          <span>URLShortener</span>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/features" className="nav-link">Features</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
