"use client";

import { useMemo, useState } from 'react';

type Tier = 'Essential' | 'Elite';

const members: Record<string, { name: string; tier: Tier; points: number }> = {
  essential: { name: 'Essential Member', tier: 'Essential', points: 100 },
  elite: { name: 'Elite Member', tier: 'Elite', points: 500 }
};

export default function MemberPage() {
  const [username, setUsername] = useState('elite');
  const [loggedIn, setLoggedIn] = useState(false);
  const [member, setMember] = useState(members.elite);
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [category, setCategory] = useState('all');
  const [results, setResults] = useState<any[]>([]);
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const credit = useMemo(() => `$${member.points}`, [member.points]);

  function login(e: React.FormEvent) {
    e.preventDefault();
    const selected = members[username.toLowerCase()] || {
      name: `${username} Member`,
      tier: 'Essential' as Tier,
      points: 0
    };
    setMember(selected);
    setLoggedIn(true);
  }

  async function search(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ destination, dates, travelers, category, memberTier: member.tier })
    });
    const data = await res.json();
    setResults(data.results || []);
    setLoading(false);
  }

  async function requestOption(result: any) {
    if (result.gated) return alert('Private jet and yacht requests are available for Elite members only.');

    const payload = {
      username,
      memberTier: member.tier,
      destination,
      dates,
      travelers,
      selectedOption: result
    };

    const res = await fetch('/api/requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    setRequests([data.request, ...requests]);
    alert('Request sent to your concierge queue.');
  }

  if (!loggedIn) {
    return (
      <main className="portalBody">
        <header className="portalHeader">
          <a href="/" className="homeLink">← Back</a>
          <div className="logoWrap"><div className="logoMark" /><div className="logo">MEMBER LOGIN</div></div>
        </header>
        <div className="portalShell">
          <div className="card" style={{maxWidth:520, margin:'60px auto'}}>
            <h2>Member Login</h2>
            <p>Demo login: use <strong>elite</strong> or <strong>essential</strong>. Passcode can be anything.</p>
            <form className="form" onSubmit={login}>
              <input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Username" />
              <input type="password" placeholder="Passcode" />
              <button>Login</button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="portalBody">
      <header className="portalHeader">
        <a href="/" className="homeLink">← Back to Website</a>
        <div className="logoWrap"><div className="logoMark" /><div className="logo">MEMBER AREA</div></div>
        <button onClick={()=>setLoggedIn(false)}>Logout</button>
      </header>

      <div className="portalShell">
        <section className="card">
          <div className="badge">MEMBER DASHBOARD</div>
          <h1>Welcome, {member.name}</h1>
          <p>Your search hub, rewards, concierge requests and Elite travel options live here.</p>
        </section>

        <section className="stats">
          <div className="stat"><strong>{member.tier}</strong><small>Membership Tier</small></div>
          <div className="stat"><strong>{member.points}</strong><small>Reward Points</small></div>
          <div className="stat"><strong>{credit}</strong><small>Travel Credit</small></div>
        </section>

        <section className="card">
          <h2>Travel Search Hub</h2>
          <p>Preview live/API-ready options. Prices are blocked until concierge quote review.</p>
          <form className="form" onSubmit={search}>
            <div className="row">
              <input value={destination} onChange={e=>setDestination(e.target.value)} placeholder="Destination, hotel, city or region" required />
              <input value={dates} onChange={e=>setDates(e.target.value)} placeholder="Travel dates" required />
            </div>
            <div className="row">
              <input type="number" value={travelers} onChange={e=>setTravelers(Number(e.target.value))} min={1} />
              <select value={category} onChange={e=>setCategory(e.target.value)}>
                <option value="all">Search Everything</option>
                <option value="hotel">Hotels</option>
                <option value="villa">Villas</option>
                <option value="flight">Flights</option>
                <option value="rental">Rental Cars</option>
                <option value="cruise">Cruises</option>
                <option value="golf">Golf</option>
                <option value="jet">Private Jets - Elite</option>
                <option value="yacht">Private Yacht - Elite</option>
              </select>
            </div>
            <button>{loading ? 'Searching...' : 'Search Member Options'}</button>
          </form>
        </section>

        <section className="results">
          {results.map((item) => (
            <div key={item.id} className={`resultCard ${item.gated ? 'locked' : ''}`}>
              <span className="pill">{item.gated ? 'Upgrade to Elite' : item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className="small">Provider: {item.provider}</p>
              <button disabled={item.gated} onClick={() => requestOption(item)}>
                {item.gated ? 'Elite Only' : 'Request This Option'}
              </button>
            </div>
          ))}
        </section>

        <section className="card">
          <h2>Recent Requests</h2>
          {requests.length === 0 && <p>No requests yet.</p>}
          {requests.map((request) => (
            <div className="request" key={request.id}>
              <strong>{request.selectedOption?.title}</strong><br />
              Status: {request.status}<br />
              Destination: {request.destination}<br />
              Dates: {request.dates}
            </div>
          ))}
        </section>

        <section className="card">
          <h2>Billing Profile</h2>
          <p>Do not store raw card data. Use Stripe Customer Portal for secure card and billing management.</p>
          <a className="btn btnLight" href="https://billing.stripe.com/" target="_blank">Secure Card & Billing Portal</a>
        </section>
      </div>
    </main>
  );
}
