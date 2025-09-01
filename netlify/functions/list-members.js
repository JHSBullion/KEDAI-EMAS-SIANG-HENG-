// /.netlify/functions/list-members
export async function handler() {
  try {
    const { SUPABASE_URL, SUPABASE_SERVICE_ROLE } = process.env;

    // 从视图 member_points 读取
    const url = `${SUPABASE_URL}/rest/v1/member_points?select=member_id,name,phone,points&order=name.asc`;
    const resp = await fetch(url, {
      headers: {
        "apikey": SUPABASE_SERVICE_ROLE,
        "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE}`
      }
    });

    const text = await resp.text();
    if (!resp.ok) {
      return { statusCode: resp.status, body: text || "Query failed" };
    }
    return { statusCode: 200, body: text };
  } catch (e) {
    return { statusCode: 500, body: e.message || "Server error" };
  }
}
