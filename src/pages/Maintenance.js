const Maintenance = () => {
  return (
    <div className="maintenance-container">
      {/* Left side - Image */}
      <div className="maintenance-image-section">
        <img src="src/img/cover/placeholder.jpg" alt="Coming Soon" className="maintenance-image" />
      </div>
      
      {/* Right side - Content */}
      <div className="maintenance-content-section">
        <div className="maintenance-content">
          <div className="maintenance-icon">
            <i data-lucide="wrench"></i>
          </div>
          <h1 className="maintenance-title">Crafting Something Extraordinary</h1>
          <p className="maintenance-subtitle">Our digital workshop is buzzing with creativity</p>
          <div className="maintenance-progress">
            <div className="progress-bar"></div>
          </div>
          <p className="maintenance-footer">Be back soon with a fresh new look</p>
        </div>
      </div>
    </div>
  );
};

