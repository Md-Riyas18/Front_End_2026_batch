# Rolex-style functionality drop-in

This package is designed to be added to the existing project rather than replacing the existing product UI.

## Add to your existing index.html

Immediately before `</body>`, add:

<script src="js/products.js"></script>
<script src="js/favourites.js"></script>

Your existing `.cards` and `.wishlist-button` elements are detected automatically. Existing SVGs/images remain untouched.

## New pages
- search.html
- location.html
- favourites.html

## Shared files
- js/products.js
- js/favourites.js
- js/search.js
- js/location.js
- css/style.css

## What works
- Header Search / Location / Favourite links are assigned automatically.
- Home-page product search is inserted automatically above the product cards.
- Existing hearts are wired to localStorage.
- Storage key: `rolexFavourites`.
- Header favourite count updates.
- Save/remove toast.
- Favourite state survives refresh.
- Search page has live search and working hearts.
- Favourite page reads localStorage and supports removal.
- Location page has responsive store list, search and no-key map-style locator.

## Important
Keep your current assets and product cards. This package does not contain a replacement index.html because your existing page contains the original SVG/logo/product markup and should remain the base.
