(function () {
  const R = window.ROLEX;
  const GREEN = "#087f4c";

  function toast(title, message) {
    let box = document.getElementById("rolex-toast");
    if (!box) {
      box = document.createElement("div");
      box.id = "rolex-toast";
      box.className = "fixed top-5 right-5 z-[100] w-[320px] max-w-[calc(100vw-40px)] bg-white rounded-[6px] shadow-xl border border-[#e5e5e5] p-5 translate-x-[120%] opacity-0 transition-all duration-300";
      document.body.appendChild(box);
    }
    box.innerHTML = `<div class="border-l-[3px] border-[#087f4c] pl-3"><h3 class="text-[#087f4c] font-bold text-[16px] m-0">${title}</h3><p class="text-[#666] text-[13px] leading-[1.4] mt-1 m-0">${message}</p></div>`;
    requestAnimationFrame(() => box.classList.remove("translate-x-[120%]", "opacity-0"));
    clearTimeout(box._timer);
    box._timer = setTimeout(() => box.classList.add("translate-x-[120%]", "opacity-0"), 3000);
  }

  function heartSVG(active) {
    return `<svg class="w-[17px] h-[17px] transition-colors ${active ? "fill-[#087f4c] text-[#087f4c]" : "fill-none text-[#087f4c]"}" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  }

  function bindHeart(button, product) {
    button.dataset.productId = product.id;
    const sync = () => {
      const active = R.isFavourite(product.id);
      button.innerHTML = heartSVG(active);
      button.setAttribute("aria-pressed", String(active));
      button.setAttribute("aria-label", active ? `${product.name} - Remove from favourites` : `${product.name} - Add to favourites`);
    };
    sync();
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const added = R.toggleFavourite(product);
      sync();
      R.updateFavouriteCount();
      toast(added ? "Watch saved" : "Watch removed",
        added ? "This watch has been added to your favourites." : "This watch has been removed from your favourites.");
      if (location.pathname.endsWith("favourites.html")) renderFavourites();
    });
  }

  function decorateExistingCards() {
    const products = R.collectExistingProducts();
    const cards = [...document.querySelectorAll(".cards")].filter(c => c.querySelector("img") && c.querySelector(".wishlist-button, button[aria-label*='wishlist']"));
    cards.forEach((card, i) => {
      const product = products[i];
      if (!product) return;
      let button = card.querySelector(".wishlist-button, button[aria-label*='wishlist']");
      button.classList.add("!cursor-pointer");
      bindHeart(button, product);
    });
  }

  function renderFavourites() {
    const host = document.getElementById("favourites-grid");
    const empty = document.getElementById("favourites-empty");
    if (!host) return;
    const items = R.readFavourites();
    host.innerHTML = "";
    empty?.classList.toggle("hidden", items.length !== 0);
    if (!items.length) return;
    items.forEach(product => {
      const card = document.createElement("article");
      card.className = "bg-[#f8f8f8] min-h-[330px] p-[25px] flex flex-col justify-between relative";
      card.innerHTML = `
        <button type="button" class="fav-remove absolute top-5 left-5 z-10 w-8 h-8 flex items-center justify-center" aria-label="Remove ${product.name} from favourites">
          ${heartSVG(true)}
        </button>
        <div class="flex-1 flex items-center justify-center pt-8">
          <img src="${product.image}" alt="${product.name}" class="w-[210px] max-h-[220px] object-contain" loading="lazy">
        </div>
        <div class="pt-4">
          <h3 class="text-[18px] font-bold text-[#111] m-0 mb-1">${product.name}</h3>
          <p class="text-[14px] text-[#555] m-0 mb-1">${product.description}${product.reference ? " Reference " + product.reference : ""}</p>
          <p class="text-[15px] text-[#333] m-0">${product.price}</p>
        </div>`;
      card.querySelector(".fav-remove").addEventListener("click", () => {
        R.writeFavourites(R.readFavourites().filter(p => p.id !== product.id));
        toast("Watch removed", "This watch has been removed from your favourites.");
        renderFavourites();
        R.updateFavouriteCount();
      });
      host.appendChild(card);
    });
  }

  function setupHeader() {
    document.querySelectorAll("a").forEach(a => {
      const text = a.textContent.trim().toLowerCase();
      if (text === "search") a.href = "search.html";
      if (text === "location") a.href = "location.html";
      if (text === "favourite" || text === "favourites") {
        a.href = "favourites.html";
        if (!a.querySelector("[data-favourite-count]")) {
          const badge = document.createElement("span");
          badge.dataset.favouriteCount = "";
          badge.className = "hidden ml-1 min-w-[17px] h-[17px] px-1 rounded-full bg-[#087f4c] text-white text-[10px] leading-[17px] text-center align-middle";
          a.appendChild(badge);
        }
      }
    });
    R.updateFavouriteCount();
  }

  function setupHomeSearch() {
    if (!document.querySelector(".cards")) return;
    if (document.getElementById("home-product-search")) return;
    const section = document.querySelector("section");
    const grid = [...document.querySelectorAll(".cards")].filter(c => c.querySelector("img") && c.querySelector(".wishlist-button"));
    if (!section || !grid.length) return;
    const wrapper = document.createElement("div");
    wrapper.className = "max-w-[1100px] mx-auto px-5 mb-8 col-span-full";
    wrapper.innerHTML = `<div class="relative max-w-[620px] mx-auto"><svg class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#777]" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="m20 20-4-4" stroke="currentColor" stroke-width="2"/></svg><input id="home-product-search" type="search" placeholder="Search watches and models" class="w-full h-[48px] pl-11 pr-4 rounded-full bg-[#f7f7f7] border border-[#e5e5e5] outline-none focus:border-[#087f4c] text-[14px]"></div><p id="home-no-results" class="hidden text-center text-[#555] mt-5">No results found</p>`;
    const title = section.querySelector("h1")?.parentElement || section.firstElementChild;
    title?.after(wrapper);
    const input = wrapper.querySelector("input");
    const noResults = wrapper.querySelector("#home-no-results");
    const products = R.collectExistingProducts();
    const filter = () => {
      const q = input.value.trim().toLowerCase();
      let count = 0;
      grid.forEach((card, i) => {
        const p = products[i];
        const hay = p ? `${p.name} ${p.description} ${p.reference} ${p.price}`.toLowerCase() : card.textContent.toLowerCase();
        const show = !q || hay.includes(q);
        card.classList.toggle("hidden", !show);
        if (show) count++;
      });
      noResults.classList.toggle("hidden", count !== 0);
    };
    input.addEventListener("input", filter);
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupHeader();
    if (location.pathname.endsWith("favourites.html")) renderFavourites();
    else decorateExistingCards();
    setupHomeSearch();
  });
  window.addEventListener("rolex:favourites", () => { R.updateFavouriteCount(); if (location.pathname.endsWith("favourites.html")) renderFavourites(); });
  window.addEventListener("storage", () => { R.updateFavouriteCount(); if (location.pathname.endsWith("favourites.html")) renderFavourites(); decorateExistingCards(); });
  window.ROLEX_TOAST = toast;
  window.ROLEX_RENDER_FAVOURITES = renderFavourites;
})();
