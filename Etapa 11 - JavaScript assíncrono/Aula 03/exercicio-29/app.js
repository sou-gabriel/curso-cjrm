/*
  01

  - Faça requests para a https://pokeapi.co/, da seguinte forma:
    - Encapsule o código do request em uma função que recebe os parâmetros 
      "url" e "callback";
    - Se o request estiver ok, exiba no console 'Pokémon obtido: 
      NOME_DO_POKEMON';
    - Se o request não estiver ok, exiba no console 'Não foi possível obter o 
      Pokémon';
    - Os pokémons buscados devem ser: 'bulbasaur', 'charmander' e 'squirtle';
    - Os requests devem ser sequenciais. Ou seja, um request só deve ser 
      executado quando o request anterior for finalizado.
*/

const getPokemon = (url, callback) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4

    if (isRequestOk) {
      const { name } = JSON.parse(request.responseText)
      callback(null, `Pokémon obtido: ${name}`)
      return
    }

    if (isRequestNotOk) {
      callback('Não foi possível obter o Pokémon', null)
    }
  })

  request.open('GET', url)
  request.send()
}

getPokemon('https://pokeapi.co/api/v2/pokemon/bulbasaur', (error, data) => {
  if (error) {
    console.log(error)
    return
  }

  console.log(data)
  getPokemon('https://pokeapi.co/api/v2/pokemon/charmander', (error, data) => {
    if (error) {
      console.log(error)
      return
    }

    console.log(data)
    getPokemon('https://pokeapi.co/api/v2/pokemon/squirtle', (error, data) => {
      if (error) {
        console.log(error)
        return        
      }

      console.log(data)
    })
  })
})




/*
  02

  - Há algumas etapas, implementamos o método some, do zero;
  - Neste exercício, seu desafio será criar o método map, do zero;
  - Implemente uma função "map" que possui a mesma funcionalidade do método  
    map original;
  - Você não poderá utilizar o método map de array, embutido na linguagem;
  - A assinatura da invocação desta função deve ser:
    - map([1, 2, 3], number => number * 2) // [2, 4, 6];
    - map([1, 2, 3], number => number * 3) // [3, 6, 9];
  - Se você não se lembra como o método map funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "O método map" - Aula 01-02 da etapa 08;
      - "Correção dos exercícios da aula 01 da etapa 08" - Aula 02-01 da etapa 
        08;
    2) Pesquisar no MDN.
  
  Reforço: este tipo de exercício será frequente em etapas mais avançadas do 
  curso, onde falaremos sobre TDD. Vá se aquecendo =)
*/

const map = (array, myFunc) => {
  let newArray = []  
  array.forEach(item => newArray.push(myFunc(item))) 
  return newArray
}

console.log(map([1, 2, 3], number => number * 2))
console.log(map([1, 2, 3], number => number * 3))

/*
  03

  - Descomente o console.log abaixo e faça o this do método referenciar o 
    objeto person.
*/

const person = {
  name: 'Roger',
  getName () { 
    return this.name
  }
}

console.log(person.getName())

/*
  04

  - Descomente a 2ª const abaixo e salve este arquivo;
  - Um erro será exibido no console;
  - Faça as duas const x coexistirem, sem modificar o nome de qualquer uma 
    delas.
*/

const x = 'x'

const myFunc = () => {
  const x = 'y'
  return x
}

console.log(x, myFunc())


/*
  05

  - O código abaixo está funcionando. Refatore-o da forma mais concisa que você 
    conseguir.
*/

const getFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`

console.log(getFullName({ firstName: 'Afonso', lastName: 'Solano' }))

/*
  06

  - Crie uma função chamada 'convertToHex', que recebe o nome de uma cor por 
    parâmetro. Exemplo: 'red';
  - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
  - Verifique se a cor passada por parâmetro é algum hexa escolhido. Se for,
    retorne a frase 'O hexadecimal para a cor COR é HEXADECIMAL';
  - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a mensagem 'Não temos o equivalente hexadecimal para COR';
  - Exiba o hexadecimal de 8 cores diferentes usando a função criada acima.
*/

const convertToHex = colorName => {
  const colors = {
    'Verde lima': '#32cd32',
    'Amarelo claro': '#ffffe0',
    'Marrom amarelado': '#f4a460',
    'Verde militar': '#78866b',
    'Turquesa escura': '#00ced1'
  }

  return colors[colorName] 
    ? `O hexadecimal para a cor ${colorName} é ${colors[colorName]}`
    : `Não temos o equivalente hexadecimal para ${colorName}`
}

const colors = [
  'Verde lima',
  'Marrom amarelado',
  'Amarelo',
  'Verde militar',
  'Cinza fosco',
  'Lilás',
  'Rosa',
  'Amarelo claro',
  'Turquesa escura'
]

// colors.forEach(color => console.log(convertToHex(color)))

/*
  07

  - Através do array abaixo, gere um objeto com a frequência de idades das 
    pessoas;
  - Ou seja, se o array contém 3 pessoas com 18 anos, o objeto gerado deve ter 
    uma propriedade 18 com o valor 3, se o array contém 2 pessoas com 19 anos,
    o objeto gerado deve ter uma propriedade 19 com o valor 2 e assim por 
    diante.
  
  Resultado desejado: { 18: 3, 19: 2, 20: 1 }

  Dica: pesquise por Computed Property Names.
*/

const people = [
  { id: 5 , name: 'Angelica', age: 18, federativeUnit: 'Pernambuco' },
  { id: 81, name: 'Thales', age: 19, federativeUnit: 'São Paulo' },
  { id: 47, name: 'Ana Carolina', age: 18, federativeUnit: 'Alagoas' },
  { id: 87, name: 'Felipe', age: 18, federativeUnit: 'Minas Gerais' },
  { id: 9 , name: 'Gabriel', age: 20, federativeUnit: 'São Paulo' },
  { id: 73, name: 'Aline', age: 19, federativeUnit: 'Brasília' }
]

const eighteen = people.filter(person => person.age === 18)
const nineteen = people.filter(person => person.age === 19)
const twenty = people.filter(person => person.age === 20)

const frequencyOfAges = people.reduce((acc, person) => {
  if (person.age === 18) {
    acc[person.age] = eighteen.length
  }

  if (person.age === 19) {
    acc[person.age] = nineteen.length
  }

  if (person.age === 20) {
    acc[person.age] = twenty.length
  }

  return acc
}, {})
console.log(frequencyOfAges)