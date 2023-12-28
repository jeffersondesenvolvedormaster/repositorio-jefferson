
//Slider automático

var indice_slide_auto = 0;
trocarSlides();

function trocarSlides() {
    var i_auto;
    var slides_auto = document.getElementsByClassName("meus-slides-auto");
    var ponto_indicador_auto = document.getElementsByClassName("ponto-indicador-slide");
    for (i_auto = 0; i_auto < slides_auto.length; i_auto++) {
       slides_auto[i_auto].style.display = "none";  
    }
    indice_slide_auto++;
    if (indice_slide_auto > slides_auto.length) {indice_slide_auto = 1}    
    for (i_auto = 0; i_auto < ponto_indicador_auto.length; i_auto++) {
        ponto_indicador_auto[i_auto].className = ponto_indicador_auto[i_auto].className.replace(" ativo", "");
    }
    slides_auto[indice_slide_auto-1].style.display = "block";  
    setTimeout(trocarSlides, 2000);
}

