const { useState, useEffect } = React;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
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

  return (
    <>
      {/* Main Header */}
      <header className="header">
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

      {/* Mini Navigation - vises når scrollet */}
      <div className={`mini-nav ${isScrolled ? 'mini-nav-visible' : ''}`}>
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
    </>
  );
};
