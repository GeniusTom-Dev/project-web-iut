let openMenuButton = document.getElementById("menuIcon")
let closeMenuButton = document.getElementById("closeMenu")
let menuResponsive = document.getElementsByClassName("extendedMenu")
let sendEmailButton = document.getElementById("sendEmail")

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