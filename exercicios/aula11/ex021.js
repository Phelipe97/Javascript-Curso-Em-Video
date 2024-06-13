const humano ={
    name:'Phelipe',
    age:26,
    weigth:80,
    gender:'M',
    fat(p = 0){
        if (p>1) {
            console.log('Você Engordou');
            this.weigth += p
        }else{
            console.log('Você Emagreceu'); 
            this.weigth += p 
        }
        
    }
}

humano.fat(-10)
console.log(`${humano.name} pesa ${humano.weigth}`);

