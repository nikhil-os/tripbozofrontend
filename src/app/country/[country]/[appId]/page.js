import { fetchAppsByCountry } from '@/utils/api';
import Image from 'next/image';

export default async function QRDownloadPage({ params }) {
  const { country, appid } = params;
  const apps = await fetchAppsByCountry(country);
  const app = apps.find(app => app.id === parseInt(appid));

  if (!app) {
    return <div className="p-6 text-center text-red-500">App not found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">{app.name}</h1>
      <p className="text-center text-gray-600 mb-4">{app.description}</p>

      <Image
        src="/dummy-qr.png"
        alt={`QR Code for ${app.name}`}
        width={200}
        height={200}
        className="mb-4"
      />

      <p className="text-sm text-gray-500">Scan to download {app.name}</p>
    </div>
  );
}
