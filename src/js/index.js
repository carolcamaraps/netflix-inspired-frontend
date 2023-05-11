const botoesCarrosel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const descricoes = document.querySelectorAll(".descricao");
const logos = document.querySelectorAll(".logo");
const botoesAssistir = document.querySelectorAll(".botao-assistir");

botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        esconderLogoAtivo();

        esconderDescricaoAtiva();

        esconderBotaoAssistirAtivo();

        mostrarImagemDeFundo(indice);

        mostrarLogoDeFundo(indice);

        mostrarDescricaoDeFundo(indice);

        mostrarBotaoAssistirDeFundo(indice);
    })
});

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado");
  botaoSelecionado.classList.remove("selecionado");
}

function selecionarBotaoCarrossel(botao) {
  botao.classList.add("selecionado");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".imagem.ativa");
    imagemAtiva.classList.remove("ativa");
}

function esconderLogoAtivo() {
  const logoAtivo = document.querySelector(".logo.ativo");
  logoAtivo.classList.remove("ativo");
}

function esconderDescricaoAtiva() {
    const descricaoAtiva = document.querySelector(".descricao.ativa");
    descricaoAtiva.classList.remove("ativa");
}

function esconderBotaoAssistirAtivo() {
  const botaoAssistirAtivo = document.querySelector(".botao-assistir.ativo");
  botaoAssistirAtivo.classList.remove("ativo");
}

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add("ativa");
}

function mostrarLogoDeFundo(indice) {
  logos[indice].classList.add("ativo");
}

function mostrarDescricaoDeFundo(indice) {
  descricoes[indice].classList.add("ativa");
}

function mostrarBotaoAssistirDeFundo(indice) {
  botoesAssistir[indice].classList.add("ativo");
}