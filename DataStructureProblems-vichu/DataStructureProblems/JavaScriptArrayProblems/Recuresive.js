function Recurse(a){
    if(a==0){
        return;
    }
    Recurse(a-1);
    console.log(a);
  
}

Recurse(5); 