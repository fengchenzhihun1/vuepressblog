# 在 Markdown 中使用 Vue

## 浏览器 API 访问限制

由于 VuePress 应用程序在生成静态构建文件时会在 Node.js 中进行服务器渲染，所以任何 Vue 用法都必须符合[通用代码要求](https://ssr.vuejs.org/en/universal.html)。简而言之，确保只在 `beforeMounted` 或 `mounted` 钩子中访问 Browser / DOM API。

如果你正在使用或演示非 SSR 友好的组件（比如说包含了自定义指令），则可以将它们包装在内置的 `<ClientOnly>` 组件中：

``` md
<ClientOnly>
  <NonSSRFriendlyComponent/>
</ClientOnly>
```

请注意，这不会修复**在 import** 时访问浏览器 API 的组件或库的问题 - 为了使用在导入时使用浏览器环境的代码，你需要将它们动态地导入到合适的生命周期钩子中：

``` vue
<script>
export default {
  mounted () {
    import('./lib-that-access-window-on-import').then(module => {
      // use code
    })
  }
}
</script>
```

## 模板(templating)

### 插值

每个 markdown 文件首先被编译成 HTML，然后作为 Vue 组件传递给 `vue-loader` 。这意味着你可以在文本中使用 Vue 风格的插值表达式：

**输入**

``` md
{{ 1 + 1 }}
```

**输出**

<pre><code>{{ 1 + 1 }}</code></pre>

### 指令

指令也起作用：

**输入**

``` md
<span v-for="i in 3">{{ i }} </span>
```

**输出**

<pre><code><span v-for="i in 3">{{ i }} </span></code></pre>

### 访问网站和页面数据

已编译的组件没有任何私有数据，但可以访问[网站元数据](./custom-themes.md#site-and-page-metadata)。例如：

**输入**

``` md
{{ $page }}
```

**输出**

``` json
{
  "path": "/using-vue.html",
  "title": "Using Vue in Markdown",
  "frontmatter": {}
}
```

## 转义(escaping)

默认情况下，fenced 代码块会自动用 `v-pre` 包装。如果要在内联代码片段或纯文本内显示原始插值或特定于 Vue 的语法，则需要用 `v-pre` 自定义容器包装段落：

**输入**

``` md
::: v-pre
`{{ This will be displayed as-is }}`
:::
```

**输出**

::: v-pre
`{{ This will be displayed as-is }}`
:::

## 使用组件（Using Components）

`.vuepress / components` 中的任意 `* .vue` 文件都会自动注册为 [全局(global)](https://vuejs.org/v2/guide/components-registration.html#Global-Registration), [异步(async)](https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components) 组件。例如：

```
.
└─ .vuepress
   └─ components
      ├─ demo-1.vue
      └─ OtherComponent.vue
```

在任何 markdown 文件中，你可以直接使用这些组件（名称是从文件名推断的）：

``` md
<demo-1/>
<OtherComponent/>
```

<demo-1></demo-1>

<OtherComponent/>

::: warning 重要的
确保自定义组件的名称包含连字符或符合 PascalCase 命名规则。否则，它将被视为内联元素，并被包裹在一个 `<p>` 标签内，这将导致 hydration （Vue 的渲染子过程）不匹配，因为 `<p>` 不允许块元素放置在其中。
:::

## 脚本和样式提升(script & style hoisting)

有时你可能需要将一些 JavaScript 或 CSS 仅应用于当前页面。在这些情况下，你可以在 markdown 文件中直接编写原生的 `<script>` 和 `<style>` 块，并将它们从编译的 HTML 中提取出来，以 `<script>` 和 `<style>` 的形式插入到生成 Vue 单个文件组件中。

<p class="demo" :class="$style.example"></p>

<style module>
.example {
  color: #41b883;
}
</style>

<script>
export default {
  mounted () {
    document.querySelector(`.${this.$style.example}`)
      .textContent = '这是通过内联脚本渲染的并由内嵌 CSS 样式呈现'
  }
}
</script>

***

> 原文：[https://vuepress.vuejs.org/guide/using-vue.html](https://vuepress.vuejs.org/guide/using-vue.html)

***
