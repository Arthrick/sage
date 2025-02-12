import React, { lazy, Suspense, useState, useEffect, useCallback, useMemo } from 'react';

const SplineViewer = lazy(() => import('spline-viewer'));

function Root2() {
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
      <SplineViewer url={splineViewerUrl} />
    );
  }, [splineViewerUrl]);

  return (
    <div className="root2">
      <Suspense fallback={<div>Cargando...</div>}>
        {memoizedSplineViewer}
      </Suspense>
    </div>
  );
}

export default Root2;
