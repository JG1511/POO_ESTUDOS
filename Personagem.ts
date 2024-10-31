// Rodar o codigo direto do TS é so baixar o npm i -g ts-node --save. Depois é so utilizar o ts-node nome_do_aquivo
//Toda vez que pensar imprimir na classe use retorno ou seja VOID
//Todo vez que pensar em ler dados na classe, use paramentro
// Posso ter vários parâmetros, mas só um retorno 

export class Personagem{ // instaciando uma class e seus atributos
constructor(// encapsulamento 
    private _nome : string,
    private energia : number,
    private vida : number,
    private ataque : number,
    private defesa : number
){}

    
    public get nome() : string {//método acessor
        return this._nome;
    }
    
    public set nome(nome : string) {// método modificador 
        this._nome = nome;
    }
    
    
    public status():string{ 
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
    public treinarAtaque(): void{//Utilização de um método sem retorno
        this.ataque += this.randomizar(7);
        this.energia -= this.randomizar(10);
        if(this.ataque > 100){
            this.ataque = 0;
        }
    }
    public treinarDefesa():void{
        this.defesa += this.randomizar(5);
        this.defesa -= this.randomizar(10);
        if(this.defesa > 100){
            this.defesa = 0;
        }
    }
    public descansar(hour: number):void{ // Método sem retorno com parâmetro
        this.energia += hour * this.randomizar(10);
           if (this.energia > 100){
            this.energia = 100;
           }
    }
    public batalhar():number{ // Método com retorno de um número
        let desgaste: number = this.randomizar(10);
        this.energia -= desgaste;
        this.isDead();
        return desgaste;
    }
    public isDead():boolean{ // Método com retorno de verdadeiro ou falso 
     return this.energia < 0;
  }
     private randomizar(fator: number): number{
    return Math.random() * fator;
  }
}
