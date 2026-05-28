"use client";

import { useState } from 'react';

export default function AdminPage() {
  const [username, setUsername] = useState('elite');
  const [tier, setTier] = useState('Elite');
  const [points, setPoints] = useState(500);
  const [members, setMembers] = useState<any[]>([
    { username: 'essential', tier: 'Essential', points: 100 },
    { username: 'elite', tier: 'Elite', points: 500 }
  ]);

  function updateMember(e: React.FormEvent) {
    e.preventDefault();
    setMembers((old) => {
      const filtered = old.filter((m) => m.username !== username);
      return [{ username, tier, points }, ...filtered];
    });
  }

  const liability = members.reduce((sum, m) => sum + Number(m.points || 0), 0);

  return (
    <main className="portalBody">
      <header className="portalHeader">
        <a href="/" className="homeLink">← Back to Website</a>
        <div className="logoWrap"><div className="logoMark" /><div className="logo">CONTROL CENTER</div></div>
      </header>

      <div className="portalShell">
        <section className="card">
          <div className="badge">ADMIN DASHBOARD</div>
          <h1>Member Control Center</h1>
          <p>Update tiers, rewards, and connect this dashboard to Supabase for production.</p>
        </section>

        <section className="stats">
          <div className="stat"><strong>{members.length}</strong><small>Total Members</small></div>
          <div className="stat"><strong>${liability}</strong><small>Reward Liability</small></div>
          <div className="stat"><strong>1 = $1</strong><small>Point Rule</small></div>
        </section>

        <section className="grid">
          <div className="card">
            <h2>Update Member</h2>
            <form className="form" onSubmit={updateMember}>
              <input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Username" />
              <select value={tier} onChange={e=>setTier(e.target.value)}>
                <option>Essential</option>
                <option>Elite</option>
              </select>
              <input type="number" value={points} onChange={e=>setPoints(Number(e.target.value))} />
              <button>Save Member</button>
            </form>
          </div>

          <div className="card">
            <h2>Member Records</h2>
            {members.map((m) => (
              <div className="request" key={m.username}>
                <strong>{m.username}</strong><br />
                Tier: {m.tier}<br />
                Rewards: {m.points} points (${m.points})
              </div>
            ))}
          </div>
        </section>

        <section className="card">
          <h2>Booking Queue</h2>
          <p>Production version should load from `/api/requests` and your Supabase `booking_requests` table.</p>
        </section>
      </div>
    </main>
  );
}
