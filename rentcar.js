function rentcar(n){
    s=n*40;
    if(n>=7) s-=50;
    else if(n>=3) s-=20;
    return s;
}
console.log(rentcar(2));
console.log(rentcar(4));
console.log(rentcar(8));