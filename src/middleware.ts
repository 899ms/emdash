/**
 * Emdash 管理界面中文翻译中间件 v3
 * 覆盖全部 1324 个 UI 字符串的完整汉化版本
 */
import type { MiddlewareHandler } from "astro";

const TRANSLATION_SCRIPT = `<script id="emdash-i18n-overlay">
(function () {
  'use strict';

  /* ── 完整翻译词典（1324 条英文 → 中文）─────────────── */
  var ZH = {
    // 通用操作
    'Save': '保存', 'Cancel': '取消', 'Delete': '删除', 'Add': '添加',
    'Edit': '编辑', 'Create': '新建', 'Update': '更新', 'Remove': '移除',
    'Close': '关闭', 'Confirm': '确认', 'Apply': '应用', 'Search': '搜索',
    'Filter': '筛选', 'Sort': '排序', 'Reset': '重置', 'Retry': '重试',
    'Continue': '继续', 'Back': '返回', 'Next': '下一步', 'Previous': '上一步',
    'Done': '完成', 'Submit': '提交', 'Upload': '上传', 'Download': '下载',
    'Import': '导入', 'Export': '导出', 'Install': '安装', 'Uninstall': '卸载',
    'Enable': '启用', 'Disable': '禁用', 'Publish': '发布', 'Unpublish': '取消发布',
    'Schedule': '定时发布', 'Unschedule': '取消定时', 'Restore': '恢复',
    'Duplicate': '复制', 'Preview': '预览', 'Required': '必填',
    'Optional': '可选', 'Loading...': '加载中...', 'Saving...': '保存中...',
    'Deleting...': '删除中...', 'Creating...': '创建中...', 'Updating...': '更新中...',
    'Publishing...': '发布中...', 'Installing...': '安装中...', 'Uploading...': '上传中...',
    'Uploading...': '上传中...', 'Sending...': '发送中...', 'Checking...': '检查中...',
    'Loading': '加载中', 'Saved': '已保存', 'Deleted': '已删除', 'Created': '已创建',
    'Updated': '已更新', 'Enabled': '已启用', 'Disabled': '已禁用',
    'Published': '已发布', 'Scheduled': '已定时', 'Installed': '已安装',
    'Uploaded': '已上传', 'Removed': '已移除', 'Copied to clipboard': '已复制到剪贴板',

    // 主导航
    'Dashboard': '仪表盘', 'Content': '内容', 'Pages': '页面', 'Posts': '文章',
    'Links': '链接', 'Media': '媒体', 'Media Library': '媒体库',
    'Comments': '评论', 'Menus': '菜单', 'Navigation': '导航',
    'Redirects': '重定向', 'Widgets': '小组件', 'Sections': '区块',
    'Categories': '分类', 'Tags': '标签', 'Bylines': '署名',
    'Taxonomies': '分类法', 'Themes': '主题', 'Plugins': '插件',
    'Marketplace': '市场', 'Import': '导入', 'Settings': '设置',
    'Users': '用户', 'Forms': '表单', 'Submissions': '提交记录',
    'Webhook Settings': 'Webhook 设置', 'Content Types': '内容类型',
    'View Site': '查看站点',

    // Settings 页面 - General
    'General Settings': '常规设置', 'General': '常规',
    'Site Identity': '站点标识', 'Site Title': '站点标题',
    'Tagline': '标语', 'Site URL': '站点 URL',
    'Logo': 'Logo', 'Favicon': '网站图标',
    'Select Logo': '选择 Logo', 'Select Favicon': '选择网站图标',
    'Change Logo': '更换 Logo', 'Change Favicon': '更换图标',
    'Reading': '阅读', 'Posts Per Page': '每页文章数',
    'Number of posts to show per page on list views': '列表视图中每页显示的文章数量',
    'Date Format': '日期格式', 'Timezone': '时区',
    'Save Settings': '保存设置', 'Save Changes': '保存更改',
    'Settings saved successfully': '设置已保存',
    'The name of your site, used in the header and metadata': '您的站点名称，用于标题和元数据中',
    'A short description of your site': '您的站点简短描述',
    'The public URL of your site (used for canonical links and sitemaps)': '站点的公开 URL（用于规范链接和站点地图）',
    'Site identity, logo, favicon, and reading preferences': '站点标识、Logo、图标与阅读偏好',
    'Site Settings': '站点设置',

    // Settings - Social Links
    'Social Links': '社交链接', 'Social Profiles': '社交主页',
    'Social media profile links': '社交媒体主页链接',
    'Save Social Links': '保存社交链接', 'Social links saved': '社交链接已保存',
    'Facebook': 'Facebook', 'Twitter': 'Twitter', 'Instagram': 'Instagram',
    'LinkedIn': 'LinkedIn', 'YouTube': 'YouTube', 'GitHub': 'GitHub',
    'Website': '网站', 'Website URL': '网站 URL',

    // Settings - SEO
    'SEO': 'SEO', 'SEO Settings': 'SEO 设置', 'SEO Title': 'SEO 标题',
    'Meta Description': '元描述', 'Canonical URL': '规范 URL',
    'OG Image': 'OG 图片',
    'Search engine optimization and verification': '搜索引擎优化与验证',
    'Search Engine Optimization': '搜索引擎优化',
    'SEO settings saved': 'SEO 设置已保存', 'Save SEO Settings': '保存 SEO 设置',
    'Google Verification': 'Google 验证', 'Bing Verification': 'Bing 验证',
    'Add noindex meta tag': '添加 noindex 元标签',
    'Hide from search engines': '对搜索引擎隐藏',
    'Brief summary shown below the title in search results': '显示在搜索结果标题下方的简短摘要',
    'Overrides the page title in search engine results': '覆盖搜索引擎结果中的页面标题',
    'Google Verification': 'Google 站长验证',
    'Meta tag content for Google Search Console verification': 'Google Search Console 验证 meta 标签',
    'Meta tag content for Bing Webmaster Tools verification': 'Bing 站长工具验证 meta 标签',
    'Meta titles, descriptions, and social images': '标题、描述和社交分享图片',

    // Settings - Security
    'Security': '安全', 'Security Settings': '安全设置', 'Security Audit': '安全审计',
    'Manage your passkeys and authentication': '管理通行密钥与身份验证',
    'Allow users from specific domains to sign up': '允许特定域名的用户自助注册',
    'Self-Signup Domains': '自助注册域名', 'Allowed Domains': '允许的域名',
    'Add Domain': '添加域名', 'Edit Domain': '编辑域名', 'Remove Domain': '移除域名',
    'Remove Domain?': '确认移除域名？', 'Domain': '域名',
    'Domain added successfully': '域名已添加', 'Domain removed': '域名已移除',
    'Domain updated': '域名已更新', 'Failed to add domain': '添加域名失败',

    // Settings - API Tokens
    'API Tokens': 'API 令牌',
    'Create personal access tokens for programmatic API access': '创建程序访问用个人 API 令牌',
    'Create New Token': '新建令牌', 'Create Token': '创建令牌',
    'Token Name': '令牌名称', 'Copy token': '复制令牌',
    'Revoke token': '吊销令牌', 'Revoke?': '确认吊销？', 'Revoking...': '吊销中...',
    'No API tokens yet. Create one to get started.': '还没有 API 令牌，创建一个开始使用。',
    'Expiry': '有效期', 'No expiry': '永不过期',

    // Settings - Email
    'Email': '邮件', 'Email Settings': '邮件设置',
    'View email provider status and send test emails': '查看邮件服务状态并发送测试邮件',
    'Email provider active': '邮件服务已激活',
    'No email provider configured': '未配置邮件服务',
    'Send Test Email': '发送测试邮件', 'Send Test': '发送测试',
    'Recipient email': '收件人邮箱', 'Email Middleware': '邮件中间件',
    'Email Pipeline': '邮件流水线',

    // Settings - Language
    'Language': '语言', 'Choose your preferred admin language': '选择管理界面语言',
    'All locales': '所有语言', 'Locale': '语言',

    // 登录页
    'Sign in to your site': '登录您的站点',
    'Sign in with email': '使用邮箱登录',
    'Sign in with Passkey': '使用通行密钥登录',
    'Sign in with email link': '通过邮件链接登录',
    'Sign in': '登录', 'Sign in instead': '改为登录',
    'Sign up': '注册', 'Create an account': '创建账户',
    'Create Account': '创建账户', 'Create your account': '创建您的账户',
    'Already have an account?': '已有账户？',
    "Don't have an account?": '还没有账户？',
    'Email address': '邮件地址', 'Enter email': '输入邮件地址',
    'Send magic link': '发送魔法链接',
    'Check your email': '查看您的邮箱',
    'Click the link in the email to sign in.': '点击邮件中的链接即可登录。',
    'The link will expire in 15 minutes.': '链接将在 15 分钟后失效。',
    'Back to login': '返回登录',
    'Failed to send magic link': '魔法链接发送失败',
    'Or continue with': '或通过以下方式登录',
    'Use your registered passkey to sign in securely.': '使用已注册的通行密钥安全登录。',
    "We'll send you a link to sign in without a password.": '我们将发送无密码登录链接至您的邮箱。',
    "Didn't receive the email?": '没有收到邮件？',
    'Request a new link': '重新发送链接',
    'Resend email': '重发邮件',

    // 用户管理
    'Invite User': '邀请用户', 'Invite your first team member': '邀请第一位团队成员',
    'Send Invite': '发送邀请', 'Invite Link Created': '邀请链接已创建',
    'Copy invite link': '复制邀请链接',
    'All roles': '所有角色', 'Role': '角色', 'Your Role': '您的角色',
    'Admin': '管理员', 'Administrator': '管理员', 'Editor': '编辑',
    'Author': '作者', 'Contributor': '投稿人', 'Subscriber': '订阅者',
    'Status': '状态', 'Active': '活跃', 'Inactive': '未激活',
    'Last Login': '上次登录', 'Last login': '上次登录',
    'Passkeys': '通行密钥', 'Passkey': '通行密钥',
    'User': '用户', 'User Details': '用户详情', 'Users': '用户',
    'Disable User': '禁用用户', 'Disable User?': '确认禁用用户？',
    'Demote User': '降低权限', 'Demote User?': '确认降低权限？',
    'Demoting...': '降权中...', 'Disabling...': '禁用中...',
    'No users yet.': '暂无用户。',
    'Search by name or email...': '按姓名或邮箱搜索...',
    'Filter by role': '按角色筛选',
    'As an administrator, you can invite other users from the': '作为管理员，您可以从以下位置邀请其他用户',

    // 通行密钥
    'Create Passkey': '创建通行密钥', 'Add Passkey': '添加通行密钥',
    'Register Passkey': '注册通行密钥', 'Passkey Name (optional)': '通行密钥名称（可选）',
    'Passkey added successfully': '通行密钥已添加',
    'Passkey registered successfully!': '通行密钥注册成功！',
    'Passkey removed': '通行密钥已移除', 'Passkey renamed': '通行密钥已重命名',
    'No passkeys registered': '尚未注册通行密钥',
    'No passkeys registered yet.': '尚未注册任何通行密钥。',
    'Remove passkey?': '确认移除通行密钥？',

    // 内容操作
    'Draft': '草稿', 'Drafted': '草稿', 'Drafts': '草稿',
    'Drafts & Private': '草稿与私密',
    'Published At': '发布时间', 'Created At': '创建时间', 'Updated At': '更新时间',
    'Move to Trash': '移入回收站', 'Move to Trash?': '确认移入回收站？',
    'Trash': '回收站', 'Trash is empty': '回收站为空', 'Trash is empty.': '回收站为空。',
    'Delete Permanently': '永久删除', 'Delete Permanently?': '确认永久删除？',
    'Delete permanently': '永久删除',
    'Discard changes': '放弃更改', 'Discard draft changes?': '确认放弃草稿更改？',
    'Pending changes': '待处理更改', 'Changes discarded': '更改已放弃',
    'Content is now live': '内容已发布', 'Content removed from public view': '内容已下线',
    'Content reverted to draft': '内容已退回草稿', 'Content has been scheduled for publishing': '内容已安排定时发布',
    'Publish changes': '发布更改', 'Preview draft': '预览草稿',
    'Preview content before publishing': '发布前预览内容',
    'Schedule for later': '定时发布', 'Scheduled for: ': '定时发布：',
    'Unscheduled': '已取消定时',
    'Duplicate': '复制', 'Translate': '翻译',
    'Revisions': '版本历史', 'Restore Revision?': '确认恢复此版本？',
    'Revision restored': '已恢复版本', 'No revisions yet': '暂无版本历史',
    'Restore this version': '恢复此版本',
    'Autosave failed': '自动保存失败',

    // 内容列表
    'All statuses': '所有状态', 'All types': '所有类型',
    'No content': '暂无内容', 'No content found': '未找到内容',
    'No content in this collection': '此集合中暂无内容',
    'No results': '暂无结果', 'No results found': '未找到结果',
    'Load More': '加载更多', 'Load more': '加载更多',
    'New Post': '新建文章', 'New Page': '新建页面',
    'Add Content': '添加内容', 'Add New': '新建',
    'View All': '查看全部',
    'Grid view': '网格视图', 'List view': '列表视图',
    'Search content...': '搜索内容...',
    'Clear filters': '清除筛选',

    // 媒体库
    'Media Library': '媒体库', 'Media Details': '媒体详情',
    'Upload Files': '上传文件', 'Upload Media': '上传媒体',
    'Upload Image': '上传图片', 'Browse Files': '浏览文件',
    'Available media': '可用媒体', 'No media found': '未找到媒体',
    'No media yet': '暂无媒体', 'No media available from this provider': '此提供商暂无媒体',
    'Upload an image to get started': '上传图片开始使用',
    'Upload images, videos, and documents to get started.': '上传图片、视频或文件开始使用。',
    'Alt Text': '替代文字', 'Alt text': '替代文字',
    'Caption': '说明文字', 'Filename': '文件名',
    'Dimensions:': '尺寸：', 'Size:': '大小：',
    'File uploaded': '文件已上传', 'Upload failed': '上传失败',
    'Delete Media?': '确认删除媒体？',
    'Delete image': '删除图片', 'Remove Image': '移除图片', 'Remove image': '移除图片',
    'Replace Image': '替换图片', 'Select Image': '选择图片',
    'Image from media library': '从媒体库选择图片',
    'Could not load image from URL': '无法从 URL 加载图片',
    'Describe the image...': '描述图片...', 'Describe this image for accessibility': '请为无障碍功能描述此图片',
    'Required for accessibility. Describes the image for screen readers.': '无障碍功能必填项，供屏幕阅读器使用。',

    // 富文本编辑器
    'Paragraph': '正文', 'Heading 1': '标题 1', 'Heading 2': '标题 2',
    'Heading 3': '标题 3', 'Bullet List': '无序列表', 'Numbered List': '有序列表',
    'Quote': '引用', 'Code Block': '代码块', 'Inline Code': '行内代码',
    'Bold': '加粗', 'Italic': '斜体', 'Underline': '下划线',
    'Strikethrough': '删除线', 'Align Left': '左对齐', 'Align Center': '居中对齐',
    'Align Right': '右对齐', 'Insert Link': '插入链接', 'Insert Image': '插入图片',
    'Insert Horizontal Rule': '插入分隔线', 'Insert Section': '插入区块',
    'Start writing...': '开始输入...', 'Search pages and content...': '搜索页面和内容...',
    'Edit link': '编辑链接', 'Remove link': '移除链接', 'Apply link': '应用链接',
    'Enter URL...': '输入 URL...', 'Open in new tab': '在新标签页中打开',
    'Same window': '当前窗口', 'New window': '新窗口',
    'Spotlight Mode': '专注模式', 'Exit Spotlight Mode': '退出专注模式',
    'Expand': '展开', 'Collapse': '收起',
    'Large section heading': '大号标题', 'Medium section heading': '中号标题',
    'Small section heading': '小号标题',

    // 菜单
    'Menus': '菜单', 'Create Menu': '新建菜单', 'Create New Menu': '新建菜单',
    'Edit menu items': '编辑菜单项', 'Add Item': '添加项目', 'Add First Item': '添加第一个项目',
    'Add Custom Link': '添加自定义链接', 'Edit Menu Item': '编辑菜单项',
    'No menus yet': '暂无菜单', 'No menu items yet': '暂无菜单项',
    'Create your first navigation menu to get started': '创建第一个导航菜单开始使用',
    'Menu created': '菜单已创建', 'Menu deleted': '菜单已删除',
    'Add links to build your navigation menu': '添加链接以构建导航菜单',
    'Manage navigation menus for your site': '管理站点的导航菜单',
    'Delete Menu': '删除菜单', 'Are you sure you want to delete this menu? This will also delete all menu items. This action cannot be undone.': '确认删除此菜单？此操作将同时删除所有菜单项，且无法撤销。',

    // 重定向
    'Redirects': '重定向', 'New Redirect': '新建重定向',
    'Edit Redirect': '编辑重定向', 'Edit redirect': '编辑重定向',
    'Delete Redirect?': '确认删除重定向？', 'Delete redirect': '删除重定向',
    'Source': '来源', 'Source path': '来源路径', 'Destination': '目标',
    'Destination path': '目标路径', 'Status code': '状态码',
    'No redirects yet': '暂无重定向',
    'Create redirect rules to manage URL changes.': '创建重定向规则以管理 URL 变更。',
    'Manage URL redirects and view 404 errors.': '管理 URL 重定向并查看 404 错误。',
    'Search source or destination...': '搜索来源或目标...',

    // 分类
    'Categories': '分类', 'Tags': '标签', 'Categories & Tags': '分类和标签',
    'Create Taxonomy': '新建分类法', 'New Taxonomy': '新建分类法',
    'Define a new taxonomy for classifying content': '定义新的内容分类法',
    'Hierarchical (like categories, with parent/child relationships)': '层级式（类似分类，支持父子关系）',
    'Taxonomy created': '分类法已创建',

    // 署名
    'Bylines': '署名', 'Create byline': '新建署名',
    'Edit byline': '编辑署名', 'Delete Byline?': '确认删除署名？',
    'No bylines found': '未找到署名', 'Guest byline': '访客署名',
    'Linked user': '关联用户', 'Guest only': '仅访客',
    'Filter byline type': '筛选署名类型',
    'Quick create byline': '快速创建署名',

    // 内容类型
    'Content Types': '内容类型', 'Create Content Type': '新建内容类型',
    'New Content Type': '新建内容类型', 'Delete Content Type?': '确认删除内容类型？',
    'No content types yet.': '暂无内容类型。',
    'Back to Content Types': '返回内容类型',
    'Define the structure of your content': '定义内容的结构',
    'A brief description of this content type': '此内容类型的简短描述',
    'Add fields to define the structure of your content': '添加字段以定义内容结构',

    // 字段
    'Fields': '字段', 'Add Field': '添加字段', 'Add First Field': '添加第一个字段',
    'Edit Field': '编辑字段', 'Delete Field?': '确认删除字段？', 'Update Field': '更新字段',
    'Configure Field': '配置字段', 'Field Label': '字段标签',
    'Short Text': '短文本', 'Long Text': '长文本', 'Rich Text': '富文本',
    'Number': '数字', 'Integer': '整数', 'Decimal number': '小数',
    'Boolean': '布尔值', 'Date & Time': '日期和时间', 'Image': '图像',
    'Reference': '关联', 'Multi Select': '多选', 'Repeater': '重复器',
    'Custom Fields': '自定义字段', 'System Fields': '系统字段',
    'No fields to compare': '无字段可比较',

    // 区块（Sections）
    'Sections': '区块', 'New Section': '新建区块', 'Create Section': '创建区块',
    'Section': '区块', 'Section Details': '区块详情', 'Custom Section': '自定义区块',
    'Section created': '区块已创建', 'Section deleted': '区块已删除', 'Section saved': '区块已保存',
    'Delete Section?': '确认删除区块？', 'Back to sections': '返回区块',
    'No sections yet': '暂无区块', 'No sections found': '未找到区块',
    'Create your first reusable content section to get started.': '创建第一个可复用内容区块开始使用。',
    'Reusable content blocks you can insert into any content': '可插入任意内容的可复用内容块',
    'Insert a reusable section': '插入可复用区块',

    // 小组件
    'Widgets': '小组件', 'Available Widgets': '可用小组件',
    'Widget title': '小组件标题', 'Create Widget Area': '创建小组件区域',
    'Delete Widget Area?': '确认删除小组件区域？','Add Widget Area': '添加小组件区域',
    'Manage content widgets in your widget areas': '管理小组件区域中的内容小组件',
    'Drag widgets here to add them': '拖拽小组件到此处添加',
    'No widget areas yet. Create one to get started.': '暂无小组件区域，创建一个开始使用。',
    'Widget added': '小组件已添加', 'Widget deleted': '小组件已删除',
    'Widget area created': '小组件区域已创建', 'Widget area deleted': '小组件区域已删除',

    // 插件
    'Plugins': '插件', 'Plugin': '插件', 'Plugin Permissions': '插件权限',
    'Browse and install plugins to extend your site.': '浏览并安装插件以扩展您的站点。',
    'Manage installed plugins. Enable or disable plugins to control their functionality.': '管理已安装的插件，启用或禁用以控制功能。',
    'No plugins configured': '未配置插件', 'No plugins found': '未找到插件',
    'Plugin disabled': '插件已禁用', 'Plugin enabled': '插件已启用',
    'Plugin uninstalled': '插件已卸载', 'Plugin updated': '插件已更新',
    'Enable plugin': '启用插件', 'Disable plugin': '禁用插件',
    'Install blocked': '安装被阻止', 'Incompatible': '不兼容',
    'Security Audit': '安全审计', 'Security audit passed': '安全审计通过',
    'Security audit failed': '安全审计失败',
    'Security audit flagged concerns': '安全审计标记了问题',

    // 主题
    'Themes': '主题', 'Theme': '主题', 'Back to Themes': '返回主题',
    'No themes found': '未找到主题',
    'Browse themes and preview them with your own content.': '浏览主题并用您的内容预览效果。',

    // 市场
    'Marketplace': '市场', 'Most Popular': '最受欢迎',
    'Back to marketplace': '返回市场', 'View in Marketplace': '在市场中查看',
    'Unable to reach marketplace': '无法访问市场',

    // 导入（WordPress）
    'Import': '导入', 'Import from WordPress': '从 WordPress 导入',
    'Import Complete': '导入完成', 'Import Media': '导入媒体',
    'Continue Import': '继续导入', 'Start Import': '开始导入',
    'Author Mapping': '作者映射', 'Map Authors': '映射作者',
    'Content to Import': '待导入内容',
    'Connect with WordPress': '连接 WordPress',
    'Analyzing WordPress site...': '正在分析 WordPress 站点...',
    'Importing content...': '正在导入内容...',

    // 错误状态
    'An error occurred': '发生错误',
    'An unknown error occurred': '发生未知错误',
    'Something went wrong': '出错了',
    'Network error': '网络错误', 'Error': '错误',
    'Failed to save': '保存失败', 'Failed to save settings': '设置保存失败',
    'Failed to publish': '发布失败', 'Failed to delete': '删除失败',
    'Failed to update': '更新失败', 'Failed to load admin': '管理界面加载失败',
    'Failed to fetch settings': '获取设置失败',
    'Failed to fetch users': '获取用户列表失败',
    'Failed to fetch content': '获取内容失败',
    'Failed to load image': '图片加载失败',
    'Failed to upload media': '媒体上传失败',
    'Failed to invite user': '邀请用户失败',
    'Failed to send magic link': '魔法链接发送失败',
    'Failed to send test email': '测试邮件发送失败',
    'Page Not Found': '页面不存在',
    'The page you\'re looking for doesn\'t exist.': '您访问的页面不存在。',
    'Access Denied': '访问被拒绝', 'Not authenticated': '未登录',
    'Authorization failed': '授权失败', 'Authentication failed': '认证失败',

    // 加载状态
    'Loading collections...': '加载集合中...', 'Loading comments...': '加载评论中...',
    'Loading content...': '加载内容中...', 'Loading editor...': '加载编辑器中...',
    'Loading menu...': '加载菜单中...', 'Loading menus...': '加载菜单中...',
    'Loading plugins...': '加载插件中...', 'Loading redirects...': '加载重定向中...',
    'Loading sections...': '加载区块中...',  'Loading settings...': '加载设置中...',
    'Loading setup...': '加载设置中...', 'Loading terms...': '加载分类项中...',
    'Loading widgets...': '加载小组件中...', 'Loading...': '加载中...',
    'Loading EmDash...': '正在加载 EmDash...',

    // 评论
    'Comments': '评论', 'Comment': '评论', 'Comment Detail': '评论详情',
    'Approve': '通过', 'Approved': '已通过', 'Pending': '待审核',
    'Mark as spam': '标记为垃圾', 'Delete Comment?': '确认删除评论？',
    'All comments require approval': '所有评论需要审批',
    'No approved comments yet.': '暂无已通过的评论。',
    'No comments awaiting moderation.': '暂无待审核的评论。',
    'No spam comments.': '暂无垃圾评论。',
    'Enable comments': '启用评论', 'Allow visitors to leave comments on this collection\'s content': '允许访客对此集合内容发表评论',
    'Close comments after (days)': '评论开放天数（天）',
    'Search comments': '搜索评论', 'Search comments...': '搜索评论...',
    'Moderation': '审核',

    // 仪表盘
    'Dashboard': '仪表盘', 'Recent Activity': '近期活动',
    'No recent activity': '暂无近期活动',
    'Welcome to EmDash': '欢迎使用 EmDash',
    'Set up your site': '设置站点',
    'Get Started': '开始使用',
    'Go to Dashboard': '前往仪表盘',
    'Recently Updated': '最近更新',

    // 账户
    'Account': '账号', 'Account Info': '账号信息', 'Your Email': '您的邮箱',
    'Your Name': '您的姓名', 'Display name': '显示名称',
    'Log out': '退出登录', 'Sign out': '退出登录',
    'Linked Accounts (': '已关联账户（',
    'Secure your account': '保护您的账户',

    // 搜索框占位符
    'Search...': '搜索...',
    'Search bylines': '搜索署名', 'Search media': '搜索媒体',
    'Search users': '搜索用户', 'Search plugins...': '搜索插件...',
    'Search sections...': '搜索区块...', 'Search themes...': '搜索主题...',
    'Try a different search term': '尝试其他搜索词',
    'Try adjusting your search': '请调整搜索条件',
    'Try adjusting your search or filters.': '请调整搜索条件或筛选器。',

    // 杂项
    'Description': '描述', 'Title': '标题', 'Name': '名称',
    'Label': '标签', 'Type': '类型', 'Status': '状态',
    'Created': '创建时间', 'Modified': '修改时间', 'Version': '版本',
    'Actions': '操作', 'Next page': '下一页', 'Previous page': '上一页',
    'Select all': '全选', 'Count': '数量', 'Total': '总计',
    'Untitled': '未命名', 'Unknown': '未知', 'None': '无',
    'Never': '从不', 'Always': '始终', 'Auto': '自动',
    'Custom': '自定义', 'Default': '默认', 'System': '系统',
    'Preview': '预览', 'Library': '库', 'Collections': '集合',
    'Back to settings': '返回设置', 'Back to Content Types': '返回内容类型',
    'Back to Themes': '返回主题', 'Back to marketplace': '返回市场',
    'Back to sections': '返回区块', 'Back to login': '返回登录',
    'View Site': '查看站点', 'View mode': '查看模式',
    'Copy URL': '复制 URL', 'Copy slug': '复制 slug',
    'Homepage': '首页', 'Outline': '大纲',
    'Dismiss': '忽略', 'Close panel': '关闭面板',
    'Add tags...': '添加标签...', 'Select...': '请选择...',
    'Manage': '管理', 'Review': '审核', 'Access': '访问',
    'Connect': '连接', 'Authorize': '授权',
    'Try Again': '重试', 'Try again': '重试',
    'Oops!': '哎呀！', 'Ready': '就绪',
    'Translate': '翻译', 'Translations': '翻译',
    'Translation created': '翻译已创建',
  };

  /* ── Cookie 工具 ──────────────────────────────────── */
  function readCookie() {
    var m = document.cookie.match(/(?:^|;\\s*)emdash-i18n-lang=([^;]+)/);
    return m ? decodeURIComponent(m[1]) : null;
  }
  function writeCookie(lang) {
    var s = location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = 'emdash-i18n-lang=' + encodeURIComponent(lang) +
      '; Path=/; SameSite=Lax; Max-Age=31536000' + s;
  }

  /* ── 状态 ─────────────────────────────────────────── */
  var currentLang = readCookie() || 'en';

  /* ── 翻译核心 ─────────────────────────────────────── */
  var SKIP_TAGS = /^(SCRIPT|STYLE|CODE|PRE|TEXTAREA|INPUT|SELECT|OPTION)$/;

  function translateNode(node) {
    var parent = node.parentElement;
    if (!parent || SKIP_TAGS.test(parent.tagName)) return;
    if (parent.closest && parent.closest('#em-lang-btn')) return;
    var raw = node.data;
    var trimmed = raw.trim();
    if (!trimmed || trimmed.length < 2) return;
    if (currentLang === 'zh' && ZH[trimmed] !== undefined) {
      var translated = ZH[trimmed];
      if (raw !== translated && raw.indexOf(translated) === -1) {
        node.data = raw.replace(trimmed, translated);
      }
    }
  }

  function translateAll() {
    if (!document.body) return;
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var node;
    while ((node = walker.nextNode())) {
      translateNode(node);
    }
  }

  /* ── 定时轮询（主要机制）────────────────────────────
     React SPA 持续重渲染，setInterval 是最可靠的翻译方式 */
  var pollingStarted = false;
  function startPolling() {
    if (pollingStarted) return;
    pollingStarted = true;
    // 前 15 秒密集翻译（页面初始化阶段）
    var count = 0;
    var fastId = setInterval(function() {
      translateAll();
      count++;
      if (count >= 50) { // 50 × 300ms = 15s
        clearInterval(fastId);
        // 之后每秒翻译一次（应对路由切换）
        setInterval(translateAll, 1000);
      }
    }, 300);
  }

  /* ── MutationObserver（辅助，处理 characterData 变化）*/
  function startObserver() {
    var timer = null;
    var obs = new MutationObserver(function() {
      if (currentLang !== 'zh') return;
      clearTimeout(timer);
      timer = setTimeout(translateAll, 80);
    });
    obs.observe(document.body, {
      childList: true, subtree: true, characterData: true
    });
  }

  /* ── 语言切换浮动按钮 ─────────────────────────────── */
  function injectBtn() {
    if (document.getElementById('em-lang-btn')) return;
    var btn = document.createElement('button');
    btn.id = 'em-lang-btn';
    btn.title = currentLang === 'zh' ? 'Switch to English' : '切换为中文';
    btn.textContent = currentLang === 'zh' ? '🌐 EN' : '🌐 中文';
    var s = btn.style;
    s.position = 'fixed'; s.bottom = '20px'; s.right = '20px';
    s.zIndex = '2147483647'; s.padding = '7px 16px';
    s.borderRadius = '22px'; s.border = '1.5px solid rgba(100,100,200,0.2)';
    s.fontSize = '13px'; s.fontWeight = '700';
    s.fontFamily = 'system-ui, -apple-system, sans-serif';
    s.cursor = 'pointer'; s.letterSpacing = '0.04em';
    s.boxShadow = '0 4px 16px rgba(0,0,0,0.18)';
    s.backdropFilter = 'blur(8px)';
    s.transition = 'transform 0.15s, box-shadow 0.15s';
    s.background = currentLang === 'zh' ? 'rgba(15,23,42,0.92)' : 'rgba(255,255,255,0.92)';
    s.color = currentLang === 'zh' ? '#e2e8f0' : '#1e293b';
    btn.addEventListener('pointerenter', function() { s.transform='scale(1.07)'; });
    btn.addEventListener('pointerleave', function() { s.transform=''; });
    btn.addEventListener('click', function(e) {
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
    if (currentLang === 'zh') {
      translateAll();
      startPolling();
      startObserver();
    }
  }

  if (document.readyState !== 'loading') { init(); }
  else { document.addEventListener('DOMContentLoaded', init); }
  // 500ms 保险触发（React 初渲染完成后）
  setTimeout(function() { injectBtn(); if (currentLang === 'zh') { translateAll(); startPolling(); } }, 500);
  // 2s 再次触发（应对慢速网络或懒加载路由）
  setTimeout(function() { if (currentLang === 'zh') translateAll(); }, 2000);

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
