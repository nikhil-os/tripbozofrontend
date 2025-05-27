// src/app/country/[country]/essentials/page.js
export default function EssentialsPage({ params }) {
  const { country } = params;

  const essentials = [
    { service: "Police", number: "100" },
    { service: "Fire Brigade", number: "101" },
    { service: "Ambulance", number: "102" },
    { service: "Women Safety Helpline", number: "1091" },
    { service: "Child Helpline", number: "1098" },
    { service: "Disaster Management", number: "108" },
    { service: "Tourist Helpline", number: "1363" },
    { service: "Road Assistance", number: "1073" },
    { service: "Coast Guard", number: "1554" },
    { service: "Cyber Crime", number: "155260" },
    { service: "Anti Poison", number: "1066" },
    { service: "Railway Enquiry", number: "139" },
    { service: "Airline Enquiry", number: "1800-180-1407" },
    { service: "Taxi Services", number: "1800-123-4567" },
    { service: "General Emergency", number: "112" },
  ];

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 md:px-8">
      <div className="bg-teal-600 text-white p-6 rounded-3xl mb-8 shadow-lg flex flex-col md:flex-row items-center gap-4">
        <span className="text-4xl">🌏</span>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-display mb-1">Travel Essentials</h1>
          <p className="text-white/80 max-w-xl text-base">
            Offline emergency information and essential tips for <span className="capitalize">{country}</span>. Install as a PWA to access offline.
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-md border-l-4 border-teal-400 mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center text-teal-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2 h-5 w-5 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          Emergency Contacts
        </h2>
        <ul className="space-y-3">
          {essentials.map(({ service, number }, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b last:border-b-0 pb-3 last:pb-0 bg-gray-50 rounded-xl px-4 py-3"
            >
              <span className="font-semibold capitalize text-gray-800">{service}</span>
              <a href={`tel:${number}`} className="text-teal-600 font-bold text-lg hover:underline">{number}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}