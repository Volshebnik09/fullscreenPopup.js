/*
Примерная структура попапа

let popup1 = new Popup('.akselerator__popup1','.ref-popup-1','.popup1-closeBtn')
let popup2 = new Popup('.akselerator__popup2','.ref-popup-2','.popup2-closeBtn')

<div class="akselerator__popup1 akselerator__popup">
    <div class="popup-wrapper">
        <div class="popup__header">
            <div class="popup__header__content">
                Ну типа хедер
            </div>
            <div class="popup1-closeBtn popup-close">CLOSE</div>    
        </div>
        <div class="popup__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ab consequuntur, porro labore sunt animi sequi natus eveniet, deserunt sint perspiciatis dolores tempora, molestias nam voluptate. Cum porro mollitia possimus!
        </div>
    </div>
</div>
*/

export default class Popup{
    constructor(lPopup,lOpenBtn,lCloseBtn){
        this.popup = document.querySelector(lPopup);
        let popupClone = this.popup.cloneNode(true);
        this.main = document.querySelector('body')
        this.main.prepend(popupClone)
        
        this.openBtn = document.querySelector(lOpenBtn)

        popupClone.classList.toggle('popup__clone__close')
        this.closeBtn = document.querySelector(lCloseBtn)

        this.openBtn.addEventListener('click', (e)=>{
            popupClone.classList.toggle('popup__clone__open')
            popupClone.classList.toggle('popup__clone__close')
        })
        this.closeBtn.addEventListener('click', (e) => {
            popupClone.classList.toggle('popup__clone__open')
            popupClone.classList.toggle('popup__clone__close')
        })
        popupClone.addEventListener('click',(e) => {
            if (e.target.classList.value.indexOf('popup__clone__open') >= 0) {
                popupClone.classList.toggle('popup__clone__open')
                popupClone.classList.toggle('popup__clone__close')
            }
        });
    }

}