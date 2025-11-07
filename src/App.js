const { useState } = React;

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

// Render app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
