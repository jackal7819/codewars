---7 kyu---Complementary DNA

---

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"

"GTAT" --> "CATA"

dnaStrand []        `shouldBe` []

dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]

dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]

dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

---
Дезоксирибонуклеиновая кислота (ДНК) представляет собой химическое вещество, находящееся в ядре клеток и несущее «инструкции» по развитию и функционированию живых организмов.

Если вы хотите узнать больше: http://ru.wikipedia.org/wiki/DNA

В цепочках ДНК символы «А» и «Т» дополняют друг друга, как «С» и «G». Ваша функция получает одну сторону ДНК (строка, кроме Haskell); вам нужно вернуть другую дополнительную сторону. Нить ДНК никогда не бывает пустой или ДНК вообще не существует (опять же, кроме Haskell).

Другие подобные упражнения можно найти здесь: http://rosalind.info/problems/list-view/ (источник)

Пример: (ввод --> вывод)

"ATTGC" --> "TAACG"

"GTAT" --> "CATA"

dnaStrand [] `должен быть` []

dnaStrand [A,T,G,C] `должен быть` [T,A,C,G]

dnaStrand [G,T,A,T] `должен быть` [C,A,T,A]

dnaStrand [A,A,A,A] `должен быть` [T,T,T,T]
