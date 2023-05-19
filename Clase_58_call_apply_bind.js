console.log(this);
this.lugar = "Contexto Global";

function saludar() {
  console.log(`${this.lugar}`);
}

saludar();

const obj = {
  lugar: "Contexto Objeto",
};

saludar.call(obj);
saludar.apply(obj);
