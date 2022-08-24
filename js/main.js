function refreshSelect() {
  let select = document.querySelector(".select");
  const optionValue = select.options[select.selectedIndex]; //trata o selected como um array
  let value = optionValue.value;

  const cafe = document.querySelectorAll(".nome-cafe");
  const site = document.querySelectorAll(".site");
  const instagram = document.querySelectorAll(".instagram");
  const links = document.querySelectorAll(".links");
  const caixaCafe = document.querySelectorAll(".box-cafe");

  const cafeteriasCb = [
    {
      nome: "Quiero Café",
      siteUrl: "https://quierocafe.com.br/",
      insta: "https://www.instagram.com/quierocafeoficial/",
    },
    {
      nome: "Chafariz",
      siteUrl: "https://linktr.ee/chafariz",
      insta: "https://www.instagram.com/postoschafariz/",
    },
    {
      nome: "D'cakes Boleria E Café",
      siteUrl: "https://linklist.bio/dcakesboleria",
      insta: "https://www.instagram.com/dcakesboleriaecafe/",
    },
  ];

  const cafeteriasNh = [
    {
      nome: "La Fourmi Crêperie et Café",
      siteUrl: "https://linktr.ee/lafourmicreperie",
      insta: "https://www.instagram.com/lafourmicreperie/",
    },
    {
      nome: "Grão Brasil Café",
      siteUrl: "https://cafegraobrasil.com.br/index.html",
      insta: "https://www.instagram.com/graobrasilcafe/",
    },
    {
      nome: "Artesana cafeteria",
      siteUrl: "http://www.artesanachocolates.com.br/",
      insta: "https://www.instagram.com/artesana.cafeteria/",
    },
  ];

  //#region Codigo antigo
  // const nomescafe = [
  //   "Quiero Café",
  //   "Chafariz",
  //   "D'cakes Boleria E Café",
  //   "La Fourmi Crêperie et Café",
  //   "Grão Brasil Café",
  //   "Artesana cafeteria",
  // ];

  // const sitesLinks = [
  //   "https://quierocafe.com.br/",
  //   "https://linktr.ee/chafariz",
  //   "https://linklist.bio/dcakesboleria",
  //   "https://linktr.ee/lafourmicreperie",
  //   "https://cafegraobrasil.com.br/index.html",
  //   "http://www.artesanachocolates.com.br/",
  // ];

  // const instaLink = [
  //   "https://www.instagram.com/quierocafeoficial/",
  //   "https://www.instagram.com/postoschafariz/",
  //   "https://www.instagram.com/dcakesboleriaecafe/",
  //   "https://www.instagram.com/lafourmicreperie/",
  //   "https://www.instagram.com/graobrasilcafe/",
  //   "https://www.instagram.com/artesana.cafeteria/",
  // ];
  //#endregion

  //Esconder div conforme opção selecionada
  if (value === "select") {
    for (var i = 0; i < caixaCafe.length; i++) {
      caixaCafe[i].style.visibility = "hidden";
    }
  } else if (value == "campo-bom" || "novo-hamburgo") {
    for (var i = 0; i < caixaCafe.length; i++) {
      caixaCafe[i].style.visibility = "visible";
    }
  }

  if (value === "campo-bom") {
    for (var i = 0; i < caixaCafe.length; i++) {
      let { nome, siteUrl, insta } = cafeteriasCb[i];
      console.log(site);
      cafe[i].innerHTML = nome;
      site[i].href = siteUrl;
      instagram[i].href = insta;
    }
  } else if (value === "novo-hamburgo") {
    for (var i = 0; i < caixaCafe.length; i++) {
      let { nome, siteUrl, insta } = cafeteriasNh[i];
      console.log(site);
      cafe[i].innerHTML = nome;
      site[i].href = siteUrl;
      instagram[i].href = insta;
    }
  }
}
refreshSelect();
