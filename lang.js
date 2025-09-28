// lang.js - 前台修正版
window.langs = {
  zh: {
    brand_title: "黄金会员积分系统",
    btn_qr: "会员入口",
    btn_admin: "后台管理",
    hero_title: "欢迎",
    hero_sub: "扫描二维码进入会员系统",
    phone_label: "电话号码",
    btn_check: "查询积分",

    member_portal: "会员门户",
    portal_desc: "请扫描下方二维码进入会员系统",
    no_member: "暂无会员记录",
    back_home: "返回首页",
    btn_regenerate: "重置二维码",
    btn_print: "打印"
  },
  en: {
    brand_title: "Gold Member Points System",
    btn_qr: "Member Portal",
    btn_admin: "Admin",
    hero_title: "Welcome",
    hero_sub: "Scan the QR code to access the member system",
    phone_label: "Phone Number",
    btn_check: "Check Points",

    member_portal: "Member Portal",
    portal_desc: "Please scan the QR code below to enter the member system",
    no_member: "No member records",
    back_home: "Back to Home",
    btn_regenerate: "Regenerate",
    btn_print: "Print"
  },
  ms: {
    brand_title: "Sistem Mata Ganjaran Ahli Emas",
    btn_qr: "Portal Ahli",
    btn_admin: "Admin",
    hero_title: "Selamat Datang",
    hero_sub: "Imbas kod QR untuk masuk ke sistem ahli",
    phone_label: "Nombor Telefon",
    btn_check: "Semak Mata",

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
