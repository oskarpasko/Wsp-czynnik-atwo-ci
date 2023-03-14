const element = document.getElementById("button");
element.addEventListener('click', policz);

const element_points = document.getElementById("tasksAmount");
element_points.addEventListener('change', points);

function points()
{
    // zmienna przechowująca ilość zadań na teście
    const tasks_amount = document.getElementById("tasksAmount").value;
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
    for (var i = 0; i < tasks_amount; i++) {student_point[i] = new Array(students);}

    // tablica przechowująca sumę punktów wszystkich poszczególnych zadań
    let sum_points = new Array(tasks_amount);

    for(var i=0;i<students;i++)
    {
        for(var j=0;j<tasks_amount;j++)
        {
            student_point[i][j]=0;
            console.log(student_point[i][j]);
        }
    }

    console.log(student_point);
    
}

