(() => {
  "use strict";

  /* Full-screen nav overlay */
  const overlay = document.getElementById("overlay");
  const navToggle = document.getElementById("navToggle");
  const overlayClose = document.getElementById("overlayClose");

  const openOverlay = () => {
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    navToggle.setAttribute("aria-expanded", "true");
  };
  const closeOverlay = () => {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    navToggle.setAttribute("aria-expanded", "false");
  };
  navToggle.addEventListener("click", openOverlay);
  overlayClose.addEventListener("click", closeOverlay);
  overlay.querySelectorAll("[data-nav-overlay]").forEach((link) => {
    link.addEventListener("click", closeOverlay);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeOverlay();
  });

  /* Scroll reveal */
  const revealEls = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));

  /* Menu tabs */
  const tabs = document.querySelectorAll(".menu-tab");
  const panels = document.querySelectorAll(".menu-panel");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      panels.forEach((p) => p.classList.remove("is-active"));

      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");
      document.getElementById(`panel-${tab.dataset.tab}`).classList.add("is-active");
    });
  });

  /* Calendar carousel */
  const track = document.getElementById("calendarTrack");
  const prevBtn = document.getElementById("carPrev");
  const nextBtn = document.getElementById("carNext");
  const scrollByCard = (dir) => {
    const card = track.querySelector(".cal-card");
    const amount = card ? card.getBoundingClientRect().width + 26 : 300;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };
  prevBtn.addEventListener("click", () => scrollByCard(-1));
  nextBtn.addEventListener("click", () => scrollByCard(1));

  /* Gallery lightbox */
  const lightbox = document.getElementById("lightbox");
  const lightboxFrame = document.getElementById("lightboxFrame");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");

  document.querySelectorAll(".gallery-tile, .duo-half").forEach((tile) => {
    tile.addEventListener("click", () => {
      const bg = getComputedStyle(tile).backgroundImage;
      lightboxFrame.style.backgroundImage = bg;
      lightboxCaption.textContent = tile.dataset.caption || "";
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });
  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
  };
  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  /* Reservation form (front-end only demo) */
  const isHu = document.documentElement.lang === "hu";
  const form = document.getElementById("reserveForm");
  const status = document.getElementById("reserveStatus");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    status.textContent = isHu
      ? `Köszönjük, ${data.get("name")} — hamarosan e-mailben visszaigazoljuk a(z) ${data.get("guests")} fős asztalt.`
      : `Thanks, ${data.get("name")} — we'll confirm your table for ${data.get("guests")} by email shortly.`;
    form.reset();
  });

  /* Join list form (front-end only demo) */
  const joinForm = document.getElementById("joinForm");
  joinForm.addEventListener("submit", (e) => {
    e.preventDefault();
    joinForm.innerHTML = isHu
      ? '<p style="font-size:0.85rem;color:var(--ink-soft);margin:0;">Feliratkozott.</p>'
      : '<p style="font-size:0.85rem;color:var(--ink-soft);margin:0;">You\'re on the list.</p>';
  });
})();
