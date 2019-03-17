# 部署

以下指南假设你将文档放置在项目的 `docs` 目录中，并使用默认的编译输出位置。

## GitHub 页面

1. 将 `.vuepress/config.js` 中的 `base` 设置为你的仓库名称。例如，如果你的仓库是 `https://github.com/foo/bar` ，则已部署的页面将在 `https://foo.github.io/bar` 上可用。在这种情况下，你应该将`base`设置为 `"/bar/"` 。

2. 在你的项目中，运行：

``` bash
# 构建
vuepress build docs

# 导航到构建输出目录
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 推到你仓库的的 gh-page 分支
# 将 <USERNAME>/<REPO> 替换为你的信息
git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
```

你可以在 CI 设置中运行此脚本以启用每次推送时的自动部署。

## Netlify

1. 确保你有用于构建文档的 npm 脚本：

``` json
{
  "scripts": {
    "docs:build": "vuepress build docs"
  }
}
```

2. 在 Netlify 上，使用以下设置从 GitHub 创建一个新项目：

  - **构建命令：** `npm run docs:build` or `yarn docs:build`
  - **发布目录：** `docs/.vuepress/dist`

3. 点击部署按钮！

***

> 原文：[https://vuepress.vuejs.org/guide/deploy.html](https://vuepress.vuejs.org/guide/deploy.html)

***
