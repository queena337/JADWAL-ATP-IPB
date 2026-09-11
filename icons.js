const iconMap = {
  "📊": "fa-chart-column",
  "📋": "fa-clipboard-list",
  "🏢": "fa-building",
  "🏛️": "fa-landmark",
  "🏛": "fa-landmark",
  "📈": "fa-chart-line",
  "📁": "fa-folder-open",
  "🏠": "fa-house",
  "📅": "fa-calendar-days",
  "📆": "fa-calendar-day",
  "📌": "fa-thumbtack",
  "📥": "fa-download",
  "📄": "fa-file-lines",
  "🖨️": "fa-print",
  "🖨": "fa-print",
  "⚙️": "fa-gear",
  "⚙": "fa-gear",
  "✏️": "fa-pen-to-square",
  "✏": "fa-pen-to-square",
  "🗑️": "fa-trash",
  "🗑": "fa-trash",
  "🔄": "fa-rotate",
  "🔗": "fa-link",
  "◀": "fa-chevron-left",
  "▶": "fa-chevron-right",
  "🍩": "fa-chart-pie",
  "👨‍🎓": "fa-user-graduate",
  "👨‍🏫": "fa-chalkboard-user",
  "👥": "fa-users",
  "👤": "fa-user",
  "🕐": "fa-clock",
  "📭": "fa-inbox",
  "📍": "fa-location-dot",
  "💾": "fa-floppy-disk",
  "✅": "fa-circle-check",
  "⚠️": "fa-triangle-exclamation",
  "⚠": "fa-triangle-exclamation",
  "❌": "fa-circle-xmark",
  "⬜": "fa-square",
  "✕": "fa-xmark",
};

const emojiPattern = new RegExp(
  Object.keys(iconMap)
    .sort((a, b) => b.length - a.length)
    .map((emoji) => emoji.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|"),
  "gu",
);

function replaceEmojiTextNode(node) {
  if (!emojiPattern.test(node.nodeValue)) return;
  emojiPattern.lastIndex = 0;
  const fragment = document.createDocumentFragment();
  let lastIndex = 0;
  for (const match of node.nodeValue.matchAll(emojiPattern)) {
    fragment.append(
      document.createTextNode(node.nodeValue.slice(lastIndex, match.index)),
    );
    const icon = document.createElement("i");
    icon.className = `fa-solid ${iconMap[match[0]]}`;
    icon.setAttribute("aria-hidden", "true");
    fragment.append(icon);
    lastIndex = match.index + match[0].length;
  }
  fragment.append(document.createTextNode(node.nodeValue.slice(lastIndex)));
  node.replaceWith(fragment);
}

function replaceVisibleEmoji(root = document.body) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "TEXTAREA"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(replaceEmojiTextNode);
}

function enableIconReplacement() {
  replaceVisibleEmoji();
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) replaceEmojiTextNode(node);
        else if (node.nodeType === Node.ELEMENT_NODE) replaceVisibleEmoji(node);
      });
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

document.readyState === "loading"
  ? document.addEventListener("DOMContentLoaded", enableIconReplacement)
  : enableIconReplacement();
