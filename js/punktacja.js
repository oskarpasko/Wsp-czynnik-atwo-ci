const element = document.getElementById("points");
element.addEventListener('change', oblicz);

function oblicz()
{
    // zmienna przechowująca ilość pkt do uzyskania
    const points = document.getElementById("points").value;
    var container = document.getElementById("result");
    while (container.hasChildNodes()) {container.removeChild(container.lastChild);}

    var div = document.createElement("ul");
        div.className = "list-group mx-auto";
        container.appendChild(div);


    for(let x=0; x<points+1 ; x++)
    {
        if((Math.round(((x/points) * 100) * 100) / 100) >= 0 && (Math.round(((x/points) * 100) * 100) / 100) < 30)
        {
            var result = document.createElement("li");
            result.className = "list-group-item w-25 p-3 mx-auto list-group-item-danger";
            result.textContent = "1="+x+"pkt";
            div.appendChild(result);
        }
        if((Math.round(((x/points) * 100) * 100) / 100) >= 30 && (Math.round(((x/points) * 100) * 100) / 100) < 35)
        {
            var result = document.createElement("li");
            result.className = "list-group-item w-25 p-3 mx-auto list-group-item-warning";
            result.textContent = "-2="+x+"pkt";
            div.appendChild(result);
        }
        if((Math.round(((x/points) * 100) * 100) / 100) >= 35 && (Math.round(((x/points) * 100) * 100) / 100) < 43)
        {
            var result = document.createElement("li");
            result.className = "list-group-item w-25 p-3 mx-auto list-group-item-warning";
            result.textContent = "2="+x+"pkt";
            div.appendChild(result);
        }
        if((Math.round(((x/points) * 100) * 100) / 100) >= 43 && (Math.round(((x/points) * 100) * 100) / 100) < 47)
        {
            var result = document.createElement("li");
            result.className = "list-group-item w-25 p-3 mx-auto list-group-item-warning";
            result.textContent = "+2="+x+"pkt";
            div.appendChild(result);
        }
        if((Math.round(((x/points) * 100) * 100) / 100) >= 47 && (Math.round(((x/points) * 100) * 100) / 100) < 50)
        {
            var result = document.createElement("li");
            result.className = "list-group-item w-25 p-3 mx-auto list-group-item-info";
            result.textContent = "-3="+x+"pkt";
            div.appendChild(result);
        }
        if((Math.round(((x/points) * 100) * 100) / 100) >= 50 && (Math.round(((x/points) * 100) * 100) / 100) < 63)
        {
            var result = document.createElement("li");
            result.className = "list-group-item w-25 p-3 mx-auto list-group-item-info";
            result.textContent = "3="+x+"pkt";
            div.appendChild(result);
        }
        if((Math.round(((x/points) * 100) * 100) / 100) >= 63 && (Math.round(((x/points) * 100) * 100) / 100) < 69)
        {
            var result = document.createElement("li");
            result.className = "list-group-item w-25 p-3 mx-auto list-group-item-info";
            result.textContent = "+3="+x+"pkt";
            div.appendChild(result);
        }
        if((Math.round(((x/points) * 100) * 100) / 100) >= 69 && (Math.round(((x/points) * 100) * 100) / 100) < 75)
        {
            var result = document.createElement("li");
            result.className = "list-group-item w-25 p-3 mx-auto list-group-item-light";
            result.textContent = "-4="+x+"pkt";
            div.appendChild(result);
        }
        if((Math.round(((x/points) * 100) * 100) / 100) >= 75 && (Math.round(((x/points) * 100) * 100) / 100) < 83)
        {
            var result = document.createElement("li");
            result.className = "list-group-item w-25 p-3 mx-auto list-group-item-light";
            result.textContent = "4="+x+"pkt";
            div.appendChild(result);
        }
        if((Math.round(((x/points) * 100) * 100) / 100) >= 83 && (Math.round(((x/points) * 100) * 100) / 100) < 87)
        {
            var result = document.createElement("li");
            result.className = "list-group-item w-25 p-3 mx-auto list-group-item-light";
            result.textContent = "+4="+x+"pkt";
            div.appendChild(result);
        }
        if((Math.round(((x/points) * 100) * 100) / 100) >= 87 && (Math.round(((x/points) * 100) * 100) / 100) < 90)
        {
            var result = document.createElement("li");
            result.className = "list-group-item w-25 p-3 mx-auto list-group-item-success";
            result.textContent = "-5="+x+"pkt";
            div.appendChild(result);
        }
        if((Math.round(((x/points) * 100) * 100) / 100) >= 90 && (Math.round(((x/points) * 100) * 100) / 100) <= 100)
        {
            var result = document.createElement("li");
            result.className = "list-group-item w-25 p-3 mx-auto list-group-item-success";
            result.textContent = "5="+x+"pkt";
            div.appendChild(result);
        }

        // połówki punktów
        if(x<points)
        {
            if((Math.round((((x+0.5)/points) * 100) * 100) / 100) >= 0 && (Math.round((((x+0.5)/points) * 100) * 100) / 100) < 30)
            {
                var result = document.createElement("li");
                result.className = "list-group-item w-25 p-3 mx-auto list-group-item-danger";
                result.textContent = "1="+(x+0.5)+"pkt";
                div.appendChild(result);
            }
            if((Math.round((((x+0.5)/points) * 100) * 100) / 100) >= 30 && (Math.round((((x+0.5)/points) * 100) * 100) / 100) < 35)
            {
                var result = document.createElement("li");
                result.className = "list-group-item w-25 p-3 mx-auto list-group-item-warning";
                result.textContent = "-2="+(x+0.5)+"pkt";
                div.appendChild(result);
            }
            if((Math.round((((x+0.5)/points) * 100) * 100) / 100) >= 35 && (Math.round((((x+0.5)/points) * 100) * 100) / 100) < 43)
            {
                var result = document.createElement("li");
                result.className = "list-group-item w-25 p-3 mx-auto list-group-item-warning";
                result.textContent = "2="+(x+0.5)+"pkt";
                div.appendChild(result);
            }
            if((Math.round((((x+0.5)/points) * 100) * 100) / 100) >= 43 && (Math.round((((x+0.5)/points) * 100) * 100) / 100) < 47)
            {
                var result = document.createElement("li");
                result.className = "list-group-item w-25 p-3 mx-auto list-group-item-warning";
                result.textContent = "+2="+(x+0.5)+"pkt";
                div.appendChild(result);
            }
            if((Math.round((((x+0.5)/points) * 100) * 100) / 100) >= 47 && (Math.round((((x+0.5)/points) * 100) * 100) / 100) < 50)
            {
                var result = document.createElement("li");
                result.className = "list-group-item w-25 p-3 mx-auto list-group-item-info";
                result.textContent = "-3="+(x+0.5)+"pkt";
                div.appendChild(result);
            }
            if((Math.round((((x+0.5)/points) * 100) * 100) / 100) >= 50 && (Math.round((((x+0.5)/points) * 100) * 100) / 100) < 63)
            {
                var result = document.createElement("li");
                result.className = "list-group-item w-25 p-3 mx-auto list-group-item-info";
                result.textContent = "3="+(x+0.5)+"pkt";
                div.appendChild(result);
            }
            if((Math.round((((x+0.5)/points) * 100) * 100) / 100) >= 63 && (Math.round((((x+0.5)/points) * 100) * 100) / 100) < 69)
            {
                var result = document.createElement("li");
                result.className = "list-group-item w-25 p-3 mx-auto list-group-item-info";
                result.textContent = "+3="+(x+0.5)+"pkt";
                div.appendChild(result);
            }
            if((Math.round((((x+0.5)/points) * 100) * 100) / 100) >= 69 && (Math.round((((x+0.5)/points) * 100) * 100) / 100) < 75)
            {
                var result = document.createElement("li");
                result.className = "list-group-item w-25 p-3 mx-auto list-group-item-light";
                result.textContent = "-4="+(x+0.5)+"pkt";
                div.appendChild(result);
            }
            if((Math.round((((x+0.5)/points) * 100) * 100) / 100) >= 75 && (Math.round((((x+0.5)/points) * 100) * 100) / 100) < 83)
            {
                var result = document.createElement("li");
                result.className = "list-group-item w-25 p-3 mx-auto list-group-item-light";
                result.textContent = "4="+(x+0.5)+"pkt";
                div.appendChild(result);
            }
            if((Math.round((((x+0.5)/points) * 100) * 100) / 100) >= 83 && (Math.round((((x+0.5)/points) * 100) * 100) / 100) < 87)
            {
                var result = document.createElement("li");
                result.className = "list-group-item w-25 p-3 mx-auto list-group-item-light";
                result.textContent = "+4="+(x+0.5)+"pkt";
                div.appendChild(result);
            }
            if((Math.round((((x+0.5)/points) * 100) * 100) / 100) >= 87 && (Math.round((((x+0.5)/points) * 100) * 100) / 100) < 90)
            {
                var result = document.createElement("li");
                result.className = "list-group-item w-25 p-3 mx-auto list-group-item-success";
                result.textContent = "-5="+(x+0.5)+"pkt";
                div.appendChild(result);
            }
            if((Math.round((((x+0.5)/points) * 100) * 100) / 100) >= 90 && (Math.round((((x+0.5)/points) * 100) * 100) / 100) <= 100)
            {
                var result = document.createElement("li");
                result.className = "list-group-item w-25 p-3 mx-auto list-group-item-success";
                result.textContent = "5="+(x+0.5)+"pkt";
                div.appendChild(result);
            }
        }
    }    
}