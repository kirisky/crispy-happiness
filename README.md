# Starpath-Web 项目说明文档

## 项目简介

**Starpath-Web** 是一个使用现代前端技术栈构建的企业级 Web 应用程序，为提供卫星定制、成像技术和特定行业领域的解决方案而打造的高端 B2B 网站。

**核心技术栈：**
- **框架:** Next.js (版本 v16.1.6 配合 Turbopack 优化打包)
- **UI 及组件库:** 
  - Radix UI (高度无障碍交互组件底层实现)
  - `shadcn/ui` (基于 Radix UI 和 Tailwind 构建的项目定制化组件生态体系)
- **样式方案:** Tailwind CSS (v4.x)
- **图表数据:** Recharts
- **包管理器:** pnpm (以其快速和磁盘空间利用率高见长)
- **语言支持:** TypeScript

## 项目结构概览

```text
d:\Starpath\Programs\MainWeb
│
├── app                  # Next.js App Router 目录 (路由和页面实现)
├── components           # 全局共享及业务 UI 组件
├── hooks                # 自定义 React Hooks
├── lib                  # 辅助工具函数和共享业务逻辑
├── public               # 静态资源文件 (图片、字体、图标等)
├── scripts              # 构建或自动化运行的相关脚本
├── styles               # 全局样式控制
├── components.json      # shadcn/ui 组件库配置文件
├── next.config.mjs      # Next.js 框架核心配置
├── package.json         # 项目依赖与运行脚本清单
└── tsconfig.json        # TypeScript 配置
```

## 路由梳理 (基于构建输出)

系统在构建流程中输出了静态路由。部分已知的路径页面如下：
- `/` - 首页
- `/about` - 关于我们
- `/contact` - 联系我们
- `/solutions` - 总体解决方案
- `/financial` - 专区内容（财务类）
- **分类行业方案：**
  - `/industries/agriculture` - 农业领域
  - `/industries/environment` - 环保与环境
  - `/industries/insurance` - 保险业
  - `/industries/maritime` - 海事行业
  - `/industries/mining` - 采矿与矿业
  - `/industries/petroleum` - 石油化工业
  - `/industries/urban` - 城市管理
  - `/industries/utilities` - 公用事业单位
- **分类产品：**
  - `/products/custom` - 定制产品服务
  - `/products/imagery` - 卫星影像产品
- **说明与条款：**
  - `/privacy` - 隐私政策
  - `/terms` - 服务条款
  - `/_not-found` - 自定义 404 页

---

## 💻 详细环境安装与构建（打包）部署过程

### 前置要求

在进行下面的操作之前，请确保系统中已经安装配置好：
* **Node.js** (建议 v20+ 长期支持版，通常需要支持 Node@22+，基于 devDependencies 配置)
* **npx** (随 Node.js 一起打包自带的命令管理工具)

### 1. 自动依赖安装并处理 pnpm

因考虑到可能未全局安装 `pnpm` 或受 PowerShell 脚本权限限制无法直接执行 `pnpm` 命令，采用通过 `npx` 调用的安全模式直接安装项目的所有依赖。命令如下：

```bash
npx pnpm install
```

**执行细节：**
- `npx` 临时拉取了最新版 `pnpm`（例如版本 `10.32.1`）。
- 解析了 `package.json` 中的各模块依赖表，其中包括数百个主干依赖及子模块（涉及 Radix UI、NextJS、Tailwind、Zod等）。
- 并发抓取和生成了项目所用的完整依赖环境库。在此过程中生成了或遵循现有的 `pnpm-lock.yaml` 文件，确保开发环境统一。
*(整个过程一般能够在数十秒内迅速完成，最终显示 `Done in <时间>s using pnpm v10.x.x`)*

### 2. 生产环境构建打包

在依赖处理完成之后，为项目建立生产环境代码包并输出静态资产：

```bash
npx pnpm run build
```


**执行细节与优化表现：**
- **命令解析:** 该指令将会调用项目 `package.json` 的 `build` 脚本，执行 `next build` 构建流水线。
- **配置与安全合并:** Next.js 解析框架配置的 TypeScript 并尝试补充优化 `tsconfig.json` 文件。
- **创建优化生产包:** 框架利用最新的底层打包能力（Turbopack架构）开始收集处理各个组件和源码（`Next.js 16.1.6 (Turbopack)` 明确提示启动了生产级构建器）。
- **静态网页生成 (SSG):** Next.js 的 Worker 线程并发生成上述识别出所有的静态功能页面（`0/19` ➔ `19/19`），耗时极短，将页面编译并输出为可静态缓存和服务的形式 (`prerendered as static content`)。

构建最终呈现出所有有效页面的地址（打标了 `○  (Static)`），并生成成功结束，且没有抛出严重错误。这标志着项目已经完全可以部署到对应服务器或者通过类似于 Vercel 静态平台进行分发部署。

**预览打包结果：**

```bash
npx serve out
```

### 3. 如何启动本地服务

若需检查通过上述生产包打包以后的实际效果，你可以在主目录下执行：
注意！！！执行命令前，将next.config.mjs中的output: 'export'注释掉，否则会报错

```bash
npx pnpm run start
ctrl + c 退出
```

### 4. 本地开发测试

如果想在本地运行并伴有热加载功能的开发模式体验和修改，请继续使用：

```bash
npx pnpm run dev
```

> **注意：** 使用 `npx pnpm run xxx` 而非直接 `pnpm run xxx` 是推荐方案，这有助于跳过 Windows 本地 PowerShell 因安全策略禁止脚本直接运行所触发的 `"UnauthorizedAccess: PSSecurityException"` 问题。

### 5. 项目打包并部署到服务器

执行以下命令即可一键完成项目的打包并自动部署到远端服务器：

```bash
npx pnpm run deploy
```

---

## 🌐 语言支持说明 (i18n)

项目目前支持 **中文 (zh)**、**英文 (en)** 和 **阿拉伯语 (ar)**。为了满足特定的业务发布需求，项目采用了基于环境的语言过滤机制：

### 1. 开发选项 (Development)
在运行 `npx pnpm run dev` 时，全语言选项均可用。
- **默认语言:** 中文 (`zh`)
- **语言切换:** 导航栏显示“中文”、“English”和“العربية”。

### 2. 生产限制 (Production)
在运行 `npx pnpm run build` 或部署到生产环境时，**中文语言将被自动禁用**。
- **默认语言:** 英文 (`en`)
- **语言切换:** 导航栏仅显示“English”和“العربية”，中文选项将被隐藏。
- **回退机制:** 如果用户通过 URL 或缓存视图尝试访问中文版本，系统会自动将其重定向并回退至英文界面，确保生产环境的一致性。

> **说明:** 该机制通过 `hooks/use-locale.ts` 中的 `process.env.NODE_ENV` 判断逻辑实现。

