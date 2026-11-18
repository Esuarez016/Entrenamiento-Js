const inputNombre = document.getElementById("nombre");
const inputTelefono = document.getElementById("telefono");
const btnGuardar = document.getElementById("btnGuardar");
const mensaje = document.getElementById("mensaje");

btnGuardar.addEventListener("click", () => {
    const contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    // Si ya hay contactos guardados los muestra sino empieza con un array vacio

    // Validaciones de los campos
    const nombre = String(inputNombre.value.trim());
    const telefono = String(inputTelefono.value.trim());

    if (nombre.length < 4) {
        mensaje.textContent = "Debe ingresar un nombre con al menos 4 caracteres!";
        return;
    }

    if (telefono.length !== 10) {
        mensaje.textContent = "El telefono debe tener 10 digitos!";
        return;
    }

    // Creando el objeto contacto
    const contacto = {
        nombre: nombre,
        telefono: telefono,
    };

    // Guardando el objeto en el array
    contactos.push(contacto);

    // Transformando el array en String para guardarlo
    localStorage.setItem("contactos", JSON.stringify(contactos));

    mensaje.textContent = "Contacto guardado correctamente!"

    // Limpiando los inputs
    inputNombre.value = ""
    inputTelefono.value = ""
});

const btnMostrar = document.getElementById("mostrarContacto");
const lista = document.getElementById("lista");

btnMostrar.addEventListener("click", () => {
    const contactosGuardados = JSON.parse(localStorage.getItem("contactos")) || [];

    lista.innerHTML = "";

    contactosGuardados.forEach((contacto) => {
        const nuevoContacto = document.createElement("li");

        nuevoContacto.textContent = `${contacto.nombre} - ${contacto.telefono}`;

        lista.appendChild(nuevoContacto);
    });
});