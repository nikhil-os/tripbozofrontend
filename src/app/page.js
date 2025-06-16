import HomePage from '@/components/homepage/HomePage';

export const metadata = {
  title: 'Trip Bozo | Your Essential Travel App Companion',
  description: 'Trip Bozo curates the perfect app bundle for every traveler\'s needs. Discover essential travel apps for navigation, communication, and local experiences.',
  alternates: {
    canonical: 'https://tripbozo.com',
  },
  openGraph: {
    title: 'Trip Bozo | Your Essential Travel App Companion',
    description: 'Discover curated travel app bundles tailored to your destination. Navigate, communicate, and explore with confidence.',
  }
};

export default function Page() {
  return <HomePage />;
}
