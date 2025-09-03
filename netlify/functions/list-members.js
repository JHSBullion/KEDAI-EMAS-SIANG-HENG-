// netlify/functions/list-members.js
import { supabase, cors, ok, bad, isOptions } from './_supabase.js'

export default async (req) => {
  if (isOptions(req)) return new Response(null, { headers: cors(req) })
  const url = new URL(req.url)
  const page = Math.max(1, parseInt(url.searchParams.get('page') || '1'))
  const size = Math.min(100, Math.max(1, parseInt(url.searchParams.get('size') || '20')))
  const from = (page - 1) * size
  const to = from + size - 1

  const { data, error, count } = await supabase
    .from('members')
    .select('id,name,phone,created_at', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to)

  if (error) return bad(req, error.message, 500)
  return ok(req, { page, size, total: count || 0, rows: data || [] })
}
