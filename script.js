/* ------------------------- CABEÇALHO ------------------------- */
/* ------------------------------------------------------------- */


/* ------------------------ PÁGINA HOME ------------------------ */
/* ------------------------------------------------------------- */


/* ----------------------- PÁGINA CtelS ----------------------- */
/* -------------------------------------------------------------- */


/* ----------------------- PÁGINA ENERGIA ----------------------- */
/* -------------------------------------------------------------- */


/* ---------------------- PÁGINA EMPRESAS ---------------------- */
/* -------------------------------------------------------------- */


/* ----------------------- PÁGINA CONTATO ----------------------- */
// --- Captura e atribuição de variáveis aos elementos
// Campo Nome:
let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");

// Campo E-mail:
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

// Campo Telefone:
let telInput = document.getElementById("tel");
let telLabel = document.querySelector('label[for="tel"]');
let telHelper = document.getElementById("tel-helper");

// Campo Mensagem:
let messageInput = document.getElementById("message");
let messageLabel = document.querySelector('label[for="message"]');
let messageHelper = document.getElementById("message-helper");

// Botão Enviar:
let btnEnviar = document.querySelector('button[type="submint"]')

// Botão Limpar:
let btnLimpar = document.querySelector('button[type="submint"]')

// --- Exibit e ocultar pop-up de campos obrigatórios
function mostrarPopup(input, label) {
    // Exibir popup de um campo obrigatório
    input.addEventListener ("focus", () => {
        label.classList.add("required-popup");
    });
    // Ocultar popup de um campo obrigatório
    input.addEventListener ("blur", () => {
        label.classList.remove("required-popup");
    });
}

function estilizarInputCorreto(input, helper) {
    input.classList.add("correct");
    input.classList.remove("error");
    helper.classList.remove("visible");
}

function estilizarInputIncorreto(input, helper) {
    input.classList.remove("correct");
    input.classList.add("error");
    helper.classList.add("visible");
}

mostrarPopup(nomeInput, nomeLabel);
mostrarPopup(emailInput, emailLabel);
mostrarPopup(telInput, telLabel);
mostrarPopup(messageInput, messageLabel);

// --- Validação de nome
nomeInput.addEventListener("change", (e)=> {
    let valor = e.target.value;
    if (valor.length < 3) {
        //Estilo dinâmico para nome incorreto
        nomeHelper.innerText = "O nome precisa ter 3 ou mais caracteres.";
        estilizarInputIncorreto(nomeInput, nomeHelper);
    } else {
        //Estilo dinâmico para nome correto
        estilizarInputCorreto(nomeInput, nomeHelper);
    }
})

// --- Validação de e-mail
emailInput.addEventListener("change", (e)=> {
    let valor = e.target.value;
    if (valor.includes("@") && valor.includes(".com")) {
        //Estilo dinâmico para e-mail válido
        estilizarInputCorreto(emailInput, emailHelper);   
    } else {
        //Estilo dinâmico para e-mail inválido
        emailHelper.innerText = "Insira um e-mail válido.";
        estilizarInputIncorreto(emailInput, emailHelper); 
    }
})

// --- Validação de telefone
telInput.addEventListener("change", (e)=> {
    let valor = e.target.value;
    if (valor < 18) {
        //Estilo dinâmico para tel abaixo de 18 anos
        telHelper.innerText = "Você tem menos de 18 anos.";
        estilizarInputIncorreto(telInput, telHelper);
    } else {
        //Estilo dinâmico para tel acima de 18 anos
        estilizarInputCorreto(telInput, telHelper);
    }
})

// --- Validação de mensagem
messageInput.addEventListener("blur", (e)=> {
    let valor = e.target.value;
    if (valor == "") {
        //Estilo dinâmico para message incorreta
        messageHelper.innerText = "O campo não pode estar vazio.";
        estilizarInputIncorreto(messageInput, messageHelper);
    } else {
        //Estilo dinâmico para message correta
        messageHelper.innerText = "message correta";
        estilizarInputCorreto(messageInput, messageHelper);
    }
})

/* -------------------------------------------------------------- */


/* ------------------------ BOTÃO VOLTAR ------------------------ */
/* -------------------------------------------------------------- */


/* -------------------------- RODAPÉ -------------------------- */
/* ------------------------------------------------------------ */