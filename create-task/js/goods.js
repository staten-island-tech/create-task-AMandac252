async function fetchgoods() {
  let goods = [];
  let x = Math.floor(Math.random() * 67);
  let url = `https://api.neko-atsume.emshea.com/goodies/${x}`;
  const response = await fetch(url);

  if (response.status < 200 || response.status > 299) {
    console.log(response.status);
    throw error(response);
  } else {
    const goodies = await response.json();
    goods.push(goodies);
    console.log(goodies);
  }
  showgoods(goods);
}

function showgoods(goods) {
  goods.forEach((goodies) => {
    document.getElementById("display").insertAdjacentHTML(
      "beforeend",

      `<div data-aos="fade-up" class="card">
      <div data-aos="fade-up" class="display-card2">
  <h4> ID: ${goodies.GoodyId}</h4>
  <div class="bg"> <img class="display-sprite" src="${goodies.GoodyImage}" /></div>
  <h5 class="display-name">${goodies.GoodyName}</h5>
  <h5>Description: ${goodies.GoodyDescription}</h5>
  <h5>Price: ${goodies.PriceAmount}</h5>
  <h5 class="display-type"> Currency: ${goodies.PriceCurrency}</h5></div>
  <h5 class="display-type"> Size: ${goodies.Size}</h5></div>
  `
    );
  });
}

export { fetchgoods };
