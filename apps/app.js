const pizzas = [{
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

//a) Las pizzas que tengan un id impar.
console.log(
`Las pizzas que tiene el ID impar son: ${pizzas
.filter((pizza) => pizza.id % 2 !== 0)
.map((pizza) => pizza.nombre)}`
);
//b) ¿Hay alguna pizza que valga menos de $600?
console.log(
`Las pizzas baratas son: ${pizzas
.filter((pizza) => pizza.precio < 600)
.map((pizza) => pizza.nombre)}`
);
//c) Los nombres de todos las pizzas.
console.log(
`Las nombres de todas las pizzas son: ${pizzas.map((pizza) => pizza.nombre)}`
);
//d) Los precios de las pizzas.
console.log(
`Los precios de todas las pizzas son: ${pizzas.map((pizza) => pizza.precio)}`
);
//e) El nombre de cada pizza con su respectivo precio.
pizzas.forEach((pizzas) =>
console.log(
    "La pizza",
    pizzas.nombre,
    ", tiene un valor de: ",
    "$",
    pizzas.precio
)
);

var verFueraDeLaFuncion = [];    
    function subPalabras(){
                    palabrasDelUsuario = document.getElementById("inputNumber").value;
        verFueraDeLaFuncion = palabrasDelUsuario;
};
                
    function escribir2() {
        valor = document.getElementById('inputNumber').value;
        document.getElementById('nombrePizza').innerHTML=' '+valor;}