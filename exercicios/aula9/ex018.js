const auto = ["toyota","fiat","chevrolet"]

console.log(auto);

console.log(`Esta lista de carros inicialmente tem ${auto.length} carros`);

console.log(`A segunda marca da lista e a ${auto[2]}`);

auto[3]= "wolkswagen"

console.log(`Agora a lista de carros  tem ${auto.length} carros`);

auto.unshift("dodge")//acrescenta no começo
auto.push("chery")//acrescenta no final

console.log(auto);
auto.sort()

console.log(`Em ordem alfabetica os carros agora ficaram assim: ${auto}`);

let pos = auto.indexOf("fiat")
if(pos == -1){
    console.log("Valor não encontado");
}else{
    console.log(`O valor de fiat esta na posição ${pos}`);
}


