function basicmath(op,num1,num2){
    if(op=='+') return num1+num2;
    else if(op=='-') return num1-num2;
    else if(op=='/') return num1/num2;
    else if(op=='*') return num1*num2;
}
console.log(basicmath('+',2,3));
console.log(basicmath('-',4,3));
console.log(basicmath('*',2,9));
console.log(basicmath('/',22,2));