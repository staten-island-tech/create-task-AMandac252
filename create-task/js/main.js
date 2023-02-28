import "../style/style.css";
import { fetchcat } from "../js/cats.js";
import { fetchgoods } from "../js/goods";
import AOS from "aos";
``;
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const DOMSelectors = {
  create: document.querySelector(".cat-btn"),
  shop: document.querySelector(".goods-btn"),
  both: document.querySelector(".both-btn"),
  display: document.getElementById(".display"),
};

DOMSelectors.create.addEventListener("click", function () {
  document.getElementById("display").innerHTML = "";
  fetchcat();
});

DOMSelectors.shop.addEventListener("click", function () {
  document.getElementById("display").innerHTML = "";
  fetchgoods();
});

DOMSelectors.both.addEventListener("click", function () {
  document.getElementById("display").innerHTML = "";
  fetchcat();
  fetchgoods();
});
