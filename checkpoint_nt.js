function microondas(prato, tempoInserido) {

    let tempoPadronizado;

    switch (prato) {
        case 'pipoca':
            tempoPadronizado = 10;
            condicao(tempoPadronizado, tempoInserido);
            break;

        case 'macarrão':
            tempoPadronizado = 8;
            condicao(tempoPadronizado, tempoInserido);
            break;

        case 'carne':
            tempoPadronizado = 15;
            condicao(tempoPadronizado, tempoInserido);
            break;

        case 'feijão':
            tempoPadronizado = 12;
            condicao(tempoPadronizado, tempoInserido);
            break;

        case 'brigadeiro':
            tempoPadronizado = 8;
            condicao(tempoPadronizado, tempoInserido);
            break;

        default: console.log("Prato inexistente")
    }

    function condicao(tempoPadronizado, tempoInserido) {
        if (tempoInserido >= tempoPadronizado * 2 && tempoInserido < tempoPadronizado * 3) {
            console.log("A comida queimou")
        } else if (tempoInserido < tempoPadronizado) {
            console.log("Tempo insuficiente")
        } else if (tempoInserido >= tempoPadronizado * 3) {
            console.log("Kabumm")
        } else {
            console.log("Prato pronto, bom apetite!!!")
        }
    }

}

microondas('picles', 29)