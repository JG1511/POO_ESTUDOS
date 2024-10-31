// Rodar o codigo direto do TS é so baixar o npm i -g ts-node --save. Depois é so utilizar o ts-node nome_do_aquivo
//Toda vez que pensar imprimir na classe use retorno ou seja VOID
//Todo vez que pensar em ler dados na classe, use paramentro
// Posso ter vários parâmetros, mas só um retorno 

export class Personagem{ // instaciando uma class e seus atributos
    nome : string = ""
    energia: number = 0;
    vida: number = 0;
    ataque : number = 0;
    defesa: number = 0;

    constructor(nome : string, energia : number, vida: number, ataque : number, defesa : number ){//Criação de uma contrutor
        this.nome = nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    status():string{ 
        return( 
        "Guerreiro: \n" +
        "\nNome: "+
        this.nome +
        ("\nEnergia: " + this.energia.toFixed(1)) +
        ("\nVida: " + this.vida.toFixed(1))+
        ("\nAtaque: "+ this.ataque.toFixed(1))+
        ("\nDefesa: "+ this.defesa.toFixed(1))
        )
       
    }
    treinarAtaque(): void{//Utilização de um método sem retorno
        this.ataque += Math.random() * 7
        this.energia -= Math.random() * 10
        this.isDead();  
        if(this.ataque > 100){
            this.ataque = 0;
        }
    }
    treinarDefesa():void{
        this.defesa += Math.random() * 5
        this.defesa -= Math.random() * 10
        this.isDead();
        if(this.defesa > 100){
            this.defesa = 0;
        }
    }
    descansar(hour: number):void{ // Método sem retorno com parâmetro
        this.energia += hour * Math.random() * 10;
           if (this.energia > 100){
            this.energia = 100;
           }
    }
    batalhar():number{ // Método com retorno de um número
        let desgaste: number = Math.random() * 100
        this.energia -= desgaste;
        this.isDead();
        return desgaste;
    }
    isDead():boolean{ // Método com retorno de verdadeiro ou falso 
     return this.energia < 0;
  }
}
