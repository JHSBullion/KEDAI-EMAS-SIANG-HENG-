// netlify/functions/adjust-points.js
import { supabase, cors, ok, bad, isOptions, readJSON } from './_supabase.js'

export default async (req) => {
  if (isOptions(req)) return new Response(null, { headers: cors(req) })
  if (req.method !== 'POST') return bad(req, 'Use POST', 405)

  const body = await readJSON(req)
  const phone = (body.phone || '').trim()
  const delta = parseInt(body.delta || 0)
  const note = (body.note || '').trim()

  if (!phone || !delta) return bad(req, 'phone & non-zero delta required')

  const { data: member, error: qerr } = await supabase
    .from('members').select('id').eq('phone', phone).maybeSingle()
  if (qerr) return bad(req, qerr.message, 500)
  if (!member) return bad(req, 'Member not found', 404)

  const { data, error } = await supabase
    .from('point_transactions')
    .insert({ member_id: member.id, delta, note })
    .select().single()

  if (error) return bad(req, error.message, 500)
  return ok(req, data)
}
