var toggle = document.querySelector(".toggle");
var annually = document.querySelectorAll(".annually");
var monthly = document.querySelectorAll(".monthly")

toggle.addEventListener('click', function(){
        for (var x=0; x<=2; x++){
            monthly[x].classList.toggle("hidden");
            annually[x].classList.toggle("hidden");
    }});