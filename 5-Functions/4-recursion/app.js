function recursion(n){
    if( n-1 == 2){
        console.log('Recursão Parou')
    }else if(n % 2 != 0){
        console.log("Numero impar")
        recursion(n-1)
      
    }  else{
           console.log('Numero par') 
           recursion( n - 2)
    }
}

recursion(39)
recursion(23)
recursion(10)