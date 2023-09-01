let botao = document.querySelector('#cadastrar')

botao.addEventListener('click', () =>{

let tituloo = document.querySelector('.titulo').value
let nmPP = document.querySelector('.nmP').value

if (tituloo && nmPP) {
 alert('Registro realizado com sucesso!')
} else {
  alert('Por favor, preencha todos os campos!')
}
})