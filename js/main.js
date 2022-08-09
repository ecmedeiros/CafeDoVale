function refreshSelect() {
  let select = document.querySelector(".select");
  const optionValue = select.options[select.selectedIndex]; //trata o selected como um array
  let value = optionValue.value;

  const cafe = document.querySelectorAll(".nome-cafe");
  const site = document.querySelectorAll(".site");
  const instagram = document.querySelectorAll(".instagram");

  const nomescafe = [
    "Quiero Café",
    "Chafariz",
    "D'cakes Boleria E Café",
    "La Fourmi Crêperie et Café",
    "Grão Brasil Café",
    "Artesana cafeteria",
  ];

  const sitesLinks = [
    "https://quierocafe.com.br/",
    "https://linktr.ee/chafariz",
    "https://linklist.bio/dcakesboleria",
  ];

  const instaLink = [
    "https://www.instagram.com/quierocafeoficial/",
    "https://www.instagram.com/postoschafariz/",
    "https://www.instagram.com/dcakesboleriaecafe/",
  ];

  //for (var i = 0; i < cafe.length; i++) {
  if (value === "campo-bom") {
    for (var i = 0; i < cafe.length; i++) {
      site[i].innerHTML = "Site";
      instagram[i].innerHTML = "Instagram";
    }

    cafe[0].innerHTML = nomescafe[0];
    cafe[1].innerHTML = nomescafe[1];
    cafe[2].innerHTML = nomescafe[2];

    site[0].href = sitesLinks[0];
    site[1].href = sitesLinks[1];
    site[2].href = sitesLinks[2];

    instagram[0].href = instaLink[0];
    instagram[1].href = instaLink[1];
    instagram[2].href = instaLink[2];
  } else if (value === "novo-hamburgo") {
    for (var i = 0; i < cafe.length; i++) {
      site[i].innerHTML = "Site";
      instagram[i].innerHTML = "Instagram";
    }

    cafe[0].innerHTML = nomescafe[3];
    cafe[1].innerHTML = nomescafe[4];
    cafe[2].innerHTML = nomescafe[5];
  } else if (value === "select") {
    for (var i = 0; i < cafe.length; i++) {
      cafe[i].innerHTML = "";
      site[i].innerHTML = "";
      instagram[i].innerHTML = "";
    }
  }
}
//}

function zeraDiv() {
  for (var i = 0; i < cafe.length; i++) {
    cafe[i].innerHTML = "";
    site[i].innerHTML = "";
    instagram[i].innerHTML = "";
  }
}

refreshSelect();
