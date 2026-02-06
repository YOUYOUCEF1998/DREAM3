/* ============================================
   DREAM Streetwear Shop - Pure JavaScript
   ============================================ */

// Product Data - Using image paths for product visuals
// To add custom links: set the "link" property to your URL (e.g., link: "https://example.com")
// Leave link empty or omit it to use the default product page
const products = [
  { id: 1, slug: "studio-workwear-jacket-black", emoji: "Y4.jpeg", hoverEmoji: "YY.jpeg", name: "STUSSY HOODIE", price: "3,500.00", badge: "NEW IN", link: "drmersclub.com", colors: [{ name: "Black", color: "#1a1a1a" }, { name: "Beige", color: "#d4c5b0" }, { name: "White", color: "#ffffff" }], sizes: ["XS", "S", "M", "L", "XL", "XXL"], description: "Premium workwear jacket crafted for everyday style and durability.", details: ["100% Cotton twill", "Relaxed fit", "Button front closure", "Multiple pockets"] },

  { id: 2, slug: "studio-workwear-jacket-pink", emoji: "NN.jpg", hoverEmoji: "NNNN.jpeg", name: "JAPAN LETTERSHOODIE", price: "3500.00", badge: "NEW IN", link: "drmersclub.com", colors: [{ name: "Black", color: "#1a1a1a" }, { name: "Beige", color: "#d4c5b0" }, { name: "White", color: "#ffffff" }], sizes: ["XS", "S", "M", "L", "XL", "XXL"], description: "Premium workwear jacket in a soft blush pink colorway.", details: ["100% Cotton twill", "Relaxed fit", "Button front closure", "Multiple pockets"] },

  { id: 3, slug: "graffiti-flower-hoodie-black", emoji: "BBB.png", hoverEmoji: "BBBB.JPEG", name: "AMAZIGH HOODIE", price: "3,500.00", badge: "NEW IN", link: "drmersclub.com", colors: [{ name: "Black", color: "#1a1a1a" }, { name: "Beige", color: "#d4c5b0" }, { name: "White", color: "#ffffff" }], sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"], description: "Unique graffiti-style hoodie with floral artwork.", details: ["80% Cotton, 20% Polyester", "Oversized fit", "Kangaroo pocket", "Ribbed cuffs and hem"] },

  { id: 4, slug: "everyday-baggy-jeans-grey", emoji: "DD.jpg", hoverEmoji: "D2.jpeg", name: "ISLAMIC HOODIE", price: "3,500.00", badge: "NEW IN", link: "drmersclub.com", colors: [{ name: "Black", color: "#1a1a1a" }, { name: "Beige", color: "#d4c5b0" }, { name: "White", color: "#ffffff" }], sizes: ["28", "30", "32", "34", "36", "38"], description: "Classic baggy jeans for the ultimate streetwear look.", details: ["100% Cotton denim", "Baggy fit", "5-pocket styling", "Button and zip closure"] },

  { id: 5, slug: "urban-cargo-pants-olive", emoji: "EE.jpg", hoverEmoji: "XXXX.png", name: "Calligraphic Edge Hoodie", price: "3500.00", badge: "BESTSELLER", link: "drmersclub.com", colors: [{ name: "Olive", color: "#556b2f" }, { name: "Black", color: "#1a1a1a" }], sizes: ["28", "30", "32", "34", "36"], description: "Military-inspired cargo pants with multiple utility pockets.", details: ["100% Cotton ripstop", "Relaxed fit", "6 pockets", "Adjustable waist"] },

  { id: 6, slug: "classic-oversized-tee-white", emoji: "FF.jpg", hoverEmoji: "XXXXX.jpeg", name: "Graffiti Noir Hoodie", price: "3,500.00", link: "drmersclub.com", colors: [{ name: "White", color: "#ffffff" }, { name: "Black", color: "#1a1a1a" }, { name: "Grey", color: "#808080" }], sizes: ["S", "M", "L", "XL", "XXL"], description: "Essential oversized tee for everyday comfort.", details: ["100% Cotton", "Oversized fit", "Crew neck", "Drop shoulders"] },

  { id: 7, slug: "vintage-wash-hoodie-grey", emoji: "GGG.jpg", hoverEmoji: "G.png", name: "Calligraphic HOODIE VOL2", price: "3500.00", badge: "LIMITED", link: "drmersclub.com", colors: [{ name: "Grey", color: "#808080" }, { name: "Black", color: "#1a1a1a" }], sizes: ["S", "M", "L", "XL", "XXL"], description: "Vintage-inspired hoodie with a unique wash effect.", details: ["80% Cotton, 20% Polyester", "Relaxed fit", "Kangaroo pocket", "Drawstring hood"] },

  { id: 8, slug: "street-bomber-jacket-navy", emoji: "H.jpg", hoverEmoji: "HHH.jpg", name: "Calligraphic HOODIE VOL3", price: "3500.00", badge: "NEW IN", link: "drmersclub.com", colors: [{ name: "Navy", color: "#1a1a3e" }, { name: "Black", color: "#1a1a1a" }], sizes: ["S", "M", "L", "XL"], description: "Classic bomber jacket with modern streetwear details.", details: ["Nylon shell", "Polyester lining", "Ribbed cuffs", "Zip front"] },

  { id: 9, slug: "distressed-denim-jacket", emoji: "I.jpg", hoverEmoji: "I3.jpeg", name: "CHINESSE HOODIE", price: "3500.00", link: "drmersclub.com", colors: [{ name: "Blue", color: "#4169e1" }, { name: "Black", color: "#1a1a1a" }], sizes: ["XS", "S", "M", "L", "XL"], description: "Authentic distressed denim jacket with vintage appeal.", details: ["100% Cotton denim", "Regular fit", "Button closure", "Distressed details"] },

  { id: 10, slug: "essential-sweatpants-black", emoji: "C.jpg", hoverEmoji: "C2.jpg", name: "Good Day Good Vibes HOODIE", price: "3500.00", badge: "BESTSELLER", link: "drmersclub.com", colors: [{ name: "Black", color: "#1a1a1a" }, { name: "Grey", color: "#808080" }], sizes: ["S", "M", "L", "XL", "XXL"], description: "Comfortable sweatpants for lounging or street style.", details: ["80% Cotton, 20% Polyester", "Relaxed fit", "Elastic waist", "Ribbed cuffs"] },

  { id: 11, slug: "graphic-print-tee-skull", emoji: "J2.jpeg", hoverEmoji: "J2.png", name: "GRAPHIC PRINT TEE - SKULL", price: "3500.00", badge: "NEW IN", link: "", colors: [{ name: "Black", color: "#1a1a1a" }, { name: "White", color: "#ffffff" }], sizes: ["S", "M", "L", "XL"], description: "Bold graphic tee with exclusive skull artwork.", details: ["100% Cotton", "Regular fit", "Screen printed", "Crew neck"] },


  { id: 12, slug: "premium-zip-hoodie", emoji: "KKKKK.png", hoverEmoji: "KKKK.png", name: "ANCIENT EGYPT HOODIE", price: "3,500.00", link: "", colors: [{ name: "Black", color: "#1a1a1a" }, { name: "Cream", color: "#fffdd0" }], sizes: ["S", "M", "L", "XL", "XXL"], description: "Premium quality zip-up hoodie for layering.", details: ["100% Cotton fleece", "Regular fit", "Full zip", "Split kangaroo pocket"] },

  { id: 13, slug: "wide-leg-trousers-beige", emoji: "LLLL.jpeg", hoverEmoji: "LLLLL.jpg", name: "flames", price: "3500.00", badge: "LIMITED", link: "", colors: [{ name: "Beige", color: "#d4c5b0" }, { name: "Black", color: "#1a1a1a" }], sizes: ["28", "30", "32", "34", "36"], description: "Elegant wide-leg trousers for a sophisticated look.", details: ["Cotton blend", "High waist", "Wide leg", "Side pockets"] },

  { id: 14, slug: "tech-fleece-shorts", emoji: "MMMMM.png", hoverEmoji: "MMMM.jpg", name: "GRAFFITI HOODIE", price: "3500.00", link: "", colors: [{ name: "Black", color: "#1a1a1a" }, { name: "Grey", color: "#808080" }], sizes: ["S", "M", "L", "XL"], description: "Technical fleece shorts with zip pockets.", details: ["Tech fleece fabric", "Regular fit", "Zip pockets", "Elastic waist"] },

  { id: 15, slug: "cropped-varsity-jacket", emoji: "O.jpg", hoverEmoji: "O3.jpg", name: "MR ROBOT HOODIE", price: "35,00.00", badge: "NEW IN", link: "", colors: [{ name: "Black", color: "#1a1a1a" }, { name: "Red", color: "#8b0000" }], sizes: ["XS", "S", "M", "L"], description: "Retro-inspired cropped varsity jacket.", details: ["Wool blend body", "Leather sleeves", "Snap buttons", "Ribbed trim"] },

  { id: 16, slug: "utility-vest-khaki", emoji: "PPP.jpeg", hoverEmoji: "PPPP.png", name: "NIKE  HOODIE", price: "3,500.00", link: "", colors: [{ name: "Khaki", color: "#c3b091" }, { name: "Black", color: "#1a1a1a" }], sizes: ["S", "M", "L", "XL"], description: "Functional utility vest with multiple pockets.", details: ["Cotton canvas", "Multiple pockets", "Zip front", "Adjustable straps"] },

  { id: 17, slug: "longline-coat-camel", emoji: "RR.jpg", hoverEmoji: "RRRR.jpg", name: "OLD ENGLISH LETTERS HOODIE", price: "35,00.00", badge: "PREMIUM", link: "", colors: [{ name: "Camel", color: "#c19a6b" }, { name: "Black", color: "#1a1a1a" }], sizes: ["S", "M", "L", "XL"], description: "Luxurious longline coat for cold weather.", details: ["Wool blend", "Relaxed fit", "Double-breasted", "Side pockets"] },

  { id: 18, slug: "mesh-basketball-shorts", emoji: "S.png", hoverEmoji: "SS.png", name: "FROM THE RIVER TO THE SEA", price: "3,500.00", link: "", colors: [{ name: "Black", color: "#1a1a1a" }, { name: "White", color: "#ffffff" }, { name: "Red", color: "#8b0000" }], sizes: ["S", "M", "L", "XL", "XXL"], description: "Breathable mesh shorts for sports and street.", details: ["100% Polyester mesh", "Relaxed fit", "Elastic waist", "Side pockets"] },

  { id: 19, slug: "heavyweight-crewneck", emoji: "TTT.png", hoverEmoji: "T.png", name: "PIXEL HOODIE", price: "3,500.00", badge: "BESTSELLER", link: "", colors: [{ name: "Black", color: "#1a1a1a" }, { name: "Grey", color: "#808080" }, { name: "Navy", color: "#1a1a3e" }], sizes: ["S", "M", "L", "XL", "XXL"], description: "Premium heavyweight crewneck sweatshirt.", details: ["400gsm Cotton", "Relaxed fit", "Ribbed trim", "Boxy silhouette"] },

  { id: 20, slug: "slim-fit-chinos-tan", emoji: "UUUU.png", hoverEmoji: "U6.png", name: "RUSSIAN CALLIGRAPHIC HOODIE", price: "35,00.00", link: "", colors: [{ name: "Tan", color: "#d2b48c" }, { name: "Black", color: "#1a1a1a" }, { name: "Navy", color: "#1a1a3e" }], sizes: ["28", "30", "32", "34", "36", "38"], description: "Classic slim-fit chinos for versatile styling.", details: ["98% Cotton, 2% Elastane", "Slim fit", "Flat front", "Belt loops"] },

  { id: 21, slug: "puffer-jacket-black", emoji: "VV.jpg", hoverEmoji: "VVV.jpeg", name: "VIKING CALLIGRAPHIC HOODIE", price: "35,00.00", badge: "NEW IN", link: "", colors: [{ name: "Black", color: "#1a1a1a" }, { name: "Silver", color: "#c0c0c0" }], sizes: ["S", "M", "L", "XL"], description: "Warm puffer jacket for winter streetwear.", details: ["Nylon shell", "Down fill", "Stand collar", "Zip closure"] },

  { id: 22, slug: "relaxed-linen-shirt", emoji: "bone.jpg", hoverEmoji: "bone2.jpg", name: "SKELETON HOODIE", price: "3600.00", link: "", colors: [{ name: "White", color: "#ffffff" }, { name: "Beige", color: "#d4c5b0" }, { name: "Black", color: "#1a1a1a" }], sizes: ["S", "M", "L", "XL", "XXL"], description: "Breezy linen shirt for summer days.", details: ["100% Linen", "Relaxed fit", "Button front", "Camp collar"] }

];

// ============================================
// Welcome Overlay
// ============================================
function initWelcomeOverlay() {
  const overlay = document.getElementById("welcome-overlay");
  const btn = document.getElementById("welcome-btn");

  if (!overlay || !btn) return;

  const hasSeenWelcome = sessionStorage.getItem("hasSeenWelcome");
  if (hasSeenWelcome) {
    overlay.classList.add("hidden");
    return;
  }

  btn.addEventListener("click", function () {
    sessionStorage.setItem("hasSeenWelcome", "true");
    btn.classList.add("fade-out");
    setTimeout(function () {
      overlay.classList.add("fade-out");
      setTimeout(function () {
        overlay.classList.add("hidden");
      }, 500);
    }, 300);
  });
}

// ============================================
// Product Grid
// ============================================
function renderProducts() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  products.forEach(function (product) {
    const card = document.createElement("a");
    if (product.link && product.link.trim() !== "") {
      card.href = product.link;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    } else {
      card.href = "product.html?slug=" + product.slug;
    }
    card.className = "product-card";

    let colorsHTML = "";
    if (product.colors && product.colors.length > 0) {
      colorsHTML = '<div class="product-colors">';
      product.colors.forEach(function (variant) {
        colorsHTML += `<button class="color-swatch" style="background-color: ${variant.color}" aria-label="Select ${variant.name}"></button>`;
      });
      colorsHTML += "</div>";
    }

    let badgeHTML = "";
    if (product.badge) {
      badgeHTML = `<span class="product-badge">${product.badge}</span>`;
    }

    // *** FIX: Use an <img> tag for the product image ***
    card.innerHTML = `
      <div class="product-image-container">
        ${badgeHTML}
        <img src="${product.emoji}" alt="${product.name}" class="product-image">
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">DA ${product.price}</p>
        ${colorsHTML}
      </div>`;

    // *** FIX: Add events to the card to swap the image src ***
    const imgEl = card.querySelector('.product-image');
    const originalSrc = product.emoji;
    const hoverSrc = product.hoverEmoji || originalSrc;

    // Mouse events for desktop
    card.addEventListener('mouseenter', () => {
      imgEl.src = hoverSrc;
    });
    card.addEventListener('mouseleave', () => {
      imgEl.src = originalSrc;
    });

    // Touch events for mobile (approximates hover)
    card.addEventListener('touchstart', (e) => {
      imgEl.src = hoverSrc;
    }, { passive: true });
    card.addEventListener('touchend', (e) => {
      imgEl.src = originalSrc;
    }, { passive: true });
    
    grid.appendChild(card);
  });

  initScrollAnimations();
}

// ============================================
// Scroll Animations (Intersection Observer)
// ============================================
function initScrollAnimations() {
  const cards = document.querySelectorAll(".product-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  cards.forEach((card) => observer.observe(card));
}

// ============================================
// Footer Accordions
// ============================================
function initAccordions() {
  const buttons = document.querySelectorAll(".accordion-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const content = document.getElementById(targetId);
      const icon = btn.querySelector(".accordion-icon");
      const isOpen = content.classList.contains("open");

      document.querySelectorAll(".accordion-content").forEach((acc) => acc.classList.remove("open"));
      document.querySelectorAll(".accordion-icon").forEach((ic) => (ic.textContent = "+"));

      if (!isOpen) {
        content.classList.add("open");
        icon.textContent = "−";
      }
    });
  });
}

// ============================================
// Product Detail Page
// ============================================
function initProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get("slug");
  if (!slug) return;

  const product = products.find((p) => p.slug === slug);
  if (!product) {
    window.location.href = "index.html";
    return;
  }

  document.title = `${product.name} - DREAM`;

  const titleEl = document.getElementById("product-title");
  const priceEl = document.getElementById("product-price");
  const descEl = document.getElementById("product-description");
  const mainImageContainer = document.querySelector(".product-main-image"); // Changed selector
  const sizesEl = document.getElementById("size-options");
  const detailsEl = document.getElementById("product-details");

  if (titleEl) titleEl.textContent = product.name;
  if (priceEl) priceEl.textContent = `DA ${product.price}`;
  if (descEl) descEl.textContent = product.description;

  // *** FIX: Insert an <img> tag into the container ***
  if (mainImageContainer) {
    mainImageContainer.innerHTML = `<img src="${product.emoji}" alt="${product.name}" class="product-emoji-large">`;
  }

  if (sizesEl) {
    product.sizes.forEach((size) => {
      const btn = document.createElement("button");
      btn.className = "size-btn";
      btn.textContent = size;
      btn.addEventListener("click", () => {
        document.querySelectorAll(".size-btn").forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
      });
      sizesEl.appendChild(btn);
    });
  }

  if (detailsEl) {
    product.details.forEach((detail) => {
      const li = document.createElement("li");
      li.textContent = detail;
      detailsEl.appendChild(li);
    });
  }
}

// ============================================
// Initialize Everything
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  initWelcomeOverlay();
  renderProducts();
  initAccordions();
  initProductDetail();
});
