const pizzas = [
  {
    id: 1,
    nombre: "Promo",
    ingredientes: ["salsa", "queso", "jamon", "morron"],
    precio: 590,
  },
  {
    id: 2,
    nombre: "4 Quesos",
    ingredientes: ["salsa", "mozzarella", "roquefort", "parmesano", "tybo"],
    precio: 1000,
  },
  {
    id: 3,
    nombre: "Pollo",
    ingredientes: ["salsa", "queso", "pollo", "crema"],
    precio: 970,
  },
  {
    id: 4,
    nombre: "Tropical",
    ingredientes: ["salsa", "queso", "jamon", "cerezas", "anana"],
    precio: 1050,
  },
  {
    id: 5,
    nombre: "Puerro",
    ingredientes: ["salsa", "queso", "oregano"],
    precio: 950,
  },
  {
    id: 6,
    nombre: "Roquefort",
    ingredientes: ["salsa", "queso", "roquefort"],
    precio: 1200,
  },
];

const form = document.querySelector("body > div.inputs > form");
const input = document.querySelector("#inputNumber");

form.addEventListener("submit", (e) => {
  console.log("Formulario enviado");
  const resultado = input.value;
  buscadorPizzas(resultado);
});

const buscadorPizzas = (resultado) => {
  pizzas.map((pizza) => {
    const { nombre, precio } = pizza;
    const h2 = document.querySelector("#nombrePizza");
    const h4 = document.querySelector("#precioPizza");

    if (resultado == pizza.id) {
      h2.textContent = "Nombre: " + nombre + " ";
      h4.textContent = "Precio: " + precio + " ";
    } else {
      h2.textContent = "Articulo no encontrado ";
      h4.textContent = "prueba con un numero del 1 al 6 ";
    }
  });
};
