const Home = () => {
  return (
    <div className="home">
      <h1>Home Side</h1>
      <p>Du er nu på forsiden</p>
      <p>Scroll ned for at se header-animationen</p>
      
      {/* Dummy content til at teste scroll */}
      <div style={{ height: '200vh' }}>
        <div style={{ marginTop: '100vh' }}>
          <h2>Scroll tilbage op for at se headeren igen</h2>
        </div>
      </div>
    </div>
  );
};
