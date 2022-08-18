const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻

// Exercício de prática

console.log(filmes[0].elenco[0].length / 3)

for (let i = 0; i < filmes.length; i++) {
  let string = `"${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor},
Tem no elenco: "`
   for (let j = 0; j < filmes[i].elenco[i].length / filmes.length -1; j++) {
      
      string += `${filmes[i].elenco[j]}, `
    }
  console.log(string)
}