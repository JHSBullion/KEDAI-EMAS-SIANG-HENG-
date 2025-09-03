-- sql/ddl.sql
-- 数据表 / 视图 / 示例数据 /（可选）RLS 提示

drop view if exists member_points;
drop table if exists point_transactions;
drop table if exists members;

create table members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text unique not null,
  created_at timestamptz not null default now()
);

create table point_transactions (
  id uuid primary key default gen_random_uuid(),
  member_id uuid references members(id) on delete cascade,
  delta int not null,
  note text,
  created_at timestamptz not null default now()
);

create or replace view member_points as
select
  m.id as member_id,
  m.name,
  m.phone,
  coalesce(sum(t.delta),0) as points
from members m
left join point_transactions t on t.member_id = m.id
group by m.id, m.name, m.phone;

-- 示例数据
insert into members (name, phone) values
('Ali','0123456789'),('Mei','0198765432'),('John','0112222333');

insert into point_transactions (member_id, delta, note)
select id, 500, 'init' from members where phone='0123456789';
insert into point_transactions (member_id, delta, note)
select id, 200, 'init' from members where phone='0198765432';

-- （演示环境）允许匿名访问
-- 注意：生产环境务必改用 Auth 或 Service Role Key，并加 RLS
alter table members enable row level security;
alter table point_transactions enable row level security;

create policy "anon select members"   on public.members for select   to anon using (true);
create policy "anon insert members"   on public.members for insert   to anon with check (true);

create policy "anon select tx"        on public.point_transactions for select to anon using (true);
create policy "anon insert tx"        on public.point_transactions for insert to anon with check (true);
