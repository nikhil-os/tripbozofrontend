import AboutPageClient from '@/components/about/AboutPageClient';

export const metadata = {
  title: 'About Trip Bozo | Your Essential Travel App Companion',
  description: 'Learn about Trip Bozo, the app that curates travel app bundles tailored to your destination. Discover our mission, features, and how we help travelers worldwide.',
  alternates: {
    canonical: 'https://tripbozo.com/About',
  },
  openGraph: {
    title: 'About Trip Bozo | Your Essential Travel App Companion',
    description: 'Learn about Trip Bozo, the app that curates travel app bundles tailored to your destination. Discover our mission, features, and how we help travelers worldwide.',
  }
};

export default function AboutPage() {
  return <AboutPageClient />;
}