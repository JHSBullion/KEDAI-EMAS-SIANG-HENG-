
async function loadLang(lang){
  try{
    const res = await fetch('./lang/'+lang+'.json')
    const dict = await res.json()
    document.documentElement.setAttribute('lang', lang)
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const k = el.getAttribute('data-i18n'); if(dict[k]) el.textContent = dict[k]
    })
    document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
      const k = el.getAttribute('data-i18n-ph'); if(dict[k]) el.setAttribute('placeholder', dict[k])
    })
    localStorage.setItem('lang', lang)
    const sel = document.querySelector('select.lang'); if(sel) sel.value = lang
  }catch(e){ console.warn('i18n load fail', e) }
}
function setLang(lang){ loadLang(lang) }
window.setLang=setLang
document.addEventListener('DOMContentLoaded', ()=>{
  const lang = localStorage.getItem('lang') || (navigator.language||'zh').substring(0,2)
  loadLang(['zh','en','ms'].includes(lang)?lang:'zh')
  const sel = document.querySelector('select.lang'); if(sel) sel.addEventListener('change', e=>setLang(e.target.value))
})
