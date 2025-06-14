// This component listens for route changes and hides the loader when navigation completes.
'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLoader } from './LoaderContext';

export default function LoaderRouteListener() {
  const pathname = usePathname();
  const { setShow } = useLoader();

  useEffect(() => {
    // Hide the loader when the route changes (navigation complete)
    setShow(false);
    // eslint-disable-next-line
  }, [pathname]);

  return null;
}
