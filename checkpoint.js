console.log("1 - Pipoca – 10 segundos (padrão)");
console.log("2 - Macarrão – 8 segundos (padrão)");
console.log("3 - Carne – 15 segundos (padrão)");
console.log("4 - Feijão – 12 segundos (padrão)");
console.log("5 - Brigadeiro – 8 segundos (padrão)","\n");
console.log("             *****Resultado*****")
function microondas(menu, tempo){
    switch(menu){
        //1 - pipoca
        case 1: if(menu == 1 && tempo == 10){
            console.log("Prato pronto, bom apetite!!!");
        }else if( menu == 1 && tempo < 10 ){
            console.log("Tempo insuficiente")
        }else if(menu == 1 && tempo >= 2*10){
            console.log("A comida queimou")
        }else if( menu == 1 && tempo >= 3*10){
            console.log("kabumm")
        }
        break;
        //2 - macarrão
        case 2: if(menu == 2 && tempo == 8){
            console.log("Prato pronto, bom apetite!!!");
        }else if( menu == 2 && tempo < 8 ){
            console.log("Tempo insuficiente")
        }else if(menu == 2 && tempo >= 2*8){
            console.log("A comida queimou")
        }else if( menu == 2 && tempo >= 3*8){
            console.log("kabumm")
        }
        break;
        //3 - carne
        case 3: if(menu == 3 && tempo == 15){
            console.log("Prato pronto, bom apetite!!!");
        }else if( menu == 3 && tempo < 15 ){
            console.log("Tempo insuficiente")
        }else if(menu == 3 && tempo >= 2*15){
            console.log("A comida queimou")
        }else if( menu == 3 && tempo >= 3*15){
            console.log("kabumm")
        }
        break;
        //4 - feijão
        case 4: if(menu == 4 && tempo == 12){
            console.log("Prato pronto, bom apetite!!!");
        }else if( menu == 4 && tempo < 12 ){
            console.log("Tempo insuficiente")
        }else if(menu == 4 && tempo >= 2*12){
            console.log("A comida queimou")
        }else if( menu == 4 && tempo >= 3*12){
            console.log("kabumm")
        }
        break;
        //5 - brigadeiro
        case 5: if(menu == 5 && tempo == 8){
            console.log("Prato pronto, bom apetite!!!");
        }else if( menu == 5 && tempo < 8 ){
            console.log("Tempo insuficiente")
        }else if(menu == 5 && tempo >= 2*8){
            console.log("A comida queimou")
        }else if( menu == 5 && tempo >= 3*8){
            console.log("kabumm")
        }
        break;
        default: console.log("Prato inexistente")
    }
}

microondas(5,17)


//explicação dessa lógica do código.
//if(menu == 4 && tempo == 12)
//Gerei redundância para afirmar o que eu quero, mesmo que atenda o requisito no case sendo 1,2,3,4 ou 5.