const loadhome = () => {
    let str = `Spicy jalapeno bacon ipsum dolor amet jerky culpa mollit ut frankfurter prosciutto magna esse in filet
    mignon commodo sint exercitation corned beef elit.Turkey excepteur chuck swine ex non aliquip.Capicola ut
    bresaola ham incididunt pastrami leberkas pork chop ut sausage minim pariatur frankfurter.Shankle doner
    pork consectetur, laborum cupidatat laboris dolor porchetta consequat rump ball tip burgdoggen ut.Sint
    boudin shoulder meatball.Capicola labore laborum cillum sint cupidatat, bacon t - bone shoulder ut tempor
    reprehenderit.Consectetur picanha prosciutto short ribs shankle tail eu.`;

    let divContent = document.getElementById("content");

    while (divContent.firstChild) {
        divContent.firstChild.remove()
    }


    let h1Heading = document.createElement("h1");
    h1Heading.textContent = "La Restaurante";

    let imgVineyard = document.createElement("img");
    imgVineyard.src = "vineyard.jpg";

    let pIntro = document.createElement("p");
    pIntro.textContent = str;


    divContent.appendChild(h1Heading);
    divContent.appendChild(imgVineyard);
    divContent.appendChild(pIntro);
}

const loadmenu = () => {
    let divContent = document.getElementById("content");

    while (divContent.firstChild) {
        divContent.firstChild.remove()
    }

    let h1Heading = document.createElement("h1");
    h1Heading.textContent = "Le Menu";

    let imgRestaurant = document.createElement("img");
    imgRestaurant.src = "restaurant.jpeg";

    let foodHeading = document.createElement("h2");
    foodHeading.textContent = "Food";

    let foodLink = document.createElement("a");
    foodLink.href = "https://www.mcdonalds.co.za/menu";
    foodLink.textContent = "Click here";

    let drinksHeading = document.createElement("h2");
    drinksHeading.textContent = "Drinks";

    let drinkLink = document.createElement("a");
    drinkLink.href = "steers.co.za";
    drinkLink.textContent = "Click here";



    
    divContent.appendChild(h1Heading);

    divContent.appendChild(imgRestaurant);
    divContent.appendChild(foodHeading);
    divContent.appendChild(foodLink);
    divContent.appendChild(drinksHeading);
    divContent.appendChild(drinkLink);
}

const loadcontact = () => {
    let str = 'Address:  \t      123 Restaurant Road, Fatland';
    let str2 = 'Phone Number:      021 123 9876';
    let str3 = 'Website:       larestaurante.xyz';

    let divContent = document.getElementById("content");

    while (divContent.firstChild) {
        divContent.firstChild.remove()
    }

    let h1Heading = document.createElement("h1");
    h1Heading.textContent = "Contact Us";

    let imgContact = document.createElement("img");
    imgContact.src = "contact.jpg";

    let contactHeading = document.createElement("h2");
    contactHeading.textContent = "Details:";

    let paragraph = document.createElement("p");
    paragraph.textContent = str;

    let paragraph2 = document.createElement("p");
    paragraph2.textContent = str2;

    let paragraph3 = document.createElement("p");
    paragraph3.textContent = str3;





    
    divContent.appendChild(h1Heading);

    divContent.appendChild(imgContact);
    divContent.appendChild(contactHeading);

    divContent.appendChild(paragraph);
    divContent.appendChild(paragraph2);
    divContent.appendChild(paragraph3);    

}

export {
    loadhome,
    loadmenu,
    loadcontact,
}