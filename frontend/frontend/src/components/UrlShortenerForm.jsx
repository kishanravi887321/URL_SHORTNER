import { useState } from 'react';
import { FiLink, FiCopy, FiCheck, FiExternalLink, FiArrowRight, FiRefreshCw, FiCheckCircle } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { createShortUrl, isValidUrl } from '../services/urlService';

const UrlShortenerForm = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
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
    setCopied(false);
  };

  return (
    <div className="url-shortener-form">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <FiLink className="input-icon" />
          <input
            type="text"
            placeholder="Paste your long URL here..."
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            disabled={isLoading || shortUrl}
            aria-label="URL to shorten"
          />
          {!shortUrl && (
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loading-spinner"></span>
              ) : (
                <>
                  Shorten
                  <FiArrowRight className="btn-icon" />
                </>
              )}
            </button>
          )}
        </div>
      </form>

      {shortUrl && (
        <div className="result-container">
          <div className="result-card">
            <div className="result-success-badge">
              <FiCheckCircle />
              <span>Link Created Successfully!</span>
            </div>
            
            <div className="result-main">
              <div className="result-url-wrapper">
                <span className="result-label">Your Short Link</span>
                <div className="result-url-box">
                  <a 
                    href={shortUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="short-url"
                  >
                    {shortUrl}
                  </a>
                  <button 
                    className={`btn-icon-copy ${copied ? 'copied' : ''}`}
                    onClick={handleCopy}
                    aria-label="Copy to clipboard"
                  >
                    {copied ? <FiCheck /> : <FiCopy />}
                  </button>
                </div>
              </div>
              
              <button 
                className={`btn btn-copy-main ${copied ? 'copied' : ''}`}
                onClick={handleCopy}
              >
                {copied ? (
                  <>
                    <FiCheck />
                    Copied!
                  </>
                ) : (
                  <>
                    <FiCopy />
                    Copy Link
                  </>
                )}
              </button>
            </div>

            <div className="result-footer">
              <div className="original-url-display">
                <span className="original-label">Original URL:</span>
                <a 
                  href={originalUrl.startsWith('http') ? originalUrl : `https://${originalUrl}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="original-url-link"
                >
                  {originalUrl.length > 60 ? originalUrl.substring(0, 60) + '...' : originalUrl}
                  <FiExternalLink />
                </a>
              </div>
              
              <button 
                className="btn btn-new-link"
                onClick={handleReset}
              >
                <FiRefreshCw />
                Shorten Another
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlShortenerForm;
