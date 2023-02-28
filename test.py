print('Obliczenie Współczynnika Łatwości dla danej klasy')

# mienna przechowująca nazwe klasy
class_name = input("Podaj nazwę klasy (np. 1d): ")
# zmienna przechowująca ilość zadań na teście
tasks_amount = int(input('Podaj liczbę zadań na sprawdzianie: '))
# pusta tablica przechowująca pkt do zdobycia o wielkości ilości zadań
tasks_points = [0] * tasks_amount

# wypełnienie tablicy ilością punktów za poszczególne zadanie
for i in range(0, int(tasks_amount)):
    tasks_points[i] = float(input(f"Podaj ilość punktów do zdobycia w zadaniu {i+1}: "))

# zmienna przechowująca liczbę uczniów w klasie
students = int(input("Podaj liczbę uczniów w klasie: "))

# tablica 2d uczniowie X pkt za poszczególne zadanie
students_points = [[0] * tasks_amount for i in range(students)]

# tablica przechowująca sumę punktów wszystkich poszczególnych zadań
sum_points = [0] * tasks_amount

# pętla wpisująca uzyskane pkt do uczniów
for student in range(students):
    for task in range(tasks_amount):
        students_points[student][task] = int(input(f"Podaj liczbę uzyskanych punktów z zadania {task+1} dla {student+1}. studenta: "))
        # sumowanie pkt dla poszczególnych zadań
        sum_points[task] += students_points[student][task]
    print("\n")

# tablica współczynnika łatwości
ease_factor = [0] * tasks_amount
# tablica przechowująca trudne zadania
hard_tasks = [None] * tasks_amount
# tablica przechowująca bardzo trudne zadania
very_hard_tasks = [None] * tasks_amount



for x in range(tasks_amount):
    ease_factor[x] = round(float(((sum_points[x]/students)/tasks_points[x])), 2)

    if(float(ease_factor[x]) >= 0 and float(ease_factor[x]) < 0.20):
        very_hard_tasks.append(x+1)
    elif(float(ease_factor[x]) >= 0.20 and float(ease_factor[x]) < 0.50):
        hard_tasks.append(x+1)

print(f"Współczynniki łatwości: {ease_factor}")
print(f"Zadania trudne: {hard_tasks}")
print(f"Zadania bardzo trudne: {very_hard_tasks}")