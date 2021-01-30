import {loadhome, loadmenu, loadcontact} from './home';

let divNav = document.getElementById("nav");
let homebtn = document.createElement("button");
let menubtn = document.createElement("button");
let contactbtn = document.createElement("button");

homebtn.textContent = "Home";
menubtn.textContent = "Menu";
contactbtn.textContent = "Contact";



divNav.appendChild(homebtn);
divNav.appendChild(menubtn);
divNav.appendChild(contactbtn);

homebtn.addEventListener('click', () => {
    loadhome();
})

menubtn.addEventListener('click', () => {
    loadmenu();
})

contactbtn.addEventListener('click', () => {
    loadcontact();
})

homebtn.focus();
homebtn.click();