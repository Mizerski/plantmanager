// puxar query
// biometria
// face ID
// criar token
// criar classe de id
// manipular classe
// criar request de senha
// salvar classe
// criar calendario
// deletar classe
// enviar e-mail para validaçao
// criar validaçao da conta
//                                                                                                                          este código é apenas um esqueleto                                                                                                       //

// localStorage.setItem('username', 'id')

// const nome_usuario = localStorage.getItem('username')            // aqui fica o nome do usuario armazenado no lcoalstorage
// console.log(username);

const fs = require('fs');
const fileEncoding = 'utf8';

class login
{
    constructor(nome, email, password) {
        this.nome = nome
        this.email = email;
        this.password = password;
    }
}
// const login1 = new login(queryselector('input[email]'), queryselector('input[password]'));      // puxando o login inserido pelo usuario
// const user1 = new user_class(queryselector('input[nome]'), queryselector('input[id]'));       // puxando informaçoes do usuario
const pos = "#" + Math.floor(Math.random() * 1000000)          // gera um id único igual no Discord
function logar() {
    "are you on!"
}
//const nomePlanta = queryselector(nome_planta)
class suaPlanta        // objeto planta
{
    constructor(nome, tipo, id) {
        this.nomePlanta = nome;
        this.tipoPlanta = tipo;
        this.id = id
    }
    mostrar() {
        return `sua planta ${this.nomePlanta} foi criada com o tipo ${this.tipoPlanta}.`;
    }
}
const id_planta = "#" + Math.floor(Math.random() * 100000)
const planta_user = new suaPlanta("palmeiras", "arvore", id_planta);
let library1 = fs.readFileSync('./planta_criada.json', 'utf8')
let library = library1 != "" ? JSON.parse(library1):[]
library.push(planta_user);
fs.writeFileSync('./planta_criada.json', JSON.stringify(library, null, 2), fileEncoding)

let cadastro = new login("daniel", "danielphelipe12@hotmail.com", "pass");

let lerTrocar = fs.readFileSync('./cadastro.json', 'utf-8')
let cadastro_user = lerTrocar != "" ? JSON.parse(lerTrocar) : []
if (cadastro_user.length < 2){
    cadastro_user.push(cadastro)
    fs.writeFileSync('./cadastro.json', JSON.stringify(cadastro_user, null, 2), fileEncoding);
} else{
    fs.writeFileSync('./cadastro.json', JSON.stringify([cadastro], null, 2), fileEncoding);}


if (cadastro.email === undefined) {
    console.log("insira um email")
} else if (cadastro.password === undefined) {
    console.log("insira uma senha")
} else if (cadastro.email != undefined, cadastro.password != undefined) {
    console.log("você está logado!")
}

function mostrar_user() {
    fs.readFile('./user.json', 'utf-8', (error, dados_user) => {
        if (error) { console.log("algo deu errado. o erro foi " + error); }
        return;
    })
    try {
        console.log(dados_user);
    } catch (e) {
        console.log('Erro no recebimento dos dados do usuario. (mostrar_user)');
    }
}
mostrar_user();


// try     //tentar enviar informaçao para o servidor e, se forem igual, retorna erro
// {

// } catch (e) {

// }

// const inputImage = document.querySelector('arquivo');
// inputImage.addEventListener('change', function()
// {
//     const arquivo = this.files[0];
//     const leitor = new FileReader();
//         if(arquivo){
//             leitor.readAsText(arquivo);
//         }
// });

fs.readFile('./user.json', 'utf-8', (error, data) => {
    if (error) {
        console.log(error);
        return;
    }

    try {
        const user_dados = JSON.parse(data);
        console.log(user_dados.nome);
    } catch (e) { console.log("algo deu errado no nosso sitema. tente novamente mais tarde") }
});

// fs.writeFile('./cadastro.json', JSON.stringify(cadastro, null, 3), fileEncoding, (error, result) =>
// {
//     if(error)
//     {
//         console.log(error);
//         return;
//     }
// })



// for()