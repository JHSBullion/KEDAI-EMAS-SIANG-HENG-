// web.js - tiny helper for fetch + UI tips
export async function api(path, init = {}) {
  const res = await fetch(path, {
    headers: { 'content-type': 'application/json', ...(init.headers || {}) },
    ...init,
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok || json.ok === false) {
    throw new Error(json.error || res.statusText)
  }
  return json.data ?? json
}

export function tip(el, text, ok = true) {
  el.innerHTML = `<div style="padding:8px 10px;border-radius:10px;
    background:${ok ? '#063' : '#5a1a1a'};color:#fff">${text}</div>`
  setTimeout(() => (el.innerHTML = ''), 2600)
}
