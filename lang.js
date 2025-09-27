window.lang = {
  "zh": {
    // 顶部导航
    "nav_home": "首页",
    "nav_qr": "二维码",
    "nav_admin": "后台",
    "nav_members": "会员管理",
    "nav_points": "积分管理",
    "nav_logout": "登出",

    // 首页
    "welcome": "欢迎来到 KEDAI EMAS SIANG HENG 会员系统",
    "enter_phone": "输入手机号即可查询积分",
    "ph_phone": "请输入手机号",
    "btn_check": "查询积分",

    // 查询结果
    "result_title": "查询结果",
    "result_name": "姓名",
    "result_points": "积分",
    "result_history": "积分历史",
    "no_rows": "暂无记录",

    // Admin Members
    "admin_nav_members": "后台 · 会员管理",
    "add_member_title": "新增会员",
    "label_name": "姓名",
    "label_phone": "电话",
    "btn_add": "添加",
    "member_list_title": "会员列表",
    "ph_search": "搜索姓名或电话…",
    "th_name": "姓名",
    "th_phone": "电话",
    "th_created": "创建时间",

    // Admin Points
    "admin_nav_points": "后台 · 积分管理",
    "adjust_points_title": "调整积分",
    "label_delta": "积分变动（正数加分，负数扣分）",
    "label_note": "备注",
    "btn_add_points": "提交",
    "points_list_title": "积分记录",
    "th_change": "变动",
    "th_note": "备注",
    "th_time": "时间",

    // QR
    "qr_title": "打印用二维码",
    "qr_desc": "默认生成本站 index.html（顾客扫码后输入手机号查询）",
    "btn_regenerate": "重新生成",
    "btn_print": "打印"
  },

  "en": {
    "nav_home": "Home",
    "nav_qr": "QR Code",
    "nav_admin": "Admin",
    "nav_members": "Members",
    "nav_points": "Points",
    "nav_logout": "Logout",

    "welcome": "Welcome to KEDAI EMAS SIANG HENG Member System",
    "enter_phone": "Enter mobile number to check points",
    "ph_phone": "Enter phone number",
    "btn_check": "Check Points",

    "result_title": "Results",
    "result_name": "Name",
    "result_points": "Points",
    "result_history": "Points History",
    "no_rows": "No records found",

    "admin_nav_members": "Admin · Members",
    "add_member_title": "Add Member",
    "label_name": "Name",
    "label_phone": "Phone",
    "btn_add": "Add",
    "member_list_title": "Member List",
    "ph_search": "Search name or phone…",
    "th_name": "Name",
    "th_phone": "Phone",
    "th_created": "Created At",

    "admin_nav_points": "Admin · Points",
    "adjust_points_title": "Adjust Points",
    "label_delta": "Points Change (+ for add, - for subtract)",
    "label_note": "Note",
    "btn_add_points": "Submit",
    "points_list_title": "Points Records",
    "th_change": "Change",
    "th_note": "Note",
    "th_time": "Time",

    "qr_title": "Printable QR Code",
    "qr_desc": "By default it generates this site's index.html (customer scans then enters phone)",
    "btn_regenerate": "Regenerate",
    "btn_print": "Print"
  },

  "bm": {
    "nav_home": "Laman Utama",
    "nav_qr": "Kod QR",
    "nav_admin": "Admin",
    "nav_members": "Ahli",
    "nav_points": "Mata",
    "nav_logout": "Log Keluar",

    "welcome": "Selamat datang ke Sistem Ahli KEDAI EMAS SIANG HENG",
    "enter_phone": "Masukkan nombor telefon untuk semak mata",
    "ph_phone": "Masukkan nombor telefon",
    "btn_check": "Semak Mata",

    "result_title": "Keputusan",
    "result_name": "Nama",
    "result_points": "Mata",
    "result_history": "Sejarah Mata",
    "no_rows": "Tiada rekod",

    "admin_nav_members": "Admin · Ahli",
    "add_member_title": "Tambah Ahli",
    "label_name": "Nama",
    "label_phone": "Telefon",
    "btn_add": "Tambah",
    "member_list_title": "Senarai Ahli",
    "ph_search": "Cari nama atau telefon…",
    "th_name": "Nama",
    "th_phone": "Telefon",
    "th_created": "Masa Cipta",

    "admin_nav_points": "Admin · Mata",
    "adjust_points_title": "Laraskan Mata",
    "label_delta": "Perubahan Mata (+ untuk tambah, - untuk tolak)",
    "label_note": "Nota",
    "btn_add_points": "Hantar",
    "points_list_title": "Rekod Mata",
    "th_change": "Perubahan",
    "th_note": "Nota",
    "th_time": "Masa",

    "qr_title": "Kod QR Cetakan",
    "qr_desc": "Secara lalai ia menjana index.html (pelanggan imbas kemudian masukkan telefon)",
    "btn_regenerate": "Jana Semula",
    "btn_print": "Cetak"
  }
};

function setLang(l) {
  localStorage.setItem("lang", l);
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    el.innerText = window.lang[l][el.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    el.placeholder = window.lang[l][el.dataset.i18nPh];
  });
}
document.addEventListener("DOMContentLoaded", ()=>{
  setLang(localStorage.getItem("lang")||"zh");
  document.querySelectorAll(".lang").forEach(el=>{
    el.onclick = ()=>setLang(el.dataset.lang);
  });
});
