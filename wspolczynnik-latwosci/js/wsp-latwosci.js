const element = document.getElementById("button");
element.addEventListener('click', policz);

const element_points = document.getElementById("generate");
element_points.addEventListener('click', generate);

function generate()
{
    // zmienna przechowująca ilość zadań na teście
    const tasks_amount = document.getElementById("tasksAmount").value;
    // zmienna przechowująca liczbę uczniów w klasie
    const students = document.getElementById("students").value;
    var container = document.getElementById("row_points");
    while (container.hasChildNodes()) {container.removeChild(container.lastChild);}

    var header = document.createElement("h6");
        header.className = "card-title";
        header.textContent = "Punkty do zdobycia: ";
        container.appendChild(header);

    for(let i=0;i<tasks_amount;i++)
    {
        var box = document.createElement("div");
        box.className = "col-3 mt-2";
        
        
        
        var input = document.createElement("input");
        input.type = "text";
        input.name = "point";
        input.className = "form-control form-control-sm";
        input.placeholder = "Zadanie "+(i+1);
        input.ariaLabel = ".form-control-sm example";
        
        container.appendChild(box);
        box.appendChild(input);
    }

    // generowanie inputow dla uczniow
    for(let i=0;i<students;i++)
    {
        var header = document.createElement("h6");
        header.className = "card-title mt-5";
        header.textContent = "Uczeń nr " + (i+1);

        var row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);
        row.appendChild(header);

        for(let j=0;j<tasks_amount;j++)
        {
        var box = document.createElement("div");
        box.className = "col-3 mt-2";
        
        
        
        var input = document.createElement("input");
        input.type = "text";
        input.name = "student_pkt"+(i+1);
        input.className = "form-control form-control-sm";
        input.placeholder = "Zadanie "+(i+1);
        input.ariaLabel = ".form-control-sm example";
        
        row.appendChild(box);
        box.appendChild(input);
        }
    }
}

function policz()
{
    // zmienna przechowująca nazwe klasy
    const class_name = document.getElementById("className").value;
    // zmienna przechowująca ilość zadań na teście
    const tasks_amount = document.getElementById("tasksAmount").value;
    // zmienna przechowująca liczbę uczniów w klasie
    const students = document.getElementById("students").value;
    // pusta tablica do przechowania punktów za zadania
    tasks_points=[];

    // wypełnienie tablicy ilością punktów za poszczególne zadanie
    for(let i=0;i<tasks_amount;i++)
    {
        tasks_points.push(parseInt(document.querySelectorAll('input[name=point]')[i].value));
    }

    // tablica 2d uczniowie X pkt za poszczególne zadanie
    let student_point = new Array(tasks_amount);
    for (var i = 0; i < students; i++) {student_point[i] = new Array(tasks_amount);}

    // tablica przechowująca sumę punktów wszystkich poszczególnych zadań
    let sum_points = new Array(tasks_amount);
    for(let s=0;s<tasks_amount;s++)sum_points[s]=0;

    console.log("Tablica pkt do zdobycia: "+tasks_points);

    // wpisywanie w tablice 2d punktów zdobytych przez uczniów
    for(var i=0;i<students;i++)
    {
        for(var j=0;j<tasks_amount;j++)
        {
            student_point[i][j]= document.querySelectorAll(`input[name=student_pkt${i + 1}]`)[j].value;
            sum_points[j] = parseInt(sum_points[j]) +  parseInt(student_point[i][j]);
        }
    }

    console.log("Pkt studentów: "+student_point);
    console.log("Sumy pkt: "+sum_points);

    // tablica współczynnika łatwości
    let ease_factor = [];
    // tablica współczynnika łatwości
    let hard_tasks = [];
    // tablica współczynnika łatwości
    let very_hard_tasks = [];

    for(let x=0;x<tasks_amount;x++)
    {
        ease_factor[x] = parseFloat(((sum_points[x]/students)/tasks_points[x]));

        if(parseFloat(ease_factor[x]) >= 0 && parseFloat(ease_factor[x]) < 0.2) very_hard_tasks.push(x+1)
        if(parseFloat(ease_factor[x]) >= 0.2 && parseFloat(ease_factor[x]) < 0.5) hard_tasks.push(x+1)
    }

    console.log("Współczynnik Łatwości: "+ease_factor);
    console.log("Zadania trudne: "+hard_tasks);
    console.log("Zadania bardzo trudne: "+very_hard_tasks);
    
}

