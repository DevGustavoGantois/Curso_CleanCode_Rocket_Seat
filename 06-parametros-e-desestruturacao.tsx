//Rota para criação do usuário (name, email, password)
//Controller (name, email, password)
//Repositório (name, email, password)

//SEMPRE QUE POSSÍVEL RECEBA E DEVOLVA AS INFORMAÇÕES EM FORMATO DE OBJETO.

function createUserRoute(body, params) {
    //validações...
    const { name, email, password } = body;

    createUserController({
        name,
        email, 
        password,
    });
}

function createUserController(data) {
    const { name, email, password} = data;

    usersRepository.create({
        name,
        email,
        password,
    })
}


//Essa alternativa está show
const usersRepository = {
    create(data) {
        const user = createUserOnDatabase()

        return user;
    }
}

//Mas podemos utilizar a alternativa retornando sempre um objeto e dentro eu ter um user um data etc...

const usersRepository = {
    create(data) {
        const user = createUserOnDatabase()

        return {
            data: user, /*Podemos nomear da maneira que preferirmos, por que no futuro, caso adicionarmos mais alguma informação retornada aí dentro o restante código não vai quebrar.*/
        }
    }
}

//Receba e envie parâmetros nomeados (desestruturação)

//Prefira sempre receber em suas funções objetos ao invés de multiplos parâmetros

//parâmetros:
/*http://localhost:3000/users/3*/ 
createUserRoute({name, email, password}, {id: 1})
createUserRoute(null, { id: 1})


//O corpo é o que fica dentro da requisição, ele não fica disponível na URL

//Receba sempre objetos como parâmetros nomeados da função fazendo uma desestruturação:
function createUserRoute({body, params}) {
    //valiadções...
    const { name, email, password } = body;

    createUserController({
        name,
        email, 
        password,
    });
}

createUserRoute({
    body: {name, email, password },
    params: {id: 1}
})

createUserRoute({
    params: { id: 1}      /*Dessa forma não preciso ter nenhum null aqui dentro */
})

//Muita das vezes faz sentindo também a resposta da sua função ser um objeto, pois mais pra frente aquilo pode se desmembrar em mais informações retornadas e fica mais fácil 
//quando é um objeto.

//DESAFIO:

function updateUserRoute(body, params) {
    updateUserController(body, params);
}

function updateUserController(data, params) {
    usersRepository.update(data, params);
}

const usersRepository = {
    update: (data, params) => {}
}

//Corrigindo a estrutura do código de acordo com a aula ministrada pelo professor Diego Fernandes:

function updateUserRoute({ body, params }) {
    updateUserController({
        body,
        params,
    });
}

function updateUserController({ body, params }) {
    usersRepository.update({
        body,
        params,
    });
}

const usersRepository = {
    update: ({ body, params }) => {}
}