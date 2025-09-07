// netlify/functions/adjust-points.js
import { createClient } from '@supabase/supabase-js';

const url = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // 必须是 Service Role
const sb = createClient(url, serviceKey);

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ success:false, error:'Method not allowed' });
    return;
  }

  try{
    const { phone, delta, note } = req.body || {};
    if(!phone || typeof delta !== 'number'){
      res.status(400).json({ success:false, error:'phone 与 delta 必填' });
      return;
    }

    // 找会员
    const { data: member, error: mErr } = await sb
      .from('members')
      .select('id')
      .eq('phone', phone)
      .maybeSingle();

    if(mErr) throw mErr;
    if(!member){ res.status(404).json({success:false, error:'会员不存在'}); return; }

    // 记一条积分交易
    const { error: tErr } = await sb.from('point_transactions').insert({
      member_id: member.id,
      delta: Math.trunc(delta),
      note: note || null
    });
    if(tErr) throw tErr;

    // 返回最新积分
    const { data: viewRow, error: vErr } = await sb
      .from('member_points')
      .select('member_id,name,phone,points')
      .eq('member_id', member.id)
      .maybeSingle();
    if(vErr) throw vErr;

    res.status(200).json({ success:true, data:viewRow });
  }catch(e){
    res.status(500).json({ success:false, error:e.message });
  }
};
