// Функция замены текста заголовка
function replaceTitle() {
    const h1 = document.querySelector("h1")
    h1.textContent = "Главная"
}

// Функция замены элементы списка
function replaceLi() {
    const li = document.querySelectorAll("li")
    for (let l of li) {
        l.textContent = "JavaScript"
    }
}

// Cоздание таймера на 2 секунды, который меняет заголовок
setTimeout(replaceTitle, 2000)

// Присоединение функции заммены элемента списка, когда мы нажимаем кнопку
const btn = document.querySelector("#replace")
btn.addEventListener("click", replaceLi)

// Установка стилей
const h1 = document.querySelector("h1")
h1.style.color = "red"
h1.style.fontSize = "100px"

// Установка содержимого тега
const p = document.querySelector("p")
p.innerHTML = "<h1>Заголовок</h1>"

// Функция добавления
function add() {
    const ul = document.querySelector("ul")
    const li = document.createElement("li") // Создаем новый элемент
    li.textContent = "Учетная запись" // Установка текстового содержимого элемента
    ul.append(li) // Добавление к списку
}

// Присоединение функции к кнопке
const btnAdd = document.querySelector("#add")
btnAdd.addEventListener("click", add)
