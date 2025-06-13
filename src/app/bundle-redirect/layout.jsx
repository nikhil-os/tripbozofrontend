// app/bundle-redirect/layout.jsx
export const metadata = {
  title: "Your Travel App Bundle • TripBozo",
};

export default function BundleRedirectLayout({ children }) {
  return (
    <html lang="en">
       <head>
        {/* Hide the global Navbar & Footer via CSS overrides */}
        <style>{`
          /* assuming your Navbar renders <nav id="navbar"> or has .navbar class,
             and Footer similarly has #footer or .footer */
          nav, footer {
            display: none !important;
          }
        `}</style>
      </head>
      <body className="bg-white antialiased">
        {children}
      </body>
    </html>
  );
}
