//EXPLICAÇÃO:                                                                                     (Comentar muito o código não é uma boa prática, porém como intuito é ensinar/aprender releve!)

//Evite variáveis genericas como: loading, disable, data, fetching, list
//Sempre coloque booleanos como perguntas.
//Sempre leia o booleano com o if na frente.

//Booleanos

//Usar perguntas em variáveis que são booleanos: is, does, as

//Em vez disso:
const userMajority = true;
const disabled = true;
//Use isto:
const isDisabled = true;
const userHasGroup = true;
const isUserOnMajority = true;

//---------

if(isDisabled) {

}

if (isUserOnMajority) {

}

//Booleans sempre como perguntas, o máximo semântico possível.

//Nomenclatura
const isUserProfileLoading = true;


//if loading, if isLoading, if isUserProfileLoading, muda muito a forma nós lemos.


//Booleanos DESAFIO:
const user = {
    name: 'Gustavo Gantois',
    height: 173,
    hasTicket: true,
};

const necessaryHeight = 130;

const currentHour = new Date().getHours()

const parkOpen = currentHour > 9 && currentHour < 18;

if (!parkOpen) {
    throw new Error('O parque está fechado!')
}

const ticket = user.hasTicket

if (!ticket) {
    throw new Error('O Gustavo não possui um bilhete para entrar no parque!')
}

const enterToy = user.height > necessaryHeight

if (!enterToy) {
    throw new Error('O Gustavo não pode entrar no Brinquedo!')
}

console.log('O Gustavo se divertiu muito! :)')











//ATIVIDADE
//Renomeando os booleans do código acima de acordo com as instruções da aula:

const isUserValidationAcessToy = {
    name: 'Gustavo Gantois',
    height: 173,
    hasTicket: true,
};

const isNecessaryHeightForToy = 130;

const isCurrentHourHasPark = new Date().getHours();

const isParkOpenHasAccessForToy = isCurrentHourHasPark > 9 && isCurrentHourHasPark < 18;

if (!isParkOpenHasAccessForToy) {
    throw new Error('O parque está fechado!')
};

const ticketOfPark = isUserValidationAcessToy.hasTicket

if (!ticketOfPark) {
    throw new Error('O Gustavo não possui um bilhete para entrar no parque!')
}

const userEnterToy = isUserValidationAcessToy.height > isNecessaryHeightForToy;

if (!userEnterToy) {
    throw new Error('O Gustavo não pode entrar no Brinquedo!')
}

console.log('O Gustavo se divertiu muito! :)');













//Observações do ChatGPT sobre as variáveis:

//1.isUserValidationAcessToy: Esse nome pode ser simplificado para algo mais direto, como user ou userInfo. O termo "Validation" pode não ser necessário aqui, pois o objeto representa informações do usuário, não uma validação em si.

//2.isNecessaryHeightForToy: Pode ser renomeado para requiredHeight ou requiredHeightForToy, que são mais concisos e diretos.

//3.isCurrentHourHasPark: Pode ser simplificado para currentHour. O sufixo "HasPark" não é necessário, já que a variável representa a hora atual.

//4.isParkOpenHasAccessForToy: Pode ser renomeado para isParkOpen. Isso torna o nome mais claro e focado no que ele realmente representa: se o parque está aberto.

//5.ticketOfPark: Pode ser renomeado para hasTicket, que já é o nome original e descreve claramente se o usuário tem um bilhete.

//6.userEnterToy: Pode ser renomeado para canEnterToy ou isTallEnoughForToy, para deixar claro que é uma verificação se o usuário pode ou não entrar no brinquedo.

const user = {
    name: 'Gustavo Gantois',
    height: 173,
    hasTicket: true,
}

const requiredHeightForToy = 130;

const currentHour = new Date().getHours();

const isParkOpen = currentHour > 9 && currentHour < 18;

if(!isParkOpen) {
    throw new Error('O parque está fechado!');
}

const hasTicket = user.hasTicket;

if(!hasTicket) {
    throw new Error('O Gustavo não possui um bilhete para entrar no parque!')
}

const canEnterToy = user.height > requiredHeightForToy;

if(!canEnterToy) {
    throw new Error('O Gustavo não pode entrar no Brinquedo!')
}

console.log('O Gustavo se divertiu muito! :)');