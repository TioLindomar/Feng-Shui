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


// Cadastro

window.addEventListener('load', function() {
    const form = document.getElementById('cadastroForm');
    const cadastrarBtn = document.getElementById('cadastrarBtn');
    const cancelarBtn = document.getElementById('cancelarBtn');
    const resultadoDiv = document.getElementById('resultado');

    cadastrarBtn.addEventListener('click', function() {
        if (form.checkValidity()) {
            const nomeCompleto = document.getElementById('nomeCompleto').value;
            const telefone = document.getElementById('telefone').value;
            const email = document.getElementById('email').value;
            const dataNascimento = document.getElementById('dataNascimento').value;
            const nomeUsuario = document.getElementById('nomeUsuario').value;
            const senha = document.getElementById('senha').value;

            resultadoDiv.innerHTML = `
                <p><strong>Dados Cadastrados:</strong></p>
                <p><strong>Nome Completo:</strong> ${nomeCompleto}</p>
                <p><strong>Telefone:</strong> ${telefone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Data de Nascimento:</strong> ${dataNascimento}</p>
                <p><strong>Nome de Ganhador:</strong> ${nomeUsuario}</p>
                <p><strong>Senha:</strong> ${senha}</p>
            `;
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });

    cancelarBtn.addEventListener('click', function() {
        form.reset();
        resultadoDiv.innerHTML = '';
    });
});


// Alert que leva a um link externo

// Obtém o modal
var mensagem = document.getElementById("minhaMensagem");

// Obtém o <span> que fecha o modal
var span = document.getElementsByClassName("fechar")[0];

// Abre o modal ao carregar a página
window.onload = function() { //  <--------- Uso de Onload
    mensagem.style.display = "block";
};

// Fecha o modal quando o usuário clica no <span> (x)
span.onclick = function() {
    mensagem.style.display = "none";
};

// Fecha o modal quando o usuário clica fora do modal
window.onclick = function(event) {
    if (event.target == mensagem) {
        mensagem.style.display = "none";
    }
};