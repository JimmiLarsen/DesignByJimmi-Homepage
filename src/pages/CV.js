const { useState, useEffect } = React;

const CV = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    // Initialize Lucide icons after render
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [currentPage]);

  const turnPage = () => {
    setCurrentPage(1);
  };

  const turnBack = () => {
    setCurrentPage(0);
  };

  return (
    <div className="cv-page">
      <div className="cv-book-wrapper">
        
        <div className="cv-physical-book">
          
          {/* Den side der flipper - starter på venstre */}
          <div className={`cv-page-flip ${currentPage === 1 ? 'flipped' : ''}`}>
            {/* Forside (før flip) */}
            <div className="cv-page-front">
              <div className="cv-page-content-left">
                <div className="cv-cover">
                  <div className="cv-logo">
                    {/* <img src="src/img/logo/logo.png" alt="Logo" /> */}
                    <span className="logo-text">Logo</span>
                  </div>
                  <h1>My CV</h1>
                </div>
                <button className="cv-turn-btn" onClick={turnPage}>
                  <i data-lucide="chevron-right"></i>
                </button>
              </div>
            </div>
            
            {/* Bagside (efter flip) */}
            <div className="cv-page-back">
              <div className="cv-page-content-right">
                <button className="cv-turn-btn cv-turn-back" onClick={turnBack}>
                  <i data-lucide="chevron-left"></i>
                </button>
                <h2>Side 2</h2>
                <p>Venstre bagside</p>
              </div>
            </div>
          </div>

          {/* Højre side - fast/statisk */}
          <div className="cv-page-static cv-page-right">
            <div className="cv-page-content-right">
              <div className="cv-content">
                <h2>Om Mig</h2>
                <p>Dette er højre side - fast.</p>
                <p>Her kan du tilføje information om din erfaring, uddannelse, og kompetencer.</p>
                <ul>
                  <li>Erfaring 1</li>
                  <li>Erfaring 2</li>
                  <li>Erfaring 3</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
      
      <div className="cv-page-indicator">
        <span className={currentPage === 0 ? 'active' : ''}>Forside</span>
        <span className={currentPage === 1 ? 'active' : ''}>Side 2-3</span>
      </div>
    </div>
  );
};
