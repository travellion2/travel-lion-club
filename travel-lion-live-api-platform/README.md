# The Travel Lion Club Live API Platform

This is a developer-ready Next.js project for a real Travel Lion member portal.

## What it includes

- Member dashboard
- Admin control center
- Travel Search Hub
- Hotels / Villas / Flights / Cars search route
- Cruises search route
- Golf search route
- Private Jet search route
- Private Yacht request route
- Rewards points logic
- Stripe billing link placeholders
- Member tier gating: Essential vs Elite
- Booking queue
- Environment variable setup
- API connector structure for Expedia, CruiseBase, Supreme Golf, Jettly, Stripe, Supabase

## Important

This project is built to connect to live feeds, but you still need valid partner/API credentials from:

- Expedia Partner Solutions / Rapid API
- CruiseBase
- Supreme Golf or golf partner source
- Jettly partner/API access
- Stripe
- Supabase

Without API keys, the search routes return clean demo fallback results so the portal still works.

## Install

```bash
npm install
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Environment

Copy `.env.example` to `.env.local` and add your keys.

```bash
cp .env.example .env.local
```

## Demo login

This starter uses simple demo login logic. For production, connect Supabase Auth or Memberstack.

Demo usernames:

- essential
- elite

Passcode can be anything in demo mode.

## Production stack recommendation

- Frontend: Next.js
- Database: Supabase
- Auth: Supabase Auth
- Payments: Stripe Checkout + Stripe Customer Portal
- Emails: Resend
- Travel data: Expedia Rapid API / CruiseBase / SupremeGolf / Jettly
- Build trigger 2026-05-29
