var i = 10;
var j = 5;
if (i>j) {
    document.write("i is the largest");
}
else if(j > i){
    document.write("J is the largest");
}
else{
    document.write("Both are the same");
}
var i = 1;
for(;i<=10;i++)
{
    console.log(`2 * ${i} = ${2*i}`);
}
var mailc = "aadi"
// var passc = "pass"
// while(true){
//     var mail = prompt("Enter mail:");
//     var pass = prompt("Enter password:");
//     if(pass == passc && mail == mailc)
//     {
//         alert("Logged In");
//         break;
//     }
//     else{
//         alert("Wrong");
//     }
// }
function greet(){
    document.write("Hello");
}
greet(); 

var person = {
    fullName : "bimin",
    age : 22,
    email: "biminism",
    aged : function(){
        this.age+10;
    }
}
console.log(person.fullName);

var guy = [{
    name: "aadi", email: "aadi@mail",Phone : [4324324,67648464]},{
    name: "aadi", email: "aadi@mail",Phone : [4324324,67648464]},{
    name: "aadi", email: "aadi@mail",Phone : [4324324,67648464]},{
    name: "aadi", email: "aadi@mail",Phone : [4324324,67648464]},{
    name: "aadi", email: "aadi@mail",Phone : [4324324,67648464]}]

// var nums=[];
// var num,largest = 0;
// for(var i = 0;i < 10;i++)
// {
//     num =parseInt(prompt(`Enter Number ${i+1}`));
//     if(largest < num)
//     {
//         largest = num;
//     }
//     nums.push(num);
// }
    // console.log(nums);
    // console.log(largest);
var names = ["aadi","bim","liz"];
names.forEach((n)=>{            //can also write as seperate function
    console.log(n.toUpperCase());
})