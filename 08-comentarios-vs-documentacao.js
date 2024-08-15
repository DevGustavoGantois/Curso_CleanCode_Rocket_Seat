//Não é interessante você ter comentários dentro do seu código explicando o que ele faz, pois ele por si só através do nome das variáveis tem que mostrar isso.

//Este tipo de comentário abaixo é legal para o entendimento do código.

/* Esse código foi escrito assim porque a biblioteca X ainda não suporta Y */ 

/* Documentação sempre que possível ser separada do código. */ 

/*https://github.com/author/X/issues/123123*/

//código

//DESAFIO:

// Essa função tem o objetivo de registrar um novo usuário no banco.
async function register(data) {
    // Desestrutura os dados recebidos.
    const { email, name, avatar } = data
  
    // Verifica se o avatar foi informado.
    if (!avatar) return { error: 'avatar is required' }
  
    // Verifica se o nome foi informado.
    if(!name) return { error: 'name is required' }
  
    // Essa função retorna o usuário a partir do email informado
    const userMail = getUserByEmail(email)
  
    // Verificação se o email informado já foi utilizado por algum usuário.
    if (userMail) {
      return { error: 'email already used' }
    }
  
    // Essa função realiza a conversão das imagens para JPG a fim de evitar erros de incompatibilidade.
    // Mais informações na issue https://github.com/rocketseat-education/example-repository/issues/1
    const avatar2 = convertImageToJPG(avatar)
  
    // Cria o usuário no banco de dados
    const user = await createUser({ email, name, avatar: avatar2 })
  
    return { user }
  }

//CORRIGINDO ESSE CÓDIGO E DEIXANDO ELE LEGÍVEL, de acordo com o ensinamentos do Professor Diego Fernandes.

async function RegisterInformationUser(data) {
    
    const { email, name, avatar} = data;

    if (!avatar) return { error: 'avatar is required'}

    if (!name) return {error: 'name is requered'}

    const userMail = getUserByEmail(email)

    if(userMail) {
        return { error: 'email already used'}
    }
    // Mais informações na issue https://github.com/rocketseat-education/example-repository/issues/1
    const avatarImage = convertImageToJPG(avatar)

    const  userAvatar = await createUser({email, name, avatar: avatarImage})

    return {userAvatar}
}