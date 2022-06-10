//classList  - checa a lista de classes de um elemento

//Sobre o ScrollY, ele retorna o número de pixels que o documento já rolou verticalmente.
//y é o número atual de pixels que o documento rolou a partir do topo.


window.addEventListener('scroll', onScroll)

onScroll() //era preciso executar a funcao uma vez, somente para adicionar a classe que se pode ver dentro da funcao referenciada, ou seja, quando página inciar, se deve executar ao menos uma vez a funcao

function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home) //passando os IDs da secao como argumento - no HTML o id é um seletor, no JS ele se converte em um objeto
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}


//criando linhas imaginárias
function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2   //lógica para saber as linhas alvo na página

    //verificar se a secao passou da linha
    //quais dados vou precisar?
    //offsetTop - O HTMLElement.offsetTop é um método apenas de leitura que retorna a medida, em pixels, da distância do elemento atual em relação ao topo do offsetParent

    //aqui eu pego um elemento, mas na verdade eu estou pegando o elemento pelo o id, somento com o nome, sem o #id
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    //o topo da secao chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop



    /* -------------verificar se a base está abaixo da linha alvo---------*/

    //primeiro preciso ver que a linha comeca em uma altura da página, que seria a sua base (topo) e, depois, para saber onde termina a secao no eixo x, 
    //eu pego a base desta secao, que me marca um valor, somo a sua altura (porque eu posso obter usando o height), 
    //e tenho onde ela termina. Assim, a gente tem onde a secao termina no eixo x, que é a soma da sua base com a sua altura. 
    const sectionEndsAt = sectionTop + sectionHeight

    //o final da secao passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    //limites da secao
    const sectionBoundaries = 
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')

    const menuElement = document
    .querySelector(`.menu a[href*=${sectionId}]`)//olha no menu, todos os elementos a, olhe o atributo href, e veja todos os que tenham/sejam semelhantes a (variável)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
}




function showNavOnScroll() {
    const navigation = document.getElementById('navigation');
    
    if(scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    if(scrollY > 550) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

//as duas funcoes de scroll, acima, sao executadas na primeira funcao 


function openMenu() {
    document.body.classList.add("menu-expanded")
}

function closeMenu() {
    document.body.classList.remove("menu-expanded")
}

//eu posso modificar esta lib do jeito que eu quiser, eu copiei um código base de  https://scrollrevealjs.org/guide/hello-world.html
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
