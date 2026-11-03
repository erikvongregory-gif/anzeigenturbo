(function () {
  // Stripe / payment
  var cfg = window.ANZEIGENTURBO || {};
  var link = cfg.paymentUrl || "";
  var mode = cfg.mode || "test";
  var buyIds = ["stripe-buy", "buy-btn", "top-buy", "cta-buy"];
  var note = document.getElementById("pay-note");

  function wire(btn) {
    if (!btn) return;
    if (link && link.indexOf("http") === 0) {
      btn.href = link;
    } else {
      btn.href = "#";
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Noch kein öffentlicher Payment-Link. Bitte Live-Stripe-Account verbinden.");
      });
    }
  }
  buyIds.forEach(function (id) { wire(document.getElementById(id)); });
  if (note) {
    note.textContent = link && link.indexOf("http") === 0
      ? (mode === "live"
        ? "Live-Checkout · sichere Zahlung über Stripe · Sofort-Download"
        : "Stripe Checkout · Testmodus")
      : "Payment-Link fehlt – bitte Live-Stripe verbinden.";
  }

  // Pack picker — large object + drag row of niches
  var track = document.getElementById("arc-track");
  var sample = document.getElementById("live-sample");
  var shot = document.getElementById("hero-shot");
  var packName = document.getElementById("pack-name");
  var packFact = document.getElementById("pack-fact");
  var items = track ? Array.prototype.slice.call(track.querySelectorAll(".arc-item")) : [];

  function activate(item, scroll) {
    if (!item) return;
    items.forEach(function (el) {
      var on = el === item;
      el.classList.toggle("is-active", on);
      el.setAttribute("aria-selected", on ? "true" : "false");
    });
    document.body.setAttribute("data-pack", item.getAttribute("data-pack") || "voll");
    if (sample) sample.textContent = item.getAttribute("data-sample") || "";
    if (packName) packName.textContent = item.getAttribute("data-name") || "";
    if (packFact) packFact.textContent = item.getAttribute("data-fact") || "";
    if (shot) {
      var src = item.getAttribute("data-img");
      var alt = item.getAttribute("data-alt") || "";
      if (src && shot.getAttribute("src") !== src) {
        shot.setAttribute("src", src);
        shot.setAttribute("alt", alt);
      }
    }
    if (scroll && track) {
      var left = item.offsetLeft - (track.clientWidth - item.offsetWidth) / 2;
      track.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
    }
  }

  if (track && items.length) {
    items.forEach(function (el) {
      el.addEventListener("click", function () { activate(el, true); });
    });
    track.addEventListener("keydown", function (e) {
      var i = items.findIndex(function (el) { return el.classList.contains("is-active"); });
      if (e.key === "ArrowRight" && i < items.length - 1) {
        e.preventDefault();
        items[i + 1].focus();
        activate(items[i + 1], true);
      } else if (e.key === "ArrowLeft" && i > 0) {
        e.preventDefault();
        items[i - 1].focus();
        activate(items[i - 1], true);
      }
    });
  }

  // Reveals
  var targets = document.querySelectorAll("[data-reveal]");
  if (targets.length) {
    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("is-in"); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      }, { rootMargin: "0px 0px -12% 0px", threshold: 0.1 });
      targets.forEach(function (el) { io.observe(el); });
      window.addEventListener("load", function () {
        setTimeout(function () {
          targets.forEach(function (el) {
            var r = el.getBoundingClientRect();
            if (r.top < innerHeight && r.bottom > 0) el.classList.add("is-in");
          });
        }, 2500);
      });
    }
  }

  // Reduced motion: pause video, show poster
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  function syncMotion() {
    document.querySelectorAll(".live-video").forEach(function (v) {
      if (reduce.matches) { v.pause(); v.style.display = "none"; }
      else { v.style.display = ""; v.play().catch(function () {}); }
    });
    document.querySelectorAll(".live-poster").forEach(function (img) {
      img.hidden = !reduce.matches;
      img.style.display = reduce.matches ? "block" : "none";
    });
  }
  syncMotion();
  if (reduce.addEventListener) reduce.addEventListener("change", syncMotion);
})();
