// src/hooks/useGTMPageView.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const UseGTMPageView = () => {
  const location = useLocation();

  useEffect(() => {
    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    window.dataLayer.push({
      event: 'pageview',
      page: location.pathname + location.search,
    });
  }, [location]);
};

export default UseGTMPageView;
