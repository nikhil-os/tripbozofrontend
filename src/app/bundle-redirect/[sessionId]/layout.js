// app/bundle-redirect/[sessionId]/layout.jsx
export const metadata = {
    title: 'Your App Bundle • TripBozo',
  };
  
  export default function BundleRedirectLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }
  