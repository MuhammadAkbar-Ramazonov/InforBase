var elOpenMenu = document.querySelector(".site-header__burger");
var elOpenList = document.querySelector(".sitenav");
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

elOpenMenu.addEventListener("click", function(){
    elBody.classList.toggle("body-overflow");
    elOpenList.classList.toggle("sitenav--active");
    elOpenMenu.classList.toggle("site-header__burger--close");
});
