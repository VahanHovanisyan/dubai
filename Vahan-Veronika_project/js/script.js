var menuBurger = document.querySelector(".menu__burger")
var menuBody = document.querySelector(".menu__body")
var menuTool = document.querySelector(".menu__tool")

menuBurger.addEventListener("click", () => {
   menuBody.classList.toggle("active")
   menuTool.classList.toggle("active")
})

var menuArrows = document.querySelectorAll(".menu__arrow")

for (let index = 0; index < menuArrows.length; index++) {
   var menuArrow = menuArrows[index]

   menuArrow.parentElement.addEventListener("click", () => {
      menuArrow.parentElement.classList.toggle("active")
   })
}

window.addEventListener("resize", mediaQuery)

function mediaQuery() {
   if (window.matchMedia("(min-width:880px)").matches) {
      menuArrow.parentElement.classList.remove("active")
      menuBody.classList.remove("active")
      menuBurger.classList.remove("active")
      menuTool.classList.remove("active")
   } else {
   }
}

//section projects
new Swiper(".projects__slider-block", {
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   touchAngle: 45,
   grabCursor: true,
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageeUpown: true,
   },
   mousewheel: {
      sensitivity: 1,
   },
   slidesPerView: 4,
   watchOwerflow: true,
   spaceBetween: 30,
   slidesPerGroup: 4,
   breakpoints: {
      300: {
         slidesPerView: 1,
         spaceBetween: 10,
         slidesPerGroup: 1,
      },
      480: {
         slidesPerView: 2,
         spaceBetween: 10,
         slidesPerGroup: 2,
         slidesPerColumn: 2,
      },
      767.98: {
         slidesPerView: 4,
         spaceBetween: 15,
         slidesPerGroup: 4,
      },
      1200: {
         slidesPerView: 4,
         spaceBetween: 30,
         slidesPerGroup: 4,
      },
   },
})

// section feedback
new Swiper(".feedback__slider-block", {
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   touchAngle: 45,
   grabCursor: true,
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageeUpown: true,
   },
   mousewheel: {
      sensitivity: 1,
   },
   watchOwerflow: true,
   spaceBetween: 30,
   breakpoints: {
      300: {
         slidesPerView: 1,
         spaceBetween: 10,
         slidesPerGroup: 1,
      },
      767.98: {
         slidesPerView: 2,
         spaceBetween: 15,
         slidesPerGroup: 2,
      },
      1440: {
         slidesPerView: 3,
         spaceBetween: 30,
         slidesPerGroup: 3,
      },
   },
})

// section FAQ
var accordeonBtns = document.querySelectorAll(".faq__item-title")

if (accordeonBtns.length > 0) {
   for (let index = 0; index < accordeonBtns.length; index++) {
      const accordeonBtn = accordeonBtns[index]
      accordeonBtn.addEventListener("click", () => {
         accordeonBtn.parentElement.classList.toggle("active")
      })
   }
} else {
}

// footer list
var footerBtns = document.querySelectorAll(".footer__item-title")

if (footerBtns.length > 0) {
   for (let index = 0; index < footerBtns.length; index++) {
      const footerBtn = footerBtns[index]
      footerBtn.addEventListener("click", () => {
         footerBtn.parentElement.classList.toggle("active")
      })
   }
} else {
}

// mobile table
var tableBtns = document.querySelectorAll(".mobile-table__title")

if (tableBtns.length > 0) {
   for (let index = 0; index < tableBtns.length; index++) {
      const tableBtn = tableBtns[index]
      tableBtn.addEventListener("click", () => {
         tableBtn.parentElement.classList.toggle("active")
      })
   }
} else {
}
