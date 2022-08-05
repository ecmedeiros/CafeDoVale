function refreshSelect(){
    let select = document.querySelector('#cidades');
    const optionValue = select.options[select.selectedIndex]; //trata o selected como um array

    let value = optionValue.value;
    const cafeterias = document.querySelector('.container');
    h2 = document.querySelector('.nome-cafe');

    if (value === 'campo-bom'){
        h2.innerHTML = `Cafeteria de Campo bom`;
    }else if(value === 'novo-hamburgo') {
        h2.innerHTML = `Cafeteria de novo hamburgo`;
    }

}



cafeteria1 = {
    nome: 'cafundo de judas',
    site: 'www.fimdomundo.com',
    instagram: 'instagram/judas.com.br'
}




refreshSelect();