// Função chamada ao clicar no botão de curtir
function curtir(botao) {
  // Localiza o elemento que contém o número de curtidas dentro do botão clicado
  const contador = botao.querySelector('.count');
  
  // Converte o texto atual para um número inteiro
  let numeroCurtidas = parseInt(contador.innerText);
  
  // Incrementa +1 ao valor total de curtidas
  numeroCurtidas++;
  
  // Atualiza o texto exibido na tela com o novo valor
  contador.innerText = numeroCurtidas;
}