const { useState } = React;

function App() {
  // Check maintenance mode
  if (config.maintenanceMode) {
    return <Maintenance />;
  }

  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

// Render app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
