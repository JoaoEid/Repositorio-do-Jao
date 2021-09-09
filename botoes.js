let tamanho = 2;
function mudartamanho() {
  h1 = document.querySelector("h1");
  h1.style.fontSize = `${tamanho}em`;
}
function aumentartamanho() {
  tamanho += 0.5;
  mudartamanho();
}
function diminuirtamanho() {
  if (tamanho > 0) {
    tamanho -= 0.5;
    mudartamanho();
  }
}
function colocarBotoes() {
  div = document.createElement("div")
  div.innerHTML = ´
    <button onclick="aumentartamanho()">+</button>
    <button onclick="diminuirtamanho()">-</button>
  ´
  document.body.append(div);
}

   
  

