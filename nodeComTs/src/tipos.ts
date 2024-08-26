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

//array
let dados: string[] = ["Eliseu", "ana", "maria"]
let dados2: Array<string> = [""];

let infos: (string | number)[] = ["eliseu", "30",30]


//Tuplas - segui a ordem exata que foi escrito

let boleto:[string, number, number] = ["agua conta", 199.90 , 344442232 ];

//arrays e metodos 

dados.push();

//Datas 
let aniversario:Date = new Date("2022-02-21 05:00");
console.log(aniversario.toString());
