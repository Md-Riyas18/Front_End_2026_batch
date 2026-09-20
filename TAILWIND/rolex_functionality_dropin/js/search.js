(function () {
  const R = window.ROLEX;
  function getProducts() {
    const cached = R.collectExistingProducts();
    return cached?.length ? cached : R.FALLBACK_PRODUCTS;
  }
  function heart(active) {
    return `<svg class="w-5 h-5 ${active ? "fill-[#087f4c] text-[#087f4c]" : "fill-none text-[#087f4c]"}" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  }
  function render(query = "") {
    const products = getProducts();
    const q = query.trim().toLowerCase();
    const results = products.filter(p => `${p.name} ${p.description} ${p.reference} ${p.price}`.toLowerCase().includes(q));
    const host = document.getElementById("search-results");
    const empty = document.getElementById("search-no-results");
    host.innerHTML = "";
    empty.classList.toggle("hidden", results.length !== 0);
    results.forEach(p => {
      const article = document.createElement("article");
      article.className = "bg-[#f8f8f8] min-h-[300px] p-6 flex flex-row items-center justify-between";
      article.innerHTML = `<div class="w-1/2 self-stretch flex flex-col items-start justify-center"><button class="search-heart w-8 h-8 flex items-center justify-start" aria-label="Favourite ${p.name}" data-id="${p.id}">${heart(R.isFavourite(p.id))}</button><h3 class="text-[18px] font-bold mt-7 mb-1">${p.name}</h3><p class="text-[14px] text-[#444] max-w-[240px] mb-1">${p.description} ${p.reference ? "Reference " + p.reference : ""}</p><p class="text-[15px]">${p.price}</p></div><div class="w-1/2 flex items-center justify-center"><img src="${p.image}" alt="${p.name}" class="w-[180px] max-h-[230px] object-contain" loading="lazy"></div>`;
      article.querySelector(".search-heart").addEventListener("click", () => {
        const added = R.toggleFavourite(p);
        article.querySelector(".search-heart").innerHTML = heart(added);
        R.updateFavouriteCount();
        window.ROLEX_TOAST?.(added ? "Watch saved" : "Watch removed", added ? "This watch has been added to your favourites." : "This watch has been removed from your favourites.");
      });
      host.appendChild(article);
    });
  }
  document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("search-page-input");
    if (!input) return;
    const params = new URLSearchParams(location.search);
    input.value = params.get("q") || "";
    render(input.value);
    input.focus();
    input.addEventListener("input", e => render(e.target.value));
  });
})();
