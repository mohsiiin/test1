var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var rest = document.getElementById('Restaurants');
var strtfood = document.getElementById('Street Foods');
var tabfull = document.querySelector('.tab');

btn1.addEventListener('click',fxn1);
btn2.addEventListener('click',fxn2);
function fxn1(e){
    rest.classList.toggle("tabcontentnew");
    strtfood.classList.remove("tabcontentnew");
}
function fxn2(e){
    strtfood.classList.toggle("tabcontentnew");
    rest.classList.remove("tabcontentnew");
}
