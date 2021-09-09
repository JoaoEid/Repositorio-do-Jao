<!DOCTYPE html>
<html>
<head>
  <title>Formatação de texto com Java Script</title>
  <style type="text/css">
    h1 {
      font-size: 20px;
    }
  </style>
</head>
<body>
  <h1>Olá, pessoas. Sejam bem-vindas à minha página. É possível alterar o tamanho do texto utilizando os botões</h1>
  <button onclick="+()">+</button>
  <button onclick="-()">-</button>
  <div class="btn-container">
    <button name="increase-font" id="increase-font" title="aumentar fonte">+</button>
    <button name="decrease-font" id="decrease-font" title="diminuir fonte">-</button>
  </div>
  <script> 
    font.Size: 40px;
    function +() {
      document.querySelector('h1').style.fontSize = large;
    }
    
    function -() {
      documento.querySelector('h1').style.fontSize = medium;
    }
  </script>
</body>
</html>
