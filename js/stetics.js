//llamados al cargar la pagina

HomeScreenFitter();
logoChanger();

//cuando scrollea, le da color al header
window.onscroll = () => ChangeHeaderState();




let dropdowns = document.querySelectorAll(".dropdown_list");

dropdowns.forEach(list => {
    list.addEventListener("click", () => {
        let desplegable = list.querySelector("ul");
        desplegable.classList.toggle("list_hidden");
        desplegable.classList.toggle("list_display");
    });
});






//-----------------------------------------------------------------------------------------------------------
//funciones


document.querySelector("#navbar_shower").addEventListener("click", showAside);


function showAside() {
    let nav = this.parentNode;

    //me da el ul
    let aside = nav.childNodes[3];

    aside.classList.toggle("aside_not_shown");
    aside.classList.toggle("aside_shown");
}


function logoChanger() {
    //cambia el logo de acuerdo al tamaño de pantalla
    let logo_main = document.querySelector("#main_logo");
    if (screen.width > 660) {
        logo_main.src = "img/logo_tandil_front.png";
    } else {
        logo_main.src = "img/logo_tandil_front_m.png";
    }
}

function HomeScreenFitter() {
    //asigno el tamaño de la pantalla al div de inicio para que llegue al final de la pantalla
    let welcome_screen = document.querySelector(".welcome_screen");
    welcome_screen.style.height = screen.height + "px";
}


//cuando scrollea, le da color al header
function ChangeHeaderState() {

    //300 es basicamente donde queres que cambie la clase

    if (document.documentElement.scrollTop > 30) {
        document.querySelector(".header").classList.add("header_color");
        document.querySelector(".header").classList.remove("header_transparent");
    } else {
        document.querySelector(".header").classList.add("header_transparent");
        document.querySelector(".header").classList.remove("header_color");
    }
}