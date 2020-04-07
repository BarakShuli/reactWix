import React, { lazy, Suspense } from 'react';

const LazywidgetNavBar = lazy(() => import('./widgetNavBar'));

const widgetNavBar = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazywidgetNavBar {...props} />
  </Suspense>
);

export default widgetNavBar;
