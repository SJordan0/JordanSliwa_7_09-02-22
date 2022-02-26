let liste1 = document.getElementById('listContainer1')
let liste2 = document.getElementById('listContainer2')
let liste3 = document.getElementById('listContainer3')
let label1 = document.querySelector('#label1');
let label2 = document.querySelector('#label2');
let label3 = document.querySelector('#label3');
let iconOpen1 = document.querySelector('#iconOpen1');
let iconOpen2 = document.querySelector('#iconOpen2');
let iconOpen3 = document.querySelector('#iconOpen3');

function openList1() {
    liste1.classList.add('listContainer_1')
    label1.style.display = 'none'
    iconOpen1.style.display = 'none'
}

function closeList1() {
    liste1.classList.remove('listContainer_1')
    label1.style.display = ''
    iconOpen1.style.display = ''
}

function openList2() {
    liste2.classList.add('listContainer_2')
    label2.style.display = 'none'
    iconOpen2.style.display = 'none'
}

function closeList2() {
    liste2.classList.remove('listContainer_2')
    label2.style.display = ''
    iconOpen2.style.display = ''
}
function openList3() {
    liste3.classList.add('listContainer_3')
    label3.style.display = 'none'
    iconOpen3.style.display = 'none'
}

function closeList3() {
    liste3.classList.remove('listContainer_3')
    label3.style.display = ''
    iconOpen3.style.display = ''
}

function closeList() {
    liste1.classList.remove('listContainer_1')
    liste2.classList.remove('listContainer_2')
    liste3.classList.remove('listContainer_3')
    label1.style.display = ''
    iconOpen1.style.display = ''
    label2.style.display = ''
    iconOpen2.style.display = ''
    label3.style.display = ''
    iconOpen3.style.display = ''
}

export { openList1, closeList1, openList2, closeList2, openList3, closeList3, closeList }