# Simple Live Chat

一个轻量、无依赖的网站悬浮在线客服聊天组件，使用原生 **HTML + CSS + JavaScript** 编写。

默认只显示网页右下角聊天图标，点击后打开聊天窗口；关闭窗口后重新显示聊天图标。组件支持快捷问题、预设自动回复、手动消息输入以及桌面端和移动端响应式布局。

> **当前版本：v1.1.0**  
> 当前项目定位仍然是前端静态聊天 UI。项目名称虽然使用 `live-chat`，但暂不包含 WebSocket、客服后台、消息数据库或真正的实时通信能力。它更适合作为网站在线客服界面模板，以及后续接入 API、AI 客服、CRM 或实时通信服务的前端基础。

---

## v1.1.0 更新内容

v1.1.0 主要对项目目录和预览方式进行整理，不增加额外依赖，也不改变项目的轻量定位。

- 使用 `index.html` 作为统一预览入口
- CSS 独立放入 `css/` 目录
- JavaScript 独立放入 `js/` 目录
- `index.html` 内保留完整的 viewport 设置，便于直接测试手机端
- 保留右下角悬浮按钮、打开 / 关闭聊天窗口、快捷问题和预设回复
- 保留移动端近全屏布局和 iPhone Safe Area 适配
- 同步更新 README 文档和引用路径
- 项目可直接部署到 GitHub Pages 作为在线 Demo

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
- CSS 使用 `cw-` 类名前缀，降低与现有网站样式冲突的概率
- 无 React、Vue、jQuery、npm 或第三方聊天 SDK
- 无数据库、无构建流程，可直接嵌入现有网站

---

## 项目结构

```text
simple-live-chat/
├── index.html
├── css/
│   └── chat-widget.css
├── js/
│   └── chat-widget.js
└── README.md
```

| 文件 | 说明 |
| --- | --- |
| `index.html` | 完整预览页面，同时包含聊天组件 HTML 结构 |
| `css/chat-widget.css` | 聊天窗口、消息气泡、快捷标签及响应式样式 |
| `js/chat-widget.js` | 打开 / 关闭、发送消息和快捷标签预设回复逻辑 |
| `README.md` | 项目说明文档 |

---

## 快速预览

无需安装 npm，也不需要构建。

直接下载项目后打开：

```text
index.html
```

即可在浏览器中查看效果。

如果浏览器对本地文件有额外限制，也可以通过任意静态 Web Server 运行该目录。

---

## GitHub Pages 预览

由于项目已经使用 `index.html` 作为入口，因此可以直接通过 GitHub Pages 发布 Demo。

在 GitHub 仓库中打开：

```text
Settings → Pages
```

选择需要发布的分支和根目录后即可生成在线预览地址。

项目不需要额外编译或构建流程。

---

## 嵌入现有网站

`index.html` 是 Demo 页面。真正接入网站时，只需要使用其中的聊天组件 HTML，并引用 CSS 和 JavaScript。

### 1. 加载 CSS

在网站 `<head>` 中加入：

```html
<link rel="stylesheet" href="/path/to/css/chat-widget.css">
```

### 2. 添加聊天组件

将 `index.html` 中：

```html
<div class="cw-chat">
  ...
</div>
```

这一部分放到网站 `</body>` 之前。

### 3. 加载 JavaScript

在聊天组件之后或网站 `</body>` 之前加入：

```html
<script src="/path/to/js/chat-widget.js"></script>
```

---

## 移动端 viewport

为了让移动端响应式布局按照真实设备宽度生效，网站 `<head>` 中应包含：

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

`index.html` 已经包含该设置，因此直接打开 Demo 时无需额外处理。

如果正式网站已经存在 viewport 设置，请优先沿用网站自身配置，不要重复添加多个 viewport 标签。

---

## 默认交互逻辑

### 打开聊天

页面加载后聊天窗口默认关闭，只显示右下角聊天图标。

点击聊天图标后：

- 隐藏悬浮聊天按钮
- 打开聊天窗口
- 桌面端自动聚焦输入框
- 手机端不会强制弹出软键盘

### 关闭聊天

点击窗口右上角关闭按钮后：

- 关闭聊天窗口
- 恢复右下角聊天按钮

### 快捷问题

当前 Demo 保留以下示例标签：

```text
Decking
Wall Cladding
Fence
Get a Quote
Sample Request
```

点击快捷标签后，组件会显示对应的用户消息，并返回 JavaScript 中配置的预设客服回复。

这些标签仅作为示例，可以替换为任何行业或网站所需要的快捷问题。

### 手动消息

用户可以直接在输入框中输入并发送消息。

当前静态版本只会把消息显示在浏览器中，**不会真正发送到客服、服务器或数据库**。

---

## 修改客服信息

客服名称、头像和欢迎语都可以直接在 `index.html` 中修改。

例如客服名称：

```html
<strong>Your Support</strong>
```

文字头像：

```html
<div class="cw-avatar">CS</div>
```

欢迎语：

```html
<p>Hello! How can we help you today?</p>
```

也可以将文字头像替换为图片或品牌 Logo。

---

## 修改主题颜色

主要颜色集中在 `css/chat-widget.css` 的 CSS 变量中：

```css
:root {
  --cw-main: #5e59ff;
  --cw-text: #101828;
  --cw-muted: #7b8499;
  --cw-border: #e4e8f0;
}
```

修改 `--cw-main` 后，可以统一调整悬浮按钮、客服头像、用户消息气泡、发送按钮和快捷标签强调色。

---

## 修改窗口尺寸和位置

桌面端尺寸位于：

```css
.cw-panel {
  right: 24px;
  bottom: 24px;
  width: 380px;
  height: 560px;
}
```

悬浮按钮位置与尺寸：

```css
.cw-launcher {
  right: 24px;
  bottom: 24px;
  width: 60px;
  height: 60px;
}
```

移动端样式集中在：

```css
@media (max-width: 600px) {
  ...
}
```

当前移动端采用接近全屏的聊天窗口，并兼容 iPhone 底部安全区域。

---

## 修改快捷标签和预设回复

快捷标签位于 `index.html`：

```html
<div class="cw-quick" id="cwQuick">
  <button type="button">Decking</button>
  <button type="button">Wall Cladding</button>
  <button type="button">Fence</button>
  <button type="button">Get a Quote</button>
  <button type="button">Sample Request</button>
</div>
```

对应预设回复位于 `js/chat-widget.js`：

```js
const replies = {
  Decking: '...',
  'Wall Cladding': '...',
  Fence: '...',
  'Get a Quote': '...',
  'Sample Request': '...'
};
```

增加新的快捷标签时，请确保按钮文字与 `replies` 中的键完全一致。

---

## JavaScript 设计原则

JavaScript 有意保持简单，目前只处理：

1. 打开聊天窗口
2. 关闭聊天窗口
3. 添加用户消息
4. 处理快捷标签预设回复
5. 自动滚动到最新消息

当前版本没有加入用户登录、消息数据库、WebSocket、文件上传、历史消息、多客服系统、真实在线状态检测、AI 自动回复或第三方聊天 SDK。

这种结构可以减少前端模板复杂度，并降低以后接入真实客服系统时的重构成本。

---

## 接入真实客服、AI 或 WebSocket

当前组件适合作为独立 UI 层继续使用。

例如，未来可以把表单提交逻辑改为调用自己的 API：

```js
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: text })
});

const data = await response.json();
addMessage(data.reply);
```

推荐继续保持下面的分层：

```text
聊天 UI
   ↓
js/chat-widget.js
   ↓
网站后端 API
   ↓
客服系统 / AI / CRM / WebSocket
```

不要把 API Key、Token、数据库密码或其他敏感凭证直接写在浏览器端 JavaScript 中。

---

## WordPress 使用

在 WordPress 中，可以将聊天组件 HTML 放入主题模板、Footer 或自定义 HTML 区块中，并通过主题或插件加载：

```text
css/chat-widget.css
js/chat-widget.js
```

如果准备长期使用，更推荐通过子主题或自定义插件加载资源，而不是直接修改第三方主题源码，避免主题升级后代码被覆盖。

---

## 浏览器兼容性

项目使用现代浏览器普遍支持的 HTML、CSS 和 JavaScript API，适合当前版本的 Chrome、Edge、Firefox 和 Safari。

移动端主要针对现代 iOS Safari 和 Android Chrome 进行响应式设计。

---

## 安全说明

当前代码使用 `textContent` 写入用户输入内容，而不是直接把用户输入拼接为 HTML，可以降低基础 XSS 风险。

如果未来接入服务器、AI 或数据库，仍应在后端执行：

- 输入验证
- 输出转义
- 身份验证
- 权限控制
- 请求频率限制
- 日志与异常处理

前端验证不能替代服务器端安全验证。

---

## 版本

### v1.1.0

- 优化项目目录结构
- 增加 `css/` 与 `js/` 独立目录
- 使用 `index.html` 作为标准预览入口
- 支持直接部署 GitHub Pages
- 同步更新资源引用路径和 README
- 保持 v1.0.0 的核心聊天功能和移动端适配

### v1.0.0

- 首个可用版本
- 实现右下角悬浮聊天按钮
- 实现聊天窗口打开和关闭
- 实现快捷标签和预设回复
- 实现手动消息显示
- 实现桌面端和移动端响应式布局

---

## 开发原则

Simple Live Chat 优先保持：

**轻量、简单、易维护、低依赖、易于二次开发。**

项目不会为了增加少量功能而引入不必要的框架或复杂工程结构。真正需要实时通信、用户系统或消息存储时，再通过清晰的后端接口进行扩展。

---

## License

当前仓库暂未附带开源许可证文件。

如果准备作为公开开源项目发布，可以根据实际使用需求选择 MIT、Apache-2.0 或其他合适的开源许可证，并在仓库根目录添加 `LICENSE` 文件。
