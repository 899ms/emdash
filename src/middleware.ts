/**
 * Emdash 管理界面中文翻译中间件 v2
 *
 * 修复：React SPA 异步渲染导致翻译失效的问题。
 * 改用 setInterval 定时轮询 + MutationObserver(characterData) 双重机制。
 */
import type { MiddlewareHandler } from "astro";

const TRANSLATION_SCRIPT = `<script id="emdash-i18n-overlay">
(function () {
  'use strict';

  /* ── 翻译词典 ─────────────────────────────────────── */
  var ZH = {
    // 侧边栏 & 顶部导航
    'Dashboard': '仪表盘',
    'Pages': '页面',
    'Posts': '文章',
    'Links': '链接',
    'Comments': '评论',
    'Menus': '菜单',
    'Redirects': '重定向',
    'Widgets': '小组件',
    'Sections': '区块',
    'Categories': '分类',
    'Tags': '标签',
    'Bylines': '署名',
    'Content Types': '内容类型',
    'Users': '用户',
    'Plugins': '插件',
    'Marketplace': '市场',
    'Themes': '主题',
    'Import': '导入',
    'Forms': '表单',
    'Submissions': '提交记录',
    'Webhook Settings': 'Webhook 设置',
    // Settings 导航
    'Settings': '设置',
    'General': '常规',
    'Site identity, logo, favicon, and reading preferences': '站点标识、Logo、图标与阅读偏好',
    'Social Links': '社交链接',
    'Social media profile links': '社交媒体主页链接',
    'SEO': 'SEO',
    'Search engine optimization and verification': '搜索引擎优化与验证',
    'Security': '安全',
    'Manage your passkeys and authentication': '管理通行密钥与身份验证',
    'Self-Signup Domains': '自助注册域名',
    'Allow users from specific domains to sign up': '允许特定域名的用户自助注册',
    'API Tokens': 'API 令牌',
    'Create personal access tokens for programmatic API access': '创建程序访问用 API 令牌',
    'Email': '邮件',
    'View email provider status and send test emails': '查看邮件服务状态并发送测试邮件',
    'Language': '语言',
    'Choose your preferred admin language': '选择管理界面语言',
    // 登录页
    'Sign in to your site': '登录您的站点',
    'Sign in with email': '使用邮箱登录',
    'Email address': '邮箱地址',
    'Send magic link': '发送魔法链接',
    'Sending...': '发送中...',
    'Check your email': '查看您的邮箱',
    'Click the link in the email to sign in.': '点击邮件中的链接即可登录。',
    'The link will expire in 15 minutes.': '链接将在 15 分钟后失效。',
    'Back to login': '返回登录',
    'Failed to send magic link': '魔法链接发送失败',
    'Or continue with': '或通过以下方式登录',
    'Sign in with Passkey': '使用通行密钥登录',
    'Use your registered passkey to sign in securely.': '使用已注册的通行密钥安全登录。',
    "We'll send you a link to sign in without a password.": '我们将发送无密码登录链接至您的邮箱。',
    'Sign in with email link': '通过邮件链接登录',
    // 内容操作
    'Save': '保存',
    'Cancel': '取消',
    'Delete': '删除',
    'Add': '添加',
    'Edit': '编辑',
    'Create': '新建',
    'Publish': '发布',
    'Unpublish': '取消发布',
    'Draft': '草稿',
    'Published': '已发布',
    'Restore': '恢复',
    'Search': '搜索',
    'Filter': '筛选',
    'Sort': '排序',
    'No content': '暂无内容',
    'No results': '暂无结果',
    'All locales': '所有语言',
    'Loading EmDash...': '正在加载...',
    // 用户管理
    'Invite User': '邀请用户',
    'All roles': '所有角色',
    'User': '用户',
    'Role': '角色',
    'Status': '状态',
    'Last Login': '上次登录',
    'Passkeys': '通行密钥',
    'Admin': '管理员',
    'Editor': '编辑',
    'Author': '作者',
    'Contributor': '投稿人',
    'Active': '活跃',
    'Inactive': '未激活',
    'View All': '查看全部',
    'New Post': '新建文章',
    'New Page': '新建页面',
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
  var SKIP = /^(SCRIPT|STYLE|CODE|PRE|TEXTAREA|INPUT|BUTTON|SELECT)$/;
  // 反向词典：中文 → 英文（切回英文时用）
  var EN = {};
  Object.keys(ZH).forEach(function(k) { EN[ZH[k]] = k; });

  function translateNode(node) {
    var parent = node.parentElement;
    if (!parent || SKIP.test(parent.tagName)) return;
    // 跳过我们自己的翻译按钮
    if (parent.closest && parent.closest('#em-lang-btn')) return;

    var raw = node.data;
    var trimmed = raw.trim();
    if (!trimmed) return;

    if (currentLang === 'zh' && ZH[trimmed] && raw.indexOf(ZH[trimmed]) === -1) {
      node.data = raw.replace(trimmed, ZH[trimmed]);
    } else if (currentLang === 'en' && EN[trimmed] && raw.indexOf(EN[trimmed]) === -1) {
      node.data = raw.replace(trimmed, EN[trimmed]);
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
     React 每次重渲染后都需要重新翻译，setInterval 是最可靠的方式 */
  var intervalId = null;
  function startPolling() {
    if (intervalId) return;
    // 前 3 秒密集轮询（页面加载阶段）
    var count = 0;
    intervalId = setInterval(function() {
      translateAll();
      count++;
      // 10 秒后降频到每 1 秒一次
      if (count === 33) {
        clearInterval(intervalId);
        intervalId = setInterval(translateAll, 1000);
      }
    }, 300);
  }

  /* ── MutationObserver（辅助机制）────────────────────
     监听 characterData 变化（React 直接修改文本节点时触发） */
  function startObserver() {
    var timer = null;
    var obs = new MutationObserver(function(muts) {
      if (currentLang !== 'zh') return;
      clearTimeout(timer);
      timer = setTimeout(translateAll, 50);
    });
    obs.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  }

  /* ── 语言切换浮动按钮 ─────────────────────────────── */
  function injectBtn() {
    if (document.getElementById('em-lang-btn')) return;
    var btn = document.createElement('button');
    btn.id = 'em-lang-btn';
    updateBtn(btn);

    var s = btn.style;
    s.position = 'fixed';
    s.bottom = '20px';
    s.right = '20px';
    s.zIndex = '2147483647';
    s.padding = '7px 16px';
    s.borderRadius = '22px';
    s.border = '1.5px solid rgba(120,120,180,0.25)';
    s.fontSize = '13px';
    s.fontWeight = '700';
    s.fontFamily = 'system-ui, -apple-system, sans-serif';
    s.cursor = 'pointer';
    s.letterSpacing = '0.04em';
    s.boxShadow = '0 4px 16px rgba(0,0,0,0.18)';
    s.backdropFilter = 'blur(8px)';
    s.transition = 'transform 0.15s, box-shadow 0.15s';
    applyTheme(btn);

    btn.addEventListener('pointerenter', function() {
      s.transform = 'scale(1.07)';
      s.boxShadow = '0 6px 20px rgba(0,0,0,0.22)';
    });
    btn.addEventListener('pointerleave', function() {
      s.transform = '';
      s.boxShadow = '0 4px 16px rgba(0,0,0,0.18)';
    });
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      currentLang = currentLang === 'zh' ? 'en' : 'zh';
      writeCookie(currentLang);
      location.reload();
    });

    document.body.appendChild(btn);
  }

  function updateBtn(btn) {
    btn.title = currentLang === 'zh' ? 'Switch to English' : '切换为中文';
    btn.textContent = currentLang === 'zh' ? '🌐 EN' : '🌐 中文';
  }

  function applyTheme(btn) {
    var dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    btn.style.background = dark
      ? 'rgba(30,32,48,0.92)'
      : 'rgba(255,255,255,0.92)';
    btn.style.color = dark ? '#e2e8f0' : '#1e293b';
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

  if (document.readyState !== 'loading') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
  // 额外保险：500ms 后再跑一次（React 可能还没完成初渲染）
  setTimeout(function() {
    injectBtn();
    if (currentLang === 'zh') {
      translateAll();
      startPolling();
    }
  }, 500);

})();
</script>`;

export const onRequest: MiddlewareHandler = async (context, next) => {
	// 只拦截 emdash 管理界面请求
	if (!context.url.pathname.startsWith("/_emdash/admin")) {
		return next();
	}

	const response = await next();

	// 只处理 HTML 响应
	const contentType = response.headers.get("content-type") ?? "";
	if (!contentType.includes("text/html")) {
		return response;
	}

	// 注入翻译脚本到 </body> 前
	const body = await response.text();
	const modifiedBody = body.includes("</body>")
		? body.replace("</body>", `${TRANSLATION_SCRIPT}\n</body>`)
		: body + TRANSLATION_SCRIPT;

	// 构建新的响应头（移除 content-length，因为 body 变大了）
	const newHeaders = new Headers(response.headers);
	newHeaders.delete("content-length");

	return new Response(modifiedBody, {
		status: response.status,
		statusText: response.statusText,
		headers: newHeaders,
	});
};
