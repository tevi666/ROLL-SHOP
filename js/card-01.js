//див внутри корзины в который мы добавляем товары
const cartWrapper = document.querySelector('.cart-wrapper')

//отслеживаем клик на странице 
window.addEventListener('click', function(event){
    //проверяем клик был соверщен по кнопке добавить в корзину
    if(event.target.hasAttribute('data-cart')){

        //находим карточку с товаром внутри который был соверщен клик
        const card = event.target.closest('.card')

        //собираем данные с этого товара и записываем их в единий обьект продукт инфо
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        }
        //собранные данные подставим в шаблон для товара в корзине
        const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
        <div class="cart-item__top">
            <div class="cart-item__img">
                <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
            </div>
            <div class="cart-item__desc">
                <div class="cart-item__title">${productInfo.title}</div>
                <div class="cart-item__weight">${productInfo.itemInBox}/${productInfo.weight}</div>

                <!-- cart-item__details -->
                <div class="cart-item__details">

                    <div class="items items--small counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter="">${productInfo.counter}</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>

                    <div class="price">
                        <div class="price__currency">${productInfo.price}</div>
                    </div>

                </div>
                <!-- // cart-item__details -->

            </div>
        </div>
    </div>`;

        //отобразим товар в корзине
        cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)

    }   
})