/**
 * Emdash 管理界面中文翻译中间件
 *
 * 拦截 /_emdash/admin 页面的 HTML 响应，注入客户端翻译脚本。
 * 使用 MutationObserver 动态翻译 React 渲染的文本，无需重建 admin 包。
 */
import type { MiddlewareHandler } from "astro";

const TRANSLATION_SCRIPT = `
<script id="emdash-i18n-overlay">
(function () {
  'use strict';

  // ── 翻译词典（英文 → 中文）────────────────────────────
  const ZH = {
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
    "Use your registered passkey to sign in securely.": '使用已注册的通行密钥安全登录。',
    "We'll send you a link to sign in without a password.": '我们将发送无密码登录链接至您的邮箱。',
    'Sign in with email link': '通过邮件链接登录',
    // 内容操作
    'Save': '保存',
    'Cancel': '取消',
    'Delete': '删除',
    'Add': '添加',
    'Edit': '编辑',
    'Create': '创建',
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
    'Loading EmDash...': '正在加载 EmDash...',
  };

  // ── 状态 ─────────────────────────────────────────────
  var COOKIE_NAME = 'emdash-i18n-lang';
  var currentLang = readCookie() || 'en';
  var observing = false;

  function readCookie() {
    var m = document.cookie.match(/(?:^|;\\s*)emdash-i18n-lang=([^;]+)/);
    return m ? m[1] : null;
  }

  function writeCookie(lang) {
    var secure = location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = COOKIE_NAME + '=' + lang + '; Path=/; SameSite=Lax; Max-Age=31536000' + secure;
  }

  // ── 翻译引擎 ─────────────────────────────────────────
  var pending = false;

  function scheduleTranslate() {
    if (!pending) {
      pending = true;
      requestAnimationFrame(function () {
        pending = false;
        if (currentLang === 'zh') translateDOM(document.body);
      });
    }
  }

  function translateDOM(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var node;
    while ((node = walker.nextNode())) {
      var parent = node.parentElement;
      // 跳过脚本/样式/代码区域
      if (!parent || /^(SCRIPT|STYLE|CODE|PRE|TEXTAREA)$/.test(parent.tagName)) continue;
      var trimmed = node.data.trim();
      if (trimmed && ZH[trimmed] !== undefined) {
        node.data = node.data.replace(trimmed, ZH[trimmed]);
      }
    }
  }

  // ── MutationObserver ─────────────────────────────────
  function startObserver() {
    if (observing) return;
    observing = true;
    var obs = new MutationObserver(function (muts) {
      if (currentLang !== 'zh') return;
      muts.forEach(function (m) {
        m.addedNodes.forEach(function (n) {
          if (n.nodeType === Node.ELEMENT_NODE) translateDOM(n);
        });
      });
    });
    obs.observe(document.body, { childList: true, subtree: true });
  }

  // ── 语言切换按钮 ──────────────────────────────────────
  function injectToggleButton() {
    if (document.getElementById('em-lang-btn')) return;
    var btn = document.createElement('button');
    btn.id = 'em-lang-btn';
    btn.title = currentLang === 'zh' ? 'Switch to English' : '切换为中文';
    btn.textContent = currentLang === 'zh' ? '🌐 EN' : '🌐 中';

    var style = btn.style;
    style.position = 'fixed';
    style.bottom = '24px';
    style.right = '24px';
    style.zIndex = '999999';
    style.padding = '6px 14px';
    style.borderRadius = '20px';
    style.border = '1px solid rgba(0,0,0,0.15)';
    style.background = currentLang === 'zh' ? '#1a1a2e' : '#ffffff';
    style.color = currentLang === 'zh' ? '#e0e0e0' : '#333';
    style.fontSize = '13px';
    style.fontWeight = '600';
    style.fontFamily = 'system-ui, sans-serif';
    style.cursor = 'pointer';
    style.boxShadow = '0 2px 10px rgba(0,0,0,0.18)';
    style.transition = 'all 0.2s';
    style.letterSpacing = '0.03em';

    btn.addEventListener('mouseenter', function () {
      style.transform = 'scale(1.06)';
    });
    btn.addEventListener('mouseleave', function () {
      style.transform = '';
    });

    btn.addEventListener('click', function () {
      currentLang = currentLang === 'zh' ? 'en' : 'zh';
      writeCookie(currentLang);
      location.reload();
    });

    document.body.appendChild(btn);
  }

  // ── 初始化 ───────────────────────────────────────────
  function init() {
    if (currentLang === 'zh') {
      translateDOM(document.body);
    }
    injectToggleButton();
    startObserver();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
</script>
`;

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
		? body.replace("</body>", `${TRANSLATION_SCRIPT}</body>`)
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
