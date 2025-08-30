let name = "Lucas"
let quantidadeDeXp = 20000

if (quantidadeDeXp <= 1000) {
    console.log(`O Herói de nome ${name} está no nível de Ferro`)
} else if (quantidadeDeXp >= 1001 && quantidadeDeXp <= 2000){
    console.log(`O Herói de nome ${name} está no nível de Bronze`)
} else if (quantidadeDeXp >= 2001 && quantidadeDeXp <= 5000){
    console.log(`O Herói de nome ${name} está no nível de Prata`)
} else if (quantidadeDeXp >= 5001 && quantidadeDeXp <= 7000){
    console.log(`O Herói de nome ${name} está no nível de Ouro`)
} else if (quantidadeDeXp >= 7001 && quantidadeDeXp <= 8000){
    console.log(`O Herói de nome ${name} está no nível de Platina`)
} else if (quantidadeDeXp >= 8001 && quantidadeDeXp <= 9000){
    console.log(`O Herói de nome ${name} está no nível de Ascendente`)
} else if (quantidadeDeXp >= 9001 && quantidadeDeXp <= 10000){
    console.log(`O Herói de nome ${name} está no nível de Imortal`)
} else {
    console.log(`O Herói de nome ${name} está no nível de Radiante`)
}
