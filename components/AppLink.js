import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLoader } from './LoaderContext';

const AppLink = ({ href, children, ...props }) => {
  const { setShow } = useLoader();
  const pathname = usePathname();
  const isSameRoute = pathname === href || (href === '/' && pathname === '/');

  return (
    <Link
      href={href}
      {...props}
      onClick={e => {
        if (!isSameRoute) {
          setShow(true);
        }
        if (props.onClick) props.onClick(e);
      }}
    >
      {children}
    </Link>
  );
};

export default AppLink;
