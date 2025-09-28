export const langs = {
  zh: {
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
    noRecord: "暂无记录"
  },
  en: {
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
    noRecord: "No Records"
  }
}

export function applyLang(lang){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n")
    el.innerText = langs[lang][key] || key
  })
  localStorage.setItem("lang", lang)
}

export function initLang(){
  const saved = localStorage.getItem("lang") || "zh"
  applyLang(saved)
  const sel = document.getElementById("langSwitch")
  if(sel) sel.value = saved
}
