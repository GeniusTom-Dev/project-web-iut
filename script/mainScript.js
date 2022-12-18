let openMenuButton = document.getElementById("menuIcon")
let closeMenuButton = document.getElementById("closeMenu")
let menuResponsive = document.getElementsByClassName("extendedMenu")
let sendEmailButton = document.getElementById("sendEmail")

// Buttons Dark Mode
let setToDark = document.getElementById("moonImg")
let setToLigth = document.getElementById("sunImg")

let lightMode = document.getElementById("lightModeCSS")
let darkMode = document.getElementById("darkModeCSS")

lightMode.disabled = true;

openMenuButton.addEventListener('click', () => {
    console.log(menuResponsive[0].style.display = "flex");
})

closeMenu.addEventListener('click', () => {
    console.log(menuResponsive[0].style.display = "none");
})

if(sendEmailButton){
    sendEmailButton.addEventListener('click', () => {
        let name = document.getElementById('firstname').value
        let surname = document.getElementById('lastname').value
        let mail = document.getElementById('email').value
        let content = document.getElementById('mailContent').value
        
        alert(`${name} ${surname}, votre mail à bien était envoyer à l'adresse suivante : \n${mail}\nLe contenu était le suivant :\n${content}`)
    })
}

setToLigth.addEventListener('click', () => {
    const currentStylesLink = document.querySelector('link[rel="stylesheet"]:not([disabled])');
    currentStylesLink.disabled = true;
    lightMode.disabled = false;

    setToLigth.style.display = 'none';
    setToDark.style.display = 'block';
})

setToDark.addEventListener('click', () => {
    const currentStylesLink = document.querySelector('link[rel="stylesheet"]:not([disabled])');
    currentStylesLink.disabled = true;
    darkMode.disabled = false;

    setToLigth.style.display = 'block';
    setToDark.style.display = 'none';
})