// shared behaviors
function goPortal(){
  const phone = document.getElementById('phone').value.trim();
  if(!phone) return false;
  location.href = `member-portal.html?phone=${encodeURIComponent(phone)}`;
  return false;
}
async function guard(){
  // require auth
  const { data } = await sb.auth.getSession();
  if(!data?.session) location.href='login.html';
}
async function logout(){ await sb.auth.signOut(); location.href='login.html'; }
