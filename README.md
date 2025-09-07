# KEDAI EMAS SIANG HENG · Member Rewards & Points
（GitHub 仓库可直接连接 Netlify 自动部署）

前端静态页面 + Netlify Functions + Supabase（Postgres）。  
已对齐以下结构：`members`、`point_transactions`、视图 `member_points`（包含 `last_activity_at`）。

## 在线功能
- `/add-member.html`：添加会员（按 `phone` 去重 Upsert）
- `/member-search.html`：会员搜索（按 `name/phone` 模糊匹配）
- `/points.html`：积分加/减并返回最新总分
- `/qr.html`：二维码页（指向前台查看积分页）

## 一键上手（连接 GitHub → Netlify 自动部署）
1. 在 Supabase 执行 `schema.sql`（或你已有 SQL）。
2. 把当前目录推到 GitHub：
   ```bash
   git init && git add . && git commit -m "init"
   git branch -M main
   git remote add origin https://github.com/<YOUR_GH_USER>/<YOUR_REPO>.git
   git push -u origin main
   ```
3. Netlify 后台 **Import from Git** 选择此仓库：
   - Build command：*(留空)*
   - Publish directory：`.`
   - Functions directory：`netlify/functions`（`netlify.toml` 已配置）
4. 设置环境变量：
   - `SUPABASE_URL = https://<your>.supabase.co`
   - `SUPABASE_SERVICE_ROLE = <your-service-role-key>`
5. 首次部署完成后，访问你域名进行验收。

## 本地调试（可选）
```bash
npm i -g netlify-cli
netlify login
netlify dev
```
打开 `http://localhost:8888` 验证。

## 目录结构
```
.
├─ add-member.html
├─ index.html
├─ member-search.html
├─ points.html
├─ qr.html
├─ netlify.toml
└─ netlify/
   └─ functions/
      ├─ add-member.js
      ├─ adjust-points.js
      └─ list-members.js
```

© 2025 JHS Bullion & Jewellery
