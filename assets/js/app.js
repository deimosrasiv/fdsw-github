function enviar() {
    var email = document.getElementById("email").value;
    var nombre = document.getElementById("nombre").value;
    if (email != "") {
        openmodal()
    } else {
        alert("Debe Ingresar Nombre y Correo, para que podamos contactarlo")
    }
}
