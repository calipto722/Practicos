let contenedor = document.getElementById("contenido");
let hijos = contenedor.childNodes;

let cantidad = hijos.length;
console.log("cantidad de nodos " + cantidad);
for (let i = 0; i < cantidad; i++) {

    let nodo = hijos[i];
    // Verificar si el nodo es un elemento
    if (nodo.nodeType === 1) {
        console.log("Tipo de nodo: Elemento");
        console.log("Nombre del elemento: " + nodo.nodeName);
        console.log("Contenido del elemento: " + nodo.textContent.trim());
    } else if (nodo.nodeType === 3) { // Verificar si el nodo es un nodo de texto
        console.log("Tipo de nodo: Texto");
        console.log("Contenido del texto: " + nodo.textContent.trim());
    }

}
let items = ["Laboratorio 1", "Web 2", "Matemáticas"];
//Agregar a la lista ordenada del documento.

let lista = document.getElementById("lista");
for (let j = 0; j < items.length; j++) {
    let elemento = document.createElement("li");
    elemento.textContent = items[j];
    lista.appendChild(elemento);
}
items.forEach(item => {
    let elemento = document.createElement("li");
    elemento.textContent = item;
    lista.appendChild(elemento);
});