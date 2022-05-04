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

//eu posso modificar esta libe do jeito que eu quero, eu copiei um código base de  https://scrollrevealjs.org/guide/hello-world.html
ScrollReveal({
    origin: 'top',
    distance:'30px', //aqui nao tem problema em se usar uma unidade fixa
    duration: '700',
}).reveal(`
    #home, 
    #home img, 
    #home .stats,
    #services,
    #services header,
    #services .card, 
    #about,
    #about header,
    #about .content`); //aqui eu coloco mais de um argumento indicando a ordem de surgimento dos elementos na página, somente os template literals que é o que bai dentro das crases, te permite quebrar as linhas nas strings, aspas e aspas duplas nao te permitem
