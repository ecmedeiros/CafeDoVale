function refreshSelect() {
  let select = document.querySelector("#cidades");
  const optionValue = select.options[select.selectedIndex]; //trata o selected como um array
  let value = optionValue.value;

  const cafe = document.querySelectorAll(".nome-cafe");
  const site = document.querySelectorAll(".site");
  //const instagram = document.querySelectorAll('.nome-cafe');

  const nomescafe = [
    "Quiero Café",
    "Me Gusta cafeteria",
    "D'cakes Boleria E Café",
    "La Fourmi Crêperie et Café",
    "Grão Brasil Café",
    "Artesana cafeteria",
  ];

  const sites = [
    "https://quierocafe.com.br/",
    "https://www.instagram.com/megusta.cafeteria/",
    "https://linklist.bio/dcakesboleria",
  ];

  //for (var i = 0; i < cafe.length; i++) {
  if (value === "campo-bom") {
    cafe[0].innerHTML = nomescafe[0];
    cafe[1].innerHTML = nomescafe[1];
    cafe[2].innerHTML = nomescafe[2];

    site[0].href = sites[0];
    site[1].href = sites[1];
    site[2].href = sites[2];
    
  } else if (value === "novo-hamburgo") {
    cafe[0].innerHTML = nomescafe[3];
    cafe[1].innerHTML = nomescafe[4];
    cafe[2].innerHTML = nomescafe[5];
  }
}
//}

refreshSelect();
