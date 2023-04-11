//assign 1



function clo (num1){


    return function(num2){
             console.log(num1 + num2);
    }
}


let cons = clo(5);
cons(5); 



// Assign 2
 let fruits = ["apple","mango","banan"];
  let inp = prompt("enter Fruit Name");

  fruits.filter(function(val){
    if (val == inp){
       return true;
    }
    else{
        return false;
    }

  });




//Assign 3

let a = document.querySelector("#addPara");
// a.innerHTML = "<h2>Hello World!</h2><p>Have a nice day!</p>";

function element1(abc){
    

   
    a.innerHTML = abc; 



}
element1("<h2>Hello World!</h2><p>Have a nice day!</p>");



//assign 4
function addItem(abc, def){
    let a = document.querySelector("#addItem");

    a.innerHTML = def;
}
addItem("animal");





//assign 5


function background(){
    let a= document.querySelector("h1");
    a.style.backgroundColor = "#000";
    a.style.color = "#fff";

}
background();




//Assign 6

let getemp = localStorage.getItem("employes");
let addemp1 = getemp ? JSON.parse(getemp) : [];


let addemp1 = [];


function addemp(){
 let obj ={
    name : prompt("Enter Name"),
    Cell : +prompt("Cell Number"),
    course : prompt("Course Name")

 }

addemp1.push(obj);
console.log(addemp1)
let strigify = JSON.stringify(addemp1);
localStorage.setItem("employes", strigify);


}


//Assign 7



let getemp = localStorage.getItem("employes");
let emp1 = JSON.parse(getemp);

console.log(emp1);



//Assign 8



function defi(obj){

    let filtr = JSON.stringify(obj);
    localStorage.setItem("obj23", filtr); 

    let getemp = localStorage.getItem("obj23");
    let emp1 = JSON.parse(getemp);
    return emp1;
    

}

defi({name:'taimoor',age:21});






















