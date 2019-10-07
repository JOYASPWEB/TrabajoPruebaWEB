var form  = document.getElementsByTagName('form')[0];
var pnombre= document.getElementById("pnombre");
var error = document.querySelector('.errornom1');

pnombre.addEventListener("keyup", function(event){
    if(pnombre.oninvalid.valid){
        error.innerHTML="";
        error.className="error";
    }
},false);

form.addEventListener("submit", function (event) {
    // Cada vez que el usuario intenta enviar los datos, verificamos
    // si el campo de correo es válido.
    if (!pnombre.validity.valid) {
      
      // Si el campo no es válido, mostramos un mensaje de error.
      error.innerHTML = "¡Yo esperaba una dirección de correo!";
      error.className = "error active";
      // Y prevenimos que el formulario sea enviado, cancelando el evento
      event.preventDefault();
    }
  }, false);

