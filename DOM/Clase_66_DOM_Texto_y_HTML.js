const $whatIsDOM = document.getElementById("que-es");

let text = `
<p>
  El modelo de objetos del documento (<b> <i> DOM - Document Object MOdel </i><b>) es un API para documentos HTML y XML
</p>

<p>
  Este provee una representacion estructural del documentos, permitiendo modificar su contenido y presentacion visual mediante codigo JS
</p>

<p>
  <mark> El DOM no es parte de la especificacion de JavaScript, es una API para los navegadores </mark>
</p>
`;

$whatIsDOM.innerText = text; //No es parte del estandar utilizar esto,
$whatIsDOM.textContent = text; //Para insertar solo texto
$whatIsDOM.innerHTML = text; //Solo codigo html
$whatIsDOM.outerHTML = text; //Reemplaza todo, hasta la etiqueta.
