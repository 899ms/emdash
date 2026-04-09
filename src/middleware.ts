/**
 * Emdash 管理界面中文翻译中间件 v4
 * 修复：JS 词典 key 中撇号导致语法错误，按钮消失的问题。
 * 全部 key 改为双引号，彻底避免单引号冲突。
 */
import type { MiddlewareHandler } from "astro";

/* 注意：模板字符串内的 JS 代码必须用双引号作为对象 key，
   因为英文字符串中含撇号（collection's / you're / don't 等），
   单引号 key 会在 HTML 输出中产生语法错误。 */
const TRANSLATION_SCRIPT = `<script id="emdash-i18n-overlay">
(function () {
  'use strict';

  /* ── 翻译词典（双引号 key，支持撇号）────────────────── */
  var ZH = {
    /* 通用操作 */
    "Save": "保存", "Cancel": "取消", "Delete": "删除", "Add": "添加",
    "Edit": "编辑", "Create": "新建", "Update": "更新", "Remove": "移除",
    "Close": "关闭", "Confirm": "确认", "Apply": "应用", "Search": "搜索",
    "Filter": "筛选", "Sort": "排序", "Reset": "重置", "Retry": "重试",
    "Continue": "继续", "Back": "返回", "Done": "完成", "Submit": "提交",
    "Upload": "上传", "Download": "下载", "Import": "导入", "Export": "导出",
    "Install": "安装", "Uninstall": "卸载", "Enable": "启用", "Disable": "禁用",
    "Publish": "发布", "Unpublish": "取消发布", "Schedule": "定时发布",
    "Unschedule": "取消定时", "Restore": "恢复", "Duplicate": "复制",
    "Preview": "预览", "Required": "必填",
    "Loading...": "加载中...", "Saving...": "保存中...", "Deleting...": "删除中...",
    "Creating...": "创建中...", "Updating...": "更新中...",
    "Publishing...": "发布中...", "Installing...": "安装中...",
    "Uploading...": "上传中...", "Sending...": "发送中...",
    "Checking authentication...": "验证身份中...",
    "Loading": "加载中", "Saved": "已保存", "Deleted": "已删除",
    "Created": "已创建", "Updated": "已更新", "Enabled": "已启用",
    "Disabled": "已禁用", "Published": "已发布", "Scheduled": "已定时",
    "Installed": "已安装", "Uploaded": "已上传", "Removed": "已移除",
    "Copied to clipboard": "已复制到剪贴板", "Changed": "已更改",
    "Added": "已添加", "Adding...": "添加中...", "Removing...": "移除中...",
    "Disabling...": "禁用中...", "Demoting...": "降权中...",
    "Authorizing...": "授权中...", "Revoking...": "吊销中...",

    /* 主导航 */
    "Dashboard": "仪表盘", "Content": "内容", "Pages": "页面",
    "Posts": "文章", "Links": "链接", "Media": "媒体",
    "Media Library": "媒体库", "Comments": "评论", "Menus": "菜单",
    "Navigation": "导航", "Redirects": "重定向", "Widgets": "小组件",
    "Sections": "区块", "Categories": "分类", "Tags": "标签",
    "Bylines": "署名", "Taxonomies": "分类法", "Themes": "主题",
    "Plugins": "插件", "Marketplace": "市场", "Settings": "设置",
    "Users": "用户", "Forms": "表单", "Submissions": "提交记录",
    "Webhook Settings": "Webhook 设置", "Content Types": "内容类型",
    "View Site": "查看站点", "Admin navigation": "管理员导航",

    /* General Settings */
    "General Settings": "常规设置", "General": "常规",
    "Site Identity": "站点标识", "Site Title": "站点标题",
    "Tagline": "标语", "Site URL": "站点 URL",
    "Logo": "Logo", "Favicon": "网站图标",
    "Select Logo": "选择 Logo", "Select Favicon": "选择图标",
    "Change Logo": "更换 Logo", "Change Favicon": "更换图标",
    "Reading": "阅读", "Posts Per Page": "每页文章数",
    "Number of posts to show per page on list views": "列表视图中每页显示的文章数量",
    "Date Format": "日期格式", "Timezone": "时区",
    "Save Settings": "保存设置", "Save Changes": "保存更改",
    "Settings saved successfully": "设置已保存",
    "The name of your site, used in the header and metadata": "站点名称，用于标题和元数据",
    "A short description of your site": "站点简短描述",
    "The public URL of your site (used for canonical links and sitemaps)": "站点公开 URL（用于规范链接和站点地图）",
    "Site identity, logo, favicon, and reading preferences": "站点标识、Logo、图标与阅读偏好",
    "Site Settings": "站点设置", "Back to settings": "返回设置",

    /* Social Links */
    "Social Links": "社交链接", "Social Profiles": "社交主页",
    "Social media profile links": "社交媒体主页链接",
    "Save Social Links": "保存社交链接", "Social links saved": "社交链接已保存",
    "Website": "网站", "Website URL": "网站 URL",

    /* SEO */
    "SEO": "SEO", "SEO Settings": "SEO 设置", "SEO Title": "SEO 标题",
    "Meta Description": "元描述", "Canonical URL": "规范 URL", "OG Image": "OG 图片",
    "Search engine optimization and verification": "搜索引擎优化与验证",
    "Search Engine Optimization": "搜索引擎优化",
    "SEO settings saved": "SEO 设置已保存", "Save SEO Settings": "保存 SEO 设置",
    "Google Verification": "Google 验证", "Bing Verification": "Bing 验证",
    "Add noindex meta tag": "添加 noindex 元标签",
    "Hide from search engines": "对搜索引擎隐藏",
    "Brief summary shown below the title in search results": "显示在搜索结果标题下方的简短摘要",
    "Overrides the page title in search engine results": "覆盖搜索引擎中的页面标题",
    "Meta titles, descriptions, and social images": "标题、描述和社交分享图片",

    /* Security */
    "Security": "安全", "Security Settings": "安全设置",
    "Security Audit": "安全审计",
    "Manage your passkeys and authentication": "管理通行密钥与身份验证",
    "Allow users from specific domains to sign up": "允许特定域名的用户自助注册",
    "Self-Signup Domains": "自助注册域名", "Allowed Domains": "允许的域名",
    "Add Domain": "添加域名", "Edit Domain": "编辑域名",
    "Remove Domain": "移除域名", "Remove Domain?": "确认移除域名？",
    "Domain": "域名", "Domain added successfully": "域名已添加",
    "Domain removed": "域名已移除", "Domain updated": "域名已更新",
    "Add an allowed domain": "添加允许的域名",
    "Only email addresses from allowed domains can sign up.": "只有来自允许域名的邮箱地址才能注册。",
    "No domains configured. Users must be invited individually.": "未配置域名，用户只能通过邀请加入。",

    /* API Tokens */
    "API Tokens": "API 令牌",
    "Create personal access tokens for programmatic API access": "创建程序访问用个人 API 令牌",
    "Create New Token": "新建令牌", "Create Token": "创建令牌",
    "Token Name": "令牌名称", "Copy token": "复制令牌",
    "Revoke token": "吊销令牌", "Revoke?": "确认吊销？",
    "No API tokens yet. Create one to get started.": "暂无 API 令牌，创建一个开始使用。",
    "Expiry": "有效期", "No expiry": "永不过期",
    "Expires ": "到期于 ", "Last used ": "上次使用于 ",

    /* Email */
    "Email": "邮件", "Email Settings": "邮件设置",
    "View email provider status and send test emails": "查看邮件服务状态并发送测试邮件",
    "Email provider active": "邮件服务已激活",
    "No email provider configured": "未配置邮件服务",
    "Send Test Email": "发送测试邮件", "Send Test": "发送测试",
    "Recipient email": "收件人邮箱",

    /* Language */
    "Language": "语言",
    "Choose your preferred admin language": "选择管理界面语言",
    "All locales": "所有语言", "Locale": "语言",

    /* 登录页 */
    "Sign in to your site": "登录您的站点",
    "Sign in with email": "使用邮箱登录",
    "Sign in with Passkey": "使用通行密钥登录",
    "Sign in with email link": "通过邮件链接登录",
    "Sign in": "登录", "Sign in instead": "改为登录",
    "Sign up": "注册", "Create Account": "创建账户",
    "Create your account": "创建您的账户",
    "Already have an account?": "已有账户？",
    "Don't have an account?": "还没有账户？",
    "Email address": "邮件地址", "Enter email": "输入邮件地址",
    "Send magic link": "发送魔法链接",
    "Check your email": "查看您的邮箱",
    "Click the link in the email to sign in.": "点击邮件中的链接即可登录。",
    "The link will expire in 15 minutes.": "链接将在 15 分钟后失效。",
    "Back to login": "返回登录",
    "Failed to send magic link": "魔法链接发送失败",
    "Or continue with": "或通过以下方式",
    "Use your registered passkey to sign in securely.": "使用已注册的通行密钥安全登录。",
    "We'll send you a link to sign in without a password.": "我们将向您的邮箱发送无密码登录链接。",
    "Didn't receive the email?": "没有收到邮件？",
    "Request a new link": "重新发送链接",
    "Resend email": "重发邮件",
    "Link expired": "链接已失效",
    "Authentication was cancelled or timed out. Please try again.": "认证已取消或超时，请重试。",

    /* 用户管理 */
    "Invite User": "邀请用户",
    "Invite your first team member": "邀请第一位团队成员",
    "Send Invite": "发送邀请", "Invite Link Created": "邀请链接已创建",
    "Copy invite link": "复制邀请链接",
    "All roles": "所有角色", "Role": "角色", "Your Role": "您的角色",
    "Admin": "管理员", "Administrator": "管理员", "Editor": "编辑",
    "Author": "作者", "Contributor": "投稿人", "Subscriber": "订阅者",
    "Status": "状态", "Active": "活跃", "Inactive": "未激活",
    "Last Login": "上次登录", "Last login": "上次登录",
    "Passkeys": "通行密钥", "User": "用户", "User Details": "用户详情",
    "Disable User": "禁用用户", "Disable User?": "确认禁用用户？",
    "Demote User": "降低权限", "Demote User?": "确认降低权限？",
    "No users yet.": "暂无用户。",
    "Search by name or email...": "按姓名或邮箱搜索...",
    "Filter by role": "按角色筛选",
    "Full admin access": "完整管理员权限",
    "Can manage all content": "可管理所有内容",
    "Can publish own content": "可发布自己的内容",
    "Can create content": "可创建内容",
    "Can view content": "可查看内容",
    "Your account has been created successfully.": "您的账户已成功创建。",

    /* 通行密钥 */
    "Create Passkey": "创建通行密钥",
    "Add Passkey": "添加通行密钥",
    "Register Passkey": "注册通行密钥",
    "Passkey Name (optional)": "通行密钥名称（可选）",
    "Passkey added successfully": "通行密钥已添加",
    "Passkey registered successfully!": "通行密钥注册成功！",
    "Passkey removed": "通行密钥已移除",
    "Passkey renamed": "通行密钥已重命名",
    "No passkeys registered": "尚未注册通行密钥",
    "No passkeys registered yet.": "尚未注册任何通行密钥。",
    "Remove passkey?": "确认移除通行密钥？",
    "Add a new passkey": "添加新通行密钥",
    "Give this passkey a name to help you identify it later.": "为通行密钥命名以便日后识别。",
    "Passkeys are a secure, passwordless way to sign in using your device's biometrics, PIN, or security key.": "通行密钥是一种使用设备生物识别、PIN 或安全密钥的无密码登录方式。",

    /* 内容操作 */
    "Draft": "草稿", "Drafts": "草稿", "Drafts & Private": "草稿与私密",
    "Published At": "发布时间", "Created At": "创建时间", "Updated At": "更新时间",
    "Move to Trash": "移入回收站", "Move to Trash?": "确认移入回收站？",
    "Trash": "回收站", "Trash is empty": "回收站为空",
    "Trash is empty.": "回收站为空。",
    "Delete Permanently": "永久删除", "Delete Permanently?": "确认永久删除？",
    "Discard changes": "放弃更改",
    "Discard draft changes?": "确认放弃草稿更改？",
    "Pending changes": "待处理更改", "Changes discarded": "更改已放弃",
    "Content is now live": "内容已发布",
    "Content removed from public view": "内容已下线",
    "Content reverted to draft": "内容已退回草稿",
    "Content has been scheduled for publishing": "内容已安排定时发布",
    "Content has been updated to the selected revision.": "内容已恢复到所选版本。",
    "Publish changes": "发布更改",
    "Preview draft": "预览草稿",
    "Preview content before publishing": "发布前预览内容",
    "Schedule for later": "定时发布",
    "Unscheduled": "已取消定时",
    "Autosave failed": "自动保存失败",
    "Save content as draft before publishing": "先保存为草稿再发布",
    "Revisions": "版本历史",
    "Restore Revision?": "确认恢复此版本？",
    "Revision restored": "已恢复版本",
    "No revisions yet": "暂无版本历史",
    "Restore this version": "恢复此版本",
    "Reverted to published version": "已回退到已发布版本",
    "This will revert to the published version. Your draft changes will be lost.": "此操作将回退到已发布版本，草稿更改将丢失。",

    /* 内容列表 */
    "All statuses": "所有状态", "All types": "所有类型",
    "No content": "暂无内容", "No content found": "未找到内容",
    "No content in this collection": "此集合中暂无内容",
    "No results": "暂无结果", "No results found": "未找到结果",
    "No content types yet.": "暂无内容类型。",
    "Load More": "加载更多", "Load more": "加载更多",
    "Add Content": "添加内容", "Add New": "新建",
    "View All": "查看全部",
    "Grid view": "网格视图", "List view": "列表视图",
    "Search content...": "搜索内容...",
    "Clear filters": "清除筛选",

    /* 媒体库 */
    "Media Details": "媒体详情",
    "Upload Files": "上传文件", "Upload Media": "上传媒体",
    "Upload Image": "上传图片", "Browse Files": "浏览文件",
    "Available media": "可用媒体", "No media found": "未找到媒体",
    "No media yet": "暂无媒体",
    "Alt Text": "替代文字", "Alt text": "替代文字",
    "Caption": "说明文字", "Filename": "文件名",
    "Dimensions:": "尺寸：", "Size:": "大小：",
    "File uploaded": "文件已上传", "Upload failed": "上传失败",
    "Delete Media?": "确认删除媒体？",
    "Delete image": "删除图片",
    "Remove Image": "移除图片", "Remove image": "移除图片",
    "Replace Image": "替换图片", "Select Image": "选择图片",
    "Could not load image from URL": "无法从 URL 加载图片",
    "Describe the image...": "描述图片...",
    "Describe this image for accessibility": "请为无障碍功能描述此图片",

    /* 富文本编辑器 */
    "Paragraph": "正文", "Heading 1": "标题 1", "Heading 2": "标题 2",
    "Heading 3": "标题 3", "Bullet List": "无序列表",
    "Numbered List": "有序列表", "Quote": "引用",
    "Code Block": "代码块", "Inline Code": "行内代码",
    "Bold": "加粗", "Italic": "斜体", "Underline": "下划线",
    "Strikethrough": "删除线", "Align Left": "左对齐",
    "Align Center": "居中", "Align Right": "右对齐",
    "Insert Link": "插入链接", "Insert Image": "插入图片",
    "Insert Section": "插入区块",
    "Start writing...": "开始输入...",
    "Enter URL...": "输入 URL...",
    "Edit link": "编辑链接", "Remove link": "移除链接",
    "Apply link": "应用链接",
    "Open in new tab": "在新标签页中打开",
    "Same window": "当前窗口", "New window": "新窗口",
    "Spotlight Mode": "专注模式",
    "Exit Spotlight Mode": "退出专注模式",

    /* 菜单 */
    "Create Menu": "新建菜单", "Create New Menu": "新建菜单",
    "Edit menu items": "编辑菜单项",
    "Add Item": "添加项目", "Add First Item": "添加第一个项目",
    "Add Custom Link": "添加自定义链接",
    "Edit Menu Item": "编辑菜单项",
    "No menus yet": "暂无菜单", "No menu items yet": "暂无菜单项",
    "Create your first navigation menu to get started": "创建第一个导航菜单开始使用",
    "Menu created": "菜单已创建", "Menu deleted": "菜单已删除",
    "Delete Menu": "删除菜单",
    "Manage navigation menus for your site": "管理站点的导航菜单",

    /* 重定向 */
    "New Redirect": "新建重定向",
    "Edit Redirect": "编辑重定向", "Edit redirect": "编辑重定向",
    "Delete Redirect?": "确认删除重定向？",
    "Source": "来源", "Source path": "来源路径",
    "Destination": "目标", "Destination path": "目标路径",
    "Status code": "状态码", "No redirects yet": "暂无重定向",
    "Create redirect rules to manage URL changes.": "创建重定向规则以管理 URL 变更。",
    "Search source or destination...": "搜索来源或目标...",

    /* 分类 */
    "Create Taxonomy": "新建分类法", "New Taxonomy": "新建分类法",
    "Taxonomy created": "分类法已创建",

    /* 区块 */
    "New Section": "新建区块", "Create Section": "创建区块",
    "Section Details": "区块详情", "Custom Section": "自定义区块",
    "Section created": "区块已创建", "Section deleted": "区块已删除",
    "Section saved": "区块已保存",
    "Delete Section?": "确认删除区块？",
    "Back to sections": "返回区块",
    "No sections yet": "暂无区块", "No sections found": "未找到区块",

    /* 小组件 */
    "Available Widgets": "可用小组件",
    "Widget title": "小组件标题",
    "Create Widget Area": "创建小组件区域",
    "Delete Widget Area?": "确认删除小组件区域？",
    "Add Widget Area": "添加小组件区域",
    "Drag widgets here to add them": "拖拽小组件到此处添加",
    "No widget areas yet. Create one to get started.": "暂无小组件区域，创建一个开始使用。",
    "Widget added": "小组件已添加", "Widget deleted": "小组件已删除",
    "Widget area created": "小组件区域已创建",
    "Widget area deleted": "小组件区域已删除",

    /* 插件 */
    "Plugin Permissions": "插件权限",
    "Browse and install plugins to extend your site.": "浏览并安装插件以扩展您的站点。",
    "No plugins configured": "未配置插件",
    "No plugins found": "未找到插件",
    "Plugin disabled": "插件已禁用", "Plugin enabled": "插件已启用",
    "Plugin uninstalled": "插件已卸载", "Plugin updated": "插件已更新",
    "Enable plugin": "启用插件", "Disable plugin": "禁用插件",
    "Security audit passed": "安全审计通过",
    "Security audit failed": "安全审计失败",
    "Security audit flagged concerns": "安全审计标记了问题",

    /* 主题 */
    "Back to Themes": "返回主题", "No themes found": "未找到主题",
    "Browse themes and preview them with your own content.": "浏览主题并用您的内容预览效果。",

    /* 市场 */
    "Most Popular": "最受欢迎",
    "Back to marketplace": "返回市场",
    "View in Marketplace": "在市场中查看",
    "Unable to reach marketplace": "无法访问市场",

    /* 内容类型 */
    "Create Content Type": "新建内容类型",
    "New Content Type": "新建内容类型",
    "Delete Content Type?": "确认删除内容类型？",
    "Back to Content Types": "返回内容类型",
    "Define the structure of your content": "定义内容的结构",
    "A brief description of this content type": "此内容类型的简短描述",
    "Add Field": "添加字段", "Add First Field": "添加第一个字段",
    "Edit Field": "编辑字段", "Delete Field?": "确认删除字段？",
    "Update Field": "更新字段", "Configure Field": "配置字段",
    "Field Label": "字段标签",
    "Short Text": "短文本", "Long Text": "长文本", "Rich Text": "富文本",
    "Number": "数字", "Integer": "整数", "Boolean": "布尔值",
    "Date & Time": "日期和时间", "Image": "图像",
    "Reference": "关联", "Multi Select": "多选", "Repeater": "重复器",

    /* 评论 */
    "Comment": "评论", "Comment Detail": "评论详情",
    "Approve": "通过", "Approved": "已通过", "Pending": "待审核",
    "Mark as spam": "标记为垃圾",
    "Delete Comment?": "确认删除评论？",
    "All comments require approval": "所有评论需要审批",
    "No approved comments yet.": "暂无已通过的评论。",
    "No comments awaiting moderation.": "暂无待审核评论。",
    "No spam comments.": "暂无垃圾评论。",
    "Enable comments": "启用评论",
    "Allow visitors to leave comments on this collection's content":
      "允许访客对此集合的内容发表评论",
    "Close comments after (days)": "关闭评论的天数（天）",
    "Search comments": "搜索评论",
    "Search comments...": "搜索评论...",
    "Moderation": "审核",

    /* 仪表盘 */
    "Recent Activity": "近期活动",
    "No recent activity": "暂无近期活动",
    "Welcome to EmDash": "欢迎使用 EmDash",
    "Set up your site": "设置站点",
    "Get Started": "开始使用",
    "Go to Dashboard": "前往仪表盘",
    "Recently Updated": "最近更新",

    /* 加载状态 */
    "Loading collections...": "加载集合中...",
    "Loading comments...": "加载评论中...",
    "Loading content...": "加载内容中...",
    "Loading editor...": "加载编辑器中...",
    "Loading menu...": "加载菜单中...",
    "Loading menus...": "加载菜单中...",
    "Loading plugins...": "加载插件中...",
    "Loading redirects...": "加载重定向中...",
    "Loading sections...": "加载区块中...",
    "Loading settings...": "加载设置中...",
    "Loading setup...": "加载设置中...",
    "Loading terms...": "加载分类项中...",
    "Loading widgets...": "加载小组件中...",
    "Loading EmDash...": "正在加载...",

    /* 错误 */
    "An error occurred": "发生错误",
    "An unknown error occurred": "发生未知错误",
    "Something went wrong": "出错了",
    "Network error": "网络错误",
    "Failed to save": "保存失败",
    "Failed to save settings": "设置保存失败",
    "Failed to publish": "发布失败",
    "Failed to delete": "删除失败",
    "Failed to load admin": "管理界面加载失败",
    "Failed to fetch settings": "获取设置失败",
    "Failed to fetch users": "获取用户失败",
    "Failed to fetch content": "获取内容失败",
    "Failed to load image": "图片加载失败",
    "Failed to upload media": "媒体上传失败",
    "Failed to invite user": "邀请用户失败",
    "Failed to send test email": "测试邮件发送失败",
    "Failed to compare revisions": "版本比较失败",
    "Failed to create content": "创建内容失败",
    "Page Not Found": "页面不存在",
    "The page you're looking for doesn't exist.": "您访问的页面不存在。",
    "Access Denied": "访问被拒绝",
    "Not authenticated": "未登录",
    "Authorization failed": "授权失败",
    "Authentication failed": "认证失败",
    "Oops!": "哎呀！",

    /* 账户 */
    "Account": "账号", "Account Info": "账号信息",
    "Your Email": "您的邮箱", "Your Name": "您的姓名",
    "Display name": "显示名称",
    "Log out": "退出登录",
    "Secure your account": "保护您的账户",

    /* 搜索提示 */
    "Search...": "搜索...",
    "Search bylines": "搜索署名",
    "Search media": "搜索媒体",
    "Search users": "搜索用户",
    "Search plugins...": "搜索插件...",
    "Search sections...": "搜索区块...",
    "Search themes...": "搜索主题...",
    "Try a different search term": "尝试其他搜索词",
    "Try adjusting your search": "请调整搜索条件",
    "Try adjusting your search or filters.": "请调整搜索条件或筛选器。",
    "No results found": "未找到结果",

    /* 杂项 */
    "Description": "描述", "Title": "标题", "Name": "名称",
    "Label": "标签", "Version": "版本", "Actions": "操作",
    "Next page": "下一页", "Previous page": "上一页",
    "Select all": "全选", "Untitled": "未命名",
    "Unknown": "未知", "Never": "从不", "Custom": "自定义",
    "Default": "默认", "Library": "库", "Collections": "集合",
    "Copy URL": "复制 URL", "Copy slug": "复制 slug",
    "Homepage": "首页", "Outline": "大纲",
    "Dismiss": "忽略", "Close panel": "关闭面板",
    "Add tags...": "添加标签...", "Select...": "请选择...",
    "Manage": "管理", "Review": "审核",
    "Connect": "连接", "Authorize": "授权",
    "Try Again": "重试", "Try again": "重试",
    "Ready": "就绪", "Translations": "翻译",
    "Translation created": "翻译已创建",
    "Publish changes": "发布更改",
    "Save (Enter)": "保存（Enter）",
    "Cancel (Esc)": "取消（Esc）",
  };

  /* ── Cookie ───────────────────────────────────────── */
  function readCookie() {
    var m = document.cookie.match(/(?:^|;\\s*)emdash-i18n-lang=([^;]+)/);
    return m ? decodeURIComponent(m[1]) : null;
  }
  function writeCookie(lang) {
    var sec = location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = 'emdash-i18n-lang=' + encodeURIComponent(lang)
      + '; Path=/; SameSite=Lax; Max-Age=31536000' + sec;
  }

  /* ── 状态 ─────────────────────────────────────────── */
  var currentLang = readCookie() || 'en';

  /* ── 翻译引擎 ─────────────────────────────────────── */
  var SKIP = /^(SCRIPT|STYLE|CODE|PRE|TEXTAREA|INPUT|SELECT|OPTION)$/;

  function translateNode(node) {
    var parent = node.parentElement;
    if (!parent || SKIP.test(parent.tagName)) return;
    if (parent.closest && parent.closest('#em-lang-btn')) return;
    var raw = node.data;
    var trimmed = raw.trim();
    if (!trimmed || trimmed.length < 2) return;
    if (currentLang === 'zh') {
      var tr = ZH[trimmed];
      if (tr && raw.indexOf(tr) === -1) {
        node.data = raw.replace(trimmed, tr);
      }
    }
  }

  function translateAll() {
    if (!document.body) return;
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var n;
    while ((n = w.nextNode())) translateNode(n);
  }

  /* ── 轮询（主要机制）──────────────────────────────── */
  var polling = false;
  function startPolling() {
    if (polling) return;
    polling = true;
    var cnt = 0;
    var id = setInterval(function () {
      translateAll();
      if (++cnt >= 50) { /* 15s 后降频 */
        clearInterval(id);
        setInterval(translateAll, 1000);
      }
    }, 300);
  }

  /* ── MutationObserver（辅助）──────────────────────── */
  function startObserver() {
    var t = null;
    new MutationObserver(function () {
      if (currentLang !== 'zh') return;
      clearTimeout(t);
      t = setTimeout(translateAll, 80);
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  /* ── 语言切换按钮 ─────────────────────────────────── */
  function injectBtn() {
    if (document.getElementById('em-lang-btn')) return;
    var btn = document.createElement('button');
    btn.id = 'em-lang-btn';
    btn.title = currentLang === 'zh' ? 'Switch to English' : '切换为中文';
    btn.textContent = currentLang === 'zh' ? '🌐 EN' : '🌐 中文';
    Object.assign(btn.style, {
      position: 'fixed', bottom: '20px', right: '20px',
      zIndex: '2147483647', padding: '7px 16px',
      borderRadius: '22px', border: '1.5px solid rgba(100,100,200,0.2)',
      fontSize: '13px', fontWeight: '700',
      fontFamily: 'system-ui,-apple-system,sans-serif',
      cursor: 'pointer', letterSpacing: '0.04em',
      boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
      backdropFilter: 'blur(8px)',
      transition: 'transform 0.15s,box-shadow 0.15s',
      background: currentLang === 'zh' ? 'rgba(15,23,42,0.92)' : 'rgba(255,255,255,0.92)',
      color: currentLang === 'zh' ? '#e2e8f0' : '#1e293b',
    });
    btn.addEventListener('pointerenter', function () { btn.style.transform = 'scale(1.07)'; });
    btn.addEventListener('pointerleave', function () { btn.style.transform = ''; });
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      currentLang = currentLang === 'zh' ? 'en' : 'zh';
      writeCookie(currentLang);
      location.reload();
    });
    document.body.appendChild(btn);
  }

  /* ── 初始化 ───────────────────────────────────────── */
  function init() {
    injectBtn();
    if (currentLang === 'zh') { translateAll(); startPolling(); startObserver(); }
  }

  if (document.readyState !== 'loading') { init(); }
  else { document.addEventListener('DOMContentLoaded', init); }
  setTimeout(function () {
    injectBtn();
    if (currentLang === 'zh') { translateAll(); startPolling(); }
  }, 500);
  setTimeout(function () { if (currentLang === 'zh') translateAll(); }, 2000);

})();
</script>`;

export const onRequest: MiddlewareHandler = async (context, next) => {
	if (!context.url.pathname.startsWith("/_emdash/admin")) {
		return next();
	}
	const response = await next();
	const contentType = response.headers.get("content-type") ?? "";
	if (!contentType.includes("text/html")) {
		return response;
	}
	const body = await response.text();
	const modifiedBody = body.includes("</body>")
		? body.replace("</body>", `${TRANSLATION_SCRIPT}\n</body>`)
		: body + TRANSLATION_SCRIPT;
	const newHeaders = new Headers(response.headers);
	newHeaders.delete("content-length");
	return new Response(modifiedBody, {
		status: response.status,
		statusText: response.statusText,
		headers: newHeaders,
	});
};
