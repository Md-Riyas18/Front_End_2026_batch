/*
  Shared product data + helpers.
  The existing product cards remain the source of truth on index.html.
  This file also contains a fallback catalogue so search/favourites work
  even when search.html is opened before index.html.
*/
const FALLBACK_PRODUCTS = [
  {id:"land-dweller-40",name:"Land-Dweller 40",description:"Oyster, 40 mm, Oystersteel and white gold",reference:"127334",price:"$1500",image:"https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/upright-c/m127334-0001"},
  {id:"day-date-40",name:"Day-Date 40",description:"Oyster, 40 mm, platinum",reference:"228236",price:"$1300",image:"https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/upright-c/m228236-0018"},
  {id:"cosmograph-daytona-126506",name:"Cosmograph Daytona",description:"Oyster, 40 mm, platinum",reference:"126506",price:"$1700",image:"https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/upright-c/m126506-0001"},
  {id:"explorer-40",name:"Explorer 40",description:"Oyster, 40 mm, Oystersteel",reference:"224270",price:"$1000",image:"https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/upright-c/m224270-0001"},
  {id:"explorer-ii",name:"Explorer II",description:"Oyster, 42 mm, Oystersteel",reference:"226570",price:"$2000",image:"https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/upright-c/m226570-0001"},
  {id:"gmt-master-ii",name:"GMT-Master II",description:"Oyster, 40 mm, Oystersteel",reference:"126710BLNR",price:"$1100",image:"https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/upright-c/m126710blnr-0003"},
  {id:"air-king",name:"Air-King",description:"Oyster, 40 mm, Oystersteel",reference:"126900",price:"$2500",image:"https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/upright-c/m126900-0001"},
  {id:"datejust-41",name:"Datejust 41",description:"Oyster, 41 mm, Oystersteel and white gold",reference:"126334",price:"$1250",image:"https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/upright-c/m126334-0033"},
  {id:"submariner-date",name:"Submariner Date",description:"Oyster, 41 mm, Oystersteel and yellow gold",reference:"126613LB",price:"$1800",image:"https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/upright-c/m126613lb-0002"},
  {id:"sky-dweller",name:"Sky-Dweller",description:"Oyster, 42 mm, Everose gold",reference:"336935",price:"$1200",image:"https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/upright-c/m336935-0008"},
  {id:"yacht-master-42",name:"Yacht-Master 42",description:"Oyster, 42 mm, yellow gold",reference:"226658",price:"$1500",image:"https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/upright-c/m226658-0001"},
  {id:"yacht-master-ii",name:"Yacht-Master II",description:"Oyster, 44 mm, Oystersteel",reference:"126680",price:"$1900",image:"https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/upright-c/m126680-0001"},
  {id:"oyster-perpetual-36",name:"Oyster Perpetual 36",description:"Oyster, 36 mm, Oystersteel",reference:"126000",price:"$1200",image:"https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/upright-c/m126000-0016"},
  {id:"lady-datejust",name:"Lady-Datejust",description:"Oyster, 28 mm, Oystersteel and yellow gold",reference:"279173",price:"$1500",image:"https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/upright-c/m279173-0007"},
  {id:"sea-dweller",name:"Sea-Dweller",description:"Oyster, 43 mm, Oystersteel and yellow gold",reference:"126603",price:"$1900",image:"https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/upright-c/m126603-0001"},
  {id:"1908-gold",name:"1908 Gold",description:"Oyster, 39 mm, 18 ct gold",reference:"52508",price:"$2600",image:"https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/upright-c/m52508-0006"}
];

const ROLEX_STORAGE = "rolexFavourites";
const ROLEX_PRODUCTS_CACHE = "rolexProducts";

function slugify(value) {
  return String(value || "").toLowerCase().trim()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function readFavourites() {
  try { return JSON.parse(localStorage.getItem(ROLEX_STORAGE)) || []; }
  catch { return []; }
}
function writeFavourites(items) {
  localStorage.setItem(ROLEX_STORAGE, JSON.stringify(items));
  window.dispatchEvent(new Event("rolex:favourites"));
}
function isFavourite(id) {
  return readFavourites().some(p => p.id === id);
}
function toggleFavourite(product) {
  const items = readFavourites();
  const exists = items.some(p => p.id === product.id);
  const next = exists ? items.filter(p => p.id !== product.id) : [...items, product];
  writeFavourites(next);
  return !exists;
}
function updateFavouriteCount() {
  document.querySelectorAll("[data-favourite-count]").forEach(el => {
    const count = readFavourites().length;
    el.textContent = count;
    el.classList.toggle("hidden", count === 0);
  });
}

function productFromCard(card, index) {
  const button = card.querySelector(".wishlist-button, button[aria-label*='wishlist']");
  const ps = card.querySelectorAll("p");
  const name = (ps[0]?.textContent || button?.getAttribute("aria-label") || `Watch ${index+1}`).trim();
  const description = (ps[1]?.textContent || "").trim();
  const price = (ps[2]?.textContent || "").trim();
  const image = card.querySelector("img")?.src || "";
  const refMatch = description.match(/Reference\s+([A-Za-z0-9-]+)/i);
  const reference = refMatch ? refMatch[1] : "";
  const id = slugify(name + (reference ? "-" + reference : "-" + index));
  return {id,name,description,reference,price,image};
}

function collectExistingProducts() {
  const cards = [...document.querySelectorAll(".cards")].filter(card =>
    card.querySelector(".wishlist-button, button[aria-label*='wishlist']") &&
    card.querySelector("img")
  );
  const found = cards.map(productFromCard);
  const unique = [];
  const ids = new Set();
  found.forEach(p => { if (!ids.has(p.id)) { ids.add(p.id); unique.push(p); } });
  if (unique.length) {
    localStorage.setItem(ROLEX_PRODUCTS_CACHE, JSON.stringify(unique));
    return unique;
  }
  try {
    const cached = JSON.parse(localStorage.getItem(ROLEX_PRODUCTS_CACHE));
    if (Array.isArray(cached) && cached.length) return cached;
  } catch {}
  return FALLBACK_PRODUCTS;
}

window.ROLEX = {
  FALLBACK_PRODUCTS, ROLEX_STORAGE, ROLEX_PRODUCTS_CACHE,
  readFavourites, writeFavourites, isFavourite, toggleFavourite,
  updateFavouriteCount, collectExistingProducts, slugify
};
