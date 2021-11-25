// Sintaxis simple:
/* function nombre (parámetros(opcional)){
        cuerpo / insstrucciones;
        resultado (opcional);
} */

function saludar(){
    console.log("Hola carambola"); // cerrar siempre con ;
    // este tipo de función se llama método ya que va asociada a un objeto (la consola)
}
// esta función básica no toma ninguna entrada ni devuelve un valor, solo muestra lo que ponemos

saludar(); // llamando la función para su ejecución

// función con parámetros:
function name(par1, par2, par3){}

function saludo(name){
    const mensaje = "Hola, ${name}!";
    console.log(mensaje);
    return mensaje;
}

saludo("Carmen");
