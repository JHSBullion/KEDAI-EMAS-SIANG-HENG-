// lang.js
const dict = {
  zh: {
    title: "后台 · 会员管理",
    members: "会员管理",
    points: "积分管理",
    home: "首页",
    logout: "登出",
    addMember: "新增会员",
    name: "姓名",
    phone: "电话",
    totalPoints: "总积分",
    createdAt: "注册时间",
    search: "搜索姓名或手机号",
    noData: "暂无数据",
    submit: "提交",
    cancel: "取消",
  },
  en: {
    title: "Admin · Members",
    members: "Members",
    points: "Points",
    home: "Home",
    logout: "Logout",
    addMember: "Add Member",
    name: "Name",
    phone: "Phone",
    totalPoints: "Total Points",
    createdAt: "Created At",
    search: "Search name or phone",
    noData: "No data",
    submit: "Submit",
    cancel: "Cancel",
  }
}

let currentLang = "zh"

export function initLang() {
  applyLang(currentLang)
}

export function applyLang(lang) {
  currentLang = lang
  const dictLang = dict[lang]

  // 普通 innerText/innerHTML 替换
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n")
    if (dictLang[key]) el.innerText = dictLang[key]
  })

  // placeholder 替换
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph")
    if (dictLang[key]) el.setAttribute("placeholder", dictLang[key])
  })

  // 页面标题替换
  if (dictLang["title"]) document.title = dictLang["title"]
}
