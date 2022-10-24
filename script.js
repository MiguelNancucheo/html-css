// script

let el_bot_coockie = document.getElementById('bot_coockie');
console.log(el_bot_coockie);

el_bot_coockie.addEventListener('click', function() {
    let padre = el_bot_coockie.parentElement;
    padre.remove()
    console.log(padre);

})

