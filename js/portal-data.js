(function () {
  const localeAliases = {
    "zh-hans": "zhhans",
    "zh-hant": "zhhant",
    "zh-cn": "zhhans",
    "zh-tw": "zhhant",
    "zh-hk": "zhhant"
  };

  const rawLocale = (document.documentElement.lang || "ja").toLowerCase();
  const locale = localeAliases[rawLocale] || rawLocale.replace("-", "");
  const supportedLocales = ["ja", "en", "zhhans", "zhhant"];
  const activeLocale = supportedLocales.includes(locale) ? locale : "ja";
  const assetVersion = "20260731-studio";
  const siteBaseUrl = getSiteBaseUrl();
  const fallbackPortalData = {
    locales: {
      ja: {
        status: { open: "受付中", building: "開発中", live: "公開中" },
        properties: {
          about: { name: "BizLiv.life", verb: "知る", map_label: "灯台", map_note: "運営者を知る", audience: "まず全体像を知りたい", description: "問いに答える、つくる、遊ぶ、使う、読む。今の状態から入口を選べる場所です。", cta: "運営者を知る" },
          coach: { name: "BizLiv Coach", verb: "問いに答える", map_label: "問いの庭", map_note: "自分を整える", audience: "自分で問いに答えながら整理したい", description: "セルフコーチングの問いに答えながら、言葉にならない悩みをほどき、次に考えることを1つに絞ります。", cta: "Coachへ" },
          studio: { name: "BizLiv Studio", verb: "つくる", map_label: "制作スタジオ", map_note: "最初の形へ", audience: "事業のアイデアを最初に触れる形にしたい", description: "AIも使いながら一緒に考え、試し、つくるプロダクトスタジオです。", cta: "Studioへ" },
          park: { name: "BizLiv Park", verb: "遊ぶ", map_label: "遊びの公園", map_note: "考えて遊ぶ", audience: "考えごとを少し遊びに変えたい", description: "AIやアプリを通して、自分の気持ちや人生を少し違う角度から楽しめる場所です。", cta: "Parkへ" },
          apps: { name: "BizLiv Apps", verb: "使う", map_label: "道具小屋", map_note: "日々に使う", audience: "日々の小さな手間を減らしたい", description: "会議、買い物、帰宅、記録など、毎日の面倒を軽くする道具を使えます。", cta: "Appsへ" },
          media: { name: "BizLiv Media", verb: "読む・聴く", map_label: "発信の書斎", map_note: "読む・聴く", audience: "考え方や試行錯誤を読みたい", description: "コーチング、AI、開発、日常の問いを、記事や音声で追えます。", cta: "Mediaへ" }
        },
        funnel: [
          { id: "studio", title: "アイデアを触れる形にしたい", text: "事業の話から一緒に考え、試し、最初に見せられる形へ変える。", cta: "BizLiv Studioへ" },
          { id: "coach", title: "問いに答えて整理したい", text: "セルフコーチングの問いに答えながら、まだ言葉にならない悩みを整理し、次に考えることを1つに絞る。", cta: "BizLiv Coachへ" },
          { id: "apps", title: "道具を使って軽くしたい", text: "会議、買い物、帰宅、記録など、日々の小さな手間を道具で軽くする。", cta: "BizLiv Appsへ" }
        ]
      },
      en: {
        status: { open: "Open", building: "Building", live: "Live" },
        properties: {
          about: { name: "BizLiv.life", verb: "Know", map_label: "Lighthouse", map_note: "About the operator", audience: "I want the whole picture first", description: "A place to choose between self-coaching prompts, creating, playing, using tools, and reading.", cta: "Meet the operator" },
          coach: { name: "BizLiv Coach", verb: "Answer prompts", map_label: "Question Garden", map_note: "Self-coaching", audience: "I want to sort my thoughts on my own", description: "Use self-coaching prompts to untangle unnamed concerns and narrow what to think about next.", cta: "Go to Coach" },
          studio: { name: "BizLiv Studio", verb: "Create", map_label: "Creation Studio", map_note: "Shape the first version", audience: "I want to turn a business idea into something tangible", description: "A product studio for thinking, testing, and building together with AI as part of the process.", cta: "Go to Studio" },
          park: { name: "BizLiv Park", verb: "Play", map_label: "Play Park", map_note: "Think and play", audience: "I want to turn my thoughts into something playful", description: "A place to explore feelings and life from a slightly different angle through playful AI, apps, and experiments.", cta: "Go to Park" },
          apps: { name: "BizLiv Apps", verb: "Use", map_label: "Tool Workshop", map_note: "Use in daily life", audience: "I want to reduce small daily friction", description: "Use simple tools for meetings, shopping, getting home, and daily records.", cta: "Go to Apps" },
          media: { name: "BizLiv Media", verb: "Read / Listen", map_label: "Media Library", map_note: "Read and listen", audience: "I want to read the thinking behind it", description: "Follow essays and audio about coaching, AI, development, and everyday questions.", cta: "Go to Media" }
        },
        funnel: [
          { id: "studio", title: "Turn an idea into something tangible", text: "Start from the business conversation, think together, test quickly, and shape the first version people can see.", cta: "Go to BizLiv Studio" },
          { id: "coach", title: "Use self-coaching prompts", text: "Answer prompts to organize unnamed concerns and narrow what to think about next.", cta: "Go to BizLiv Coach" },
          { id: "apps", title: "Use tools to lighten daily life", text: "Reduce small daily tasks with tools for meetings, shopping, getting home, and records.", cta: "Go to BizLiv Apps" }
        ]
      },
      zhhans: {
        status: { open: "开放中", building: "开发中", live: "公开中" },
        properties: {
          about: { name: "BizLiv.life", verb: "了解", map_label: "灯塔", map_note: "了解运营者", audience: "先想了解整体", description: "可以从自我提问、制作、游玩、使用、阅读中选择入口的地方。", cta: "了解运营者" },
          coach: { name: "BizLiv Coach", verb: "自我提问", map_label: "提问之庭", map_note: "自我教练", audience: "想用提问整理自己的想法", description: "通过自我教练的提问，整理还没命名的烦恼，缩小下一步要思考的事。", cta: "去 Coach" },
          studio: { name: "BizLiv Studio", verb: "制作", map_label: "制作工作室", map_note: "做出最初形态", audience: "想把事业想法变成可以触碰的形态", description: "一边使用 AI，一边共同思考、尝试和制作的产品工作室。", cta: "去 Studio" },
          park: { name: "BizLiv Park", verb: "游玩", map_label: "游玩公园", map_note: "边想边玩", audience: "想把思考变成一点游戏", description: "通过可玩的 AI、应用和实验内容，从稍微不同的角度感受自己的心情和人生。", cta: "去 Park" },
          apps: { name: "BizLiv Apps", verb: "使用", map_label: "工具小屋", map_note: "日常使用", audience: "想减轻日常小麻烦", description: "使用会议、购物、回家、记录等小工具，减轻每天的麻烦。", cta: "去 Apps" },
          media: { name: "BizLiv Media", verb: "读・听", map_label: "发布书房", map_note: "读・听", audience: "想阅读背后的想法", description: "通过文章和音声追踪教练、AI、开发和日常问题。", cta: "去 Media" }
        },
        funnel: [
          { id: "studio", title: "想把想法做成可触碰的形态", text: "从事业和服务的想法开始，一起思考、尝试，并做出最初可以展示的形态。", cta: "去 BizLiv Studio" },
          { id: "coach", title: "想用提问整理自己", text: "通过自我教练的提问，整理还没命名的烦恼，缩小下一步要思考的事。", cta: "去 BizLiv Coach" },
          { id: "apps", title: "想用工具减轻日常", text: "用会议、购物、回家、记录等工具，减轻每天的小麻烦。", cta: "去 BizLiv Apps" }
        ]
      },
      zhhant: {
        status: { open: "開放中", building: "開發中", live: "公開中" },
        properties: {
          about: { name: "BizLiv.life", verb: "了解", map_label: "燈塔", map_note: "了解營運者", audience: "先想了解整體", description: "可以從自我提問、製作、遊玩、使用、閱讀中選擇入口的地方。", cta: "了解營運者" },
          coach: { name: "BizLiv Coach", verb: "自我提問", map_label: "提問之庭", map_note: "自我教練", audience: "想用提問整理自己的想法", description: "透過自我教練的提問，整理還沒命名的煩惱，縮小下一步要思考的事。", cta: "去 Coach" },
          studio: { name: "BizLiv Studio", verb: "製作", map_label: "製作工作室", map_note: "做出最初形態", audience: "想把事業想法變成可以觸碰的形態", description: "一邊使用 AI，一邊共同思考、嘗試和製作的產品工作室。", cta: "去 Studio" },
          park: { name: "BizLiv Park", verb: "遊玩", map_label: "遊玩公園", map_note: "邊想邊玩", audience: "想把思考變成一點遊戲", description: "透過可玩的 AI、應用和實驗內容，從稍微不同的角度感受自己的心情和人生。", cta: "去 Park" },
          apps: { name: "BizLiv Apps", verb: "使用", map_label: "工具小屋", map_note: "日常使用", audience: "想減輕日常小麻煩", description: "使用會議、購物、回家、記錄等小工具，減輕每天的麻煩。", cta: "去 Apps" },
          media: { name: "BizLiv Media", verb: "讀・聽", map_label: "發布書房", map_note: "讀・聽", audience: "想閱讀背後的想法", description: "透過文章和音聲追蹤教練、AI、開發和日常問題。", cta: "去 Media" }
        },
        funnel: [
          { id: "studio", title: "想把想法做成可觸碰的形態", text: "從事業和服務的想法開始，一起思考、嘗試，並做出最初可以展示的形態。", cta: "去 BizLiv Studio" },
          { id: "coach", title: "想用提問整理自己", text: "透過自我教練的提問，整理還沒命名的煩惱，縮小下一步要思考的事。", cta: "去 BizLiv Coach" },
          { id: "apps", title: "想用工具減輕日常", text: "用會議、購物、回家、記錄等工具，減輕每天的小麻煩。", cta: "去 BizLiv Apps" }
        ]
      }
    },
    properties: [
      { id: "about", zone: "lighthouse", x: 19, y: 30, href: { ja: "/ja/about/", en: "/en/about/", zhhans: "/zhhans/about/", zhhant: "/zhhant/about/" }, status: "open", accent: "#e3a72f", show_in_map: true, show_in_properties: false },
      { id: "coach", zone: "garden", x: 43, y: 34, href: "https://coach.bizliv.life/", status: "open", accent: "#607d58", show_in_map: true, show_in_properties: true },
      { id: "studio", zone: "studio", x: 20, y: 79, href: "https://studio.bizliv.life/", status: "live", accent: "#1669d8", show_in_map: true, show_in_properties: true },
      { id: "park", zone: "observatory", x: 69, y: 25, href: { ja: "https://park.bizliv.life/", en: "https://park.bizliv.life/en/", zhhans: "https://park.bizliv.life/zhhans/", zhhant: "https://park.bizliv.life/zhhant/" }, status: "live", accent: "#2f6f91", show_in_map: true, show_in_properties: true },
      { id: "apps", zone: "workshop", x: 48, y: 57, href: { ja: "https://apps.bizliv.life/ja/", en: "https://apps.bizliv.life/en/", zhhans: "https://apps.bizliv.life/zhhans/", zhhant: "https://apps.bizliv.life/zhhant/" }, status: "live", accent: "#b46a4a", show_in_map: true, show_in_properties: true },
      { id: "media", zone: "library", x: 81, y: 47, href: { ja: "https://media.bizliv.life/", en: "https://media.bizliv.life/en/", zhhans: "https://media.bizliv.life/zh-cn/", zhhant: "https://media.bizliv.life/zh-tw/" }, status: "live", accent: "#78664b", show_in_map: true, show_in_properties: true }
    ]
  };

  function getSiteBaseUrl() {
    if (window.location.protocol !== "file:") {
      return "";
    }

    const stylesheet = document.querySelector('link[rel="stylesheet"][href*="css/site.css"]');
    if (stylesheet) {
      const stylesheetUrl = new URL(stylesheet.getAttribute("href"), window.location.href);
      return stylesheetUrl.href.replace(/css\/site\.css.*$/, "");
    }

    return "";
  }

  function isExternal(href) {
    return /^https?:\/\//.test(href);
  }

  function resolveSitePath(path) {
    if (!path || !path.startsWith("/") || path.startsWith("//") || !siteBaseUrl) {
      return path;
    }

    return new URL(path.slice(1), siteBaseUrl).href;
  }

  function resolveHref(href) {
    if (!href || typeof href === "string") {
      return href || "#";
    }
    return href[activeLocale] || href.ja || Object.values(href)[0] || "#";
  }

  function enhanceLink(anchor, href) {
    const resolved = resolveSitePath(resolveHref(href));
    anchor.href = resolved;
    if (isExternal(resolved)) {
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
    }
  }

  function escapeText(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function mergeProperties(data, translations) {
    const localized = translations.properties || {};
    return (data.properties || []).map((property) => ({
      ...property,
      ...localized[property.id],
      href: resolveHref(property.href)
    }));
  }

  function renderMapPins(properties) {
    const mount = document.querySelector("[data-portal-map-pins]");
    if (!mount) return;

    mount.innerHTML = "";
    properties.filter((property) => property.show_in_map !== false).forEach((property) => {
      const pin = document.createElement("a");
      pin.className = `map-pin map-pin-${property.id}`;
      pin.style.left = `${property.x}%`;
      pin.style.top = `${property.y}%`;
      pin.style.setProperty("--pin-accent", property.accent);
      pin.setAttribute("data-zone", property.zone);
      pin.innerHTML = `
        ${escapeText(property.map_label)}
        <small>${escapeText(property.map_note)}</small>
      `;
      enhanceLink(pin, property.href);
      mount.appendChild(pin);
    });
  }

  function renderProperties(properties, statusLabels) {
    const mount = document.querySelector("[data-portal-properties]");
    if (!mount) return;

    mount.innerHTML = "";
    properties.filter((property) => property.show_in_properties).forEach((property) => {
      const article = document.createElement("article");
      article.className = "portal-property-card";
      article.style.setProperty("--property-accent", property.accent);
      article.setAttribute("data-zone", property.zone);
      article.innerHTML = `
        <div class="property-meta">
          <span class="property-verb">${escapeText(property.verb)}</span>
          <span>${escapeText(statusLabels[property.status] || property.status)}</span>
        </div>
        <h3>${escapeText(property.name)}</h3>
        <p class="property-audience">${escapeText(property.audience)}</p>
        <p>${escapeText(property.description)}</p>
      `;
      const link = document.createElement("a");
      link.textContent = property.cta;
      enhanceLink(link, property.href);
      article.appendChild(link);
      mount.appendChild(article);
    });
  }

  function renderFunnel(items, properties) {
    const mount = document.querySelector("[data-portal-funnel]");
    if (!mount) return;

    const byId = new Map(properties.map((property) => [property.id, property]));
    mount.innerHTML = "";
    items.forEach((item) => {
      const property = byId.get(item.id) || {};
      const article = document.createElement("article");
      article.className = "portal-funnel-card";
      article.style.setProperty("--property-accent", property.accent || "#e3a72f");
      article.innerHTML = `
        <span>${escapeText(property.verb || "")}</span>
        <h3>${escapeText(item.title)}</h3>
        <p>${escapeText(item.text)}</p>
      `;
      const link = document.createElement("a");
      link.textContent = item.cta;
      enhanceLink(link, property.href || "#properties");
      article.appendChild(link);
      mount.appendChild(article);
    });
  }

  function renderPortal(data) {
    const translations = data.locales[activeLocale] || data.locales.ja;
    const properties = mergeProperties(data, translations);

    renderMapPins(properties);
    renderProperties(properties, translations.status || {});
    renderFunnel(translations.funnel || [], properties);
  }

  async function initPortal() {
    const response = await fetch(resolveSitePath(`/data/portal.json?v=${assetVersion}`), { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(`Portal data request failed: ${response.status}`);
    }
    renderPortal(await response.json());
  }

  document.addEventListener("DOMContentLoaded", () => {
    initPortal().catch((error) => {
      document.documentElement.classList.add("portal-data-error");
      console.error(error);
      renderPortal(fallbackPortalData);
    });
  });
})();
