const list = [
    {
        title: 'User',
        followers: 5
    },
    {
        title: 'Friendly',
        followers: 50,
    },
    {
        title: 'Super Star',
        followers: 1000
    },
]

export default async function getData(req, res) {
    const github = String(req.query.username);

    if(!github) {
        return res.status(400).json({
            message: `Please provide an username to search on the github API`
        })
    }

    const response = await fetch(`https://api.github.com/users/${github}`); 

if(response.status === 404) {
    return res.status(400).json({
    message: `User with username "${github}" not found.`
    })
}

const data = await response.json();

const orderList = list.sort((a, b) => b.followers - a.followers);

const category = orderList.find(i => data.followers > i.followers);

const result = {
    github,
    category: category.title
}

return result

}

getData({query: {
    username: '@devgustavogantois_'
}}, {})



//Renomeando de acordo com o desafio do Minicurso Clean Code da RocketSeat com o professor Diego Fernandes.

const ListUsersOfGithub = [
    {
        title: 'User',
        followers: 5,
    },
    {
        title: 'Friendly',
        followers: 50,
    },
    {
        title: 'Super Star',
        followers: 1000
    },
];

export default async function getData(req, res) {
    const githubUsers = String(req.query.username); // Renomeei a variável github para githubUsers

    if (!githubUsers) {
        return res.status(400).json({
            message: 'Please provide a username to search on the GitHub API'
        });
    }

    const responseAPIgitHub = await fetch(`https://api.github.com/users/${githubUsers}`); // Renomeei a variável response para responseAPIgitHub

    if (responseAPIgitHub.status === 404) {
        return res.status(404).json({
            message: `User with username "${githubUsers}" not found.`
        });
    }

    const dataAPIofUsers = await responseAPIgitHub.json(); // Renomeei a variável data para dataAPIofUsers

    const orderListUsers = ListUsersOfGithub.sort((a, b) => b.followers - a.followers); // Renomeei orderList para orderListUsers

    const category = orderListUsers.find(i => dataAPIofUsers.followers > i.followers);

    const result = {
        githubUsers,
        category: category ? category.title : 'No category found'
    };

    return res.status(200).json(result);
}

// Exemplo de chamada de função (não faz parte da função principal)
getData({ query: { username: '@devgustavogantois_' } }, {});
