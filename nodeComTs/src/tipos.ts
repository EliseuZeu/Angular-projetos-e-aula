//Variavies de anbiente 

//tipos primitivos> boolean, number, string
let ligado:boolean = false;
let desligado:boolean = true;
let nome: string = "Eliseu";
let idade: number = 30;
let altura: number = 1.79;

//tipos especiais null
let nulo: null = null;
let indefinido: undefined = undefined;

// tipos abrangentes any e void
function executarQuery(): void{
}

let reronorView:any = false;


//TIPO OBJETOS  - SEM PREVISIBILIDADE 
let produto:object = {
    nome: "Celular",
    preco: 2000.0,
    desconto: 0.1
};

type carro = {
    marca: string;
    modelo: string;
    ano: number;
}

let meuCarro: carro = {
    marca: "Fiat",
    modelo:  "Uno",
    ano: 2020
};



