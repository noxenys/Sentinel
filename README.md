# 🛡️ Sentinel - 网站监控与告警系统 / Website Monitoring & Alert System

<div align="center">
  
[English Version](README_en.md) | [中文版本](README_zh.md)

</div>

## ✨ 核心特性 / Core Features

- **实时监控** / **Real-time Monitoring**: 高频检测网站可用性和响应时间 / High-frequency detection of website availability and response time
- **多平台告警** / **Multi-platform Alerts**: 支持 Telegram、Discord、飞书、钉钉等 / Support for Telegram, Discord, Lark, DingTalk, etc.
- **优雅界面** / **Elegant Interface**: 现代化设计，响应式布局 / Modern design with responsive layout
- **告警限流** / **Alert Throttling**: 智能防骚扰，避免重复通知 / Intelligent anti-spam to avoid duplicate notifications
- **历史记录** / **Historical Records**: 完整的上线时间统计和延迟跟踪 / Complete uptime statistics and latency tracking
- **一键部署** / **One-click Deployment**: 基于 Cloudflare Workers，快速上线 / Based on Cloudflare Workers, quick deployment

## 🚀 快速开始 / Quick Start

### 前置要求 / Prerequisites
- Cloudflare 账户 / Cloudflare account
- 基本的 Cloudflare Workers 知识 / Basic knowledge of Cloudflare Workers

### 快速部署 / Quick Deployment
1. **创建 Worker** 在 Cloudflare 控制台 / **Create Worker** in Cloudflare Dashboard
2. **配置 KV 存储**，命名空间为 `SENTINEL_KV` / **Configure KV Storage** with namespace `SENTINEL_KV`
3. **设置环境变量**（详见详细指南） / **Set Environment Variables** (see detailed guide)
4. **配置定时任务**: `*/30 * * * *` / **Configure Cron Trigger**: `*/30 * * * *`

## 📖 文档 / Documentation

选择你偏好的语言查看详细文档 / Choose your preferred language for detailed documentation:

- **[中文文档](README_zh.md)** - 完整中文版本，包含详细使用说明 / Complete Chinese version with detailed instructions
- **[English Documentation](README_en.md)** - 完整英文版本，包含详细说明 / Complete English version with detailed instructions

## 🔧 技术栈 / Technical Stack

- **前端** / **Frontend**: HTML5、CSS3、JavaScript ES6+ / HTML5, CSS3, JavaScript ES6+
- **后端** / **Backend**: Cloudflare Workers、KV 存储 / Cloudflare Workers, KV Storage
- **功能** / **Features**: 实时监控、多平台告警、响应式设计 / Real-time monitoring, Multi-platform alerts, Responsive design

## 🤝 贡献 / Contributing

欢迎贡献！ / We welcome contributions！

- **[中文贡献指南](README_zh.md#贡献指南)** / Chinese Contributing Guide
- **[English Contributing Guide](README_en.md#contributing)** / English Contributing Guide

## 📄 许可证 / License

本项目采用 MIT 许可证 / This project is licensed under the MIT License

---

<div align="center">

**🚀 由 Noxen YS & Manus AI 强力驱动**  
**🚀 Powered by Noxen YS & Manus AI**

*最后更新: 2026年1月*  
*Last Updated: January 2026*

</div>