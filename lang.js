export const langs = {
  zh: {
    // 后台
    title: "后台 · 会员管理",
    members: "会员管理",
    points: "积分管理",
    home: "首页",
    logout: "登出",
    search: "搜索姓名或手机号",
    totalPoints: "总积分",
    addMember: "新增会员",
    name: "姓名",
    phone: "电话",
    createdAt: "注册时间",
    noData: "暂无数据",
    submit: "提交",
    adjustPoints: "调整积分",
    delta: "积分变动（正数加分，负数扣分）",
    note: "备注",
    records: "积分记录",
    noRecord: "暂无记录",

    // 前台
    brand_title: "KEDAI EMAS SIANG HENG 会员系统",
    btn_qr: "二维码",
    btn_admin: "后台",
    hero_title: "会员积分查询",
    hero_sub: "输入手机号码查询当前积分",
    phone_label: "手机号",
    phone_placeholder: "请输入手机号",
    btn_check: "查询积分",
    member_portal: "会员门户",
    portal_desc: "请扫描下方二维码进入会员系统",
    back_home: "返回首页",
    btn_regenerate: "重置二维码",
    btn_print: "打印"
  },
  en: {
    // Admin
    title: "Admin · Members",
    members: "Members",
    points: "Points",
    home: "Home",
    logout: "Logout",
    search: "Search name or phone",
    totalPoints: "Total Points",
    addMember: "Add Member",
    name: "Name",
    phone: "Phone",
    createdAt: "Created At",
    noData: "No Data",
    submit: "Submit",
    adjustPoints: "Adjust Points",
    delta: "Point change (+ add, - deduct)",
    note: "Note",
    records: "Point Records",
    noRecord: "No Records",

    // Frontend
    brand_title: "KEDAI EMAS SIANG HENG Member System",
    btn_qr: "QR Code",
    btn_admin: "Admin",
    hero_title: "Check Member Points",
    hero_sub: "Enter phone number to check your current points",
    phone_label: "Phone Number",
    phone_placeholder: "Enter your phone number",
    btn_check: "Check Points",
    member_portal: "Member Portal",
    portal_desc: "Please scan the QR code below to access the member system",
    back_home: "Back to Home",
    btn_regenerate: "Regenerate QR",
    btn_print: "Print"
  },
  ms: {
    // Admin
    title: "Admin · Ahli",
    members: "Ahli",
    points: "Mata",
    home: "Laman Utama",
    logout: "Log Keluar",
    search: "Cari nama atau nombor telefon",
    totalPoints: "Jumlah Mata",
    addMember: "Tambah Ahli",
    name: "Nama",
    phone: "Telefon",
    createdAt: "Tarikh Daftar",
    noData: "Tiada Data",
    submit: "Hantar",
    adjustPoints: "Laraskan Mata",
    delta: "Perubahan Mata (+ tambah, - tolak)",
    note: "Nota",
    records: "Rekod Mata",
    noRecord: "Tiada Rekod",

    // Frontend
    brand_title: "Sistem Ahli KEDAI EMAS SIANG HENG",
    btn_qr: "Kod QR",
    btn_admin: "Admin",
    hero_title: "Semak Mata Ahli",
    hero_sub: "Masukkan nombor telefon untuk semak mata semasa",
    phone_label: "Nombor Telefon",
    phone_placeholder: "Masukkan nombor telefon anda",
    btn_check: "Semak Mata",
    member_portal: "Portal Ahli",
    portal_desc: "Sila imbas kod QR di bawah untuk masuk ke sistem ahli",
    back_home: "Kembali ke Laman Utama",
    btn_regenerate: "Jana Semula Kod QR",
    btn_print: "Cetak"
  }
}

export function applyLang(lang){
  if(lang === "bm") lang = "ms"; // 兼容 bm=ms
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(langs[lang][key]){
      el.innerText = langs[lang][key];
    }
    // 额外处理 placeholder
    if(el.hasAttribute("data-i18n-ph")){
      const phKey = el.getAttribute("data-i18n-ph");
      if(langs[lang][phKey]){
        el.setAttribute("placeholder", langs[lang][phKey]);
      }
    }
  });
  localStorage.setItem("lang", lang);
}

export function initLang(){
  let saved = localStorage.getItem("lang") || "zh";
  if(saved === "bm") saved = "ms";
  applyLang(saved);
  const sel = document.getElementById("langSwitch");
  if(sel) sel.value = saved;
}
