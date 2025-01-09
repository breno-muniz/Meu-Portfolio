// Scroll Header
function scrollHeader() {
    const nav = document.getElementById('header');
    if (this.scrollY >= 50) nav.classList.add('active-header');
    else nav.classList.remove('active-header');
}

window.addEventListener('scroll', scrollHeader);

// MENU MOBILE
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        
        toggle.addEventListener('click', (e) => {
            e.stopPropagation(); 
            nav.classList.toggle('active-menu-mobile');
            toggle.classList.toggle('active-bx');
        });

        
        nav.addEventListener('click', () => {
            nav.classList.remove('active-menu-mobile');
            toggle.classList.remove('active-bx');
        });

        
        document.body.addEventListener('click', () => {
            if (nav.classList.contains('active-menu-mobile')) {
                nav.classList.remove('active-menu-mobile');
                toggle.classList.remove('active-bx');
            }
        });
    }
};

showMenu('bx', 'menu-mobile');


//Modal
const projects = [
    {
      title: "U.bank",
      description: "U.bank foi desenvolvido com HTML, CSS, JavaScript e estilizado utilizando Sass. O projeto proporciona uma interface que seja capaz de captar um possivel cliente ou investidor para criar sua conta no banc. O projeto foi criado com foco em UX e UI, utilizando o Figma para prototipagem.",
      imageUrl: "imagens/U.bank.png",
      gitHubLink: "https://github.com/breno-muniz/Projeto-U.bank",
      projectLink: "https://breno-muniz.github.io/Projeto-U.bank/"
    },
    {
      title: "Meu Portfolio",
      description: "Meu Portfólio é a minha vitrine digital, onde compartilho meus projetos e experiências na área de desenvolvimento web. Criado com HTML, CSS, JavaScript e Sass, o site destaca meu foco em design responsivo e experiência do usuário (UX). Através de um layout moderno e funcional, o portfólio oferece uma navegação fluida e fácil, refletindo minha paixão por criar soluções web impactantes e interativas.",
      imageUrl: "imagens/portfolio.png",
      gitHubLink: "https://github.com/breno-muniz/Meu-Portfolio",
      projectLink: "https://breno-muniz.github.io/Meu-Portfolio/"
    },
    {
      title: "Projeto em Desenvolvimento",
      description: "Projeto ainda sendo desenvolvido, pegue um café e aguarde.",
      imageUrl: "imagens/pg.png",
      gitHubLink: "#",
      projectLink: "#"
    }
  ];

  let currentProjectIndex = 0;

  function openModal(index) {
    currentProjectIndex = index;
    const project = projects[currentProjectIndex];
    document.getElementById('modalTitle').innerText = project.title;
    document.getElementById('modalDescription').innerText = project.description;
    document.getElementById('modalImage').src = project.imageUrl;
    document.getElementById('modalGitHub').href = project.gitHubLink;
    document.getElementById('modalLink').href = project.projectLink;
    document.getElementById('projectModal').style.display = 'flex';
  }

  function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
  }

  function navigateProject(direction) {
    currentProjectIndex = (currentProjectIndex + direction + projects.length) % projects.length;
    openModal(currentProjectIndex);
  }

  function handleModalClick(event) {
    if (event.target.id === 'projectModal') {
      closeModal();
    }
  }

  // Fecha o modal ao pressionar ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });