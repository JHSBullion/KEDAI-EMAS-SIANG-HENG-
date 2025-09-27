// ===== Simple i18n =====
window.I18N = {
  zh: {
    brand_title: "KEDAI EMAS SIANG HENG 会员系统",
    hero_title: "会员积分查询",
    hero_sub: "输入手机号码查询当前积分",
    phone_label: "手机号",
    phone_placeholder: "请输入手机号",
    btn_check: "查询积分",
    btn_admin: "后台",
    btn_qr: "二维码",
    back_home: "返回首页",
    result_title: "查询结果",
    result_total: "总积分",
    history_title: "积分记录",
    th_points: "积分",
    th_note: "备注",
    th_time: "时间",
    no_rows: "暂无记录",
    not_found: "未找到该会员",
    fetch_fail: "查询失败，请稍后重试"
  },
  en: {
    brand_title: "KEDAI EMAS SIANG HENG · Members",
    hero_title: "Check Member Points",
    hero_sub: "Enter mobile number to view your points",
    phone_label: "Phone",
    phone_placeholder: "Enter phone number",
    btn_check: "Check",
    btn_admin: "Admin",
    btn_qr: "QR Code",
    back_home: "Back to Home",
    result_title: "Result",
    result_total: "Total Points",
    history_title: "History",
    th_points: "Points",
    th_note: "Note",
    th_time: "Time",
    no_rows: "No records",
    not_found: "Member not found",
    fetch_fail: "Failed to fetch, please retry"
  },
  ms: {
    brand_title: "KEDAI EMAS SIANG HENG · Ahli",
    hero_title: "Semak Mata",
    hero_sub: "Masukkan nombor telefon untuk semak mata",
    phone_label: "Telefon",
    phone_placeholder: "Masukkan nombor telefon",
    btn_check: "Semak",
    btn_admin: "Admin",
    btn_qr: "Kod QR",
    back_home: "Balik Laman",
    result_title: "Keputusan",
    result_total: "Jumlah Mata",
    history_title: "Sejarah",
    th_points: "Mata",
    th_note: "Nota",
    th_time: "Masa",
    no_rows: "Tiada rekod",
    not_found: "Ahli tidak dijumpai",
    fetch_fail: "Gagal mengambil data"
  }
};

function applyLang(lang){
  const dict = (window.I18N && window.I18N[lang]) || window.I18N.zh;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
  });
  localStorage.setItem("lang", lang);
  document.querySelectorAll("select.lang").forEach(s => s.value = lang);
}

function initLang(){
  const saved = localStorage.getItem("lang") || "zh";
  applyLang(saved);
  document.addEventListener("change", (e)=>{
    if (e.target.matches("select.lang")) {
      applyLang(e.target.value);
    }
  });
}

document.addEventListener("DOMContentLoaded", initLang);
