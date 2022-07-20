//находим элементы для взаимодействия
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]')

//отсеживаем кнопку на минус
btnMinus.addEventListener('click', function(){
    //проверяем что бы счетчик был больше единицы
    if(parseInt(counter.innerText) > 1){
        //изменяем текст в счетчике уменшая его на единицу
        counter.innerText = --counter.innerText
    }
})

//отсеживаем кнопку на плюс
btnPlus.addEventListener('click', function(){
        //изменяем текст в счетчике увеличивая его на единицу
    counter.innerText = ++counter.innerText
})
