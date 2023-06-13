/*
    O que precisamos fazer? - quando clicamos no botao de troca de tema temos alterar a cor do tema da pagina para as cores do tema claro ou do tema escuro

    - objetivo 1 - quando clicar no botao de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem para lua
        - passo 1 - pegar no js o elemento HTML corespondente ao botao de troca de tema
        -passo 2 - dar um jeito de pegar no js o elemento HTML corespondente ao body
        - passo 3 - dar um jeito de indentificar o clique do usuario no botao de troca de tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a iamgem do boatao de alterar tema para lua

    - objetivo 2 - quando clicar no botao de troca de tema, caso o body ja tenha a classe modo-escuro, remover a classe pra mudar pro lado e mudar a imagem pro sol
        - passo 6 - remover a classe do modo-escuro do body
        - passo 7 - trocar a imagem do botao de alterar tema pra sol
*/

// objetivo 1 - quando clicar no botao de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem para lua

const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaotrocadeDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");    

 if(modoEscuroEstaAtivo) {
    body.classList.remove("modo-escuro");
    
    imagemBotaotrocadeDeTema.setAttribute("src", "./src/imagens/sun.png");

 } else {
   body.classList.add("modo-escuro");

  imagemBotaotrocadeDeTema.setAttribute("src", "./src/imagens/moon.png");
 }


});

