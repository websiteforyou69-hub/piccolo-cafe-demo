// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

  navMenu.classList.toggle("mobile-open");

  const icon = menuToggle.querySelector("i");

  if (navMenu.classList.contains("mobile-open")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }

});


// Close mobile menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(link => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("mobile-open");

    const icon = menuToggle.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

  });

});


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.12
  }

);

revealElements.forEach(element => {

  revealObserver.observe(element);

});


// ===============================
// MENU TABS
// ===============================

const tabs = document.querySelectorAll(".tab");
const menuGrid = document.getElementById("menuGrid");

const menuData = {

  coffee: [

    {
      name: "Classic Espresso",
      description: "Rich • Bold • Aromatic",
      price: "₹180",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=85"
    },

    {
      name: "Signature Cappuccino",
      description: "Velvety • Creamy • Smooth",
      price: "₹220",
      image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=85"
    },

    {
      name: "Iced Latte",
      description: "Cold • Creamy • Refreshing",
      price: "₹240",
      image: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=800&q=85"
    },

    {
      name: "Classic Matcha",
      description: "Earthy • Fresh • Creamy",
      price: "₹260",
      image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=85"
    }

  ],

  food: [

    {
      name: "Creamy Pasta",
      description: "Fresh • Creamy • Comforting",
      price: "₹360",
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=85"
    },

    {
      name: "Margherita Pizza",
      description: "Fresh • Cheesy • Italian",
      price: "₹420",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=85"
    },

    {
      name: "Avocado Toast",
      description: "Fresh • Healthy • Crisp",
      price: "₹320",
      image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=800&q=85"
    },

    {
      name: "Cafe Burger",
      description: "Juicy • Crispy • Loaded",
      price: "₹380",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=85"
    }

  ],

  dessert: [

    {
      name: "Chocolate Cake",
      description: "Rich • Soft • Chocolate",
      price: "₹280",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85"
    },

    {
      name: "Tiramisu",
      description: "Coffee • Creamy • Italian",
      price: "₹320",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=85"
    },

    {
      name: "Berry Cheesecake",
      description: "Creamy • Fruity • Fresh",
      price: "₹340",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=85"
    },

    {
      name: "Brownie",
      description: "Warm • Fudgy • Chocolate",
      price: "₹240",
      image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=800&q=85"
    }

  ]

};


// Render menu

function renderMenu(category) {

  menuGrid.innerHTML = "";

  menuData[category].forEach((item, index) => {

    const card = document.createElement("article");

    card.className = "menu-card";

    card.innerHTML = `

      <div class="menu-image">

        <img
          src="${item.image}"
          alt="${item.name}"
          loading="lazy"
        >

      </div>

      <div class="menu-info">

        <div>

          <h3>${item.name}</h3>

          <p>${item.description}</p>

        </div>

        <span>${item.price}</span>

      </div>

    `;

    menuGrid.appendChild(card);

  });

}


// Tab click

tabs.forEach(tab => {

  tab.addEventListener("click", () => {

    tabs.forEach(t => t.classList.remove("active"));

    tab.classList.add("active");

    renderMenu(tab.dataset.category);

  });

});


// ===============================
// IMAGE ERROR FALLBACK
// ===============================

document.addEventListener("error", event => {

  if (event.target.tagName === "IMG") {

    event.target.style.background = "#2b211b";

  }

}, true);


// ===============================
// CURRENT YEAR
// ===============================

const yearElements = document.querySelectorAll(".current-year");

yearElements.forEach(element => {

  element.textContent = new Date().getFullYear();

});
