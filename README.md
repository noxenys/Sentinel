# 🛡️ Sentinel - 网站监控与告警系统 / Website Monitoring & Alert System

<div align="center">
  
[English Version](README_en.md) | [中文版本](README_zh.md)

</div>

## ✨ 核心特性 / Core Features

- **多平台告警** / **Multi-platform Alerts**: 支持 Telegram、Discord、Webhook 等多种通知方式 / Support for Telegram, Discord, Webhook and other notification methods
- **告警限流** / **Alert Throttling**: 智能防骚扰，1小时冷却时间避免重复通知 / Intelligent anti-spam with 1-hour cooling period to avoid duplicate notifications
- **历史记录** / **Historical Records**: 50条记录的在线状态条形图，实时延迟跟踪 / 50-record online status bar chart with real-time latency tracking
- **实时延迟监控** / **Real-time Latency Monitoring**: 动态显示网站响应时间，带更新动画效果 / Dynamic display of website response times with update animations
- **就地编辑** / **In-place Editing**: 直接在列表中编辑监控项，无需弹窗 / Directly edit monitor items in the list without popups
- **智能分类与手风琴UI** / **Smart Categorization & Accordion UI**: 支持自定义分组，可折叠展开 / Support for custom grouping with collapsible sections
- **安全认证** / **Secure Authentication**: 现代化密码验证系统，支持本地和会话存储，完全退出后清除所有认证信息 / Modern password authentication system with local and session storage support, clears all authentication info after complete logout
- **现代化模态框** / **Modern Custom Modals**: 统一的登录与退出界面，优雅的交互体验 / Unified login and logout interface with elegant interaction experience
- **双语界面与本地时钟** / **Bilingual UI & Local Clock**: 中英文双语支持，实时本地时间显示 / Chinese-English bilingual support with real-time local time display
- **响应式设计** / **Responsive Design**: 完美适配桌面和移动设备，优化触屏体验 / Fully optimized for desktop and mobile devices with enhanced touch experience
- **智能状态分类** / **Smart Status Categorization**: 自动将异常服务置顶，分类标题动态显示统计信息 / Automatically prioritize failed services, category headers display dynamic statistics
- **状态码解释** / **Status Code Explanation**: 详细的HTTP状态码解释，帮助快速诊断问题 / Detailed HTTP status code explanations for quick problem diagnosis
- **批量操作** / **Batch Operations**: 支持批量添加监控项，配置导出功能 / Support for batch adding monitors and configuration export

- **一键部署** / **One-click Deployment**: 基于 Cloudflare Workers，快速上线 / Based on Cloudflare Workers, quick deployment

## 🚀 快速开始 / Quick Start

### 在线演示 / Live Demo
- **🌐 演示站点**: [点击查看演示](https://sentinel-demo.noxen.qzz.io/) / [View Demo](https://sentinel-demo.noxen.qzz.io/)
- **默认密码**: `123456` / **Default Password**: `123456`

### 前置要求 / Prerequisites
- Cloudflare 账户 / Cloudflare account
- 基本的 Cloudflare Workers 知识 / Basic knowledge of Cloudflare Workers

### 快速部署 / Quick Deployment

#### 一键部署 / One-click Deployment

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/noxenys/sentinel)

#### 手动部署 / Manual Deployment
1. **创建 Worker** 在 Cloudflare 控制台 / **Create Worker** in Cloudflare Dashboard
2. **配置 KV 存储**，命名空间为 `SENTINEL_KV` / **Configure KV Storage** with namespace `SENTINEL_KV`
3. **设置环境变量**:
   - `PASSWORD`: 管理员密码 (默认: `123456`) / Admin password (default: `123456`)
   - `TELEGRAM_TOKEN`: Telegram机器人令牌 (可选) / Telegram bot token (optional)
   - `CHAT_ID`: Telegram聊天ID (可选) / Telegram chat ID (optional)
   - `DISCORD_WEBHOOK`: Discord Webhook URL (可选) / Discord Webhook URL (optional)
   - `GENERIC_WEBHOOK`: 通用Webhook URL (可选) / Generic Webhook URL (optional)
4. **配置定时任务** / **Configure Cron Trigger**: 推荐 `*/10 * * * *` (每10分钟 / Every 10 mins)
> ⚠️ 免费版请注意请求额度，详情见文档 / Note free tier limits, see docs for details.
5. **绑定KV命名空间**: 在Worker设置中将 `SENTINEL_KV` 绑定到变量名 `SENTINEL_KV` / **Bind KV namespace**: Bind `SENTINEL_KV` to variable name `SENTINEL_KV` in Worker settings

## 📖 文档 / Documentation

选择你偏好的语言查看详细文档 / Choose your preferred language for detailed documentation:

- **[中文文档](README_zh.md)** - 完整中文版本，包含详细使用说明 / Complete Chinese version with detailed instructions
- **[English Documentation](README_en.md)** - 完整英文版本，包含详细说明 / Complete English version with detailed instructions

## 🔧 技术栈 / Technical Stack

- **前端** / **Frontend**: 
  - HTML5 + CSS3 + JavaScript ES6+
  - 现代化UI组件，包含毛玻璃效果和动画
  - 响应式设计，支持桌面和移动设备
  - 实时时钟和动态数据更新

- **后端** / **Backend**: 
  - Cloudflare Workers 作为无服务器运行环境
  - KV 存储用于持久化数据
  - 定时任务用于周期性检查
  - RESTful API 设计

- **安全** / **Security**: 
  - 密码验证系统，支持本地和会话存储
  - API端点保护，使用X-Password头认证
  - 完全退出后清除所有认证信息

- **功能** / **Features**: 
  - 实时监控与延迟测量
  - 多平台告警（Telegram、Discord、Webhook）
  - 智能状态分类与历史记录
  - 批量操作与配置导出
  - 状态码解释与错误诊断

### 代码结构 / Code Structure
```
sentinel/
├── worker.js          # 主程序文件 / Main program file
├── README.md          # 项目主文档 / Main project documentation
├── README_zh.md       # 中文文档 / Chinese documentation
└── README_en.md       # 英文文档 / English documentation
```

## 🤝 贡献 / Contributing

欢迎贡献！ / We welcome contributions！

- **[中文贡献指南](README_zh.md#贡献指南)** / Chinese Contributing Guide
- **[English Contributing Guide](README_en.md#contributing)** / English Contributing Guide

## 📄 许可证 / License

本项目采用 MIT 许可证 / This project is licensed under the MIT License

---

<div align="center">

**🚀 由 Noxen YS 维护**  
**🚀 Maintained by Noxen YS**

*最后更新: 2026年1月*  
*Last Updated: January 2026*

</div>