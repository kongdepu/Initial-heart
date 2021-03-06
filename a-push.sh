#!/usr/bin/env sh
echo "正在推送"
# 确保脚本抛出遇到的错误
set -e

# 推送@github
git add .
git commit -m 'push'
git push

# 生成静态文件
npm run build

# 进入生成的文件夹
cd ./public

# 如果是发布到自定义域名
echo 'docs.kwyd.work' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:kongdepu/Initial-heart.git master:gh-pages

cd -