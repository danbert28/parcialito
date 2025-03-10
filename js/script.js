document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("dataForm");
    const resultado = document.getElementById("resultado");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        document.getElementById("resNombre").textContent = document.getElementById("nombre").value;
        document.getElementById("resApellido").textContent = document.getElementById("apellido").value;
        document.getElementById("resEmail").textContent = document.getElementById("email").value;
        document.getElementById("resTelefono").textContent = document.getElementById("telefono").value;
        document.getElementById("resNivel").textContent = document.getElementById("nivel").value;

        resultado.classList.remove("hidden");
    });
});
