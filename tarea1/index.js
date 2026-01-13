const elementos = document.querySelectorAll(".animar");

console.log(elementos.length); // 👈 AQUÍ

function mostrarAlScroll() {
    const alturaPantalla = window.innerHeight;

    elementos.forEach(el => {
        const distanciaTop = el.getBoundingClientRect().top;

        if (distanciaTop < alturaPantalla - 100) {
            el.classList.add("activo");
        }
    });
}

window.addEventListener("scroll", mostrarAlScroll);
mostrarAlScroll();
 

// ====== CARRITO ======
let contador = 0;
const contadorSpan = document.getElementById("contador");
const botones = document.querySelectorAll(".btn-comprar");

// Mensaje flotante
const mensaje = document.createElement("div");
mensaje.className = "mensaje";
mensaje.textContent = "Producto agregado al carrito 🛒";
document.body.appendChild(mensaje);

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        contador++;
        contadorSpan.textContent = contador;

        mensaje.classList.add("mostrar");

        setTimeout(() => {
            mensaje.classList.remove("mostrar");
        }, 1500);
    });
});
