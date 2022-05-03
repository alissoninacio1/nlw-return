//classList  - checa a lista de classes de um elemento

//ScrollY Retorna o número de pixels que o documento já rolou verticalmente.
//y é o número atual de pixels que o documento rolou a partir do topo.
function onScroll() {
    if(scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}


function openMenu() {
    document.body.classList.add("menu-expanded")
}

function closeMenu() {
    document.body.classList.remove("menu-expanded")
}