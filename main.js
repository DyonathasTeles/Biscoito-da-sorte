const imagem = document.querySelector("img")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btn = document.querySelector("#btnResert")

let luckPhrases = [
  'A vida trará coisas boas se tiveres paciência.',
  'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
  'Não compense na ira o que lhe falta na razão.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'A maior de todas as torres começa no solo.',
  'Não há que ser forte. Há que ser flexível.',
  'Gente todo dia arruma os cabelos, por que não o coração?',
  'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
  'A juventude não é uma época da vida, é um estado de espírito.',
  'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.'
]

imagem.addEventListener('click', pageChange)
btn.addEventListener('click', pageChange)

document.addEventListener("keydown", function(e) {
  console.log(e.key);
  if(e.key == 'Enter') {
    pageChange(e)
  }
})

function pageChange(event) {
  event.preventDefault()
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")

  randoNumber = Math.round(Math.random() * 10)  
  let randomPhrases = luckPhrases[randoNumber]
  screen2.querySelector("p").innerText = randomPhrases
}




