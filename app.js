<script type="module">
  import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

  // ===== 你的 Supabase 项目（你提供的）=====
  export const SUPABASE_URL  = 'https://mnzwqqxybhjqrfrzydwk.supabase.co';
  export const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uendxcXh5YmhqcXJmcnp5ZHdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0NzgzMzIsImV4cCI6MjA3MjA1NDMzMn0.Yo27vsFqgVM9wWKRgI-ErV2Fl6kjsYcQQPqbe8nGZOQ';

  export const sb = createClient(SUPABASE_URL, SUPABASE_ANON);

  // ===== 工具 =====
  export const $ = (s,root=document)=>root.querySelector(s);
  export const $$ = (s,root=document)=>[...root.querySelectorAll(s)];
  export function q(key, def=''){ const u=new URL(location.href); return u.searchParams.get(key)||def; }
  export function toast(el, text){ el.style.display='block'; el.textContent=text; setTimeout(()=>el.style.display='none',3000); }

  // ===== 业务：会员与积分 =====
  export async function getMemberByPhone(phone){
    return await sb.from('members').select('*').eq('phone', phone).maybeSingle();
  }
  export async function listMembers(keyword=''){
    let q = sb.from('members').select('*').order('created_at',{ascending:false}).limit(500);
    if(keyword){ q = sb.from('members').select('*').ilike('name', `%${keyword}%`).order('created_at',{ascending:false}); }
    return await q;
  }
  export async function addMember(name, phone){
    return await sb.from('members').insert({name, phone}).select().single();
  }
  export async function addPoint(phone, delta, note=''){
    // 允许通过 phone 定位 member_id（也可以先查 member）
    const { data: m, error: em } = await getMemberByPhone(phone);
    if(em || !m) return { data:null, error: em || new Error('Member not found') };
    return await sb.from('point_transactions').insert({
      member_id: m.id, delta, note
    }).select().single();
  }
  export async function listPointHistory(phone=''){
    let q = sb.from('point_transactions')
              .select('*, members(name, phone)')
              .order('created_at',{ascending:false}).limit(500);
    if(phone){
      // 先取 member，再按 member_id 过滤
      const { data: m } = await getMemberByPhone(phone);
      if(!m) return { data: [], error: null };
      q = q.eq('member_id', m.id);
    }
    return await q;
  }
  export async function sumPointsByPhone(phone){
    const { data } = await listPointHistory(phone);
    const sum = (data||[]).reduce((s,r)=>s + (r.delta||0), 0);
    return sum;
  }

  // 暴露到 window 方便非 module 页面调用（可选）
  window.__APP__ = { sb, $, $$, q, toast, getMemberByPhone, listMembers, addMember, addPoint, listPointHistory, sumPointsByPhone };
</script>
