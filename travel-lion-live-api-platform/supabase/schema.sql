-- Supabase schema for The Travel Lion Club

create table if not exists members (
  id uuid primary key default gen_random_uuid(),
  email text unique,
  username text unique,
  full_name text,
  tier text check (tier in ('Essential', 'Elite')) default 'Essential',
  points integer default 0,
  stripe_customer_id text,
  created_at timestamptz default now()
);

create table if not exists booking_requests (
  id uuid primary key default gen_random_uuid(),
  member_id uuid references members(id),
  username text,
  member_tier text,
  category text,
  destination text,
  dates text,
  travelers integer,
  selected_option jsonb,
  notes text,
  status text default 'New',
  created_at timestamptz default now()
);

create table if not exists reward_ledger (
  id uuid primary key default gen_random_uuid(),
  member_id uuid references members(id),
  points integer not null,
  reason text,
  booking_request_id uuid references booking_requests(id),
  created_at timestamptz default now()
);
