//Causa e efeito:

//Precisamos nomear nossas variáveis sempre pela causa e não pelo efeito que aquilo vai ter no nosso código/interface etc...

//EXEMPLO 1 (nome de variável apenas nomeada por conta do efeito que irá ocorrer) -> Errado:

function Button() {
    const isButtonDisabled = true;
    return (
        <button disabled={isButtonDisabled}>
        <span></span>
          {isButtonDisabled ? 'Carregando' : 'Enviar'}
        </button>
    )
};

//Se em algum momento eu quiser utilizar a informação do button desabilitado em algum outro lugar
//Ao invés de eu criar uma variável com isButtonDisabled eu crio uma variável chamada isFormSubmitting se eu estou em um estado ded submit do meu form se ele está enviando aquela requisição.

//EXEMPLO 2: (nome da variável apenas nomeado por conta da causa que ele tem no código/interface) -> Correto:

function Button() {
    const isFormSubmitting = true;

    return (
        <button disabled={isFormSubmitting}>
        <span></span>
            {isFormSubmitting ? 'Carregando' : 'Enviar'}
        </button>
    )

};

//DESAFIO: 

// Causa vs Efeito
import { useEffect, useState } from "react"

interface User {
  name: string;
  github: string;
}

function fetchUser() {
  return {
    data: {
      user: {
        name: 'Gustavo Gantois',
        github: 'https://github.com/DevGustavoGantois'
      }
    }
  }
}

export function UserProfile() {
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState<User>()

  useEffect(() => {
    function loadUser() {
      setShouldNotRenderUserName(true)

      const fetchUserResponse = fetchUser()

      setUserData(fetchUserResponse.data.user)
      
      setShouldNotRenderUserName(false)
    }

    loadUser()
  }, []);

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <img src={`${userData?.github}.png`} alt="" />
      <a href={userData?.github}>{userData?.name}</a>
    </div>
  )
}

//Renomeando as variáveis do DESAFIO através da sua causa.

import { useEffect, useState } from "react"

interface userGitHubwithAPI {
    name: string;
    github: string;
}

function fetchUserGitHubAPI() {
    return {
        data: {
            user: {
                name: 'Gustavo Gantois',
                github: 'https://github.com/DevGustavoGantois'
            }
        }
    }
}

export function UserProfileGitHub() {
    const [shouldNotRenderUserName, setShouldNotRenderUserName] = useState(false);
    const [userDataGitHubAPI, setUserDataGitHubAPI] = useState<User>()

    useEffect(() => {
        function loadUserGitHubAPI() {
            setShouldNotRenderUserName(true)

            const fetchUserResponse = fetchUser()

            setUserDataGitHubAPI(fetchUserResponse.data.user)

            setShouldNotRenderUserName(false)
        }

        loadUserGitHubAPI()
    })

    if(shouldNotRenderUserName) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <img src={`${userDataGitHubAPI?.github}.png`} alt="User avatar" />
            <a href={userDataGitHubAPI?.github}>{userDataGitHubAPI?.name}</a>
        </div>
    )
}