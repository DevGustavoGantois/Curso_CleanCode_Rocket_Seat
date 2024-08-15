//Exemplo Simples:

//setTimeout, setInterval

setTimeout(() => {}, 2592000000) /*Isso é um número mágico.*/

//Desta forma fica mais claro:
setTimeout(() => {}, 1000 * 60 * 60 * 24 * 30)

//Desta forma fica mais claro ainda:
const INTERVAL_30_DAYS = 1000 * 60 * 60 * 24 * 30;

//DICA:
//No JavaScript podemos utilizar o underline para separar o número:
100_983_786_888;

//Exemplo Avançado:

function calculateDiscount(priceInCents, discountAmountInPercentage) {
    //retorna desconto
}

function lookForUpdates() {


}

setInterval((lookForUpdates, 60 * 30 * 1000)) // 30 days

function calculateDiscount(price, discount) {};


//Podemos utilizar variáveis para armazenar o valor dos 30 dias:
const DAYS_30 =  60 * 30 * 1000;
//Podemos comentar o código do lado, para se alguém ou nós mesmos quisermos fazer manutenção em nosso código, sabermos o que está acontecendo.