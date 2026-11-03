(function () {
  var KEY = "anzeigenturbo_consent";
  var FONT_HREF = "https://api.fontshare.com/v2/css?f[]=clash-grotesk@400,500&display=swap";

  function read() {
    try {
      var raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function write(value) {
    try {
      localStorage.setItem(KEY, JSON.stringify(value));
    } catch (e) { /* ignore quota */ }
  }

  function loadFonts() {
    if (document.getElementById("fontshare-css")) return;
    var pre1 = document.createElement("link");
    pre1.rel = "preconnect";
    pre1.href = "https://api.fontshare.com";
    document.head.appendChild(pre1);
    var pre2 = document.createElement("link");
    pre2.rel = "preconnect";
    pre2.href = "https://cdn.fontshare.com";
    pre2.crossOrigin = "anonymous";
    document.head.appendChild(pre2);
    var link = document.createElement("link");
    link.id = "fontshare-css";
    link.rel = "stylesheet";
    link.href = FONT_HREF;
    document.head.appendChild(link);
  }

  function unloadFonts() {
    var el = document.getElementById("fontshare-css");
    if (el) el.remove();
  }

  function apply(consent) {
    if (consent && consent.external) loadFonts();
    else unloadFonts();
    document.documentElement.setAttribute(
      "data-consent",
      consent ? (consent.external ? "all" : "necessary") : "pending"
    );
  }

  function hideBanner() {
    var banner = document.getElementById("cookie-banner");
    if (banner) banner.hidden = true;
  }

  function showBanner() {
    var banner = document.getElementById("cookie-banner");
    if (banner) banner.hidden = false;
  }

  function accept(all) {
    var consent = {
      necessary: true,
      external: !!all,
      ts: Date.now()
    };
    write(consent);
    apply(consent);
    hideBanner();
  }

  function ensureBanner() {
    if (document.getElementById("cookie-banner")) return;
    var el = document.createElement("div");
    el.id = "cookie-banner";
    el.className = "cookie-banner";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-labelledby", "cookie-title");
    el.setAttribute("aria-describedby", "cookie-text");
    el.innerHTML =
      '<div class="cookie-inner">' +
        '<h2 id="cookie-title">Cookies &amp; externe Inhalte</h2>' +
        '<p id="cookie-text">Notwendig speichern wir nur deine Auswahl. Externe Schriftarten (Fontshare) laden wir erst nach Zustimmung. Details in der <a href="./datenschutz.html">Datenschutzerklärung</a>.</p>' +
        '<div class="cookie-actions">' +
          '<button type="button" class="button ink" data-cookie="necessary">Nur notwendige</button>' +
          '<button type="button" class="button" data-cookie="all">Alle akzeptieren</button>' +
        "</div>" +
      "</div>";
    document.body.appendChild(el);
    el.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-cookie]");
      if (!btn) return;
      accept(btn.getAttribute("data-cookie") === "all");
    });
  }

  function openSettings() {
    ensureBanner();
    showBanner();
  }

  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-cookie-open]")) {
      e.preventDefault();
      openSettings();
    }
  });

  var existing = read();
  ensureBanner();
  if (existing && existing.necessary) {
    apply(existing);
    hideBanner();
  } else {
    apply(null);
    showBanner();
  }
})();
