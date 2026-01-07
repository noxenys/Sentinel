# 🛡️ Sentinel - Website Monitoring & Alert System / 网站监控与告警系统

<div align="center">
  
[English](README_en.md) | [中文](README_zh.md)

</div>

## ✨ Core Features / 核心特性

- **Real-time Monitoring**: High-frequency detection of website availability and response time
- **Multi-platform Alerts**: Support for Telegram, Discord, Lark, DingTalk, etc.
- **Elegant Interface**: Modern design with responsive layout
- **Alert Throttling**: Intelligent anti-spam to avoid duplicate notifications
- **Historical Records**: Complete uptime statistics and latency tracking
- **One-click Deployment**: Based on Cloudflare Workers, quick deployment

## 🚀 Quick Start

### Prerequisites
- Cloudflare account
- Basic knowledge of Cloudflare Workers

### Quick Deployment
1. **Create Worker** in Cloudflare Dashboard
2. **Configure KV Storage** with namespace `SENTINEL_KV`
3. **Set Environment Variables** (see detailed guide)
4. **Configure Cron Trigger**: `*/30 * * * *`

## 📖 Documentation

Choose your preferred language:

- **[English Documentation](README_en.md)** - Complete English version with detailed instructions
- **[中文文档](README_zh.md)** - 完整中文版本，包含详细使用说明

## 🔧 Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Backend**: Cloudflare Workers, KV Storage
- **Features**: Real-time monitoring, Multi-platform alerts, Responsive design

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guide](README_en.md#contributing-guide) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**🚀 Powered by Noxen YS & Manus AI**

*Last Updated: January 2026*

</div>