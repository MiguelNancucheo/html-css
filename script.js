// script

let el_bot_coockie = document.querySelector('#bot_coockie');

el_bot_coockie.addEventListener('click', function() {
    let padre = el_bot_coockie.parentElement;
    padre.remove();
})



let el_carro= document.querySelector('.img_cart');

el_carro.addEventListener('click', function() {
    alert('Your Cart is empy!');
})



let ele_play = document.querySelector('#img_play');

ele_play.addEventListener('mouseover', function () {
    ele_play.src = 'images/assets/succulents-2.jpg'
})

ele_play.addEventListener('mouseout', function () {
    ele_play.src = 'images/assets/succulents-1.jpg'
})

