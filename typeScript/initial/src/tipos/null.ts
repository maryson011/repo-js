type Usuario2 = { nome: string; email: string };

const usuarios: Usuario2[] = [
  { nome: "João", email: "j@email" },
  { nome: "Pedro", email: "p@email" },
  { nome: "Maria", email: "m@email" },
  { nome: "Rafaela", email: "r@email" },
  { nome: "Amanda", email: "a@email" },
];

function buscarEmail(email: string): Usuario2 | null {
  return usuarios.find((u) => u.email === email) ?? null;
}

console.log(buscarEmail("p@email"));
console.log(buscarEmail("x@email"));
