let a = 10
let b = 30
let c = 50

if(c>a){
    a = b
    console.log(a)
}

for(let i = 5; i > 0; i --){
    b++;
    a = a + 1;
    c += 2;
    console.log(a)
}

if(b==a){
    a++;
} else{
    a = a + b + c;
    console.log(a)
}

a = a * b;