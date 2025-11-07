const { useState, useEffect } = React;

const Router = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  // Expose navigate globally
  window.navigate = navigate;

  const routes = {
    '/': Home,
    '/portfolio': Portfolio,
    '/cv': CV,
    '/about': AboutMe,
    '/contact': Contact,
  };

  const Component = routes[currentPath] || Home;

  return <Component />;
};
