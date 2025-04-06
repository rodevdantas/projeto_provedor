document.addEventListener('DOMContentLoaded', function () {
  const elementos = document.querySelectorAll(
    '.topo, thead, tbody, footer' 
  );

  elementos.forEach(el => {
    el.classList.add('fade-in');
  });
});

  