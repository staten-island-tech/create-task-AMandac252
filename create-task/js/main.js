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
};
