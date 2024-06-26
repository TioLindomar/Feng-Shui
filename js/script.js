// Mudar tema

document.addEventListener('DOMContentLoaded', function() {
    const tema = document.getElementById("tema");
    const body = document.body;

    // Tema padrão
    body.classList.add('tema-claro');

    tema.addEventListener("click", function(event) {
        event.preventDefault(); // Previna o comportamento padrão do link
        if (body.classList.contains('tema-claro')) {
            body.classList.remove('tema-claro');
            body.classList.add('tema-escuro');
        } else {
            body.classList.remove('tema-escuro');
            body.classList.add('tema-claro');
        }
    });
});

