// netlify/functions/add-member.js
import { supabase, cors, ok, bad, isOptions, readJSON } from './_supabase.js'

export default async (req) => {
  if (isOptions(req)) return new Response(null, { headers: cors(req) })
  if (req.method !== 'POST') return bad(req, 'Use POST', 405)

  const body = await readJSON(req)
  const name = (body.name || '').trim()
  const phone = (body.phone || '').trim()

  if (!name || !phone) return bad(req, 'name & phone required')

  // prevent duplicate phone
  const { data: exist, error: qerr } = await supabase
    .from('members').select('id').eq('phone', phone).maybeSingle()

  if (qerr) return bad(req, qerr.message, 500)
  if (exist) return bad(req, 'Phone already exists', 409)

  const { data, error } = await supabase
    .from('members').insert({ name, phone }).select().single()

  if (error) return bad(req, error.message, 500)
  return ok(req, data)
}
