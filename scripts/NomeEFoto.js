
// informações do usuario em variaveis
let userCred = JSON.parse(sessionStorage.getItem('user-credentials'))
let userinfo = JSON.parse(sessionStorage.getItem('user-info'))

// mudar o nome de usuario variaveis
let nome = userinfo.firstname.NomeCompleto.split(" ");
let username = document.querySelectorAll('.nome_usuario')
console.log(username)

// variaveis para alterar a foto de perfil
let foto_de_perfil_default = './images/foto_de_perfil_default.png'
let fotoSRC = userCred.photoURL

//transformar todas as variaveis de nome no nickname
username.forEach(name => {
    name.innerText = nome[0]
});

// transformar a foto em foto do google se for possivel

let divFoto = document.querySelectorAll(".foto_de_perfil_do_usuario")

if (userCred.photoURL) {
    divFoto.forEach(foto => {
        foto.src = fotoSRC
    });
} else {
    divFoto.forEach(foto => {
        foto.src = foto_de_perfil_default
    });
}