<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Admin · Members · KEDAI EMAS SIANG HENG</title>
<link rel="icon" href="data:,">
<style>
  :root{color-scheme:dark light}
  body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;margin:0;background:#0b1020;color:#e7e9ee}
  .wrap{max-width:980px;margin:48px auto;padding:0 20px}
  .card{background:#0f172a;border:1px solid #1f2937;border-radius:16px;padding:20px;box-shadow:0 10px 40px rgba(0,0,0,.35)}
  h1{margin:0 0 16px;font-size:20px}
  .row{display:flex;gap:10px;flex-wrap:wrap;margin:10px 0}
  input,button{height:42px;border-radius:10px;border:1px solid #344155;background:#0b1220;color:#e7e9ee;padding:0 12px;font-size:15px}
  input{flex:1;min-width:260px}
  button{cursor:pointer}
  .primary{background:#2563eb;border-color:#3b82f6}
  .muted{background:#0b1220;border-color:#344155}
  .ok{color:#34d399}.err{color:#f87171}.hint{color:#98a2b3;font-size:12px}
  table{width:100%;border-collapse:collapse;margin-top:12px;font-size:14px}
  th,td{border-bottom:1px solid #1f2937;padding:10px 8px;text-align:left}
  .nav{margin:8px 0 16px} .nav a{color:#93c5fd;margin-right:12px;text-decoration:none}
  .brand{font-weight:700;color:#f5d58a;letter-spacing:.4px}
  .pill{display:inline-block;padding:2px 8px;border:1px solid #3a3f55;border-radius:999px;font-size:12px;color:#9fb5ff}
  .right{margin-left:auto}
</style>
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script>
/* ====== Supabase 参数（从 Netlify 环境变量读取） ====== */
const SUPABASE_URL = window.env?.SUPABASE_URL || import.meta?.env?.SUPABASE_URL;
const SUPABASE_ANON_KEY = window.env?.SUPABASE_ANON_KEY || import.meta?.env?.SUPABASE_ANON_KEY;
const SB = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
/* ========================================== */
const $ = s => document.querySelector(s);
const esc = s => String(s||'').replace(/[&<>"']/g,m=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;' }[m]));

function tip(html){ $('#msg').innerHTML = html; }

async function loadList(q=''){
  tip('<div class="hint">加载中…</div>');
  let query = SB.from('member_points').select('member_id,name,phone,points').order('name',{ascending:true}).limit(200);
  if(q){
    // 同时匹配姓名与电话（大小写不敏感）
    query = query.or(`name.ilike.%${q}%,phone.ilike.%${q}%`);
  }
  const { data, error } = await query;
  if(error){ console.error(error); tip(`<div class="err">加载失败：${esc(error.message)}</div>`); return; }
  tip('');
  if(!data?.length){ $('#tbody').innerHTML = `<tr><td colspan="4" class="hint">没有记录</td></tr>`; return; }
  $('#tbody').innerHTML = data.map(r=>`
    <tr>
      <td>${esc(r.member_id)}</td>
      <td>${esc(r.name)}</td>
      <td>${esc(r.phone)}</td>
      <td>${r.points ?? 0}</td>
    </tr>
  `).join('');
}

document.addEventListener('DOMContentLoaded', ()=>{
  loadList();
  $('#q').addEventListener('keydown', e=>{ if(e.key==='Enter') loadList($('#q').value.trim()); });
});
</script>
</head>
<body>
  <div class="wrap">
    <div class="card">
      <div class="row">
        <div class="brand">KEDAI EMAS SIANG HENG</div>
        <span class="pill right">Admin · Members</span>
      </div>

      <h1>会员列表</h1>

      <div class="row">
        <input id="q" placeholder="按姓名或电话搜索…" />
        <button class="primary" onclick="loadList(document.getElementById('q').value.trim())">Search</button>
        <button class="muted" onclick="document.getElementById('q').value='';loadList('')">Reset</button>
      </div>
      <div id="msg" class="hint"></div>

      <div class="nav">
        <a href="/index.html">Customer</a>
        <a href="/add-member.html">Add Member</a>
        <a href="/points.html">Adjust Points</a>
      </div>

      <table>
        <thead>
          <tr><th>Member ID</th><th>Name</th><th>Phone</th><th>Points</th></tr>
        </thead>
        <tbody id="tbody"></tbody>
      </table>

      <div class="hint" style="margin-top:10px">演示阶段允许匿名访问。上线前请迁移到 Auth / Service Role + 细化 RLS。</div>
    </div>
  </div>
</body>
</html>
