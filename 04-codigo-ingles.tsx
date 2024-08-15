//Código em inglês 
import { useState } from 'react';

interface Product {
    title: string;
    price: string;
}

const productList = [
    {
        title: 'Macarrão',
        price: 'R$ 25,00',
    },
    {
        title: 'Hamburguer',
        price: 'R$ 30,00',
    }
];

export function ListProduto() {
    const[filteredProdutos, setFilteredProdutos] = useState<Product[]>([])

    function searchProduto(search: string) {
        const filtrado = productList.filter(product => product.title.includes(search))

        setFilteredProdutos(filtrado);
    }

    return (
        <div>
            <input type="text" onChange={(e) => searchProduto(e.target.value)} />

            {filteredProdutos.map(produto => (
                <div>
                    <p>{produto.title}</p>
                    <p>{produto.price}</p>
                </div>
            ))}
        </div>
    )
}

//DESAFIO
//Corrigindo o código somente para ingLês:

import { useState } from 'react';

interface Product {
    title: string;
    price: string;
}

const productList = [
    {
        title: 'Macarrão',
        price: 'R$ 25,00',
    },
    {
        title: 'Hamburguer',
        price: 'R$ 30,00',
    }
];

export function ListProduct() {
    const[filteredProducts, setFilteredProducts] = useState<Product[]>([])

    function searchProduct(search: string) {
        const filtered = productList.filter(product => product.title.includes(search))

        setFilteredProducts(filtered);
    }

    return (
        <div>
            < input type="text" onChange={(e) => searchProduct(e.target.value)} />

            {filteredProcuts.map(product => (
                <div>
                <p>{product.title}</p>
                <p>{product.price}</p>
                </div>
            ))}
        </div>
    )
}


