async function fetchcat() {
  let nekos = [];
  for (let i = 1; i < 67; i++) {
    let url = `https://api.neko-atsume.emshea.com/cats/${i}`;
    const response = await fetch(url);

    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const cat = await response.json();
      nekos.push(cat);
      console.log(cat);
    }
  }
  showcats(nekos);
}

function showcats(nekos) {
  console.log("work");
  /* document.getElementByclass("catdisplay").innerHTML = "";
  cat.forEach((neko) => {
    document.getElementById("display").insertAdjacentHTML(
      "beforeend",

      `<div data-aos="fade-up" class="display-card2">
  <p> cat id number ${neko.CatID}</p>
  <img class="display-sprite" src="${neko.CatImage}" />
  <h4 class="display-name">${neko.CatName}</h4>
  <h5 class="display-type"> Cat type: ${neko.CatType}</h5>`
    );
  }); */
}
fetchcat();

export { fetchcat };
