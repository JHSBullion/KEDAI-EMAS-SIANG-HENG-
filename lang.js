async function loadLang(lang){
  const res = await fetch('./lang/'+lang+'.json')
  const dict = await res.json()
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n')
    if(dict[key]) el.textContent = dict[key]
  })
  localStorage.setItem('lang', lang)
}
const currentLang = localStorage.getItem('lang') || 'zh'
loadLang(currentLang)