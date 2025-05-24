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
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Essential Contacts for {country}</h1>
      <ul className="space-y-3">
        {essentials.map(({ service, number }, index) => (
          <li
            key={index}
            className="border rounded-lg p-4 shadow-sm flex justify-between items-center bg-white text-black"
          >
            <span className="font-semibold">{service}</span>
            <span className="text-gray-700">{number}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
