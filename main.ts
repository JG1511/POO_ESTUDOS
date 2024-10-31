 import { Personagem } from "./Personagem"; // Importando a classe Personagem
import prompt from "prompt-sync"

let teclado = prompt();
let person : Personagem = new Personagem("João",40,30,50,20)  // Criação de um objeto
let opcao = 0;

while(opcao != 9 || person.isDead()){//O loop só vai parar quando o usario selecionar a opção nove ou o personagem morrer.
    console.log(`+=============Personagem ${person.nome}============+`)
    console.log("|1. Treinar ataque                  |")
    console.log("|2. Treinar defesa                  |")
    console.log("|3. Descansar                       |")
    console.log("|4. Entrar em batalha               |")
    console.log("|8. Verificar Status                |")
    console.log("|9. Sair                            |")
    console.log("+===================================+")

    opcao = +teclado("Escolha uma ação: ")

    switch(opcao){
        case 1:
            person.treinarAtaque();//Chamando o Método
            console.log(person.status());
            break;
        case 2:
            person.treinarDefesa();
            console.log(person.status());
            break;
        case 3:
           let horas : number = +teclado("Digite o núemro de horas para descansar: ")
           person.descansar(horas);
           console.log(person.status());
            break;
        case 4:
            let rest:number = person.batalhar();
            console.log("Esta batalha custou",rest,"de energia");
            console.log(person.status());
            break;
        case 8:
            console.log(person.status());
            break;
        default:
            break;
    }
}