// shared behaviors
// ---- Static admin fallback (optional) ----
// If you want the simple admin login (admin / 123456), keep enabled=true.
// Set enabled=false to force Supabase Auth only.
const STATIC_ADMIN = { enabled: true, user: 'admin', pass: '123456' };

function goPortal(){
  const phone = document.getElementById('phone')?.value?.trim();
  if(!phone) return false;
  location.href = `member-portal.html?phone=${encodeURIComponent(phone)}`;
  return false;
}

async function guard(){
  // Allow static admin session
  if (STATIC_ADMIN.enabled && localStorage.getItem('static_admin') === '1') return;
  // Require Supabase session
  try{
    const { data } = await sb.auth.getSession();
    if (!data?.session) location.href = 'login.html';
  }catch(e){
    // If Supabase not reachable, still allow static admin only
    if (!(STATIC_ADMIN.enabled && localStorage.getItem('static_admin') === '1')) {
      location.href = 'login.html';
    }
  }
}

async function logout(){
  localStorage.removeItem('static_admin');
  try{ await sb.auth.signOut(); }catch(e){}
  location.href = 'login.html';
}
