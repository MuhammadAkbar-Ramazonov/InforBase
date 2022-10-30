var elOpenModalBtn = document.querySelector(".js-modal-btn");
var elOpenModal = document.querySelector(".modal");
var elCloseModal = document.querySelector(".js-close-modal-btn");
var elBody = document.querySelector("body");
var elItem = document.querySelectorAll(".test-hero__item");

elItem.forEach(function(link){
    link.addEventListener("click" , function(){    
        elItem.forEach(function(item){
            item.classList.remove("test-hero__item-active");
        });
        link.classList.add("test-hero__item-active");
    });
});

elItem.forEach(function(item){
    item.addEventListener("click" , function(){
        item.classList.add("test-hero__item-active");
    });
    
});

elOpenModalBtn.addEventListener("click", function(){
    elOpenModal.classList.add("modal-open");
});

elCloseModal.addEventListener("click", function(){
    elOpenModal.classList.remove("modal-open");
});