console.log("Q1");
console.log(-9*3);
console.log("value is "+50);
console.log(17%5);
console.log(5%17);
console.log(5/10);
console.log(4==4);
console.log(4!=5);
console.log(7<=8);
console.log( Math.ceil(5.6) - Math.floor(5.6));

console.log("Q2");
alert(prompt("Enter any number"))

console.log("Q3");
const n1 = prompt("Enter number one")
const n2 = prompt("Enter number two")
if(n1>=n2){
    console.log(n2 +"  "+n1)
}else{
    console.log(n1 +"  "+n2)
}
console.log("Q4");
const n3 = prompt("Enter number one")
const n4 = prompt("Enter number two")
if(n3>n4){
    console.log("larger number is :"+n3)
}else if(n4>n3){
    console.log("larger number is :"+n4)
}else{
    console.log("tow numbers is equal")
}
console.log("Q5");
const n5 = prompt("Enter number one")
const n6 = prompt("Enter number two")

console.log(n5 + n6);
console.log("prompt input is string not number")
console.log("Q6");

 arr = ['ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE']
 var num = prompt("enter number")
 var result=0;
 for(let x=1 ;x<10;x++){

    if(num == (x)){
        console.log(arr[x-1])
        result=num;
    }
 }
 if(result == 0){
    console.log("PLEASE TRY AGAIN, if there is none of the above")
 }