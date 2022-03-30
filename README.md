# fullscreenPopup.js

##Примерная структура попапа
``` javaScript
let popup1 = new Popup('.akselerator__popup1','.ref-popup-1','.popup1-closeBtn')
let popup2 = new Popup('.akselerator__popup2','.ref-popup-2','.popup2-closeBtn')
```

``` html
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
```
