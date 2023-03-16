const element = document.getElementById("points");
element.addEventListener('change', oblicz);

function oblicz()
{
    // zmienna przechowująca ilość pkt do uzyskania
    const points = document.getElementById("points").value;
    // deklaracja głównego kontenera do wypisu danych
    var container = document.getElementById("result");
    while (container.hasChildNodes()) {container.removeChild(container.lastChild);}

    // deklaracja i dodanie początku listy
    var div = document.createElement("ul");
        div.className = "list-group mx-auto";
        container.appendChild(div);

    var ocena1 = [];
    var ocenam2 = [];
    var ocena2 = [];
    var ocenap2 = [];
    var ocenam3 = [];
    var ocena3 = [];
    var ocenap3 = [];
    var ocenam4 = [];
    var ocena4 = [];
    var ocenap4 = [];
    var ocenam5 = [];
    var ocena5 = [];
    var ocena6 = 0;

    // oblicznanie kazdego punktu na konkretną ocenę
    // oraz wypisanie go od razu na strone
    for(let x=0; x<points+1 ; x++)
    {
        // sprawdzenie czy punkt znajduje się w konkretnym przedziale
        if((Math.round(((x/points) * 100) * 100) / 100) >= 0 && (Math.round(((x/points) * 100) * 100) / 100) < 30) ocena1.push(x);
        if((Math.round(((x/points) * 100) * 100) / 100) >= 30 && (Math.round(((x/points) * 100) * 100) / 100) < 35) ocenam2.push(x);
        if((Math.round(((x/points) * 100) * 100) / 100) >= 35 && (Math.round(((x/points) * 100) * 100) / 100) < 43) ocena2.push(x);
        if((Math.round(((x/points) * 100) * 100) / 100) >= 43 && (Math.round(((x/points) * 100) * 100) / 100) < 47) ocenap2.push(x);
        if((Math.round(((x/points) * 100) * 100) / 100) >= 47 && (Math.round(((x/points) * 100) * 100) / 100) < 50) ocenam3.push(x);
        if((Math.round(((x/points) * 100) * 100) / 100) >= 50 && (Math.round(((x/points) * 100) * 100) / 100) < 63) ocena3.push(x);
        if((Math.round(((x/points) * 100) * 100) / 100) >= 63 && (Math.round(((x/points) * 100) * 100) / 100) < 69) ocenap3.push(x);
        if((Math.round(((x/points) * 100) * 100) / 100) >= 69 && (Math.round(((x/points) * 100) * 100) / 100) < 75) ocenam4.push(x);
        if((Math.round(((x/points) * 100) * 100) / 100) >= 75 && (Math.round(((x/points) * 100) * 100) / 100) < 83) ocena4.push(x);
        if((Math.round(((x/points) * 100) * 100) / 100) >= 83 && (Math.round(((x/points) * 100) * 100) / 100) < 87)ocenap4.push(x);
        if((Math.round(((x/points) * 100) * 100) / 100) >= 87 && (Math.round(((x/points) * 100) * 100) / 100) < 90) ocenam5.push(x);
        if((Math.round(((x/points) * 100) * 100) / 100) >= 90 && (Math.round(((x/points) * 100) * 100) / 100) < 100) ocena5.push(x);

        // połówki punktów
        if(x<points)
        {
            if((Math.round((((x+0.5)/points) * 100) * 100) / 100) >= 0 && (Math.round((((x+0.5)/points) * 100) * 100) / 100) < 30) ocena1.push(x+0.5);
            if((Math.round((((x+0.5)/points) * 100) * 100) / 100) >= 30 && (Math.round((((x+0.5)/points) * 100) * 100) / 100) < 35) ocenam2.push(x+0.5);
            if((Math.round((((x+0.5)/points) * 100) * 100) / 100) >= 35 && (Math.round((((x+0.5)/points) * 100) * 100) / 100) < 43) ocena2.push(x+0.5);
            if((Math.round((((x+0.5)/points) * 100) * 100) / 100) >= 43 && (Math.round((((x+0.5)/points) * 100) * 100) / 100) < 47) ocenap2.push(x+0.5);
            if((Math.round((((x+0.5)/points) * 100) * 100) / 100) >= 47 && (Math.round((((x+0.5)/points) * 100) * 100) / 100) < 50) ocenam3.push(x+0.5);
            if((Math.round((((x+0.5)/points) * 100) * 100) / 100) >= 50 && (Math.round((((x+0.5)/points) * 100) * 100) / 100) < 63) ocena3.push(x+0.5);
            if((Math.round((((x+0.5)/points) * 100) * 100) / 100) >= 63 && (Math.round((((x+0.5)/points) * 100) * 100) / 100) < 69) ocenap3.push(x+0.5);
            if((Math.round((((x+0.5)/points) * 100) * 100) / 100) >= 69 && (Math.round((((x+0.5)/points) * 100) * 100) / 100) < 75) ocenam4.push(x+0.5);
            if((Math.round((((x+0.5)/points) * 100) * 100) / 100) >= 75 && (Math.round((((x+0.5)/points) * 100) * 100) / 100) < 83) ocena4.push(x+0.5);
            if((Math.round((((x+0.5)/points) * 100) * 100) / 100) >= 83 && (Math.round((((x+0.5)/points) * 100) * 100) / 100) < 87) ocenap4.push(x+0.5);
            if((Math.round((((x+0.5)/points) * 100) * 100) / 100) >= 87 && (Math.round((((x+0.5)/points) * 100) * 100) / 100) < 90) ocenam5.push(x+0.5);
            if((Math.round((((x+0.5)/points) * 100) * 100) / 100) >= 90 && (Math.round((((x+0.5)/points) * 100) * 100) / 100) < 100) ocena5.push(x+0.5);
        }
    }   

    // tworzenie elementu listy
    var result = document.createElement("li");
    result.className = "list-group-item w-25 p-3 mx-auto list-group-item-danger";
    result.textContent = "1 = ["+ ocena1[0] +", "+ ocena1.pop() +"]";
    div.appendChild(result);

    // tworzenie elementu listy
    var result = document.createElement("li");
    result.className = "list-group-item w-25 p-3 mx-auto list-group-item-warning";
    result.textContent = "-2 = ["+ ocenam2[0] +", "+ ocenam2.pop() +"]";
    div.appendChild(result);

    // tworzenie elementu listy
    var result = document.createElement("li");
    result.className = "list-group-item w-25 p-3 mx-auto list-group-item-warning";
    result.textContent = "2 = ["+ ocena2[0] +", "+ ocena2.pop() +"]";
    div.appendChild(result);

    // tworzenie elementu listy
    var result = document.createElement("li");
    result.className = "list-group-item w-25 p-3 mx-auto list-group-item-warning";
    result.textContent = "+2 = ["+ ocenap2[0] +", "+ ocenap2.pop() +"]";
    div.appendChild(result);

    // tworzenie elementu listy
    var result = document.createElement("li");
    result.className = "list-group-item w-25 p-3 mx-auto list-group-item-secondary";
    result.textContent = "-3 = ["+ ocenam3[0] +", "+ ocenam3.pop() +"]";
    div.appendChild(result);

    // tworzenie elementu listy
    var result = document.createElement("li");
    result.className = "list-group-item w-25 p-3 mx-auto list-group-item-secondary";
    result.textContent = "3 = ["+ ocena3[0] +", "+ ocena3.pop() +"]";
    div.appendChild(result);

    // tworzenie elementu listy
    var result = document.createElement("li");
    result.className = "list-group-item w-25 p-3 mx-auto list-group-item-secondary";
    result.textContent = "+3 = ["+ ocenap3[0] +", "+ ocenap3.pop() +"]";
    div.appendChild(result);

    // tworzenie elementu listy
    var result = document.createElement("li");
    result.className = "list-group-item w-25 p-3 mx-auto list-group-item-info";
    result.textContent = "-4 = ["+ ocenam4[0] +", "+ ocenam4.pop() +"]";
    div.appendChild(result);

    // tworzenie elementu listy
    var result = document.createElement("li");
    result.className = "list-group-item w-25 p-3 mx-auto list-group-item-info";
    result.textContent = "4 = ["+ ocena4[0] +", "+ ocena4.pop() +"]";
    div.appendChild(result);

    // tworzenie elementu listy
    var result = document.createElement("li");
    result.className = "list-group-item w-25 p-3 mx-auto list-group-item-info";
    result.textContent = "+4 = ["+ ocenap4[0] +", "+ ocenap4.pop() +"]";
    div.appendChild(result);

    // tworzenie elementu listy
    var result = document.createElement("li");
    result.className = "list-group-item w-25 p-3 mx-auto list-group-item-success";
    result.textContent = "-5 = ["+ ocenam5[0] +", "+ ocenam5.pop() +"]";
    div.appendChild(result);

    // tworzenie elementu listy
    var result = document.createElement("li");
    result.className = "list-group-item w-25 p-3 mx-auto list-group-item-success";
    result.textContent = "5 = ["+ ocena5[0] +", "+ ocena5.pop() +"]";
    div.appendChild(result);
    // tworzenie elementu listy
    var result = document.createElement("li");
    result.className = "list-group-item w-25 p-3 mx-auto list-group-item-success";
    result.textContent = "6 = "+points;
    div.appendChild(result);
}