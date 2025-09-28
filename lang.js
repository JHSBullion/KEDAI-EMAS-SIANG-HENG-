(function(){
  // Lightweight i18n loader — loads lang/*.json and applies translations to [data-i18n] and [data-i18n-ph]
  const alias = {
    // map HTML data-i18n keys to keys in lang JSON files
    brand_title: ['system_title','brand_title','welcome'],
    btn_qr: ['open_portal','open_portal'],
    btn_admin: ['open_admin','open_admin'],
    hero_title: ['welcome','hero_title'],
    hero_sub: ['hero_desc','portal_desc','hero_sub'],
    phone_label: ['phone','enter_phone'],
    phone_placeholder: ['enter_phone','phone_placeholder'],
    btn_check: ['check_points','btn_check'],

    qr_page_title: ['member_portal','system_title','qr_page_title'],
    back_home: ['back_home','nav_home'],
    qr_title: ['member_portal','qr_title'],
    qr_desc: ['portal_desc','qr_desc'],
    qr_link_label: ['open_portal','qr_link_label'],
    btn_regenerate: ['btn_regenerate'],
    btn_print: ['btn_print'],

    tx_empty: ['no_member','no_data','no_record','tx_empty']
  };

  const fallbacks = {
    back_home: {zh:'返回首页', en:'Back to Home', ms:'Kembali ke Laman Utama'},
    btn_regenerate: {zh:'重置二维码', en:'Regenerate', ms:'Jana Semula'},
    btn_print: {zh:'打印', en:'Print', ms:'Cetak'}
  };

  function mapLangCode(c){
    if(!c) return 'zh';
    if(c === 'bm') return 'ms'; // select uses bm but files are ms.json
    return c;
  }

  async function loadLang(code){
    const mapped = mapLangCode(code);
    try{
      const res = await fetch('lang/' + mapped + '.json', {cache:'no-cache'});
      if(!res.ok) throw new Error('Lang file not found: ' + mapped);
      const t = await res.json();
      applyTranslations(t, code);
    }catch(e){
      console.warn('i18n load error', e);
      // no-op
    }
  }

  function findTranslation(t, key, uiLang){
    if(!t) return undefined;
    if(Object.prototype.hasOwnProperty.call(t, key)) return t[key];
    const alts = alias[key];
    if(alts){
      for(const a of alts){
        if(Object.prototype.hasOwnProperty.call(t, a)) return t[a];
      }
    }
    if(fallbacks[key]) return fallbacks[key][mapLangCode(uiLang)] || fallbacks[key].en;
    return undefined;
  }

  function applyTranslations(t, uiLang){
    // Set elements' innerText from data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      const txt = findTranslation(t, key, uiLang);
      if(txt !== undefined){
        // preserve inner structure if element has children?
        // Clear children and set text to avoid leftover icons/text nodes
        el.textContent = txt;
      }
    });
    // Set placeholders for inputs/textareas
    document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
      const key = el.getAttribute('data-i18n-ph');
      const txt = findTranslation(t, key, uiLang);
      if(txt !== undefined){
        if('placeholder' in el) el.placeholder = txt;
        else el.setAttribute('placeholder', txt);
      }
    });
    // Update document title if translation contains title/system_title
    const titleKeys = ['title','system_title','member_portal','qr_page_title'];
    for(const k of titleKeys){
      if(t && Object.prototype.hasOwnProperty.call(t,k)){
        document.title = t[k];
        break;
      }
    }
    // Sync language selector UI
    document.querySelectorAll('.lang-select, #langSel').forEach(s=>{
      try{
        const saved = localStorage.getItem('lang') || uiLang;
        if(s.querySelector('option[value="'+saved+'"]')) s.value = saved;
        else if(saved === 'ms' && s.querySelector('option[value="bm"]')) s.value = 'bm';
        else s.value = saved;
      }catch(e){}
    });
    localStorage.setItem('lang', uiLang);
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    const saved = localStorage.getItem('lang') || 'zh';
    // initialize selector elements value
    document.querySelectorAll('.lang-select, #langSel').forEach(s=>{
      if(s.querySelector('option[value="'+saved+'"]')) s.value = saved;
      else if(saved === 'ms' && s.querySelector('option[value="bm"]')) s.value = 'bm';
    });
    // load translations
    loadLang(saved);

    // attach change listeners
    document.querySelectorAll('.lang-select, #langSel').forEach(s=>{
      s.addEventListener('change', (e)=>{
        const val = e.target.value;
        localStorage.setItem('lang', val);
        loadLang(val);
      });
    });
  });

  // Expose methods for debugging
  window.i18nLoader = { loadLang, applyTranslations, alias };
})();