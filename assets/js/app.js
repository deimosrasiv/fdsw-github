function enviar() {
    var email = document.getElementById("email").value;
    var nombre = document.getElementById("nombre").value;
    if (email != "") {
        openmodal()
    } else {
        alert("Debe Ingresar Nombre y Correo, para que podamos contactarlo")
    }
}



function openmodal() {

    var email = document.getElementById("email").value;
    var nombre = document.getElementById("nombre").value;
    //console.log(nombre);

    $('#ModalCorreo').modal('show'); // abrir

    document.getElementById("modalnombre").innerHTML = nombre;
    document.getElementById("email_user").innerHTML = email;

    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
}