// lang.js (plain script, not module)
// Put this file next to your html files and <script src="lang.js"></script> in <head> or before page logic.

(function(){
  // 翻译字典（按需补充 key）
  const I18N = {
    zh: {
      // 全站与前台
      brand_title: "KEDAI EMAS SIANG HENG 会员系统",
      btn_qr: "二维码",
      btn_admin: "后台",
      btn_home: "首页",
      hero_title: "会员积分查询",
      hero_sub: "输入手机号码查询当前积分",
      phone_placeholder: "请输入手机号",
      btn_check: "查询积分",

      // member-portal / result page
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

      // admin 共用
      admin_members_title: "后台 · 会员管理",
      admin_points_title: "后台 · 积分管理",
      nav_members: "会员管理",
      nav_points: "积分管理",
      nav_logout: "登出",
      add_member_btn: "新增会员",
      ph_search: "搜索姓名或手机号",
      th_name: "姓名",
      th_phone: "电话",
      th_total_points: "总积分",
      th_created: "注册时间",
      no_rows: "暂无记录",
      btn_submit: "提交",
      note_label: "备注",
      delta_label: "积分变动（正数加分，负数扣分）",
      adjust_points: "调整积分",
      points_record_title: "积分记录",

      // messages (示例)
      msg_success: "已提交",
      error_invalid_input: "请输入有效的手机号与积分变动",
      error_member_not_found: "未找到该会员"
    },
    en: {
      brand_title: "KEDAI EMAS SIANG HENG Membership",
      btn_qr: "QR Code",
      btn_admin: "Admin",
      btn_home: "Home",
      hero_title: "Membership Points Inquiry",
      hero_sub: "Enter your phone number to check current points",
      phone_placeholder: "Enter phone number",
      btn_check: "Check Points",

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

      admin_members_title: "Admin · Members",
      admin_points_title: "Admin · Points",
      nav_members: "Members",
      nav_points: "Points",
      nav_logout: "Logout",
      add_member_btn: "Add Member",
      ph_search: "Search name or phone",
      th_name: "Name",
      th_phone: "Phone",
      th_total_points: "Total Points",
      th_created: "Created At",
      no_rows: "No records",
      btn_submit: "Submit",
      note_label: "Note",
      delta_label: "Point change (+ add, - deduct)",
      adjust_points: "Adjust Points",
      points_record_title: "Point Records",

      msg_success: "Submitted",
      error_invalid_input: "Please enter a valid phone and point change",
      error_member_not_found: "Member not found"
    },
    ms: {
      brand_title: "KEDAI EMAS SIANG HENG Keahlian",
      btn_qr: "Kod QR",
      btn_admin: "Admin",
      btn_home: "Laman Utama",
      hero_title: "Semakan Mata Ahli",
      hero_sub: "Masukkan nombor telefon untuk semak mata",
      phone_placeholder: "Masukkan nombor telefon",
      btn_check: "Semak Mata",

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

      admin_members_title: "Admin · Ahli",
      admin_points_title: "Admin · Mata",
      nav_members: "Ahli",
      nav_points: "Mata",
      nav_logout: "Log Keluar",
      add_member_btn: "Tambah Ahli",
      ph_search: "Cari nama atau telefon",
      th_name: "Nama",
      th_phone: "Telefon",
      th_total_points: "Jumlah Mata",
      th_created: "Tarikh Daftar",
      no_rows: "Tiada rekod",
      btn_submit: "Hantar",
      note_label: "Catatan",
      delta_label: "Perubahan Mata (+ tambah, - tolak)",
      adjust_points: "Ubah Mata",
      points_record_title: "Rekod Mata",

      msg_success: "Berjaya",
      error_invalid_input: "Sila masukkan telefon dan perubahan mata yang sah",
      error_member_not_found: "Ahli tidak dijumpai"
    }
  }

  // 当前语言
  let current = localStorage.getItem('lang') || 'zh'
  if(!I18N[current]) current = 'zh'

  // 将 language 应用到页面
  function applyLang(lang){
    if(!I18N[lang]) lang = 'zh'
    current = lang
    localStorage.setItem('lang', lang)

    const dict = I18N[lang]

    // 替换 data-i18n（文本）
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const k = el.getAttribute('data-i18n')
      if(k && dict[k] !== undefined) el.textContent = dict[k]
    })

    // 替换 data-i18n-html（若需要 innerHTML）
    document.querySelectorAll('[data-i18n-html]').forEach(el=>{
      const k = el.getAttribute('data-i18n-html')
      if(k && dict[k] !== undefined) el.innerHTML = dict[k]
    })

    // 替换 placeholder
    document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
      const k = el.getAttribute('data-i18n-ph')
      if(k && dict[k] !== undefined) el.setAttribute('placeholder', dict[k])
    })

    // 更新 <title>：优先支持 <title data-i18n="...">，否则 fallback 到 dict.title
    const titleEl = document.querySelector('title[data-i18n]')
    if(titleEl){
      const tk = titleEl.getAttribute('data-i18n')
      if(tk && dict[tk] !== undefined) titleEl.textContent = dict[tk]
    } else if(dict.title){
      document.title = dict.title
    }

    // 同步所有 language selects 的值
    document.querySelectorAll('select.lang, select.lang-select, select#langSwitch, select#lang').forEach(sel=>{
      try{ sel.value = lang }catch(e){}
    })
  }

  // 绑定页面上可能存在的 select 元素（容错多个命名）
  function bindLanguageSelectors(){
    const sels = document.querySelectorAll('select.lang, select.lang-select, select#langSwitch, select#lang')
    sels.forEach(sel=>{
      // 如果已经绑定就跳过
      if(sel._langBound) return
      sel._langBound = true
      sel.addEventListener('change', e=>{
        const v = e.target.value
        applyLang(v)
      })
    })
  }

  // 外部可调用 API
  window.I18N = I18N
  window.applyLang = applyLang
  window.getCurrentLang = ()=> current
  window.bindLanguageSelectors = bindLanguageSelectors
  window.initLang = function(){
    bindLanguageSelectors()
    applyLang(current)
  }

  // 自动初始化（在 DOMContentLoaded）
  document.addEventListener('DOMContentLoaded', ()=>{
    bindLanguageSelectors()
    applyLang(current)
  })

})();
