// lang.js
const I18N = {
  zh: {
    // --- 全局 ---
    brand_title: "KEDAI EMAS SIANG HENG 会员系统",
    btn_qr: "二维码",
    btn_admin: "后台",
    btn_home: "首页",
    btn_check: "查询积分",
    btn_logout: "登出",

    // --- 首页 ---
    hero_title: "会员积分查询",
    hero_sub: "输入手机号码查询当前积分",
    phone_label: "手机号",
    phone_placeholder: "请输入手机号",

    // --- 会员结果页 ---
    portal_title: "会员积分查询结果",
    result_title: "查询结果",
    member_name: "姓名：",
    member_phone: "电话：",
    member_points: "总积分：",
    tx_title: "积分记录",
    tx_date: "日期",
    tx_change: "变动",
    tx_note: "备注",
    tx_empty: "暂无记录",
  },

  en: {
    // --- Global ---
    brand_title: "KEDAI EMAS SIANG HENG Membership",
    btn_qr: "QR Code",
    btn_admin: "Admin",
    btn_home: "Home",
    btn_check: "Check Points",
    btn_logout: "Logout",

    // --- Homepage ---
    hero_title: "Membership Points Inquiry",
    hero_sub: "Enter your phone number to check current points",
    phone_label: "Phone",
    phone_placeholder: "Enter phone number",

    // --- Member Portal ---
    portal_title: "Member Points Result",
    result_title: "Result",
    member_name: "Name:",
    member_phone: "Phone:",
    member_points: "Total Points:",
    tx_title: "Point Transactions",
    tx_date: "Date",
    tx_change: "Change",
    tx_note: "Note",
    tx_empty: "No records",
  },

  ms: {
    // --- Global ---
    brand_title: "KEDAI EMAS SIANG HENG Keahlian",
    btn_qr: "Kod QR",
    btn_admin: "Admin",
    btn_home: "Laman Utama",
    btn_check: "Semak Mata",
    btn_logout: "Log Keluar",

    // --- Homepage ---
    hero_title: "Semakan Mata Keahlian",
    hero_sub: "Masukkan nombor telefon untuk semak mata semasa",
    phone_label: "Telefon",
    phone_placeholder: "Masukkan nombor telefon",

    // --- Member Portal ---
    portal_title: "Keputusan Mata Ahli",
    result_title: "Keputusan",
    member_name: "Nama:",
    member_phone: "Telefon:",
    member_points: "Jumlah Mata:",
    tx_title: "Rekod Mata",
    tx_date: "Tarikh",
    tx_change: "Perubahan",
    tx_note: "Catatan",
    tx_empty: "Tiada rekod",
  }
};

// ---- 语言切换逻辑 ----
function applyLang(lang) {
  if (!I18N[lang]) lang = "zh";
  localStorage.setItem("lang", lang);

  // 替换文本
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (I18N[lang][key]) {
      el.textContent = I18N[lang][key];
    }
  });

  // 替换 placeholder
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    if (I18N[lang][key]) {
      el.setAttribute("placeholder", I18N[lang][key]);
    }
  });

  // 更新 <title>
  if (document.title && I18N[lang][document.title]) {
    document.title = I18N[lang][document.title];
  }
}

// ---- 初始化语言 ----
document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "zh";
  applyLang(lang);

  // 监听下拉框
  const sel = document.querySelector(".lang");
  if (sel) {
    sel.value = lang;
    sel.addEventListener("change", e => {
      applyLang(e.target.value);
    });
  }
});
