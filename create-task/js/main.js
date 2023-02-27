import "../style/style.css";
import { fetchcat } from "../js/cats.js";
import AOS from "aos";
``;
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const DOMSelectors = {
  create: document.querySelector(".cat-btn"),
  display: document.getElementById(".display"),
  main: document.querySelector(".gen-btn"),
  history: document.querySelector(".history-btn"),
  window: document.getElementById(".window"),
};

DOMSelectors.create.addEventListener("click", function () {
  fetchcat();
});

DOMSelectors.main.addEventListener("click", function () {
  DOMSelectors.window.insertAdjacentHTML(
    "beforebegin"` <div class="display-card" data-aos="fade-up">
  <h4>
    Neko Atsume: Kitty Collector (Japanese: ねこあつめ, "Cat Collection") is a mobile cat-collecting game developed by
    Hit-Point Co., Ltd. for iOS and Android, released on October 20, 2014.

    This generator will generate all 66 collectable cats and the results can be viewed in the history tab.
  </h4>
</div>`
  );
});
