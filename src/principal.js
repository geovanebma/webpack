import Pessoa from './pessoa.js'
import './modulos/moduloA'//forma de chegar nos módulos para executar o módulo B
// const Pessoa = require('./pessoa')

const atendente = new Pessoa
console.log(atendente.cumprimentar())