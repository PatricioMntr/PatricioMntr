
window.onscroll = function() {
    scrollFunction()
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("back-to-top").style.display = "block";
    } else {
      document.getElementById("back-to-top").style.display = "none";
    }
  }
  
  document.getElementById("back-to-top").addEventListener("click", function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    if (!name || !email || !message) {
      alert('Por favor, rellena todos los campos');
      return;
    }
        // Enviar los datos al servidor aquí

        form.reset();
        alert('Mensaje enviado');
        
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
  
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
