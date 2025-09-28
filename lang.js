// lang.js - 修正版
// 把 langs、applyLang、initLang 挂到全局 window，确保前台能用

window.langs = {
  zh: {
    system_title: "黄金会员积分系统",
    welcome: "欢迎",
    hero_desc: "扫描二维码进入会员系统",
    enter_phone: "输入你的电话号码",
    check_points: "查询积分",
    open_portal: "打开会员门户",
    open_admin: "打开后台管理",
    member_portal: "会员门户",
    portal_desc: "请扫描下方二维码进入会员系统",
    no_member: "暂无会员记录",
    back_home: "返回首页",
    btn_regenerate: "重置二维码",
    btn_print: "打印"
  },
  en: {
    system_title: "Gold Member Points System",
    welcome: "Welcome",
    hero_desc: "Scan the QR code to access the member system",
    enter_phone: "Enter your phone number",
    check_points: "Check Points",
    open_portal: "Open Member Portal",
    open_admin: "Open Admin",
    member_portal: "Member Portal",
    portal_desc: "Please scan the QR code below to enter the member system",
    no_member: "No member records",
    back_home: "Back to Home",
    btn_regenerate: "Regenerate",
    btn_print: "Print"
  },
  ms: {
    system_title: "Sistem Mata Ganjaran Ahli Emas",
    welcome: "Selamat Datang",
    hero_desc: "Imbas kod QR untuk masuk ke sistem ahli",
    enter_phone: "Masukkan nombor telefon anda",
    check_points: "Semak Mata",
    open_portal: "Buka Portal Ahli",
    open_admin: "Buka Admin",
    member_portal: "Portal Ahli",
    portal_desc: "Sila imbas kod QR di bawah untuk masuk ke sistem ahli",
    no_member: "Tiada rekod ahli",
    back_home: "Kembali ke Laman Utama",
    btn_regenerate: "Jana Semula",
    btn_print: "Cetak"
  }
};

// 应用语言
window.applyLang = function (lang) {
  lang = (lang === "bm") ? "ms" : (lang || "zh");
  if (!window.langs[lang]) lang = "zh";

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    var txt = (window.langs[lang] && window.langs[lang][key]) || key;
    el.textContent = txt;
  });

  document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-ph");
    var txt = (window.langs[lang] && window.langs[lang][key]) || "";
    if ("placeholder" in el) el.placeholder = txt;
    else el.setAttribute("placeholder", txt);
  });

  localStorage.setItem("lang", (lang === "ms") ? "bm" : lang);
};

// 初始化语言
window.initLang = function () {
  var saved = localStorage.getItem("lang") || "zh";
  if (saved === "bm") saved = "ms";
  window.applyLang(saved);

  document.querySelectorAll(".lang-select, #langSel").forEach(function (s) {
    if (s.querySelector('option[value="' + saved + '"]')) s.value = saved;
    else if (saved === "ms" && s.querySelector('option[value="bm"]')) s.value = "bm";
  });
};

// 页面加载时自动运行
document.addEventListener("DOMContentLoaded", function () {
  window.initLang();
  document.querySelectorAll(".lang-select, #langSel").forEach(function (s) {
    s.addEventListener("change", function (e) {
      var val = e.target.value;
      if (val === "bm") val = "ms";
      localStorage.setItem("lang", val);
      window.applyLang(val);
    });
  });
});
