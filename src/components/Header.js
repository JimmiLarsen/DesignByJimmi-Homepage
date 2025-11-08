const { useState, useEffect } = React;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled down
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check if scrolled 30% down the page
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 30) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // Check if near footer
      const footer = document.querySelector('.footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (footerTop <= windowHeight) {
          setIsNearFooter(true);
        } else {
          setIsNearFooter(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initialize Lucide icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Re-initialize icons after render
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });

  const handleNavClick = (e, path) => {
    e.preventDefault();
    if (window.navigate) {
      window.navigate(path);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Main Header */}
      <header className={`header ${isScrolled ? 'header-hidden' : ''}`}>
        <div className="header-content">
          <a href="/" onClick={(e) => handleNavClick(e, '/')} className="logo">
            {/* <img src="src/img/logo/logo.png" alt="DesignByJimmi Logo" /> */}
            <span className="logo-text">Logo</span>
          </a>
          
          <nav className="nav">
            <a href="/portfolio" onClick={(e) => handleNavClick(e, '/portfolio')} className="nav-link">Portfolio</a>
            <a href="/about" onClick={(e) => handleNavClick(e, '/about')} className="nav-link">About Me</a>
            <a href="/cv" onClick={(e) => handleNavClick(e, '/cv')} className="nav-link">My CV</a>
            <a href="/contact" onClick={(e) => handleNavClick(e, '/contact')} className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* Mini Navigation - vises når scrollet, skjules ved footer */}
      <div className={`mini-nav ${isScrolled && !isNearFooter ? 'mini-nav-visible' : ''}`}>
        <a href="/portfolio" onClick={(e) => handleNavClick(e, '/portfolio')} className="mini-nav-item">
          <i data-lucide="briefcase"></i>
          <span className="mini-nav-text">Portfolio</span>
        </a>
        <a href="/about" onClick={(e) => handleNavClick(e, '/about')} className="mini-nav-item">
          <i data-lucide="user"></i>
          <span className="mini-nav-text">About</span>
        </a>
        <a href="/cv" onClick={(e) => handleNavClick(e, '/cv')} className="mini-nav-item">
          <i data-lucide="file-text"></i>
          <span className="mini-nav-text">CV</span>
        </a>
        <a href="/contact" onClick={(e) => handleNavClick(e, '/contact')} className="mini-nav-item">
          <i data-lucide="mail"></i>
          <span className="mini-nav-text">Contact</span>
        </a>
      </div>

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'back-to-top-visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i data-lucide="arrow-up"></i>
      </button>
    </>
  );
};
