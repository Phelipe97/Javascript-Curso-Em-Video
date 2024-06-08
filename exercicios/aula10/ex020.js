/* function soma(a=0,b=0){
    return a+b;
}

console.log(soma(10,10))  */

/* function parImp(n){
    if (n%2 == 0) {
        return "E par";
    } else {
        return "E impar";
    }
    
}
let res = parImp(12)

console.log(res); */

/* const v = (x)=>{
    return x*2
}

console.log(v(5)); */

/* function fatorial(n){
    let fat =1
    for (let c = n; c > 1; c--) {
        fat*=c
    }
    return fat
}

console.log(fatorial(5)); */

//Recursividade
function recFatorial(n){
    if(n == 1){
        return 1
    }else{
        return n * recFatorial(n-1)
    }
}

console.log(recFatorial(5));