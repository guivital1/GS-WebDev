    // DECLARANDO AS VARIÁVEIS
    const form = document.getElementById("form");
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");

    // EVENTO QUE VAI PEGAR O QUE ACONTECER NO FORMULÁRIO
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Previne qualquer alteração no formulário

        // CHAMAR A FUNÇÃO QUE VAI CHECAR OS CAMPOS
        checarCampos();

        // Redirecionar para quiz.html após preencher o formulário (independente da validação)
        window.location.href = "./quiz.html";
    });

    // FUNÇÃO CHECAR CAMPOS
    function checarCampos() {
        // DECLARANDO AS VARIÁVEIS
        const nomeValor = nome.value.trim();
        const emailValor = email.value.trim();
        const senhaValor = senha.value.trim();

        // SE O CAMPO NOME ESTIVER VAZIO
        if (nomeValor === "") {
            validarErro(nome, "Preencha o campo nome");
        } else {
            validarSucesso(nome);
        }

        // SE O CAMPO EMAIL ESTIVER VAZIO
        if (emailValor === "") {
            validarErro(email, "Preencha o campo email");
        } else {
            validarSucesso(email);
        }

        // SE O CAMPO SENHA ESTIVER VAZIO
        if (senhaValor === "") {
            validarErro(senha, "Preencha o campo senha");
        } else if (senhaValor.length < 8) {
            validarErro(senha, "A senha deve ter mais que 8 caracteres");
        } else {
            validarSucesso(senha);
        }
    }

    // VALIDAR ERRO
    function validarErro(input, message) {
        const controle = input.parentElement;
        const small = controle.querySelector("small");
        small.innerText = message;
        controle.className = "controle error";
    }

    // VALIDAR SUCESSO
    function validarSucesso(input) {
        const controle = input.parentElement;
        controle.className = "controle sucesso";
    }

    function cadastrar() {
        // Redirecionar para a página quiz.html
        window.location.href = "./quiz.html";
    }


    function voltarPagina() {
        window.location.href = "index.html";
    }