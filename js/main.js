function refreshSelect() {
  let select = document.querySelector(".select");
  const optionValue = select.options[select.selectedIndex]; //trata o selected como um array
  let value = optionValue.value;

  const cafe = document.querySelectorAll(".nome-cafe");
  const site = document.querySelectorAll(".site");
  const instagram = document.querySelectorAll(".instagram");
  const links = document.querySelectorAll(".links");
  const caixaCafe = document.querySelectorAll('.box-cafe')

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
    "https://linktr.ee/lafourmicreperie",
    "https://cafegraobrasil.com.br/index.html",
    "http://www.artesanachocolates.com.br/",
  ];

  const instaLink = [
    "https://www.instagram.com/quierocafeoficial/",
    "https://www.instagram.com/postoschafariz/",
    "https://www.instagram.com/dcakesboleriaecafe/",
    "https://www.instagram.com/lafourmicreperie/",
    "https://www.instagram.com/graobrasilcafe/",
    "https://www.instagram.com/artesana.cafeteria/",
  ];


  if (value === "select") {
  
    for (var i = 0; i < caixaCafe.length; i++) {
      caixaCafe[i].style.visibility = "hidden";
    }
  }else if(value == 'campo-bom' || 'novo-hamburgo'){
    for (var i = 0; i < caixaCafe.length; i++) {
      caixaCafe[i].style.visibility = "visible";
    }
  }

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
    cafe[0].innerHTML = nomescafe[3];
    cafe[1].innerHTML = nomescafe[4];
    cafe[2].innerHTML = nomescafe[5];

    site[0].href = sitesLinks[3];
    site[1].href = sitesLinks[4];
    site[2].href = sitesLinks[5];

    instagram[0].href = instaLink[3];
    instagram[1].href = instaLink[4];
    instagram[2].href = instaLink[5];
  }
}


refreshSelect();
