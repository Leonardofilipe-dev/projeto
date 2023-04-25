let a = 10;
let b = 30;
let c = 50;

if(c >= a){
    a = b;
    debugger;
}

for(let i = 5; i > 0; i --){
    b++;
    a = a + 1;
    c += 2;
    debugger;
}

if(b==a){
    a++;
} else{
    a = a + b + c;
    debugger;
}

a = a * b;
debugger;

console.log("Teste");
