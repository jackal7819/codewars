---6 kyu---Counting Duplicates

---

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example

"abcde" -> 0 # no characters repeats more than once

"aabbcde" -> 2 # 'a' and 'b'

"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)

"indivisibility" -> 1 # 'i' occurs six times

"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice

"aA11" -> 2 # 'a' and '1'

"ABBA" -> 2 # 'A' and 'B' each occur twice

---

Напишите функцию, которая будет возвращать количество различных буквенных символов и цифр, не зависящих от регистра, которые встречаются во входной строке более одного раза. Можно предположить, что входная строка содержит только буквы (как прописные, так и строчные) и числовые цифры.

Пример

"abcde" -> 0 # символы не повторяются более одного раза

"aabbcde" -> 2 # "а" и "б"

"aabBcde" -> 2 # 'a' встречается дважды и 'b' дважды (`b` и `B`)

"неделимость" -> 1 # 'i' встречается шесть раз

«Неделимость» -> 2 # 'i' встречается семь раз, а 's' встречается дважды

«aA11» -> 2 # «а» и «1»

«ABBA» -> 2 # «A» и «B» встречаются дважды
