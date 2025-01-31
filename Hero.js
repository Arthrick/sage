import React, { useState, useEffect } from 'react';
import SplineViewer from '@splinetool/viewer';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadSplineViewer = async () => {
      await import('@splinetool/viewer');
      setLoaded(true);
    };
    loadSplineViewer();
  }, []);

  return (
    <div className="hero">
      {loaded && (
        <SplineViewer url="https://prod.spline.design/1mvT0qRXyqZRH4yo/scene.splinecode" />
      )}
    </div>
  );
};

export default Hero;