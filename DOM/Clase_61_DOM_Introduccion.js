console.log("---------Elementos del documentos------------");

//El objeto padre el objeto global en javascript de los navegadores es window y de window cuelga todas estas apis  del navegador, todo lo que cuelga del dom no es necesario anteponerle un window por ejemplo windows.alet, windows.documente, etc.

console.log(window.document);
console.log(document);
console.log(document.head); //Nos devuelve la parte solo de la cabeza del documento html
console.log(document.body); //Nos devuelve el body
console.log(document.documentElement); //Nos devuelve el html, el tipo de documento.
console.log(document.doctype); //Tipo de documento
console.log(document.charset);
console.log(document.title);
console.log(document.links); //OJO no nos devuelve un arreglo, parece pero no es, bueno esto nos devuelve los links
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

//getSelection registra el texto que hemos seleccionado del dom,pero tenemos que convertirlo a string para poder visualizarlo
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);
