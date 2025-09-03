// netlify/functions/search-members.js
import { supabase, cors, ok, bad, isOptions } from './_supabase.js'

export default async (req) => {
  if (isOptions(req)) return new Response(null, { headers: cors(req) })
  const url = new URL(req.url)
  const q = (url.searchParams.get('q') || '').trim()
  if (!q) return bad(req, 'q required')

  const like = `%${q.replace(/[%_]/g, '\\$&')}%`
  const { data, error } = await supabase
    .from('members')
    .select('id,name,phone,created_at')
    .or(`name.ilike.${like},phone.ilike.${like}`)
    .limit(50)

  if (error) return bad(req, error.message, 500)
  return ok(req, data || [])
}
