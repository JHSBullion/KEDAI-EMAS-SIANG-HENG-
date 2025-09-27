
// Shared app helpers

// Static admin fallback (convenient demo). Set enabled=false to force Supabase-only.
const STATIC_ADMIN = { enabled: true, user: 'admin', pass: '123456' };

function qs(x){return document.querySelector(x)}
function qsa(x){return Array.from(document.querySelectorAll(x))}

function currentLang(){ return localStorage.getItem('lang') || 'zh'; }

function logout(){
  localStorage.removeItem('static_admin');
  if (typeof sb !== 'undefined' && sb?.auth?.signOut) {
    sb.auth.signOut().finally(()=>location.href='login.html');
  } else {
    location.href='login.html';
  }
}

async function guard(){
  // allow static admin
  if (STATIC_ADMIN.enabled && localStorage.getItem('static_admin') === '1') return;
  // require supabase session
  try{
    const { data } = await sb.auth.getSession();
    if(!data?.session) location.href='login.html';
  }catch(e){
    location.href='login.html';
  }
}

function navbar(active='home'){
  return `
  <div class="header">
    <div class="badge brand"><span class="dot"></span><span data-i18n="brand">KEDAI EMAS SIANG HENG · 会员系统</span></div>
    <div class="nav-right">
      <a class="btn ${active==='home'?'gold':''}" href="index.html" data-i18n="home">首页</a>
      <a class="btn" href="qr.html" data-i18n="qrcode">二维码</a>
      <a class="btn" href="login.html" data-i18n="admin">后台</a>
      <select id="langSel" class="select">
        <option value="zh">中</option><option value="en">EN</option><option value="bm">BM</option>
      </select>
    </div>
  </div>`;
}

function adminbar(active='members'){
  return `
  <div class="header">
    <div class="badge brand"><span class="dot"></span><span data-i18n="brand">KEDAI EMAS SIANG HENG · 会员系统</span></div>
    <div class="nav-right">
      <a class="btn ${active==='members'?'gold':''}" href="admin-members.html" data-i18n="members">会员管理</a>
      <a class="btn ${active==='points'?'gold':''}" href="admin-points.html" data-i18n="points">积分管理</a>
      <a class="btn" href="index.html" data-i18n="home">首页</a>
      <button class="btn" onclick="logout()" data-i18n="logout">登出</button>
      <select id="langSel" class="select">
        <option value="zh">中</option><option value="en">EN</option><option value="bm">BM</option>
      </select>
    </div>
  </div>`;
}

function bindLangSelect(){
  const sel = document.getElementById('langSel');
  if(!sel) return;
  sel.value = localStorage.getItem('lang') || 'zh';
  sel.addEventListener('change', e => setLang(e.target.value));
}

function toast(el, text){
  el.textContent = text;
  el.classList.remove('hidden');
  setTimeout(()=>el.classList.add('hidden'), 2000);
}

// index -> goto portal
function goPortal(){
  const phone = qs('#phone')?.value?.trim();
  if(!phone) return;
  location.href = `member-portal.html?phone=${encodeURIComponent(phone)}`;
}
