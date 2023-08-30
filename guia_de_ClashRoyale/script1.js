//fondo oscuro 
window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var opacity = scrollTop / (window.innerHeight * 0.5); /* Opacidad máxima del 100% */
    document.querySelector('.background-layer').style.backgroundColor = 'rgba(0, 0, 0, ' + opacity + ')';
  });
//barra de nav
  window.addEventListener('scroll', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('sticky', window.scrollY > 0);
  });

