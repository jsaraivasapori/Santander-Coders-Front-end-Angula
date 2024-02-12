const pizzas = [
  { sabor: "Mussarela", valor: 20 },
  { sabor: "Calabresa", valor: 25 },
  { sabor: "Marguerita", valor: 28 },
  { sabor: "Frango com Catupiry", valor: 32 },
  { sabor: "Portuguesa", valor: 30 },
];

const varredura = pizzas.forEach((pizza, index) =>{
  console.log(`Pizza ${index} -> Sabor: ${pizza.sabor}, Valor: ${pizza.valor}`);
})