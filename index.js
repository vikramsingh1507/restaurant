import {menuArray} from './data.js'

const itemList = document.getElementById('item-list')
const billLayout = document.getElementById('bill-layout')
const paymentPopupLayout = document.querySelector('.payment-popup-layout')
const footer = document.querySelector('.footer')

paymentPopupLayout.addEventListener('click', function(e){
    if(e.target.classList.contains('close-btn')){
        paymentPopupLayout.classList.add('hidden')
    }
    if(e.target.classList.contains('pay-btn')){
        paymentPopupLayout.classList.add('hidden')
        billLayout.classList.add('hidden')
        footer.classList.remove('hidden')
    }
})

billLayout.addEventListener('click', function(e) {
    if(e.target.classList.contains('order-btn')){
        paymentPopupLayout.classList.remove('hidden')
    }
})

itemList.addEventListener('click', function(e) {
    if(e.target.classList.contains('add-btn')) {
        const id = parseInt(e.target.dataset.id)
        const obj = menuArray.find(function(item){
            return item.id === id
        })
        let itemArr = []
        itemArr.push(obj)
        billLayout.innerHTML = renderBill(obj)
    }
})

function renderBill(obj) {
    return `
        <div id="bill" class="bill">
            <h3 class="bill-title">Your order</h3>
            <div class="bill-item">
                <div id="item-name">${obj.name}</div>
                <button class="remove-btn">remove</button>
                <div id="item-price">$${obj.price}</div>
            </div>
            <div class="total-bill">
                <div>Total price:</div>
                <div id="total-price">$${obj.price}</div>
            </div>
            <button class="order-btn">Complete order</button>
        </div>
    `;
}



function renderItemList(arr) {
    return arr.map(function(foodItem) {
        const {name,
        ingredients,
        id,
        price,
        emoji} = foodItem

        return `
            <div class="item" id="item">
                <p id="item-emoji">${emoji}</p>
                <div class="typo">
                    <h3>${name}</h3>
                    <p>${ingredients}</p>
                    <h4>$${price}</h4>
                </div>
                <button class="add-btn" data-id="${id}"></button>
            </div>

        `
    }).join('')
}

itemList.innerHTML = renderItemList(menuArray)
