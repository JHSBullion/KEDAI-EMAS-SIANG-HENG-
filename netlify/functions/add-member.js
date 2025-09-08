// /.netlify/functions/add-member
export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { SUPABASE_URL, SUPABASE_SERVICE_ROLE } = process.env;
    const { name, phone } = JSON.parse(event.body || "{}");

    if (!name || !phone) {
      return { statusCode: 400, body: "Missing name or phone" };
    }

    // 写入 members 表
    const resp = await fetch(`${SUPABASE_URL}/rest/v1/members`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Prefer": "return=representation",
        "apikey": SUPABASE_SERVICE_ROLE,
        "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE}`
      },
      body: JSON.stringify([{ name, phone }])
    });

    const text = await resp.text();
    if (!resp.ok) {
      return { statusCode: resp.status, body: text || "Insert failed" };
    }
    return { statusCode: 200, body: text };
  } catch (e) {
    return { statusCode: 500, body: e.message || "Server error" };
  }
}
