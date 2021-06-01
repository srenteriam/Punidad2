var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido")
var telefono = document.getElementById("telefono");
var email = document.getElementById("email");

function enviarFormulario(){
    console.log("Enviar Formulario");

    if(telefono.value.length <= 0 || email.value.length <= 0 || nombre.value.length <= 0 || apellido.value.length <= 0){
        swal("Ingrese todos los datos obligatorios!" , "Nombre, Apellidos, Telefono y Email " );
    } else{

    }
    
}
