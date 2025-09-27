# Membership System (White & Gold)

## Pages
- `member-portal.html` → 顾客手机号查询积分
- `login.html` → 后台登录（Supabase Email/Password）
- `admin-members.html` → 新增/搜索/列表
- `admin-points.html` → 调整积分 + 最近记录

## Supabase SQL（必须执行一次）
```sql
create extension if not exists pgcrypto;

create table if not exists public.members(
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null unique,
  created_at timestamptz not null default now()
);
create table if not exists public.point_transactions(
  id uuid primary key default gen_random_uuid(),
  member_id uuid not null references public.members(id) on delete cascade,
  points integer not null,
  note text,
  created_at timestamptz not null default now()
);

create or replace view public.member_points as
select m.id, m.name, m.phone, m.created_at, coalesce(sum(pt.points),0) as total_points
from public.members m left join public.point_transactions pt on pt.member_id=m.id
group by m.id,m.name,m.phone,m.created_at;

alter table public.members enable row level security;
alter table public.point_transactions enable row level security;

drop policy if exists members_select_auth on public.members;
drop policy if exists members_insert_auth on public.members;
create policy members_select_auth on public.members for select to authenticated using (true);
create policy members_insert_auth on public.members for insert  to authenticated with check (true);

drop policy if exists pt_select_auth on public.point_transactions;
drop policy if exists pt_insert_auth on public.point_transactions;
create policy pt_select_auth on public.point_transactions for select to authenticated using (true);
create policy pt_insert_auth on public.point_transactions for insert  to authenticated with check (true);

-- 顾客门户（匿名只读，便于手机号查询）
drop policy if exists members_select_public on public.members;
drop policy if exists mp_select_public on public.member_points;
create policy members_select_public on public.members for select to anon using (true);
create policy mp_select_public on public.member_points for select to anon using (true);
```

## Admin account
Supabase → Authentication → Users → Add user (e.g. admin@example.com / 123456).
