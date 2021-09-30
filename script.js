function media(){
     var n1 = parseFloat(document.getElementById("n1").value);
     var n2 = parseFloat(document.getElementById("n2").value);
     var n3 = parseFloat(document.getElementById("n3").value);
     var n4 = parseFloat(document.getElementById("n4").value);

     var media = (n1 + n2 + n3 + n4)/4 ;

     if(media >= 7)
      if(media==10)
       alert("Aprovado com nota máxima");
      else
       alert(`Parabéns, aprovado! Media ${media.toFixed(1)}`);
     else
      alert(`Reprovado! Media ${media.toFixed(1)}`);

    }
function converter(){
  var valor = parseFloat(document.getElementById("fahr").value);
  
  var cel = (valor-32)/1.8;
  alert("A temperatura é: "+cel.toFixed(1)+"°")
}