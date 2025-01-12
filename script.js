// Inicializar EmailJS con tu User ID
emailjs.init("TU_USER_ID"); // Reemplaza TU_USER_ID con el ID de usuario proporcionado por EmailJS

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevenir el envío predeterminado del formulario

    // Recolectar los datos del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Configurar el objeto de parámetros para EmailJS
    const templateParams = {
        name: name,
        email: email,
        message: message,
    };

    // Enviar el correo usando EmailJS
    emailjs
        .send("TU_SERVICE_ID", "TU_TEMPLATE_ID", templateParams)
        .then(
            function (response) {
                alert("¡Mensaje enviado con éxito!");
                document.getElementById("contact-form").reset(); // Limpiar el formulario
            },
            function (error) {
                alert("Hubo un error al enviar el mensaje. Inténtalo más tarde.");
            }
        );
});
