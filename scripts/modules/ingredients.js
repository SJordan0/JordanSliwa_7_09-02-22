let liste1 = document.getElementById('listContainer1')
let liste2 = document.getElementById('listContainer2')
let liste3 = document.getElementById('listContainer3')

function openList1() {
    liste1.classList.add('listContainer_1')
}

function closeList1() {
    liste1.classList.remove('listContainer_1')
}
function openList2() {
    liste2.classList.add('listContainer_2')
}

function closeList2() {
    liste2.classList.remove('listContainer_2')
}
function openList3() {
    liste3.classList.add('listContainer_3')
}

function closeList3() {
    liste3.classList.remove('listContainer_3')
}

function closeList() {
    liste1.classList.remove('listContainer_1')
    liste2.classList.remove('listContainer_2')
    liste3.classList.remove('listContainer_3')
}

export { openList1, closeList1, openList2, closeList2, openList3, closeList3, closeList }