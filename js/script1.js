document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
  
    const elementosParaAnimar = document.querySelectorAll(
      'nav, #conteudo-principal, #home, #faixa1, #info, #planos, #faixa2, #contato, .rodape'
    );
  
    elementosParaAnimar.forEach(el => {
      el.classList.add('fade-in'); 
      observer.observe(el);     
    });
  });

  document.querySelectorAll('#link-certo').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});


  
  