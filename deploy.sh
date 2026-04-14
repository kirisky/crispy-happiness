#!/bin/bash
set -e

# ====================== 配置项（修改为你的信息）======================
SERVER_IP="8.219.199.219"            # 服务器公网IP
SERVER_USER="root"                   # 服务器登录用户
SERVER_DIR="/www/wwwroot/www.starpath.global"  # 网站根目录
# ===================================================================

# 步骤 1：清理并打包 Next.js 静态文件
echo "======= 清理旧的 out 目录并开始打包 Next.js 项目 ======="
rm -rf ./out
npx pnpm run build

# 检查打包是否成功
if [ ! -d "./out" ]; then
    echo "❌ 打包失败！未找到 out 目录"
    exit 1
fi

# 步骤 2：用 rsync 上传（只同步差异文件，自动覆盖）
echo "======= 打包成功，开始上传到服务器 ======="
rsync -avz --delete \
    --exclude='.user.ini' \
    --exclude='.htaccess' \
    ./out/ ${SERVER_USER}@${SERVER_IP}:${SERVER_DIR}/

# 步骤 3：重载 Nginx 配置
echo "======= 重载 Nginx 配置 ======="
ssh ${SERVER_USER}@${SERVER_IP} "nginx -s reload"

echo "✅ 部署成功！"
echo "提示：开始线上测试（https://www.starpath.global）"