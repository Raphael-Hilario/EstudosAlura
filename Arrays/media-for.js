const media1 = [10, 6.5, 8, 7.5];
const media2 = [9, 7.5, 8, 9, 8];
const media3 = [5, 6, 7, 8.5];
const matriz = [media1, media2, media3];
let soma = 0;
for (i = 0; i < matriz.length; i++) {

    //console.log(`matriz ${matriz[i].length}`);

    for (j = 0; j < matriz[i].length; j++) {
        soma += matriz[i][j];
        //console.log(`numero no loop ${matriz[i][j]}`);
    }
    media = soma / matriz[i].length;
    console.log(`A soma da matriz ${matriz[i]} é ${soma}`);
    console.log(`A média da matriz ${matriz[i]} é igual a ${media}`);
    soma = 0;

}
//console.log(`teste`);
//media = 0;