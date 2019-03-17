---
meta:
- name: keywords
  content: static docs generator vue
---

# Markdown 拓展

## 标题锚(header anchors)

标题会自动获取锚链接。可以使用 [`markdown.anchor`](../config/#markdownanchor)  选项来配置锚点的渲染。

## 链接(links)

- 以 `.md` 或 `.html` 结尾的入站链接转换为 `<router-link>` 进行 SPA 导航。

  - [首页](/)
  - [配置 Markdown](../config/#markdown)

- 出站链接自动获取 `target="_blank"`:

  - [vuejs.org](https://vuejs.org)
  - [VuePress on GitHub](https://github.com/vuejs/vuepress)

## YAML Front Matter

支持 [YAML Front Matter](https://jekyllrb.com/docs/frontmatter/) 开箱即用

``` yaml
---
title: Blogging Like a Hacker
lang: en-US
---
```

数据在页面的其余部分也可以使用，包括所有自定义和主题组件，通过 `$page` 访问。

`title` 和 `lang` 会在当前页面自动设置。另外，你可以指定额外的 meta 标签进行注入：

``` yaml
---
meta:
  - name: description
    content: hello
  - name: keywords
    content: super duper SEO
---
```

## GitHub 样式表

**输入**

```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

**输出**

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Emoji

**输入**

```
:tada: :100:
```

**输出**

:tada: :100:

## 目录(table of contents)

**输入**

```
[[toc]]
```

**输出**

[[toc]]

可以使用 [`markdown.toc`](../config/#markdowntoc) 选项配置 TOC 的渲染。

## 自定义容器(custom containers)

**输入**

```
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::
```

**输出**

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous thing
:::

你还可以自定义块的标题：

```
::: danger STOP
Danger zone, do not proceed
:::
```

::: danger STOP
Danger zone, do not proceed
:::

## 在代码块中高亮显示行(line highlighting in code blocks)

**输入**

````
``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 高级配置(advanced configuration)

VuePress 使用 [markdown-it](https://github.com/markdown-it/markdown-it)作为 markdwon 渲染器。上面的许多扩展都是通过定制插件实现的。你可以使用 `.vuepress/config.js` 中的 `markdown` 选项进一步自定义 `markdown-it` 实例：

``` js
module.exports = {
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    config: md => {
      // 使用更多 markdown-it 插件！
      md.use(require('markdown-it-xxx'))
    }
  }
}
```

***

> 原文：[https://vuepress.vuejs.org/guide/markdown.html](https://vuepress.vuejs.org/guide/markdown.html)

***
