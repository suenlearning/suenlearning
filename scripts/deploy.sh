#!/usr/bin/env sh

# abort on errors
set -e

PAGES_REPO=../suenlearning.github.io/

# build
npm run build

# temp solution: custom 404 for github pages to make router links work
cp index.html 404.html

mv dist/** $PAGES_REPO
cd $PAGES_REPO

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git add -A
git commit -m 'deploy'

git push

cd -