document.getElementById('hamburger').onclick = function(){
    var menu = document.getElementById('menu');
    if(menu.style.display === "none"){
        menu.style.display = "block";
        document.getElementById('hamburger').textContent = "Menu ▼";
    }
    else{
        menu.style.display = "none";
        document.getElementById('hamburger').textContent = "Menu ▲";
    }
};