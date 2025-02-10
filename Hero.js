import React, { lazy, Suspense, useState, useEffect, useCallback, useMemo } from 'react';

const SplineViewer = lazy(() => import('spline-viewer'));

function Hero() {
  const [loading, setLoading] = useState(true);
  const [splineViewerUrl, setSplineViewerUrl] = useState('https://prod.spline.design/1mvT0qRXyqZRH4yo/scene.splinecode');

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleSplineViewerUrlChange = useCallback((newUrl) => {
    setSplineViewerUrl(newUrl);
  }, []);

  const memoizedSplineViewer = useMemo(() => {
    return (
      <SplineViewer url={splineViewerUrl} />
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
