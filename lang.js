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
    brand_title: "黄金会员积分系统",
    btn_qr: "会员入口",
    btn_admin: "后台管理",
    hero_title: "欢迎",
    hero_sub: "扫描二维码进入会员系统",
    phone_label: "电话号码",
    btn_check: "查询积分",
    member_portal: "会员门户",
    portal_desc: "请扫描下方二维码进入会员系统",
    back_home: "返回首页",
    btn_regenerate: "重置二维码",
    btn_print: "打印"
  },
  en: {
    // 后台
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
    brand_title: "Gold Member Points System",
    btn_qr: "Member Portal",
    btn_admin: "Admin",
    hero_title: "Welcome",
    hero_sub: "Scan the QR code to access the member system",
    phone_label: "Phone Number",
    btn_check: "Check Points",
    member_portal: "Member Portal",
    portal_desc: "Please scan the QR code below to enter the member system",
    back_home: "Back to Home",
    btn_regenerate: "Regenerate",
    btn_print: "Print"
  },
  ms: {
    // 后台
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
    brand_title: "Sistem Mata Ganjaran Ahli Emas",
    btn_qr: "Portal Ahli",
    btn_admin: "Admin",
    hero_title: "Selamat Datang",
    hero_sub: "Imbas kod QR untuk masuk ke sistem ahli",
    phone_label: "Nombor Telefon",
    btn_check: "Semak Mata",
    member_portal: "Portal Ahli",
    portal_desc: "Sila imbas kod QR di bawah untuk masuk ke sistem ahli",
    back_home: "Kembali ke Laman Utama",
    btn_regenerate: "Jana Semula",
    btn_print: "Cetak"
  }
}

export function applyLang(lang){
  if(lang === "bm") lang = "ms"  // 兼容 bm=ms
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n")
    el.innerText = langs[lang][key] || key
  })
  localStorage.setItem("lang", lang)
}

export function initLang(){
  let saved = localStorage.getItem("lang") || "zh"
  if(saved === "bm") saved = "ms"
  applyLang(saved)
  const sel = document.getElementById("langSwitch")
  if(sel) sel.value = saved
}
