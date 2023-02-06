/**
 * OBJETIVO 1 - Quando o usuário clicar no botão de veja o trailer, devemos abrir a modal
 * com o vídeo do trailer.
 * - passo 1 - pegar o elemento que representa o botão na tela usando o javascript
 * - passo 2 - identificar quando o usuário clicar no botão.
 * - passo 3 - pegar o elemento da modal no js
 * - passo 4 - abrir a modal na tela
 * 
 * OBJETIVO 2 - Quando o usuário clicar no X devemos fechar a modal
 * - passo 1 - pegar o elemento de fechar a modal usando o js
 * - passo 2 - identificar quando o usuário clicar no X
 * - passo 3 - fechar a modal
 */

const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const fecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

function ativaModal() {
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    ativaModal();
    video.setAttribute("src", linkDoVideo);
});

fecharModal.addEventListener("click", () => {
    ativaModal();
    video.setAttribute("src", "");
})
