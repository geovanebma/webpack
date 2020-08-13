import './modulos/moduloA'//forma de chegar nos módulos para executar o módulo B

//Assinatura EcmaScript
export default class Pessoa{
    cumprimentar(){
        return 'Bom dia!'
    }
}

// module.exports = class Pessoa{
//     cumprimentar(){
//         return 'Bom dia!';
//     }
// }