print('Obliczenie Współczynnika Łatwości dla danej klasy')

nazwa_klasy = input('Podaj nazwę klasy: ')
liczba_uczniow = int(input(f'Podaj liczbę uczniów klasy {nazwa_klasy}: '))
liczba_zadan = input('Podaj liczbę zadań na sprawdzianie: ')

wspolczynnik_latwosci = []
zadania_trudne = []
zadania_bardzo_trudne = []

for x in range(0, int(liczba_zadan)):
    zadanie_pkt = int(input(f'\nPodaj liczbę punktów do zdobycia za Zadanie {x+1}: '))
    uczniowie_pkt = int(input(f'Podaj liczbę punktów uzyskanych przez uczniów z Zadania {x+1}.: '))
    wspolczynnik_latwosci.append(float(round(((uczniowie_pkt/liczba_uczniow)/zadanie_pkt), 2)))

    print('\n')

for x in range(0, int(liczba_zadan)):
    print(f'Współczynnik Łatwości dla Zadania {x+1}: {wspolczynnik_latwosci[x]}')

    if(wspolczynnik_latwosci[x] > 0 and float(wspolczynnik_latwosci[x]) < 0.20):
        zadania_bardzo_trudne.append(x+1)
    elif(float(wspolczynnik_latwosci[x]) >= 0.20 and float(wspolczynnik_latwosci[x]) < 0.50):
        zadania_trudne.append(x+1)

print(f'\nZadania Bardzo Trudne: {zadania_bardzo_trudne}')
print(f'Zadania Trudne: {zadania_trudne}')