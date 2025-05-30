// src/app/country/[country]/essentials/page.js
export default async function EssentialsPage({ params }) {
  const resolvedParams = await params;
  const { country } = resolvedParams;

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

  const embassyContacts = [
    {
      name: "US Embassy",
      address: "24 Rue Gabriel, 75008 Paris, France",
      phone: "+33 1 43 12 22 22",
      email: "paris@usembassy.gov",
      hours: "Mon-Fri 9am-5pm"
    },
    {
      name: "UK Embassy",
      address: "35 Rue du Faubourg Saint-Honoré, 75008 Paris, France",
      phone: "+33 1 44 51 31 00",
      email: "info.paris@fco.gov.uk",
      hours: "Mon-Fri 9am-5pm"
    },
    {
      name: "Indian Embassy",
      address: "15 Rue Alfred Dehodencq, 75016 Paris, France",
      phone: "+33 1 40 50 70 70",
      email: "cons.paris@mea.gov.in",
      hours: "Mon-Fri 9am-5pm"
    }
  ];

  // Country-specific safety concerns (sample data)
  let safetyConcerns = [];
  switch (country.toLowerCase()) {
    case 'france':
      safetyConcerns = [
        "Beware of pickpockets, especially in tourist areas and public transport.",
        "Protests and strikes can disrupt travel; check local news.",
        "Watch for scams around major landmarks (e.g., fake petitions, friendship bracelets).",
        "Emergency sirens are tested the first Wednesday of each month at noon.",
        "Some areas may have heightened security due to terrorism alerts."
      ];
      break;
    case 'india':
      safetyConcerns = [
        "Traffic can be chaotic; use official taxis or ride-shares.",
        "Drink only bottled or filtered water.",
        "Beware of scams at tourist sites and transport hubs.",
        "Women travelers should avoid isolated areas after dark.",
        "Air quality can be poor in major cities during winter."
      ];
      break;
    case 'japan':
      safetyConcerns = [
        "Earthquakes are possible; know evacuation routes.",
        "Crime is low, but take care with valuables in crowded places.",
        "Typhoon season is June to October; monitor weather alerts.",
        "Smoking is restricted in many public areas.",
        "Always carry cash, as some places do not accept cards."
      ];
      break;
    case 'usa':
      safetyConcerns = [
        "Gun violence can occur; follow local advice in emergencies.",
        "Healthcare is expensive; ensure you have travel insurance.",
        "Natural disasters (hurricanes, wildfires, tornadoes) are possible depending on region.",
        "Petty theft can occur in tourist hotspots.",
        "Obey all traffic laws and signals strictly."
      ];
      break;
    default:
      safetyConcerns = [
        "Stay aware of your surroundings, especially in crowded places.",
        "Keep emergency numbers handy.",
        "Follow local laws and customs.",
        "Monitor local news for any travel advisories."
      ];
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#f5fafd] to-[#e3f2fd] py-0 animate-fade-in">
      {/* Hero Header */}
      <div className="w-full bg-gradient-to-r from-[#38bdf8] via-[#2ad2c9] to-[#5eead4] text-white px-0 py-12 flex flex-col items-center justify-center shadow-xl relative animate-fade-in-up overflow-hidden">
        {/* Removed hero decor image as per requirements */}
        <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
          <div className="flex items-center justify-center w-24 h-24 rounded-2xl bg-white/20 border-4 border-white/30 shadow-lg mb-4">
            <span className="text-6xl">🌏</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display mb-3 drop-shadow text-center animate-fade-in-up">Travel Essentials</h1>
          <p className="text-white/90 max-w-2xl text-lg font-medium drop-shadow-sm text-center animate-fade-in-up delay-200">
            Offline emergency information, embassy contacts, and safety tips for <span className="capitalize font-bold underline underline-offset-4">{country}</span>.
          </p>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="w-full max-w-4xl mx-auto px-2 md:px-8 py-10 flex flex-col gap-10 animate-fade-in stagger-children">
        {/* Emergency Contacts Section */}
        <section className="bg-white/90 p-8 rounded-3xl shadow-md border-l-8 border-teal-400 animate-fade-in-up card-hover">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-teal-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className="mr-3 h-7 w-7 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Emergency Contacts
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {essentials.map(({ service, number }, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-4 shadow-sm hover:bg-teal-50 transition border border-gray-100"
              >
                <span className="font-semibold capitalize text-gray-800 flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20"><path d='M16.707 6.293a1 1 0 00-1.414 0L9 12.586 6.707 10.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 00-1.414-1.414z' /></svg>
                  {service}
                </span>
                <a href={`tel:${number}`} className="text-teal-600 font-bold text-lg hover:underline">{number}</a>
              </li>
            ))}
          </ul>
        </section>

        {/* Divider */}
        <div className="w-full flex justify-center animate-fade-in"><div className="w-2/3 h-0.5 bg-gradient-to-r from-[#2ad2c9] via-[#38bdf8] to-[#5eead4] rounded-full opacity-40" /></div>

        {/* Embassy Contacts Section */}
        <section className="bg-white/90 p-8 rounded-3xl shadow-md border-l-8 border-blue-400 animate-fade-in-up card-hover">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className="mr-3 h-7 w-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7L3 9h7z"/></svg>
            Embassy Contacts
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {embassyContacts.map((embassy, idx) => (
              <li key={idx} className="bg-gray-50 rounded-xl px-5 py-4 flex flex-col gap-2 shadow-sm hover:bg-blue-50 transition border border-gray-100">
                <div className="font-bold text-gray-800 text-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d='M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V7h2v3z' /></svg>
                  {embassy.name}
                </div>
                <div className="text-gray-500 text-sm mb-1">{embassy.address}</div>
                <div className="text-gray-500 text-sm">Hours: {embassy.hours}</div>
                <div className="flex flex-col gap-1 mt-1">
                  <a href={`tel:${embassy.phone}`} className="text-blue-600 font-semibold hover:underline">{embassy.phone}</a>
                  <a href={`mailto:${embassy.email}`} className="text-blue-500 text-sm hover:underline">{embassy.email}</a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Divider */}
        <div className="w-full flex justify-center animate-fade-in"><div className="w-2/3 h-0.5 bg-gradient-to-r from-[#facc15] via-[#fde68a] to-[#fef9c3] rounded-full opacity-40" /></div>

        {/* Safety Concerns Section */}
        <section className="bg-yellow-50/90 p-8 rounded-3xl shadow-md border-l-8 border-yellow-400 animate-fade-in-up card-hover">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-yellow-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className="mr-3 h-7 w-7 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            Safety Concerns
          </h2>
          <ul className="space-y-4">
            {safetyConcerns.map((tip, idx) => (
              <li key={idx} className="text-yellow-900 text-base flex items-start gap-3">
                <svg className="w-5 h-5 mt-1 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d='M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7h2v2h-2v-2zm0-4h2v3h-2V7z' /></svg>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}