
// i18n - zh / en / bm
const I18N = {
  zh: {
    brand: "KEDAI EMAS SIANG HENG · 会员系统",
    home: "首页",
    admin: "后台",
    qrcode: "二维码",
    login: "登录",
    logout: "登出",
    welcome: "欢迎来到 KEDAI EMAS SIANG HENG 会员系统",
    phone: "电话",
    check: "查询积分",
    directLink: "支持带参数访问：?phone=",
    members: "会员管理",
    points: "积分管理",
    email: "邮箱",
    password: "密码",
    signInHint: "请使用 Supabase 管理员邮箱/密码登录（如 admin@shop.com / 123456）。",
    signIn: "登录",
    addMember: "新增会员",
    name: "姓名",
    createdAt: "创建时间",
    searchHint: "搜索姓名或电话…",
    changePoints: "积分变动（正数加分，负数扣分）",
    note: "备注",
    submit: "提交",
    history: "积分记录",
    delta: "变动",
    time: "时间",
    totalPoints: "总积分",
    memberInfo: "会员信息",
    backHome: "返回首页",
    printableQR: "打印用二维码",
    defaultQRInfo: "默认生成本站 index.html（顾客扫码后输入手机号查询）",
    link: "链接（可改，例如：member-portal.html?phone=0123456789）",
    regenerate: "重新生成",
    print: "打印",
  },
  en: {
    brand: "KEDAI EMAS SIANG HENG · Members",
    home: "Home",
    admin: "Admin",
    qrcode: "QR Code",
    login: "Login",
    logout: "Logout",
    welcome: "Welcome to KEDAI EMAS SIANG HENG Membership System",
    phone: "Phone",
    check: "Check Points",
    directLink: "Deep link supported: ?phone=",
    members: "Members",
    points: "Points",
    email: "Email",
    password: "Password",
    signInHint: "Use your Supabase admin email/password (e.g. admin@shop.com / 123456).",
    signIn: "Sign in",
    addMember: "Add Member",
    name: "Name",
    createdAt: "Created At",
    searchHint: "Search name or phone…",
    changePoints: "Points Change (+ for add, - for deduct)",
    note: "Note",
    submit: "Submit",
    history: "Point History",
    delta: "Delta",
    time: "Time",
    totalPoints: "Total Points",
    memberInfo: "Member",
    backHome: "Back to Home",
    printableQR: "Printable QR Code",
    defaultQRInfo: "By default it generates this site's index.html (customer scans then enters phone).",
    link: "Link (editable, e.g. member-portal.html?phone=0123456789)",
    regenerate: "Regenerate",
    print: "Print",
  },
  bm: {
    brand: "KEDAI EMAS SIANG HENG · Sistem Ahli",
    home: "Laman Utama",
    admin: "Admin",
    qrcode: "Kod QR",
    login: "Log Masuk",
    logout: "Log Keluar",
    welcome: "Selamat datang ke Sistem Keahlian KEDAI EMAS SIANG HENG",
    phone: "Telefon",
    check: "Semak Mata",
    directLink: "Pautan terus disokong: ?phone=",
    members: "Ahli",
    points: "Mata",
    email: "Emel",
    password: "Kata Laluan",
    signInHint: "Guna emel/kata laluan admin Supabase (cth: admin@shop.com / 123456).",
    signIn: "Log Masuk",
    addMember: "Tambah Ahli",
    name: "Nama",
    createdAt: "Dicipta Pada",
    searchHint: "Cari nama atau telefon…",
    changePoints: "Perubahan Mata (+ tambah, - tolak)",
    note: "Catatan",
    submit: "Hantar",
    history: "Sejarah Mata",
    delta: "Perubahan",
    time: "Masa",
    totalPoints: "Jumlah Mata",
    memberInfo: "Maklumat Ahli",
    backHome: "Kembali ke Laman",
    printableQR: "Kod QR Boleh Cetak",
    defaultQRInfo: "Lalai jana index.html laman ini (pelanggan imbas dan masukkan telefon).",
    link: "Pautan (boleh ubah, cth: member-portal.html?phone=0123456789)",
    regenerate: "Jana Semula",
    print: "Cetak",
  }
};
function getLang(){return localStorage.getItem('lang') || 'zh';}
function setLang(l){localStorage.setItem('lang', l); location.reload();}
function applyI18N(){
  const l = getLang();
  const dict = I18N[l] || I18N.zh;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n');
    if(dict[k]!==undefined) el.textContent = dict[k];
  });
  document.querySelectorAll('[data-ph]').forEach(el=>{
    const k = el.getAttribute('data-ph');
    if(dict[k]!==undefined) el.setAttribute('placeholder', dict[k]);
  });
  // select lang UI
  const langSel = document.getElementById('langSel');
  if(langSel){ langSel.value = l; }
}
document.addEventListener('DOMContentLoaded', applyI18N);
