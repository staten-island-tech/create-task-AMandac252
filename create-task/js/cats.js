async function fetchcat() {
  for (let i = 1; i < 67; i++) {
    let url = `https://api.neko-atsume.emshea.com/cats/${i}`;
    const response = await fetch(url);

    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const cat = await response.json();
      console.log(cat);
    }
  }
}

fetchcat();
