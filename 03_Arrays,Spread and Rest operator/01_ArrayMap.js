const arr = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
const newFruits = arr.map( (fruit)=>{
    if (fruit == ' '){
        fruit =  'empty string'
    }
    return fruit;
})
console.log(newFruits);