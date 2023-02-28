async function fetchcat() {
  let cats = [];
  let x = Math.floor(Math.random() * 67);
  let url = `https://api.neko-atsume.emshea.com/cats/${x}`;
  const response = await fetch(url);

  if (response.status < 200 || response.status > 299) {
    console.log(response.status);
    throw error(response);
  } else {
    const cat = await response.json();
    cats.push(cat);
    console.log(cat);
  }
  showcats(cats);
}

function showcats(cats) {
  cats.forEach((cat) => {
    document.getElementById("display").insertAdjacentHTML(
      "beforeend",

      `<div data-aos="fade-up" class="card">
      <div data-aos="fade-up" class="display-card2">
  <h4> ID: ${cat.CatId}</h4>
  <div class="bg"> <img class="display-sprite" src="${cat.CatImage}" /></div>
  <h5 class="display-name">${cat.CatName}</h5>
  <h5>Description: ${cat.CatDescription}</h5>
  <h5>Memento: ${cat.Memento}</h5>
  <h5 class="display-type"> Cat type: ${cat.CatType}</h5></div>
  <h5 class="display-type"> Power Level: ${cat.CatPowerLevel}</h5></div>
  `
    );
  });
}

export { fetchcat };
