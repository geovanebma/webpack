//Arquivo de configuração webpack
//npm init -y - Cria um arquivo package.json dentro da pasta webpack
//Depois, verifique o arquivo package.json e veja as dependencias e start do projeto, depois no terminal digite npm i para instalar

const webpack = require('webpack')

//node: 'development' - desenvolvimento
//node: 'production' - produção
//Para compreender as duas funcionalidades, dentro da pasta dist no arquivo main.js você verá a diferença

//entry: './src/principal.js' - arquivo de entrada
//filename: '/public' - caminho de saída
//path: 'principal.js' - arquivo de saída
module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output:{
        filename:"principal.js",
        path: __dirname + '/public'
    }
}

//Para executar e imprimir no nonsole, execute o comando:
//npm start; node dist/main.js