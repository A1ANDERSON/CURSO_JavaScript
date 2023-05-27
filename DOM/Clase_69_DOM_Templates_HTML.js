const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content, //NO queremos acceder a la etiqueta template-card, si no a su contenido por eso el content.
  $fragmento = document.createDocumentFragment(), //CReamos un fragmento, que vaya almacenando dinamicamente la informacion
  //Es un arreglo y cada tarjeta seria un objeto con sus respectivos atributos
  cardCOntent = [
    {
      title: "Tecnologia",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

cardCOntent.forEach((el) => {
  //querySelector seleccionamos la etiqueta, setAttribute el atributo de la etiquea :v
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  //textContent queremos que ponga el titulo de la etiqueta
  $template.querySelector("figcaption").textContent = el.title;

  //EL TEMPLATE ES UNICO, ENTONCES TENEMOS QUE CLONAR EL NODO
  // importNode(variable para clonar, un booleano si es true "va a copiar toda la estructura interna" si le pasamos un false nomas copiaria la etiqueta template de abertura y cierre)
  let $clone = document.importNode($template, true); //Nodo creado basado desde el template de arriba

  $fragmento.appendChild($clone); //Aqui le decimos al fragmento que le vamos a agregar ese clon "$clone"
});

$cards.appendChild($fragmento); //Al elemento cards le agramos el fragmento y asi hacemos una insercion al dom
