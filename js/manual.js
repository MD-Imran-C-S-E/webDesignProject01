
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 250, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});






let writing = 0;
let sentence = "Georgy Georgy";
let writingSpeet = 130;


function typeWriter() {
    if (writing < sentence.length) {
        document.getElementById("typeWriterScript").innerHTML += sentence.charAt(writing); 
        writing ++;
        setTimeout(typeWriter, writingSpeet);
    }
}

addEventListener("DOMContentLoaded", typeWriter)

let message = document.querySelector("#message");
let fullbody = document.querySelector("body");

window.addEventListener("scroll", () => {
    let totalHight = fullbody.clientHeight;
    let innerWebHight = window.innerHeight;
    let scrollyVelu = window.scrollY;

    if (scrollyVelu > innerWebHight) {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }

})

const filterButtons = document.querySelectorAll(".filterBtn .bntPrimary");
const projectItems = document.querySelectorAll(".project .item");


filterButtons.forEach(buttonl => {
buttonl.addEventListener("click", () => {
const filter = buttonl.getAttribute("data-filter");


projectItems.forEach(item => {
const category = item.getAttribute("data-category");

if (filter === category || filter === "all") {
item.style.display = "block";
} else {
item.style.display = "none";
}
});

});
});

function showInitialItems() {
    projectItems.forEach((itemp, index) => {
    if (index < 3) {
    itemp.style.display = "block";
    } else {
    itemp.style.display = "none";
    }
    });
    }
    showInitialItems();



let mode = document.querySelector("header .mode img")
let logo =document.querySelector("header .logo")
let cssRoot = document.querySelector(":root")
let icon1Footer = document.querySelector("#footerSection .icon1 img")
let icon2Footer = document.querySelector("#footerSection .icon2 img")
let icon3Footer = document.querySelector("#footerSection .icon3 img")
let icon4Footer = document.querySelector("#footerSection .icon4 img")

// let filterBtn = document.querySelector("#projectSection .filterBtn")
// let filterItem = document.querySelector("#projectSection .filterItem")

// filterBtn.addEventListener("click", (event) =>{
//     if(event.terget.classList.contains("itemBtn")){
//         console.log(itemBtn);
//     }
//     console.log(filterBtn);
// })

// const filterContainer = document.querySelector(".gallery-filter");
// const galleryItems = document.querySelectorAll(".gallery-item");

// filterContainer.addEventListener("click", (event) =>{
//     if(event.target.classList.contains("filter-item")){
 
//       // deactivate existing active 'filter-item'
//      filterContainer.querySelector(".active").classList.remove("active");
 
//       // activate new 'filter-item'
//      event.target.classList.add("active");
 
//      const filterValue = event.target.getAttribute("data-filter");
 
//      galleryItems.forEach((item) =>{
 
//         if(item.classList.contains(filterValue) || filterValue === 'all'){
//          item.classList.remove("hide");
//           item.classList.add("show");
//         }
 
//         else{
//          item.classList.remove("show");
//          item.classList.add("hide");
//         }
//       });
//     }
//   });


mode.addEventListener("click",()=>{
    if (mode.valu == "0") {
        mode.valu = "1"
        mode.src = "./img/lightOff.png";
        cssRoot.style.setProperty('--background', '#e0e8f6')
        cssRoot.style.setProperty('--text-color', '#050505')
        cssRoot.style.setProperty('--text-colorP', '#1c1e53')
        cssRoot.style.setProperty('--but-text-color', '#484e53')
        cssRoot.style.setProperty('--iconbg-color', '#4fc3f7')
        cssRoot.style.setProperty('--text-gradient-color', 'linear-gradient(91deg, #4fc3f7 0%, #484e53 100%)')
        logo.src="./img/logoLight.png"
        cssRoot.style.setProperty('--iconBoxBG-color', '#ECF4FF')
        cssRoot.style.setProperty('--boxBorde', '1px solid #fff')
        cssRoot.style.setProperty('--iconbg-color', '#bce7fa')
        cssRoot.style.setProperty('--formBtn-text-color', '#fff')
        cssRoot.style.setProperty('--btn-border', '1px solid #585858')

        
        icon1Footer.src="./img/instagramIcon02.png"
        icon2Footer.src="./img/webIcon02.png"
        icon3Footer.src="./img/facebookIcon02.png"
        icon4Footer.src="./img/linkdinIcon02.png"
        
    } else {
        mode.valu = "0"
        mode.src = "./img/lightOn.png";
        cssRoot.style.setProperty('--background', '#1a1a1a')
        cssRoot.style.setProperty('--text-color', '#c1c1c1')
        cssRoot.style.setProperty('--text-colorP', '#e1e1e1')
        cssRoot.style.setProperty('--iconbg-color', '#4fc3f7')
        cssRoot.style.setProperty('--but-text-color', '#fff')
        cssRoot.style.setProperty('--text-gradient-color', 'linear-gradient(91deg, #4fc3f7 0%, #fff 100%)')

        logo.src="./img/logoDrak.png"
        cssRoot.style.setProperty('--iconBoxBG-color', 'linear-gradient(137deg, rgba(28, 28, 28, 0.5) 0%, #050505 100%)')
        cssRoot.style.setProperty('--boxBorde', '1px solid #2b2b2b')
        cssRoot.style.setProperty('--iconbg-color', '#f5f8ff')
        cssRoot.style.setProperty('--formBtn-text-color', '#000')
        cssRoot.style.setProperty('--btn-border', '1px solid #4fc3f7')

        icon1Footer.src="./img/instagramIcon.png"
        icon2Footer.src="./img/webIcon.png"
        icon3Footer.src="./img/facebookIcon.png"
        icon4Footer.src="./img/linkdinIcon.png"
    }
    
});