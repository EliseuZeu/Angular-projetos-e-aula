

type heroi = {
    name: string;
    raca: string;
    idade: number;
    descricao: string;
};

function printObjetos(pessoa: heroi){
    console.log(pessoa);
}

printObjetos({
    name: "Selina",
    raca: "Meia-Elfa",
    idade: 17,
    descricao: "Ser mais poderoso da raça elfica da historia Eterno acestral"
});