let contar = 0
function abrirmenu(menu) {
    contar = contar + 1;
    if (contar == 8)
        contar = 0
    if(contar%2 != 0)
        document.getElementById(menu).style.display = 'block';

    else
        document.getElementById(menu).style.display = 'none';
}

function mudabotao(mudar,mudar2,mudar3){

    document.getElementById(mudar).style.backgroundColor ='#ff503f'
    document.getElementById(mudar).style.borderBottom = 'solid #24757a 5px'

    document.getElementById(mudar2).style.backgroundColor ='#24757a'
    document.getElementById(mudar2).style.borderBottom = 'solid #ff503f 5px'
        
    document.getElementById(mudar3).style.backgroundColor ='#24757a'
    document.getElementById(mudar3).style.borderBottom = 'solid #ff503f 5px'

}

function info(){
    document.getElementById("capalivro1").src ="info1.png"
}
function imgnormal(){
    document.getElementById("capalivro1").src ="capalivro1.png"
    document.getElementById("capalivro2").src ="capalivro2.png"
}