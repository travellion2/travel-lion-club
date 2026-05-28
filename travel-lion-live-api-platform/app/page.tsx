export default function HomePage() {
  return (
    <>
      <header className="header">
        <a href={process.env.NEXT_PUBLIC_HOME_URL || 'https://guests.thetravellion.com'} className="homeLink">← Go Back Home</a>
        <div className="logoWrap"><div className="logoMark" /><div className="logo">THE TRAVEL LION CLUB</div></div>
        <nav className="nav">
          <a href="#membership">Membership</a>
          <a href="/member">Member Login</a>
          <a href="/admin">Control Center</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroInner">
          <div className="badge">LUXURY MEMBERSHIP • LIVE SEARCH READY • CONCIERGE REQUESTS</div>
          <h1>Luxury travel access built for modern members.</h1>
          <p>Search hotels, villas, cruises, golf, flights, rental cars and Elite private travel requests from one dashboard.</p>
          <div className="buttons">
            <a className="btn btnLight" href="#membership">Explore Membership</a>
            <a className="btn btnDark" href="/member">Member Login</a>
          </div>
        </div>
      </section>

      <section className="section" id="membership">
        <div className="grid">
          <div className="card">
            <div className="badge">ESSENTIAL</div>
            <div className="price">$29.95<span>/month</span></div>
            <ul>
              <li>Exclusive luxury hotel pricing with savings up to 80% off public rates</li>
              <li>Travel rewards</li>
              <li>Concierge booking requests</li>
              <li>Golf destination access</li>
              <li>Premium member-only travel deals</li>
            </ul>
            <a className="btn btnLight" href={process.env.NEXT_PUBLIC_STRIPE_ESSENTIAL_LINK || '#'}>Join Essential</a>
          </div>
          <div className="card featured">
            <div className="badge">ELITE • MOST POPULAR</div>
            <div className="price">$49.95<span>/month</span></div>
            <ul>
              <li>All Essential benefits included</li>
              <li>Luxury Condos & Villas (8 days / 7 nights)</li>
              <li>Golf travel planning</li>
              <li>Luxury concierge</li>
              <li>Private jet requests</li>
              <li>Yacht requests</li>
              <li>VIP travel experiences</li>
            </ul>
            <a className="btn btnDark" href={process.env.NEXT_PUBLIC_STRIPE_ELITE_LINK || '#'}>Join Elite</a>
          </div>
        </div>
      </section>
    </>
  );
}
