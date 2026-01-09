# 🛡️ Sentinel - Website Monitoring & Alert System

Sentinel v3.7 In-place Edition is a modern website monitoring system built on Cloudflare Workers, providing real-time status monitoring, multi-platform alerts, in-place editing capabilities, and an elegant user interface.

## ✨ Core Features

- **Multi-platform Alerts**: Support for Telegram, Discord, Webhook and other notification methods
- **Alert Throttling**: Intelligent anti-spam with 1-hour cooling period to avoid duplicate notifications
- **Historical Records**: 50-record online status bar chart with real-time latency tracking
- **Real-time Latency Monitoring**: Dynamic display of website response times with update animations
- **In-place Editing**: Directly edit monitor items in the list without popups
- **Smart Categorization & Accordion UI**: Support for custom grouping with collapsible sections
- **Secure Authentication**: Modern password authentication system with local and session storage support, clears all authentication info after complete logout
- **Modern Custom Modals**: Unified login and logout interface with elegant interaction experience
- **Bilingual UI & Local Clock**: Chinese-English bilingual support with real-time local time display
- **Responsive Design**: Fully optimized for desktop and mobile devices with enhanced touch experience
- **Smart Status Categorization**: Automatically prioritize failed services, category headers display dynamic statistics
- **Status Code Explanation**: Detailed HTTP status code explanations for quick problem diagnosis
- **Batch Operations**: Support for batch adding monitors and configuration export

- **One-click Deployment**: Based on Cloudflare Workers, quick deployment

## 🚀 Quick Start

### Live Demo
- **🌐 Demo Site**: [View Demo](https://sentinel-demo.noxen.qzz.io/)
- **Default Password**: `123456`

## 🚀 Quick Deployment

### One-click Deployment

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/your-username/sentinel)

### Manual Deployment

#### Step 1: Create Worker
1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to **Workers & Pages** → **Create Worker**
3. Copy the `worker.js` code into the editor

### Step 2: Configure KV Storage
1. Create KV Namespace in Worker settings
2. Namespace name: `SENTINEL_KV`
3. Bind to Worker, variable name must be `SENTINEL_KV`

### Step 3: Set Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `PASSWORD` | Admin panel operation password | ✅ | `123456` |
| `TELEGRAM_TOKEN` | Telegram Bot Token (get from @BotFather) | ❌ | - |
| `CHAT_ID` | Telegram Chat ID for receiving notifications | ❌ | - |
| `DISCORD_WEBHOOK` | Discord Webhook URL | ❌ | - |
| `GENERIC_WEBHOOK` | Generic Webhook URL (supports Lark, DingTalk, etc.) | ❌ | - |

### Step 4: Configure Scheduled Tasks (Cron Triggers)
To enable background monitoring and failure alerts, you must configure Cron Triggers. The Worker runs at this frequency even if the web page is closed.
Choose a frequency based on your **monitor count** and **Cloudflare plan**:
| Plan | Cron Expression | Description | Use Case |
| :--- | :--- | :--- | :--- |
| **🛡️ Recommended** | `*/10 * * * *` | **Every 10 mins** | **Most users**. Safe for 50+ monitors. |
| **🚀 Turbo Mode** | `* * * * *` | **Every 1 min** | **< 20 monitors only**. Fastest response, higher usage. |
| **🐢 Power Saver** | `*/30 * * * *` | **Every 30 mins** | For massive non-critical monitors. |
> **⚠️ Traffic Warning (Cloudflare Free Tier)**
> Free Tier limit: **100,000 requests/day**.
> * **Formula**: `Monitor Count` × `1440` (if 1 min interval) = Daily Requests
> * **Example**: **20 monitors** at **1 min interval** = `28,800` requests/day (Safe). If you have >60 monitors, decrease frequency to 10 mins to avoid hitting limits.

## 📖 Detailed Usage Guide

### 🔐 Login and Logout System
- **Login Interface**: When first accessing the Worker URL, the system displays a modern login modal prompting for the admin password. Supports password memory functionality with options to save to local storage or session storage.
- **Logout Interface**: Clicking the logout button displays a modern modal with a consistent style to the login interface, providing clear confirmation options and operation instructions to prevent accidental actions. After logout, all stored authentication information is cleared.

### ➕ Adding Monitors
1. **Single Addition**:
   - Enter category name and URL in admin panel
   - Click "Batch Add" button

2. **Batch Addition**:
   - Enter one URL per line in text box
   - Supported format: `Category Name:https://example.com`
   - Or directly enter URL (default category)

### ✏️ Editing Monitors
- Click edit icon on the right side of monitor item
- Modify category and URL directly in the list
- Supports real-time saving

### 🗑️ Deleting Monitors
- Click delete button
- Confirmation modal pops up to prevent accidental deletion
- Supports secondary confirmation

### 📋 Other Operations
- **Copy URL**: Click copy icon to quickly copy link
- **Export Configuration**: One-click export all monitor configurations as JSON file
- **Category Management**: Click category title to expand/collapse monitor items

## ⚙️ Configuration Details

### Notification Configuration

#### Telegram Notifications
1. Create bot via [@BotFather](https://t.me/BotFather)
2. Get Bot Token
3. Get Chat ID (can use @userinfobot)

#### Discord Notifications
1. Create Webhook in Discord server
2. Copy Webhook URL
3. Set to `DISCORD_WEBHOOK` variable

## 🏗️ Technical Architecture

### Frontend Stack
- **HTML5 + CSS3 + JavaScript ES6+**
- Modern UI components with frosted glass effects and animations
- Responsive design for desktop and mobile devices
- Real-time clock and dynamic data updates

### Backend Stack
- **Cloudflare Workers** as serverless runtime environment
- **KV Storage** for persistent data
- **Scheduled tasks** for periodic checks
- **RESTful API** design

### Security Features
- Password authentication system with local and session storage
- API endpoint protection using X-Password header authentication
- Complete authentication info clearance after logout

### Feature Set
- Real-time monitoring and latency measurement
- Multi-platform alerts (Telegram, Discord, Webhook)
- Smart status categorization and history records
- Batch operations and configuration export
- Status code explanation and error diagnosis

### Monitoring Algorithm

The system uses Cloudflare Workers' Cron triggers for scheduled monitoring, checking all monitored items every 10 minutes by default.

1. **Scheduled Triggering**: Monitors scheduled events through `addEventListener('scheduled')`
2. **Concurrent Detection**: Uses `Promise.all` to check all websites in parallel for efficiency
3. **Status Recording**: Maintains the last 50 check results for each website to generate historical charts
4. **Smart Alerts**: Sends notifications only on status changes with a 1-hour cooldown to prevent spam

## 🔧 Development Guide

### Local Development
```bash
# Clone project
git clone <repository-url>
cd sentinel

# Install dependencies
npm install

# Start development server
npm run dev
```

### Code Structure
```
sentinel/
├── worker.js          # Main program file
├── README.md          # Main project documentation
├── README_zh.md       # Chinese documentation
└── README_en.md       # English documentation
```

### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/data` | GET | Get monitoring data and historical records |
| `/api/urls` | POST | Add/update monitor URL |
| `/api/urls` | DELETE | Delete monitor URL |
| `/api/check` | GET | Check single URL status |

## 🐛 Troubleshooting

### Common Issues

**Q: Monitor status frequently switching?**
A: This is normal high-frequency detection effect, statistics will remain stable.

**Q: Notifications not sending?**
A: Check environment variable configuration and network connection.

**Q: KV storage inaccessible?**
A: Confirm KV Namespace is correctly bound.

**Q: Password verification failed?**
A: Clear browser cache or reset password.

### Performance Optimization
- Set appropriate detection frequency
- Use category management for large number of monitors
- Regularly clean historical data

## 🤝 Contributing Guide

We welcome all forms of contributions! Please refer to the following guidelines:

### Reporting Issues
- Use clear title to describe the issue
- Provide reproduction steps and environment information
- Attach relevant logs or screenshots

### Submitting Code
1. Fork the project repository
2. Create feature branch
3. Submit clear commit messages
4. Create Pull Request

### Code Standards
- Follow JavaScript best practices
- Maintain clear code comments
- Ensure complete documentation

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Cloudflare Workers**: Powerful edge computing platform
- **Telegram API**: Instant notification service support
- **Open Source Community**: Thanks to all contributors and users

## 📞 Contact

- **Project Homepage**: [GitHub Repository](https://github.com/your-username/sentinel)
- **Issue Reporting**: [Issues Page](https://github.com/your-username/sentinel/issues)
- **Discussion**: [Discussions](https://github.com/your-username/sentinel/discussions)

---

**🚀 Maintained by Noxen YS**

---

*Last Updated: January 2026*