<!-- 全站页面都用同一个 lang.js，放在根目录 -->
<script>
// ===== 词条 =====
window.I18N = {
  zh: {
    // 通用导航
    nav_home: "首页",
    nav_qr: "二维码",
    nav_admin: "后台",
    nav_members: "会员管理",
    nav_points: "积分管理",
    nav_logout: "登出",
    // 首页/查询
    welcome: "欢迎来到 KEDAI EMAS SIANG HENG 会员系统",
    enter_phone: "输入手机号即可查询积分",
    ph_phone: "请输入手机号",
    btn_check: "查询积分",
    result_title: "查询结果",
    result_name: "姓名",
    result_points: "积分",
    result_history: "积分历史",
    no_rows: "暂无记录",
    // 后台 · 会员
    admin_nav_members: "后台 · 会员管理",
    add_member_title: "新增会员",
    label_name: "姓名",
    label_phone: "电话",
    ph_name: "请输入姓名",
    ph_search: "搜索姓名或电话…",
    btn_add: "添加",
    th_name: "姓名",
    th_phone: "电话",
    th_created: "创建时间",
    // 后台 · 积分
    admin_nav_points: "后台 · 积分管理",
    adjust_points_title: "调整积分",
    label_delta: "积分变动（正数加分，负数扣分）",
    label_note: "备注",
    btn_add_points: "提交",
    points_list_title: "积分记录",
    th_change: "变动",
    th_note: "备注",
    th_time: "时间",
    // 登录
    login_title: "登录",
    login_email: "邮箱",
    login_password: "密码",
    login_btn: "登录",
    login_tips_title: "提示",
    login_tips_text: "请使用 Supabase 管理员邮箱与密码登录（例如 admin@shop.com / 123456）。",
    back_home: "返回首页",
    // QR
    qr_page_title: "QR · 会员入口",
    qr_title: "打印用二维码",
    qr_desc: "默认生成本站 index.html（顾客扫码后输入手机号查询）",
    qr_link_label: "链接（可改，例如：member-portal.html?phone=0123456789）",
    btn_regenerate: "重新生成",
    btn_print: "打印",
  },
  en: {
    nav_home: "Home",
    nav_qr: "QR Code",
    nav_admin: "Admin",
    nav_members: "Members",
    nav_points: "Points",
    nav_logout: "Logout",
    welcome: "Welcome to KEDAI EMAS SIANG HENG Member System",
    enter_phone: "Enter mobile number to check points",
    ph_phone: "Enter phone number",
    btn_check: "Check Points",
    result_title: "Results",
    result_name: "Name",
    result_points: "Points",
    result_history: "Points History",
    no_rows: "No records found",
    admin_nav_members: "Admin · Members",
    add_member_title: "Add Member",
    label_name: "Name",
    label_phone: "Phone",
    ph_name: "Enter name",
    ph_search: "Search name or phone…",
    btn_add: "Add",
    th_name: "Name",
    th_phone: "Phone",
    th_created: "Created At",
    admin_nav_points: "Admin · Points",
    adjust_points_title: "Adjust Points",
    label_delta: "Points Change (+ add, - deduct)",
    label_note: "Note",
    btn_add_points: "Submit",
    points_list_title: "Points Records",
    th_change: "Change",
    th_note: "Note",
    th_time: "Time",
    login_title: "Login",
    login_email: "Email",
    login_password: "Password",
    login_btn: "Sign in",
    login_tips_title: "Tips",
    login_tips_text: "Use your Supabase admin email/password to sign in (e.g. admin@shop.com / 123456).",
    back_home: "Back to Home",
    qr_page_title: "QR · Member Entry",
    qr_title: "Printable QR Code",
    qr_desc: "By default it generates this site's index.html (customer scans then enters phone)",
    qr_link_label: "Link (editable, e.g. member-portal.html?phone=0123456789)",
    btn_regenerate: "Regenerate",
    btn_print: "Print",
  },
  bm: {
    nav_home: "Laman Utama",
    nav_qr: "Kod QR",
    nav_admin: "Admin",
    nav_members: "Ahli",
    nav_points: "Mata",
    nav_logout: "Log Keluar",
    welcome: "Selamat datang ke Sistem Ahli KEDAI EMAS SIANG HENG",
    enter_phone: "Masukkan nombor telefon untuk semak mata",
    ph_phone: "Masukkan nombor telefon",
    btn_check: "Semak Mata",
    result_title: "Keputusan",
    result_name: "Nama",
    result_points: "Mata",
    result_history: "Sejarah Mata",
    no_rows: "Tiada rekod",
    admin_nav_members: "Admin · Ahli",
    add_member_title: "Tambah Ahli",
    label_name: "Nama",
    label_phone: "Telefon",
    ph_name: "Masukkan nama",
    ph_search: "Cari nama atau telefon…",
    btn_add: "Tambah",
    th_name: "Nama",
    th_phone: "Telefon",
    th_created: "Masa Cipta",
    admin_nav_points: "Admin · Mata",
    adjust_points_title: "Laraskan Mata",
    label_delta: "Perubahan Mata (+ tambah, - tolak)",
    label_note: "Nota",
    btn_add_points: "Hantar",
    points_list_title: "Rekod Mata",
    th_change: "Perubahan",
    th_note: "Nota",
    th_time: "Masa",
    login_title: "Log Masuk",
    login_email: "Emel",
    login_password: "Kata Laluan",
    login_btn: "Log masuk",
    login_tips_title: "Tips",
    login_tips_text: "Gunakan emel/kata laluan admin Supabase (cth. admin@shop.com / 123456).",
    back_home: "Kembali ke Laman",
    qr_page_title: "QR · Kemasukan Ahli",
    qr_title: "Kod QR Cetakan",
    qr_desc: "Secara lalai ia menjana index.html (pelanggan imbas kemudian masukkan telefon)",
    qr_link_label: "Pautan (boleh ubah, cth. member-portal.html?phone=0123456789)",
    btn_regenerate: "Jana Semula",
    btn_print: "Cetak",
  },
};

// ===== 应用语言到页面 =====
function applyI18n(lang){
  const L = window.I18N[lang] || window.I18N.zh;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(L[key] != null) el.textContent = L[key];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    const key = el.dataset.i18nPh;
    if(L[key] != null) el.setAttribute("placeholder", L[key]);
  });
  // 同步所有语言选择器的选中值
  document.querySelectorAll("select.lang-select").forEach(sel=>{
    sel.value = lang;
  });
}

window.setLang = function(lang){
  localStorage.setItem("lang", lang);
  applyI18n(lang);
};

document.addEventListener("DOMContentLoaded", ()=>{
  const lang = localStorage.getItem("lang") || "zh";
  // 绑定选择器
  document.querySelectorAll("select.lang-select").forEach(sel=>{
    sel.addEventListener("change", e=> setLang(e.target.value));
  });
  applyI18n(lang);
});
</script>
