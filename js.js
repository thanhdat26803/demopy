/*
 0: render ra todoList
 1: Chức năng thêm
 2: Chức năng xóa
 3: Chức năng sửa
*/

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const taskEL = $('.ketqua')
const addnut = $('.button')
const valuaTodo = $('.text')

let data = ['Do homework BTIC', 'Do ASM BTEC', 'Participate in IT TOUR']
function render(){
    const dataHTML = data.map((task) =>{
        return `<div class="luachon">
        <div class="chu">
            <span>${task}</span>
        </div>
        <div class="icon">
            <i class="fa-solid icon1 fa-trash-can"></i>
            <i class="fa-solid fa-pen-to-square"></i>
        </div>
    </div>`
    })
    taskEL.innerHTML = dataHTML.join('')
}
render()

addnut.onclick = function addTodo(e) {
    e.preventDefault();

    const valua = valuaTodo.value
    data.unshift(valua)
    render()
}










