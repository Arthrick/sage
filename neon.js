import React, { lazy, Suspense, useState, useEffect, useCallback, useMemo } from 'react';

const SplineViewer = lazy(() => import('spline-viewer'));

function Hero() {
  const [loading, setLoading] = useState(true);
  const [splineViewerUrl, setSplineViewerUrl] = useState('https://prod.spline.design/wl3gHK1lq7-sv9mz/scene.splinecode');

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleSplineViewerUrlChange = useCallback((newUrl) => {
    setSplineViewerUrl(newUrl);
  }, []);

  const memoizedSplineViewer = useMemo(() => {
    return (
      <SplineViewer
        style={{ width: '100%', height: '100vh' }}
        url={splineViewerUrl}
      />
    );
  }, [splineViewerUrl]);

  return (
    <div className="hero">
      <Suspense fallback={<div>Cargando...</div>}>
        {memoizedSplineViewer}
      </Suspense>
    </div>
  );
}

export default Hero;