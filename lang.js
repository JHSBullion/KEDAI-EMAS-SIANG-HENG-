async function loadLang(lang){
  try{const res=await fetch('./lang/'+lang+'.json');const dict=await res.json();
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(dict[k]) el.textContent=dict[k]});
  localStorage.setItem('lang',lang);}catch(e){console.warn('lang load failed',e)}}
function setLang(lang){loadLang(lang)}
const cur=localStorage.getItem('lang')||'zh';loadLang(cur)