const Footer = () => {
  const handleNavClick = (e, path) => {
    e.preventDefault();
    if (window.navigate) {
      window.navigate(path);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          {/* <img src="src/img/logo/logo.png" alt="DesignByJimmi Logo" /> */}
          <span className="logo-text">Logo</span>
        </div>
        
        <nav className="footer-nav">
          <a href="/" onClick={(e) => handleNavClick(e, '/')} className="footer-link">Home</a>
          <a href="/portfolio" onClick={(e) => handleNavClick(e, '/portfolio')} className="footer-link">Portfolio</a>
          <a href="/about" onClick={(e) => handleNavClick(e, '/about')} className="footer-link">About Me</a>
          <a href="/cv" onClick={(e) => handleNavClick(e, '/cv')} className="footer-link">My CV</a>
          <a href="/contact" onClick={(e) => handleNavClick(e, '/contact')} className="footer-link">Contact</a>
          <a href="/privacy" onClick={(e) => handleNavClick(e, '/privacy')} className="footer-link">Privacy Policy</a>
        </nav>
        
        <div className="footer-copyright">
          <p>&copy; 2025 DesignByJimmi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
