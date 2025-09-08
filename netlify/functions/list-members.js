<!doctype html>
<html lang="zh">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Admin · Members · KEDAI EMAS SIANG HENG</title>
  <link rel="icon" href="data:,">
  <style>
    body{font-family:system-ui; background:#0b1020; color:#e7e9ee; margin:0}
    .wrap{max-width:980px;margin:48px auto;padding:0 20px}
    .card{background:#0f172a;border:1px solid #1f2937;border-radius:16px;padding:20px}
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
    .brand{font-weight:700;color:#f5d58a}
    .pill{margin-left:auto; padding:2px 8px;border:1px solid #3a3f55;border-radius:999px;font-size:12px;color:#9fb5ff}
  </style>
</head>
<body>
  <div class="wrap">
    <div class="card">
      <div class="row">
        <div class="brand">KEDAI EMAS SIANG HENG</div>
        <span class="pill">Admin · Members</span>
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
    </div>
  </div>

  <script>
    function tip(msg){ document.getElementById("msg").innerHTML = msg; }

    async function loadList(q="") {
      tip('<div class="hint">加载中…</div>');
      try {
        const res = await fetch("/.netlify/functions/list-members");
        const result = await res.json();

        if (!result.success) {
          tip(`<div class="err">加载失败：${(result.error||'').toString()}</div>`);
          return;
        }

        let rows = result.data || [];
        if (q) {
          const lower = q.toLowerCase();
          rows = rows.filter(r =>
            (r.name || "").toLowerCase().includes(lower) ||
            (r.phone || "").toLowerCase().includes(lower)
          );
        }

        if (!rows.length) {
          document.getElementById("tbody").innerHTML = `<tr><td colspan="4" class="hint">没有记录</td></tr>`;
          tip('');
          return;
        }

        document.getElementById("tbody").innerHTML = rows.map(r=>`
          <tr>
            <td>${r.member_id||""}</td>
            <td>${r.name||""}</td>
            <td>${r.phone||""}</td>
            <td>${r.points??0}</td>
          </tr>
        `).join('');
        tip('');
      } catch (e) {
        tip(`<div class="err">网络错误：${e.message}</div>`);
      }
    }

    document.addEventListener("DOMContentLoaded", ()=> loadList());
  </script>
</body>
</html>
