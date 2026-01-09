import { useState } from 'react';
import { FiLink, FiCopy, FiCheck, FiExternalLink } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { createShortUrl, isValidUrl } from '../services/urlService';

const UrlShortenerForm = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [shortCode, setShortCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate URL
    if (!originalUrl.trim()) {
      toast.error('Please enter a URL');
      return;
    }

    // Add protocol if missing
    let urlToShorten = originalUrl.trim();
    if (!urlToShorten.startsWith('http://') && !urlToShorten.startsWith('https://')) {
      urlToShorten = 'https://' + urlToShorten;
    }

    if (!isValidUrl(urlToShorten)) {
      toast.error('Please enter a valid URL');
      return;
    }

    setIsLoading(true);
    try {
      const result = await createShortUrl(urlToShorten);
      setShortUrl(result.shortUrl);
      setShortCode(result.shortCode);
      toast.success('URL shortened successfully!');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      toast.success('Copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Failed to copy');
    }
  };

  const handleReset = () => {
    setOriginalUrl('');
    setShortUrl('');
    setShortCode('');
    setCopied(false);
  };

  return (
    <div className="url-shortener-form">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <FiLink className="input-icon" />
          <input
            type="text"
            placeholder="Enter your long URL here..."
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            disabled={isLoading}
            aria-label="URL to shorten"
          />
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loading-spinner"></span>
            ) : (
              'Shorten'
            )}
          </button>
        </div>
      </form>

      {shortUrl && (
        <div className="result-container">
          <div className="result-box">
            <div className="result-header">
              <span className="result-label">Your shortened URL:</span>
              <button 
                className="btn btn-secondary btn-sm"
                onClick={handleReset}
              >
                Shorten Another
              </button>
            </div>
            
            <div className="result-url-group">
              <a 
                href={shortUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="short-url"
              >
                {shortUrl}
                <FiExternalLink className="external-icon" />
              </a>
              
              <button 
                className={`btn btn-copy ${copied ? 'copied' : ''}`}
                onClick={handleCopy}
                aria-label="Copy to clipboard"
              >
                {copied ? <FiCheck /> : <FiCopy />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            
            <div className="result-info">
              <span className="info-item">
                <strong>Short Code:</strong> {shortCode}
              </span>
              <span className="info-item">
                <strong>Original:</strong> 
                <a href={originalUrl} target="_blank" rel="noopener noreferrer" className="original-url-link">
                  {originalUrl.length > 50 ? originalUrl.substring(0, 50) + '...' : originalUrl}
                </a>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlShortenerForm;
