/* typing animation */

const text = [
"Electronics and Computer Technology Student",
"KMUTNB",
"Welcome to my portfolio!"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0,++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){

count++;
index = 0;

setTimeout(type,1000);

}else{

setTimeout(type,100);

}

})();

/* particles background */

particlesJS("particles-js",{

particles:{
number:{value:80},
size:{value:3},
move:{speed:2},
line_linked:{enable:true}
}

});