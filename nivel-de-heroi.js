let nome = "João"
let qtdExperiencia = 20000


if (qtdExperiencia <= 1000){
    qtdExperiencia = "Ferro";
}else if (qtdExperiencia >= 1001 && qtdExperiencia <= 2000){
    qtdExperiencia = "Bronze";
} else if (qtdExperiencia >= 2001 && qtdExperiencia <= 5000){
    qtdExperiencia = "Prata";
} else if (qtdExperiencia >= 5001 &&  qtdExperiencia <= 7000){
    qtdExperiencia = "Ouro";
}else if (qtdExperiencia >= 7001 && qtdExperiencia <= 8000){
    qtdExperiencia = "Platina";
}else if (qtdExperiencia >= 8001 && qtdExperiencia <= 9000){
    qtdExperiencia = "Ascendente";
}else if (qtdExperiencia >= 9001 && qtdExperiencia <= 10000){
    qtdExperiencia = "Imortal";
}else {
    qtdExperiencia = "Radiante";
}


console.log("O Herói de nome " + nome + " está no nível de " + qtdExperiencia);