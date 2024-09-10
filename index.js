import {menuArray} from './data.js'

const itemList = document.getElementById('item-list')


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
                <button id="add-btn"></button>
            </div>

        `
    }).join('')
}

itemList.innerHTML = renderItemList(menuArray)
