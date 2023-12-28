//Slider manual

var indice_slide = [1,1];

//Abaixo é possível inserir um conjunto maior de slides a serem exibidos. Exemplo: var classe_slides = ["meus-slides","meus-slides-2"];
var classe_slides = ["meus-slides"];


function mostrar_slides(n, no) {
  var i;
  var x = document.getElementsByClassName(classe_slides[no]);
  if (n > x.length) {indice_slide[no] = 1}    
  if (n < 1) {indice_slide[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[indice_slide[no]-1].style.display = "block";  
}



mostrar_slides(1, 0);
function controlador_slides(n, no) {
  mostrar_slides(indice_slide[no] += n, no);
}