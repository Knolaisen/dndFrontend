let currentIniativeNumber = 0;

const initiativeOrder = [];

const arrowUp = document.querySelectorAll("arrow-up");
const arrowDown = document.querySelectorAll("arrow-down");
console.log(arrowDown)

function handleArrowClick(n){
    currentIniativeNumber += n;
    console.log(currentIniativeNumber);
}

arrowUp.addEventListener("click", function(){
    handleArrowClick(-1);
});
arrowDown.addEventListener("click", function(){
    handleArrowClick(1);
});
