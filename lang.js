const translations = {
  zh: { system: '会员管理', qr: '二维码', admin: '后台', home: '首页', logout: '登出', welcome: '欢迎来到 KEDAI EMAS SIANG HENG 会员系统', instruction: '输入手机号即可查询积分', phone: '电话', check: '查询积分', memberManage: '会员管理', pointsManage: '积分管理', addMember: '新增会员', memberList: '会员列表', name: '姓名', createdAt: '创建时间', adjustPoints: '调整积分', pointsChange: '积分变动（正数加分，负数扣分）', note: '备注', submit: '提交', pointsRecord: '积分记录', change: '变动', time: '时间', memberPoints: '会员积分详情', history: '积分历史', login: '登录', email: '邮箱', password: '密码', printQR: '打印用二维码', regenerate: '重新生成' },
  en: { system: 'Member System', qr: 'QR Code', admin: 'Admin', home: 'Home', logout: 'Logout', welcome: 'Welcome to KEDAI EMAS SIANG HENG Member System', instruction: 'Enter phone number to check points', phone: 'Phone', check: 'Check Points', memberManage: 'Members', pointsManage: 'Points', addMember: 'Add Member', memberList: 'Member List', name: 'Name', createdAt: 'Created At', adjustPoints: 'Adjust Points', pointsChange: 'Points Change (+ or -)', note: 'Note', submit: 'Submit', pointsRecord: 'Points Records', change: 'Change', time: 'Time', memberPoints: 'Member Points Details', history: 'Points History', login: 'Login', email: 'Email', password: 'Password', printQR: 'Printable QR Code', regenerate: 'Regenerate' },
  ms: { system: 'Sistem Ahli', qr: 'Kod QR', admin: 'Admin', home: 'Laman Utama', logout: 'Log Keluar', welcome: 'Selamat Datang ke Sistem Ahli KEDAI EMAS SIANG HENG', instruction: 'Masukkan nombor telefon untuk semak mata', phone: 'Telefon', check: 'Semak Mata', memberManage: 'Ahli', pointsManage: 'Mata', addMember: 'Tambah Ahli', memberList: 'Senarai Ahli', name: 'Nama', createdAt: 'Dicipta Pada', adjustPoints: 'Laraskan Mata', pointsChange: 'Perubahan Mata (+ atau -)', note: 'Nota', submit: 'Hantar', pointsRecord: 'Rekod Mata', change: 'Perubahan', time: 'Masa', memberPoints: 'Butiran Mata Ahli', history: 'Sejarah Mata', login: 'Log Masuk', email: 'E-mel', password: 'Kata Laluan', printQR: 'Kod QR Boleh Cetak', regenerate: 'Jana Semula' }
};

function applyLanguage(lang){
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(translations[lang] && translations[lang][key]){
      el.innerText = translations[lang][key];
    }
  });
  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', ()=>{
  const savedLang = localStorage.getItem('lang') || 'zh';
  document.getElementById('langSwitcher').value = savedLang;
  applyLanguage(savedLang);
  document.getElementById('langSwitcher').addEventListener('change', (e)=>{
    applyLanguage(e.target.value);
  });
});