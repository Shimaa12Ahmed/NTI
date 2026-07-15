var data =[
    {name:"Omar",city:"Cairo"},
    {name:"Shimaa",city:"Cairo"},
    {name:"A’laa",city:"Giza"},
    {name:"Nour",city:"Alex"}
];
var categorieCoxntries={};
for (const x of data) {
      if (!categorieCoxntries[x.city]) {
        categorieCoxntries[x.city] = [];
    }

    categorieCoxntries[x.city].push(x);
}

console.log(categorieCoxntries);
