"use client";
import ErrorPage from '../../components/ErrorPage';

export default function GlobalError({ error, reset }) {
  // Detect offline
  const isOffline = typeof navigator !== 'undefined' && !navigator.onLine;
  if (isOffline) {
    return <ErrorPage errorType="offline" />;
  }
  // 500 or other error
  return <ErrorPage statusCode={500} />;
}
