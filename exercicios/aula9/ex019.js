const num = [0,4,2,1,8]
num.sort()
//console.log(num);

/* console.log(num[0]);
console.log(num[1]);
console.log(num[2]);
console.log(num[3]);
console.log(num[4]);

for (let pos=0;pos<num.length;pos++) {
    console.log(`A posição de ${pos} tem o valor ${num[pos]}`);   
} */

for (let pos in num) {
    console.log(`A posição de ${pos} tem o valor ${num[pos]}`); 
}

console.log(`O valor de ${num[4]} esta na posição ${num.indexOf(8)}`);