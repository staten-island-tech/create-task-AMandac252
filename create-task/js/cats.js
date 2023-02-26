async function fetchcat() {
  let cats = [];
  for (let i = 1; i < 2; i++) {
    let url = `https://api.neko-atsume.emshea.com/cats/${i}`;
    const response = await fetch(url);

    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const cat = await response.json();
      cats.push(cat);
    }
  }
  showcats(cats);
}

function showcats(cats) {
  // document.getElementById("display").innerHTML = "";
  cats.forEach((cat) => {
    document.getElementById("display").insertAdjacentHTML(
      "beforeend",

      `<div data-aos="fade-up" class="display-card2">
  <h4> ID: ${cat.CatId}</h4>
  <div class="bg"> <img class="display-sprite" src="${cat.CatImage}" /></div>
  <h5 class="display-name">${cat.CatName}</h5>
  <h6>${cat.CatDescription}, Memento: ${cat.Memento}</h6>
  <h7 class="display-type"> Cat type: ${cat.CatType}</h7>`
    );
  });
}

export { fetchcat };
