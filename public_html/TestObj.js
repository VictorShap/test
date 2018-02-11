var user = {
  name: "Вася",
  hi: function() { alert(this.name); },
  bye: function() { alert("Пока"); }
};

//  user.hi(); // Вася (простой вызов работает)

// а теперь вызовем user.hi или user.bye в зависимости от имени
(user.name == "Вася" ? user.hi : user.bye)(); // undefined



/*user={};
user.name="Vasia";
user.surname="Petrov";
user.name="Sergei";
delete user.name;

styles=["Djaz","Bluz"];
styles.push("Rock");
styles[styles.length-2]="Classik";
//alert(styles.pop());
styles.unshift("Rap");
styles.unshift("Reggi");

arr=["Яблоко", "Апельсин", "Груша", "Лимон"];
min=0;


max=arr.length-1;
var rand = min + Math.floor(Math.random() * (max + 1 - min));
console.log(rand);
alert(arr[rand]);

ssd=[];
 var result=0;
while(true){
//value=+prompt("",0);
if (value === "" || value === null || isNaN(value)) break;
    ssd.push(value);
       
result=result+ssd[ssd.length-1];

//alert(result);
}




arr1=[1,2,55,"I"];
function find(value){
    for(i=0;i<arr.length;i++){
        if(value===arr1[i]){
            return i;
        }
    }
   return -1;
}

alert (find(5));

var arr = [5, 4, 3, 8, 0];
function  filtered(a,b){
    var arr1=[];
    for(i=0;i<arr.length;i++){
        if(a<=arr[i] && arr[i]<=b){
            arr1.push(arr[i]);
            
        }
    }
return arr1;
}

alert(filtered(3,5));



var newArr = arr.every((element, index, arr)=> element>5 );

//alert(newArr);



onsole.time('Timer1');
 
var items = [];
 
for(var i = 0; i < 100000; i++){
   items.push({index: i});
}
 
console.timeEnd('Timer1');
*/
/*var arr = ["Есть", "жизнь", "на", "Марсе"];
 alert(arr.map((el)=>el.length));
/*
function getSums(arr) {
  var res=[];
   var result=0;
   if(!arr.length) return res;
   
    arr.reduce(function(perv, curr, index, arr) {
    res.push(perv);
    if(index==arr.length-1){
        res.push(curr+perv);
    }
    return perv + curr;
  });
for(i=arr.length-1;i>=0;i--){
result=arr[i]+result;    
}
res[res.length]=result;
return res;  
}
//alert(getSums([]));

var names = ['Маша', 'Петя', 'Марина', 'Василий'];

//var arr = names.split(', ');

console.log (names.join(' и '));


function camelize(str){
    var strg=str.split('-');
 var arr=[];
    for(i=0;i<strg.length;i++){
   if(i!==0){
        arr.push( strg[i].charAt(0).toUpperCase()+ strg[i].substring(0));
   }else{
       arr.push(strg[i]);
   }
        }
return arr.join('');
}
alert(camelize("-gggg-fff-ggg"));
*/
/*function camelize(str){
    var strg=str.split('-');
 var arr=[];
    strg.forEach((el,index)=>index!==0? arr.push( el.charAt(0).toUpperCase()+ el.substring(0)):arr.push(el));
return arr.join('');
}
alert(camelize("-gggg-fff-ggg"));

var obj = {
  className: 'open menu open menu open menu'
};
function removeCLas(obj,cls){
    var arr=obj.className.split(' ');
 var arr1 =arr.filter((el)=>el!==cls);
obj.className=arr1.join(' ');
return obj;
}
console.log(removeCLas(obj,"menu"));

var menu = {
  width: 300,
  height: 200,
  title: "Menu"
};
for(var key in menu){
    console.log(key);
console.log(menu[key]);
}

var schedule = {};
function isEmpty(schedule) {
for(var key in schedule){
    return false;
}
return true;
}
alert(isEmpty(schedule));

"use strict";
var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};
function pls(salaries){
    var result=0;
    for(var key in salaries){
       result=result+salaries[key];
    }
return result;
}
alert(pls(salaries));


var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 1000
};
function pls(salaries){
    var arr=[];
    for(var key in salaries){
         arr=Object.values(salaries);
    }
arr.sort((a,b)=>a>b?1:-1);
return arr[arr.length-1];
}
alert(pls(salaries) || 0 );

var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
function multiplyNumeric(menu){
    for(var key in menu){
        if(!isNaN(parseFloat(menu[key])) && isFinite(menu[key])){
    menu[key]=menu[key]*2;
        }
        }
return menu;
}
console.log(multiplyNumeric(menu));
*/





//alert( counter() ); // ?
//alert( counter() ); // ?

//alert( counter2() ); // ?



function onlyRu(){
    var self = this;
    console.log(self);
    var regexp = /[^0-9\s,]/;
  var bol=regexp.test(document.getElementById('rus').value);
    
 
if(bol===true){
  document.getElementById("num").style.display = "block";  
document.getElementById("num").style.color = "red";  
document.getElementById("rus").style.color = "red";  
document.getElementById("rus").style.borderColor = "red";  
}else{
    document.getElementById("num").style.display = "none";    
document.getElementById("rus").style.color = "black";  
document.getElementById("rus").style.borderColor = "black";  
}
}
    