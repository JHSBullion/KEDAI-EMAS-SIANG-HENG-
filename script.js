// ✅ 手机号清理函数：去掉空格、非数字字符，但保留前导0
function normalizePhone(p) {
  return (p || '').trim().replace(/\s+/g, '').replace(/[^\d]/g, '');
}

document.addEventListener("DOMContentLoaded", function() {
  // 处理首页表单提交
  const form = document.getElementById("f");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      let phone = document.getElementById("phone").value;
      phone = normalizePhone(phone);
      if (phone) {
        window.location.href = "member-portal.html?phone=" + encodeURIComponent(phone);
      } else {
        alert("请输入手机号");
      }
    });
  }

  // 这里保留你原本的其他逻辑
  // 比如：积分显示 / 管理后台操作 / 语言切换等
  // ===========================================

  // 示例：如果有积分查询逻辑
  const urlParams = new URLSearchParams(window.location.search);
  const phoneParam = urlParams.get("phone");
  if (phoneParam && document.getElementById("pointsDisplay")) {
    // 假设你用 supabase 获取积分
    fetchPoints(phoneParam);
  }
});

// 假设你有的函数：获取积分
async function fetchPoints(phone) {
  try {
    // TODO: 这里替换成你项目里实际的 API / Supabase 代码
    // const { data, error } = await supabase.from("members").select("*").eq("phone", phone);
    // if (error) throw error;
    // if (data.length === 0) {
    //   document.getElementById("pointsDisplay").innerText = "未找到该手机号的积分";
    // } else {
    //   document.getElementById("pointsDisplay").innerText = data[0].points;
    // }
  } catch (err) {
    console.error("查询失败:", err);
  }
}
