function calcular(tipo, valor) {
  if(tipo === "acao") {

    if(valor === "c") {
      //Limpar visor 
      document.getElementById("resultado").value = ""
    }

    if( valor === "+" || valor === "-" || valor === "*" || valor === "/" || valor === ".") {
      document.getElementById("resultado").value += valor
    }

    if(valor === "=") {

      //Eval é usado para o JS entender que a calculadora vai fazer o calculo
      let valor_campo = eval(document.getElementById("resultado").value)
      document.getElementById("resultado").value = valor_campo
    }

  } else if(tipo === "valor") {
    document.getElementById("resultado").value += valor
  }
} 