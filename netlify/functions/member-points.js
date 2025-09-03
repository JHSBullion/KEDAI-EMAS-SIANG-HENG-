// netlify/functions/member-points.js
import { supabase, cors, ok, bad, isOptions } from './_supabase.js'

export default async (req) => {
  if (isOptions(req)) return new Response(null, { headers: cors(req) })
  const url = new URL(req.url)
  const phone = (url.searchParams.get('phone') || '').trim()
  if (!phone) return bad(req, 'phone required')

  const { data, error } = await supabase
    .from('member_points')
    .select('member_id,name,phone,points')
    .eq('phone', phone)
    .maybeSingle()

  if (error) return bad(req, error.message, 500)
  if (!data) return bad(req, 'Member not found', 404)
  return ok(req, data)
}
