// lang.js

// 定义多语言字典
const I18N = {
  zh: {
    // 通用
    brand_title: "KEDAI EMAS SIANG HENG 会员系统",
    btn_qr: "二维码",
    btn_admin: "后台",
    btn_home: "首页",
    btn_logout: "登出",
    btn_submit: "提交",

    // 首页
    hero_title: "会员积分查询",
    hero_sub: "输入手机号码查询当前积分",
    phone_label: "手机号",
    phone_placeholder: "请输入手机号",
    btn_check: "查询积分",

    // 后台导航
    brand_admin_points: "后台 · 积分管理",
    btn_members: "会员管理",
    btn_points: "积分管理",

    // 后台 - 积分管理
    admin_points_title: "后台 · 积分管理",
    adjust_points: "调整积分",
    form_phone: "电话",
    form_phone_ph: "请输入手机号",
    form_delta: "积分变动（正数加分，负数扣分）",
    form_delta_ph: "+100 或 -50",
    form_note: "备注",
    tx_title: "积分记录",
    tx_change: "变动",
    tx_note: "备注",
    tx_date: "时间",
    tx_empty: "暂无记录",
    member_name: "姓名",
    member_phone: "电话"
  },

  en: {
    // Common
    brand_title: "KEDAI EMAS SIANG HENG Membership System",
    btn_qr: "QR Code",
    btn_admin: "Admin",
    btn_home: "Home",
    btn_logout: "Logout",
    btn_submit: "Submit",

    // Home
    hero_title: "Member Points Inquiry",
    hero_sub: "Enter phone number to check your points",
    phone_label: "Phone Number",
    phone_placeholder: "Enter phone number",
    btn_check: "Check Points",

    // Admin nav
    brand_admin_points: "Admin · Points Management",
    btn_members: "Members",
    btn_points: "Points",

    // Admin - Points
    admin_points_title: "Admin · Points Management",
    adjust_points: "Adjust Points",
    form_phone: "Phone",
    form_phone_ph: "Enter phone number",
    form_delta: "Points Change (+ add, - deduct)",
    form_delta_ph: "+100 or -50",
    form_note: "Note",
    tx_title: "Points Records",
    tx_change: "Change",
    tx_note: "Note",
    tx_date: "Date",
    tx_empty: "No records",
    member_name: "Name",
    member_phone: "Phone"
  },

  ms: {
    // Umum
    brand_title: "KEDAI EMAS SIANG HENG Sistem Keahlian",
    btn_qr: "Kod QR",
    btn_admin: "Admin",
    btn_home: "Laman Utama",
    btn_logout: "Log Keluar",
    btn_submit: "Hantar",

    // Laman utama
    hero_title: "Semakan Mata Ahli",
    hero_sub: "Masukkan nombor telefon untuk semak mata",
    phone_label: "Nombor Telefon",
    phone_placeholder: "Masukkan nombor telefon",
    btn_check: "Semak Mata",

    // Admin nav
    brand_admin_points: "Admin · Pengurusan Mata",
    btn_members: "Ahli",
    btn_points: "Mata",

    // Admin - Points
    admin_points_title: "Admin · Pengurusan Mata",
    adjust_points: "Laraskan Mata",
    form_phone: "Telefon",
    form_phone_ph: "Masukkan nombor telefon",
    form_delta: "Perubahan Mata (+ tambah, - tolak)",
    form_delta_ph: "+100 atau -50",
    form_note: "Nota",
    tx_title: "Rekod Mata",
    tx_change: "Perubahan",
    tx_note: "Nota",
    tx_date: "Masa",
    tx_empty: "Tiada rekod",
    member_name: "Nama",
    member_phone: "Telefon"
  }
};

// 应用翻译
function applyLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (I18N[lang] && I18N[lang][key]) {
      el.textContent = I18N[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    if (I18N[lang] && I18N[lang][key]) {
      el.setAttribute("placeholder", I18N[lang][key]);
    }
  });

  // 更新 <title>
  const titleEl = document.querySelector("title[data-i18n]");
  if (titleEl) {
    const key = titleEl.getAttribute("data-i18n");
    if (I18N[lang][key]) {
      titleEl.textContent = I18N[lang][key];
    }
  }
}

// 初始化语言
(function(){
  const lang = localStorage.getItem("lang") || "zh";
  applyLang(lang);

  document.querySelectorAll("select.lang").forEach(sel=>{
    sel.value = lang;
    sel.addEventListener("change", e=>{
      const l = e.target.value;
      localStorage.setItem("lang", l);
      applyLang(l);
    });
  });
})();
