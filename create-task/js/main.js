import "../style/style.css";
import { fetchcat } from "../js/cats.js";
import AOS from "aos";
``;
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const DOMSelectors = {
  display: document.querySelector(".display"),
  cats: document.querySelector("cats"),
  // mainbtn: document.querySelector(".home-btn"),
  // history: document.querySelector(".history-btn"),
};

// DOMSelectors.mainbtn.addEventListener("click", function () {
//   catintro();
// });

// DOMSelectors.history.addEventListener("click", function () {
//   cathistory();
// });

// function catintro() {
//   DOMSelectors.display.innerHTML = "";

//   DOMSelectors.maininfo.insertAdjacentHTML(
//     "beforeend",

//     `<div data-aos="fade-up" class="display-card">
//       <h3 class="info">Welcome to the Map </h3>
//       <p>These are all the current locations. </p>
//     </div>`
//   );
//   fetchcat();
// }

// function cathistory() {
//   DOMSelectors.display.innerHTML = "";

//   DOMSelectors.maininfo.insertAdjacentHTML(
//     "beforeend",

//     `<div data-aos="fade-up" class="display-card">
//       <h3 class="info">Welcome to the History </h3>
//     </div>`
//   );
//   fetchhistory();
// }
