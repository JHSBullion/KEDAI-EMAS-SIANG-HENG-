-- schema.sql
-- Run this SQL in your Supabase SQL editor to create the required tables and basic RLS setup hints.

-- members: store member profiles and point balances
create table if not exists members (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text,
  email text,
  member_no text unique,
  points bigint default 0,
  created_at timestamptz default now()
);

-- profiles: link to auth.users for staff roles (admin/staff)
create table if not exists profiles (
  id uuid references auth.users(id) on delete cascade,
  full_name text,
  role text default 'staff', -- 'admin' | 'staff'
  created_at timestamptz default now(),
  primary key (id)
);

-- points_history: immutable ledger of point changes
create table if not exists points_history (
  id bigserial primary key,
  member_id uuid references members(id) on delete cascade,
  delta bigint not null, -- positive or negative
  reason text,
  staff_id uuid references profiles(id),
  created_at timestamptz default now()
);

-- Sample RPC function (recommended to implement as Edge Function for business logic)
-- Example: create or adapt an RPC to update member points and insert history atomically.
/* create function public.fn_add_points(m uuid, d bigint, r text, s uuid) returns void as $$
   begin
     update members set points = points + d where id = m;
     insert into points_history(member_id, delta, reason, staff_id) values(m,d,r,s);
   end;
   $$ language plpgsql; */

-- IMPORTANT:
-- After creating tables, enable Row Level Security (RLS) and create policies.
-- Example policy (for profiles table) to allow the authenticated user to read their profile:
-- alter table profiles enable row level security;
-- create policy "self_read" on profiles for select using (auth.uid() = id);

-- For points_history, disallow direct inserts from anon; enforce via Edge Functions or RPC with checks.
