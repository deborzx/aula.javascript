function soma(a) {
    return function(b) {
        return a + b;
    }
}

console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));
