function seleccionarpais(){
    let combo1 = document.getElementById("combo1");
    let pais1 = combo1.value;
    document.getElementById("paiseleccionado").innerText= `¿Qué energía renovable te gustaría que se desarrolle en ${pais1}?`;

}