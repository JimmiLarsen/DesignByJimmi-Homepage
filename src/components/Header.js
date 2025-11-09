const { useState, useEffect } = React;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [themeExpanded, setThemeExpanded] = useState(false);
  const [themePulsing, setThemePulsing] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    // Opening animation sequence
    // Step 1: Expand the menu after 500ms
    setTimeout(() => {
      setThemeExpanded(true);
    }, 500);
    
    // Step 2: Start pulsing for 3 seconds (3 pulses)
    // Pulse animation continues via CSS
    
    // Step 3: Collapse the menu BEFORE pulsing stops
    setTimeout(() => {
      setThemeExpanded(false);
    }, 2800);
    
    // Step 4: Stop pulsing after menu is collapsed
    setTimeout(() => {
      setThemePulsing(false);
    }, 3500);
  }, []);

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

  useEffect(() => {
    // Re-initialize icons when darkMode changes
    if (window.lucide) {
      // Use requestAnimationFrame to wait for DOM to fully update
      requestAnimationFrame(() => {
        window.lucide.createIcons();
      });
    }
  }, [darkMode]);

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

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleThemeExpanded = () => {
    console.log('Toggle clicked, current state:', themeExpanded);
    setThemeExpanded(!themeExpanded);
    console.log('New state will be:', !themeExpanded);
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

      {/* Theme Toggle Container - pulser og forsvinder */}
      <div className={`theme-toggle-container ${themePulsing ? 'theme-toggle-pulsing' : ''} ${themeExpanded ? 'theme-toggle-expanded' : 'theme-toggle-collapsed'}`}>
        {/* Top row - de 2 knapper ved siden af hinanden */}
        <div className="theme-buttons-row">
          {/* Pil knap - viser tally-2 ikon */}
          <button 
            className="theme-arrow-btn"
            onClick={toggleThemeExpanded}
            aria-label={themeExpanded ? "Close theme menu" : "Open theme menu"}
          >
            <i data-lucide="tally-2"></i>
          </button>
          
          {/* Mode Changer knap - kun synlig når udvidet */}
          <div className="theme-mode-wrapper">
            <button 
              className="theme-mode-btn"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              <i data-lucide={darkMode ? "sun" : ""}></i>
              <span className="theme-toggle-text">{darkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </div>
        </div>
        
        {/* Hint tekst - under knapperne */}
        <div className="theme-hint-wrapper">
          <div className="theme-hint">
            <span className="theme-hint-text">Change mode here:</span>
            <i data-lucide="corner-right-up"></i>
            </div>
          </div>
        </div>

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
