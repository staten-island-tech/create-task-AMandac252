async function fetchcat() {
  let cats = [];
  for (let i = 1; i < 67; i++) {
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
  document.getElementById("display").innerHTML = "";
  cats.forEach((cat) => {
    document.getElementsById("display").insertAdjacentHTML(
      "beforeend",

      `<div data-aos="fade-up" class="display-card2">
  <p> cat id number ${cat.CatID}</p>
  <img class="display-sprite" src="${cat.CatImage}" />
  <h4 class="display-name">${cat.CatName}</h4>
  <h5 class="display-type"> Cat type: ${cat.CatType}</h5>`
    );
  });
}

export { fetchcat };
