const caixaPrincipal = document. querySelector('.caixa-principal')
const caixaPerguntas = document. querySelector('.caixa-perguntas')
const caixaAlternativas = document. querySelector('.caixa-alternativas')
const caixaResultado = document. querySelector('.caixa-resultado')
const textoResultado = document. querySelector('.texto-resultado')

const perguntas = [
        {
          enunciado:
            "Jogar futebol sempre foi meu sonho, jogo desde meus 5 anos, era minha maior paixão. Aos meus 12 anos, tive que fazer uma difícil escolha...",
          alternativas: [
            {
              texto: "Ir jogar no Flamengo",
              afirmacao: "afirmação",
            },
            {
              texto: "Ir jogar no Santos",
              afirmacao: "afirmação",
            },
          ],
        },
        {
          enunciado:
            "Chegando no CT Rei Pelé, fui destaque na base e aos meus 18 anos, ganhei minha primeira Libertadores e recebi propostas de grandes times.",
          alternativas: [
            {
              texto:
                "Ir para o Real Madrid",
              afirmacao: "afirmação",
            },
            {
              texto:
                "Ir para o Barcelona",
              afirmacao: "afirmação",
            },
          ],
        },
        {
          enunciado:
            "Chegando no Real Madrid, jogando ao lado de Cristiano Ronaldo, foi o auge da minha carreira, ajudando o time a ganhar sua 10ª Champions. Tive a maior notícia da minha carreira, minha convocação pela seleção brasileira!",
          alternativas: [
            {
              texto:
                "Ir jogar a Copa do Mundo pela seleção",
              afirmacao: "afirmação",
            },
            {
              texto:
                "Continuar no clube e disputar o Mundial",
              afirmacao: "afirmação",
            },
          ],
        },
        {
          enunciado:
            "Ao segundo jogo, tive uma grave lesão, onde muitos pensaram que eu não poderia mais jogar essa Copa, já havia perdido as esperanças",
          alternativas: [
            {
              texto:
                "Fazer fisioterapia e ser capaz de jogar somente a final",
              afirmacao: "afirmação",
            },
            {
              texto: "Me guardar dessa Copa do Mundo e poder jogar a próxima, somente daqui 4 anos",
              afirmacao: "afirmação",
            },
          ],
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if(atual >= perguntas.length){
    mostraResultado();
    return;
  }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
  const afirmacoes = opcaoSelecionada.afirmacoes;
  historiaFinal += afirmacoes + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado(){
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();
