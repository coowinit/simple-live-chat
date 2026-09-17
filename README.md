# Simple Live Chat

一个轻量、无依赖的网站悬浮在线客服聊天组件，使用原生 **HTML + CSS + JavaScript** 编写。

默认只显示网页右下角聊天图标，点击后打开聊天窗口；关闭窗口后重新显示聊天图标。组件支持快捷问题、预设自动回复、手动消息输入以及移动端响应式布局。

> **当前版本定位：前端静态聊天 UI。**  
> 项目名称虽然使用 `live-chat`，但 v1.0.0 暂不包含 WebSocket、客服后台、消息数据库或真实实时通信。它更适合作为网站在线客服界面模板，以及后续接入 API、AI 客服、CRM 或实时通信服务的前端基础。

---

## 功能特点

- 默认关闭聊天窗口，仅显示右下角悬浮聊天按钮
- 点击聊天按钮打开客服窗口
- 点击关闭按钮关闭窗口并恢复聊天按钮
- 支持客服名称、头像、在线状态和欢迎语
- 支持快捷咨询标签
- 点击快捷标签后自动生成用户问题并返回预设回复
- 支持用户手动输入并发送消息
- 新消息自动滚动到底部
- 桌面端与移动端响应式适配
- 支持 iPhone Safe Area 与移动端 viewport
- 使用 `textContent` 写入用户消息，降低直接注入 HTML 的风险
- CSS 使用统一类名前缀，降低与现有网站样式冲突的概率
- 无 React、Vue、jQuery、npm 或第三方聊天 SDK
- 无数据库、无构建流程，可直接嵌入现有网站

---

## 项目结构

```text
simple-live-chat/
├── chat-widget.html
├── chat-widget.css
├── chat-widget.js
└── README.md
```

| 文件 | 说明 |
| --- | --- |
| `chat-widget.html` | 聊天组件 HTML 结构 |
| `chat-widget.css` | 聊天窗口、消息气泡、快捷标签及移动端样式 |
| `chat-widget.js` | 打开 / 关闭、发送消息、快捷标签预设回复逻辑 |
| `README.md` | 项目说明文档 |

---

## 快速使用

### 1. 加载样式

在网站 `<head>` 中引入：

```html
<link rel="stylesheet" href="/path/to/chat-widget.css">
```

### 2. 添加组件 HTML

将 `chat-widget.html` 中的聊天组件主体放到页面 `</body>` 之前。

### 3. 加载 JavaScript

```html
<script src="/path/to/chat-widget.js"></script>
```

这样即可在网页右下角显示聊天入口。

---

## 移动端 viewport

为了让移动端响应式布局按照真实设备宽度生效，网站 `<head>` 中应包含：

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

如果现有网站已经包含 `viewport`，请保留原设置，不要重复添加。

> 如果 `chat-widget.html` 中保留了用于独立测试的 `<meta name="viewport">`，正式嵌入网站时不要把该 `<meta>` 标签复制到 `<body>` 中；应统一放在网站 `<head>` 内。

---

## 默认交互逻辑

### 打开聊天

页面加载后聊天窗口默认关闭，只显示右下角聊天图标。

点击聊天图标后：

- 隐藏悬浮聊天图标
- 打开聊天窗口
- 桌面端可自动聚焦输入框

### 关闭聊天

点击窗口右上角关闭按钮后：

- 关闭聊天窗口
- 恢复右下角聊天图标

### 快捷问题

当前示例提供：

```text
Decking
Wall Cladding
Fence
Get a Quote
Sample Request
```

这些内容仅作为演示，可以替换为任意行业或网站需要的快捷问题。

点击快捷标签后，组件会：

1. 显示对应的用户问题
2. 返回预设客服回复
3. 自动滚动到最新消息

### 手动消息

用户可以直接在输入框中输入消息并发送。

当前静态版本只会把消息显示在浏览器中，**不会真正发送到客服、服务器或数据库**。

---

## 修改客服信息

### 客服名称

在 `chat-widget.html` 中修改：

```html
<strong>Your Support</strong>
```

### 欢迎语

```html
<p>Hello! How can we help you today?</p>
```

### 头像

当前可以使用文字头像：

```html
<div class="cw-avatar">CS</div>
```

也可以替换为图片或品牌 Logo。

---

## 修改主题颜色

主要颜色建议集中维护在 `chat-widget.css` 的 CSS 变量中：

```css
:root {
  --cw-main: #5e59ff;
  --cw-text: #101828;
  --cw-muted: #7b8499;
  --cw-border: #e4e8f0;
}
```

修改 `--cw-main` 后，可统一调整：

- 悬浮聊天按钮
- 客服头像
- 用户消息气泡
- 发送按钮
- 快捷标签强调色

这样比逐个修改颜色更容易维护。

---

## 修改窗口尺寸和位置

桌面端尺寸可以在 `chat-widget.css` 中调整：

```css
.cw-panel {
  right: 24px;
  bottom: 24px;
  width: 380px;
  height: 560px;
}
```

悬浮聊天按钮：

```css
.cw-launcher {
  right: 24px;
  bottom: 24px;
  width: 60px;
  height: 60px;
}
```

移动端使用媒体查询调整布局，例如：

```css
@media (max-width: 600px) {
  .cw-panel {
    inset: 12px;
  }
}
```

---

## 修改快捷标签和预设回复

快捷标签位于 `chat-widget.html`：

```html
<div class="cw-quick" id="cwQuick">
  <button type="button">Decking</button>
  <button type="button">Wall Cladding</button>
  <button type="button">Fence</button>
  <button type="button">Get a Quote</button>
  <button type="button">Sample Request</button>
</div>
```

预设回复位于 `chat-widget.js` 的 `replies` 对象：

```js
const replies = {
  Decking: '...',
  'Wall Cladding': '...',
  Fence: '...',
  'Get a Quote': '...',
  'Sample Request': '...'
};
```

如果增加新的快捷标签，请保证 HTML 中的按钮文字与 `replies` 中的键保持一致。

---

## JavaScript 设计原则

当前 JavaScript 有意保持简单，只处理最基础的前端行为：

1. 打开聊天窗口
2. 关闭聊天窗口
3. 添加用户消息
4. 处理快捷标签预设回复
5. 滚动到最新消息

当前版本没有加入：

- 用户登录
- 消息数据库
- WebSocket
- 文件上传
- 聊天历史记录
- 多客服系统
- 在线状态检测
- AI 自动回复
- localStorage / sessionStorage
- 第三方聊天 SDK

这样可以避免前端模板过度复杂，并降低以后接入真实客服系统时的重构成本。

---

## 接入真实客服、AI 或 WebSocket

当前组件适合作为 UI 层继续使用。

例如，未来可以将表单提交逻辑改为调用自己的 API：

```js
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: text })
});

const data = await response.json();
addMessage(data.reply);
```

推荐保持下面的结构：

```text
聊天 UI
   ↓
chat-widget.js
   ↓
网站后端 API
   ↓
客服系统 / AI / CRM / WebSocket
```

不要把 API Key、密钥或其他敏感凭证直接写在浏览器端 JavaScript 中。

---

## WordPress 使用

在 WordPress 中，可以将组件 HTML 放入：

- 主题模板
- Footer
- 自定义 HTML 区块
- 自定义插件

CSS 和 JavaScript 推荐通过 WordPress 的 enqueue 机制加载，而不是长期直接写在页面模板中，这样更利于缓存、版本管理和后续维护。

---

## 安全说明

用户输入应优先通过：

```js
textContent
```

写入页面，而不是直接拼接到 `innerHTML`。

如果未来增加以下能力，需要额外考虑 XSS、权限和内容过滤：

- Markdown
- 富文本
- 外部链接
- 文件上传
- 服务端返回 HTML
- AI 生成 HTML

正式接入后端后还应考虑：

- 服务端输入验证
- 身份验证
- 消息鉴权
- 请求频率限制
- 文件类型和大小限制
- 日志与隐私策略

---

## 浏览器兼容性

建议使用现代浏览器：

- Chrome
- Edge
- Firefox
- Safari
- iOS Safari
- Android Chrome

项目使用标准 HTML、CSS 和原生 JavaScript，不需要构建环境。

---

## 适用场景

- 企业官网在线客服入口
- 外贸独立站
- 产品咨询网站
- WordPress 网站
- 静态网站
- 产品询盘入口
- AI 客服前端原型
- 自建客服系统 UI

---

## 当前版本

### v1.0.0

当前版本重点是提供一个：

**轻量、清晰、无依赖、容易嵌入、容易二次开发的聊天组件基础。**

如果只需要网站右下角聊天窗口和基础预设问答，可以直接使用当前版本。

如果需要真正的实时在线客服，建议在当前 UI 基础上增加后端通信层，而不是继续把复杂业务逻辑堆在浏览器端。

---

## 开发原则

项目保持以下原则：

- 少依赖
- 少配置
- 结构清晰
- 易于嵌入
- 易于修改
- 优先长期维护
- 不为了增加功能而增加不必要复杂度
- 为真实 API 和实时通信接入保留空间

---

## License

当前仓库未预设开源许可证。

如果计划公开发布，并允许其他人复制、修改和分发，建议增加 `LICENSE` 文件，例如 [MIT License](https://opensource.org/license/mit)。

如果项目仅用于内部或特定商业用途，则应根据实际使用范围选择合适的许可证。
