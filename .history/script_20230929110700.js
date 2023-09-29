/* ----- FUNÇÃO DA BARRA DE NAVEGAÇÃO ----- */
function minhaFuncaoMenu() {
  let menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADICIONAR SOMBRA NA BARRA DE NAVEGAÇÃO DURANTE A ROLAGEM ----- */
window.onscroll = function() {sombraNoCabeçalho()};

function sombraNoCabeçalho() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}

/* ----- EFEITO DE DIGITAÇÃO ----- */
let efeitoDigitacao = new Typed(".typedText",{
  strings : ["Designer", "Desenvolvedor"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})

/* ----- ANIMAÇÃO DE REVELAÇÃO NA ROLAGEM ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- INÍCIO -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/* -- CAIXA DE PROJETOS -- */
sr.reveal('.project-box',{interval: 200})

/* -- TÍTULOS -- */
sr.reveal('.top-header',{})

/* ----- ANIMAÇÃO DE REVELAÇÃO ESQUERDA-DIREITA ----- */

/* -- INFORMAÇÕES SOBRE MIM & INFORMAÇÕES DE CONTATO -- */
const srEsquerda = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srEsquerda.reveal('.about-info',{delay: 100})
srEsquerda.reveal('.contact-info',{delay: 100})

/* -- HABILIDADES & CAIXA DE FORMULÁRIO -- */
const srDireita = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srDireita.reveal('.skills-box',{delay: 100})
srDireita.reveal('.form-control',{delay: 100})

/* ----- MUDAR LINK ATIVO ----- */

const seções = document.querySelectorAll('section[id]')

function scrollAtivo() {
const scrollY = window.scrollY;

seções.forEach(atual =>{
  const alturaDaSeção = atual.offsetHeight,
      topoDaSeção = atual.offsetTop - 50,
    idDaSeção = atual.getAttribute('id')

  if(scrollY > topoDaSeção && scrollY <= topoDaSeção + alturaDaSeção) { 

      document.querySelector('.nav-menu a[href*=' + idDaSeção + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + idDaSeção + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollAtivo)
