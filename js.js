var linkCss = document.getElementById('cssLink');
var boton = document.getElementById("boton");
var img = document.getElementById("img");
var diaNoche = 0;
//console.log(boton.textContent);

function cambiarEstilos(){
    if(diaNoche==0){
        linkCss.href="noche.css";
        console.log(boton.textContent);
        img.src="luna.png";
        boton.textContent ="Day";
        diaNoche = 1;
    }
    else if(diaNoche==1){
        linkCss.href= "dia.css";
        console.log(boton.textContent);
        img.src="sol.png";
        boton.textContent ="Night";
        diaNoche = 0;
    }
}

boton.addEventListener("click", cambiarEstilos);