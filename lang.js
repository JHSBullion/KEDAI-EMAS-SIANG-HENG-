// i18n map
const i18n = {
  en:{system:'Member System',qr:'QR Code',admin:'Admin',home:'Home',member_entry:'Member Entry',
      welcome:'Welcome to KEDAI EMAS SIANG HENG Member System',enter_phone:'Enter your mobile number to view your points.',
      phone:'Phone',check_points:'Check',deep_link_hint:'Supports deep link with ?phone=',
      portal:'Member Portal',results:'Member Information',history:'Point History',need_phone:'Please provide phone.',not_found:'Member not found.',no_records:'No records',
      admin_members:'Admin · Member Management',admin_points:'Admin · Points Management',members:'Members',points:'Points',logout:'Logout',
      add_member:'Add Member',name:'Name',member_list:'Member List',created_at:'Created',
      adjust_points:'Adjust Points',points_change:'Change (+/-)',note:'Note',submit:'Submit',points_history:'Points History',change:'Change',time:'Time',
      login:'Login',email:'Email',password:'Password',sign_in:'Sign in',login_tip:'Use your Supabase admin email/password (e.g. admin@shop.com / 123456).',
      print_qr:'Printable QR Code',regenerate:'Regenerate',print:'Print'
  },
  zh:{system:'会员系统',qr:'二维码',admin:'后台',home:'首页',member_entry:'会员入口',
      welcome:'欢迎来到 KEDAI EMAS SIANG HENG 会员系统',enter_phone:'输入手机号即可查询积分。',
      phone:'电话',check_points:'查询积分',deep_link_hint:'支持带参访问：?phone=',
      portal:'会员入口',results:'会员信息',history:'积分记录',need_phone:'请输入手机号',not_found:'未找到该会员',no_records:'暂无记录',
      admin_members:'后台 · 会员管理',admin_points:'后台 · 积分管理',members:'会员',points:'积分',logout:'退出登录',
      add_member:'新增会员',name:'姓名',member_list:'会员列表',created_at:'创建时间',
      adjust_points:'调整积分',points_change:'变动（+/-）',note:'备注',submit:'提交',points_history:'积分记录',change:'变动',time:'时间',
      login:'登录',email:'邮箱',password:'密码',sign_in:'登录',login_tip:'请使用 Supabase 管理员邮箱/密码登录（如 admin@shop.com / 123456）。',
      print_qr:'打印用二维码',regenerate:'重新生成',print:'打印'
  },
  ms:{system:'Sistem Ahli',qr:'Kod QR',admin:'Admin',home:'Laman Utama',member_entry:'Kemasukan Ahli',
      welcome:'Selamat datang ke Sistem Ahli KEDAI EMAS SIANG HENG',enter_phone:'Masukkan nombor telefon untuk semak mata.',
      phone:'Telefon',check_points:'Semak',deep_link_hint:'Sokong pautan dengan ?phone=',
      portal:'Portal Ahli',results:'Maklumat Ahli',history:'Sejarah Mata',need_phone:'Sila masukkan telefon',not_found:'Ahli tiada',no_records:'Tiada rekod',
      admin_members:'Admin · Pengurusan Ahli',admin_points:'Admin · Pengurusan Mata',members:'Ahli',points:'Mata',logout:'Log Keluar',
      add_member:'Tambah Ahli',name:'Nama',member_list:'Senarai Ahli',created_at:'Dicipta',
      adjust_points:'Laraskan Mata',points_change:'Perubahan (+/-)',note:'Nota',submit:'Hantar',points_history:'Sejarah Mata',change:'Perubahan',time:'Masa',
      login:'Log Masuk',email:'Emel',password:'Kata Laluan',sign_in:'Log Masuk',login_tip:'Guna emel/kata laluan admin Supabase (cth. admin@shop.com / 123456).',
      print_qr:'Kod QR Boleh Cetak',regenerate:'Jana Semula',print:'Cetak'
  }
};
function currentLang(){ return localStorage.getItem('lang') || 'zh'; }
function setLang(v){ localStorage.setItem('lang', v); applyTranslations(); }
function applyTranslations(){
  const lang = currentLang();
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(i18n[lang] && i18n[lang][key]) el.textContent = i18n[lang][key];
  });
  const sel = document.getElementById('langSwitch');
  if(sel) sel.value = lang;
}
document.addEventListener('change', (e)=>{
  if(e.target && e.target.id==='langSwitch'){ setLang(e.target.value); location.reload(); }
});
document.addEventListener('DOMContentLoaded', applyTranslations);
