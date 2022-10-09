const circles = document.querySelectorAll('.yellow-circle')
const prices = document.querySelectorAll('.number')
const inputAmount = document.querySelector('.input-amount')


function clear(){
    for(let i = 0; i < circles.length; i++){
        circles[i].classList.remove('active-num')
        prices[i].classList.remove('active-num')
    }
}

function check(){
    for(let i = 0; i < circles.length; i++){
        let newPrice = prices[i].textContent.replace('$','')
        if(inputAmount.value == Number(newPrice)){
            prices[i].classList.add('active-num')
            circles[i].classList.add('active-num')
        }
        else{
            prices[i].classList.remove('active-num')
            circles[i].classList.remove('active-num')
        }
    }
}

function numberLimitation (inp, limit) {
    var t = typeof inp === "string" ? document.querySelector (inp) : inp,
    f = function (e) {
        var v = t.value.split ("");
        if (v.length > limit) {
              t.value = v.slice(0, limit).join("") - 1;
        }
    };
    t.addEventListener ("input", f);
}

window.addEventListener ("load", function () {
  numberLimitation(".input-amount", 4);
});

inputAmount.addEventListener("input", function () {
    check()
});

circles.forEach((circle) => {
    circle.onclick = (e) => {
        clear()
        circle.classList.add('active-num')
        prices[Array.from(circles).indexOf(circle)].classList.add('active-num')
        var priceWithoutDollar = prices[Array.from(circles).indexOf(circle)].textContent.replace('$','');
        inputAmount.value = Number(priceWithoutDollar)
    };
});