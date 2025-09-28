const lang = {
  zh: {
    // 公共
    back_home: "返回首页",
    logout: "登出",
    nav_members: "会员管理",
    nav_points: "积分管理",
    nav_home: "首页",
    footer_copyright: "© 2025 KEDAI EMAS SIANG HENG · All rights reserved.",

    // 前台 index.html
    brand_title: "KEDAI EMAS SIANG HENG 会员系统",
    welcome: "欢迎使用会员积分系统",
    loginBtn: "管理员登录",
    joinBtn: "立即加入",

    // QR 页 qr.html
    qr_page_title: "QR · 会员入口",
    scanQr: "请扫描二维码进入会员系统",
    backHome: "返回首页",

    // 登录页 login.html
    login_title: "管理员登录",
    login_btn: "登录",
    login_email: "邮箱",
    login_password: "密码",
    login_hint_title: "提示",
    login_hint_text: "请使用 Supabase 管理员邮箱与密码登录（例如 admin@shop.com / 123456）。",
    login_error_empty: "请输入邮箱与密码",

    // 会员查询页 member-portal.html
    portal_title: "会员积分查询结果",
    portal_result: "查询结果",
    portal_name: "姓名：",
    portal_phone: "电话：",
    portal_total_points: "总积分：",
    portal_records: "积分记录",
    portal_date: "日期",
    portal_change: "变动",
    portal_note: "备注",
    portal_no_record: "暂无记录",
    portal_error_missing_phone: "缺少手机号",
    portal_error_query: "查询出错",
    portal_error_not_found: "未找到该会员",

    // 新增会员页 add-member.html
    add_title: "新增会员",
    form_name: "姓名",
    form_phone: "电话",
    form_points: "初始积分",
    btn_cancel: "取消",
    btn_submit: "提交",
    alert_missing: "请输入姓名和电话",

    // 后台 · 会员管理 admin-members.html
    admin_members_title: "后台 · 会员管理",
    member_list: "会员列表",
    add_member: "新增会员",
    table_name: "姓名",
    table_phone: "电话",
    table_points: "总积分",
    table_created: "注册时间",
    no_data: "暂无数据",

    // 后台 · 积分管理 admin-points.html
    admin_points_title: "后台 · 积分管理",
    adjust_points: "调整积分",
    form_delta: "积分变动",
    form_note: "备注",
    points_records: "积分记录",
    table_delta: "变动",
    table_time: "时间",
    no_record: "暂无记录",
    error_invalid_input: "请输入有效的手机号与积分变动",
    error_not_found: "未找到该会员",
    success_submitted: "已提交"
  },

  en: {
    // Common
    back_home: "Back to Home",
    logout: "Logout",
    nav_members: "Members",
    nav_points: "Points",
    nav_home: "Home",
    footer_copyright: "© 2025 KEDAI EMAS SIANG HENG · All rights reserved.",

    // Front index.html
    brand_title: "KEDAI EMAS SIANG HENG Member System",
    welcome: "Welcome to the Member Points System",
    loginBtn: "Admin Login",
    joinBtn: "Join Now",

    // QR page
    qr_page_title: "QR · Member Access",
    scanQr: "Please scan the QR code to enter the member system",
    backHome: "Back to Home",

    // Login
    login_title: "Admin Login",
    login_btn: "Login",
    login_email: "Email",
    login_password: "Password",
    login_hint_title: "Note",
    login_hint_text: "Please use Supabase admin email and password (e.g. admin@shop.com / 123456).",
    login_error_empty: "Please enter email and password",

    // Member portal
    portal_title: "Member Points Result",
    portal_result: "Result",
    portal_name: "Name:",
    portal_phone: "Phone:",
    portal_total_points: "Total Points:",
    portal_records: "Points Records",
    portal_date: "Date",
    portal_change: "Change",
    portal_note: "Note",
    portal_no_record: "No records",
    portal_error_missing_phone: "Missing phone number",
    portal_error_query: "Query error",
    portal_error_not_found: "Member not found",

    // Add member
    add_title: "Add Member",
    form_name: "Name",
    form_phone: "Phone",
    form_points: "Initial Points",
    btn_cancel: "Cancel",
    btn_submit: "Submit",
    alert_missing: "Please enter name and phone",

    // Admin members
    admin_members_title: "Admin · Members",
    member_list: "Member List",
    add_member: "Add Member",
    table_name: "Name",
    table_phone: "Phone",
    table_points: "Total Points",
    table_created: "Registered At",
    no_data: "No data",

    // Admin points
    admin_points_title: "Admin · Points",
    adjust_points: "Adjust Points",
    form_delta: "Points Change",
    form_note: "Note",
    points_records: "Points Records",
    table_delta: "Change",
    table_time: "Time",
    no_record: "No records",
    error_invalid_input: "Please enter a valid phone number and points change",
    error_not_found: "Member not found",
    success_submitted: "Submitted"
  },

  ms: {
    // Umum
    back_home: "Kembali ke Laman Utama",
    logout: "Log Keluar",
    nav_members: "Ahli",
    nav_points: "Mata",
    nav_home: "Laman Utama",
    footer_copyright: "© 2025 KEDAI EMAS SIANG HENG · Hak cipta terpelihara.",

    // Muka depan
    brand_title: "Sistem Ahli KEDAI EMAS SIANG HENG",
    welcome: "Selamat datang ke Sistem Mata Ahli",
    loginBtn: "Log Masuk Admin",
    joinBtn: "Sertai Sekarang",

    // QR
    qr_page_title: "QR · Akses Ahli",
    scanQr: "Sila imbas kod QR untuk masuk ke sistem ahli",
    backHome: "Kembali ke Laman Utama",

    // Log masuk
    login_title: "Log Masuk Admin",
    login_btn: "Log Masuk",
    login_email: "Emel",
    login_password: "Kata Laluan",
    login_hint_title: "Nota",
    login_hint_text: "Sila guna emel dan kata laluan admin Supabase (cth: admin@shop.com / 123456).",
    login_error_empty: "Sila masukkan emel dan kata laluan",

    // Portal ahli
    portal_title: "Keputusan Mata Ahli",
    portal_result: "Keputusan",
    portal_name: "Nama:",
    portal_phone: "Telefon:",
    portal_total_points: "Jumlah Mata:",
    portal_records: "Rekod Mata",
    portal_date: "Tarikh",
    portal_change: "Perubahan",
    portal_note: "Catatan",
    portal_no_record: "Tiada rekod",
    portal_error_missing_phone: "Tiada nombor telefon",
    portal_error_query: "Ralat carian",
    portal_error_not_found: "Ahli tidak ditemui",

    // Tambah ahli
    add_title: "Tambah Ahli",
    form_name: "Nama",
    form_phone: "Telefon",
    form_points: "Mata Awal",
    btn_cancel: "Batal",
    btn_submit: "Hantar",
    alert_missing: "Sila masukkan nama dan telefon",

    // Admin ahli
    admin_members_title: "Admin · Ahli",
    member_list: "Senarai Ahli",
    add_member: "Tambah Ahli",
    table_name: "Nama",
    table_phone: "Telefon",
    table_points: "Jumlah Mata",
    table_created: "Tarikh Daftar",
    no_data: "Tiada data",

    // Admin mata
    admin_points_title: "Admin · Mata",
    adjust_points: "Laraskan Mata",
    form_delta: "Perubahan Mata",
    form_note: "Catatan",
    points_records: "Rekod Mata",
    table_delta: "Perubahan",
    table_time: "Masa",
    no_record: "Tiada rekod",
    error_invalid_input: "Sila masukkan nombor telefon dan perubahan mata yang sah",
    error_not_found: "Ahli tidak ditemui",
    success_submitted: "Berjaya dihantar"
  }
};
