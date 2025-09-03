// netlify/functions/_supabase.js
// Shared utilities: CORS, JSON helpers, Supabase client
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const url = Deno.env.get('SUPABASE_URL')
const anon = Deno.env.get('SUPABASE_ANON_KEY')

if (!url || !anon) {
  console.error('Missing SUPABASE_URL / SUPABASE_ANON_KEY in Netlify env vars')
}

export const supabase = createClient(url, anon, {
  auth: { persistSession: false },
})

const ALLOWED = (Deno.env.get('ALLOWED_ORIGINS') || '').split(',').map(s => s.trim()).filter(Boolean)

function originOk(origin) {
  if (!origin) return false
  // Allow Netlify previews by default
  if (origin.endsWith('.netlify.app')) return true
  return ALLOWED.includes(origin)
}

export function cors(req) {
  const origin = req.headers.get('origin') || ''
  const headers = new Headers({
    'content-type': 'application/json; charset=utf-8',
  })
  if (originOk(origin)) {
    headers.set('access-control-allow-origin', origin)
    headers.set('vary', 'origin')
    headers.set('access-control-allow-headers', 'authorization,content-type')
    headers.set('access-control-allow-methods', 'GET,POST,OPTIONS')
  }
  return headers
}

export function ok(req, data, init = {}) {
  return new Response(JSON.stringify({ ok: true, data }), {
    ...init,
    headers: mergeHeaders(cors(req), init.headers),
  })
}

export function bad(req, message, status = 400, meta = {}) {
  return new Response(JSON.stringify({ ok: false, error: message, ...meta }), {
    status,
    headers: cors(req),
  })
}

export function isOptions(req) {
  return req.method === 'OPTIONS'
}

export async function readJSON(req) {
  try {
    return await req.json()
  } catch {
    return {}
  }
}

function mergeHeaders(a, b) {
  const h = new Headers(a)
  if (b) new Headers(b).forEach((v, k) => h.set(k, v))
  return h
}
