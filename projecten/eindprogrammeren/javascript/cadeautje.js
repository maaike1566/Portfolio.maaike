/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

// onder de 20 euro
var idee1 = {
    plaatje:'images/boek.jpeg',
    titel:'100 dingen die elke man eenmaal in zijn leven gedaan moet hebben',
    prijs:'7,00',
    winkel:'bol.com' };
var idee2 = {
    plaatje:'images/bubbeltjespak.jpeg',
    titel: 'bubbeltjesplastic pak',
    prijs: '16,00',
    winkel: 'cadeau.nl'};
var idee3 = {
    plaatje: 'images/ritualspakketklein.jpeg',
    titel:'Rituals the Titual of Samurai',
    prijs:'17,50',
    winkel:'Rituals'};
var idee4 = {
    plaatje:'images/ckluchtje.jpeg',
    titel:'Calvin Klein IN2U 100 ml',
    prijs: '18.89',
    winkel:'voordeeltrends.nl'};
var idee5 = {
    plaatje:'images/spaarpot.jpeg',
    titel:'Xl-spaarpot voor gokkers',
    prijs:'14,95',
    winkel:'megagadgets.nl'};

//onder de 40 euro
var idee6 = {
    plaatje:'images/happysockstaart.jpeg',
    titel:'Happy socks Happy birthday giftbox',
    prijs:'24,95',
    winkel:'bol.com'};
var idee7 = {
    plaatje:'images/ritualspakgroen.jpeg',
    titel:'Rituals the Ritual of Dao',
    prijs:'29,50',
    winkel:'Rituals'};
var idee8 = {
    plaatje:'images/horloge.jpeg',
    titel:'Regal Cadeauset met gratis armband',
    prijs:'29,99',
    winkel:'Lucardi juwelier NL'};
var idee9 = {
    plaatje:'images/happysocksH.jpeg',
    titel:'Happy socks giftbox mixbox',
    prijs:'29,95',
    winkel:'Hudsons Bay'};
var idee10 = {
    plaatje:'images/ritualsset.jpeg',
    titel:'Rituals Samurai 4 Refreshing bestsellers pakket',
    prijs:'29,50',
    winkel:'Rituals'};

//onder de 50 euro
var idee11 = {
    plaatje:'images/wallet.jpeg',
    titel:'Secrid Portomonnees zwart',
    prijs:'49,95',
    winkel:'vanBeekLederwaren.nl'};
var idee12 = {
    plaatje:'images/ginomilano.jpeg',
    titel:'Gino Milano heren cadeauset',
    prijs:'49,99',
    winkel:'bol.com'};
var idee13 = {
    plaatje:'images/hugoboss.jpeg',
    titel:'Hugo Boss Gift set',
    prijs:'44,95',
    winkel:'Hugo Boss'};
var idee14 = {
    plaatje:'images/trui.jpeg',
    titel:'Origineel Motor cadeau',
    prijs:'43,95',
    winkel:'spreadshirt.nl'};

var getal;
var cadeauidee;
cadeauidee = [idee1, idee2, idee3, idee4, idee5, idee6, idee7, idee8, idee9, idee10, idee11, idee12, idee13, idee14];
var afbeelding;
var cadeau20, cadeau40, cadeau50;
var cadeauOpened20 = false;
var cadeauOpened40 = false;
var cadeauOpened50 = false;

cadeau20 = document.querySelectorAll('img')[0];
function open20(){
    if (cadeauOpened20 === false){
        document.querySelectorAll('img')[0].src= 'images/cadeauopening.gif';
        cadeauOpened20 = true;
        setTimeout(function() {
            this.open20();
        }, 4000);
    }
    else if (cadeauOpened20 === true){
        getal = Math.floor(Math.random()*5);
        afbeelding = cadeauidee[getal-1].plaatje;
        console.log(afbeelding);
        document.querySelectorAll("img")[0].src= afbeelding;
        cadeauOpened20= false;
    }
}
cadeau20.addEventListener('click',open20,false);

cadeau40 = document.querySelectorAll('img')[1];
function open40(){
    if (cadeauOpened40 === false){
        document.querySelectorAll('img')[1].src= 'images/cadeauopening.gif';
        cadeauOpened40 = true;

// code door Jordin
        setTimeout(function() {
            this.open40();
        }, 4000);
    }
//einde code jordin

    else if (cadeauOpened40 === true){
        getal = Math.floor(Math.random()*11);
        afbeelding = cadeauidee[getal-1].plaatje;
        console.log(afbeelding);
        document.querySelectorAll("img")[1].src= afbeelding;
        cadeauOpened40 = false;

    }
}
cadeau40.addEventListener('click',open40,false);

cadeau50 = document.querySelectorAll('img')[2];
function open50(){
    if (cadeauOpened50 === false){
        document.querySelectorAll('img')[2].src= 'images/cadeauopening.gif';
        cadeauOpened50 = true;
        setTimeout(function() {
            this.open50();
        }, 4000);
    }
    else if (cadeauOpened50 === true){
        getal = Math.floor(Math.random()*15);
        afbeelding = cadeauidee[getal-1].plaatje;
        console.log(afbeelding);
        document.querySelectorAll("img")[2].src= afbeelding;
        cadeauOpened50= false;
    }
}
cadeau50.addEventListener('click',open50,false);
