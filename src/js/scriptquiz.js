const questao = [
    {
        questao: "O que é piezoeletricidade e como ela contribui para a geração de energia sustentável?",
        respostas: [
            { text: "É a geração de energia a partir de fontes de água, que utiliza a energia das ondas para produzir eletricidade.", correct: false },
            { text: "É a capacidade de gerar energia elétrica a partir de vibrações ou pressão, como o impacto de pedestres, o que a torna uma fonte sustentável de energia renovável.", correct: true },
            { text: "É o processo de transformar energia solar em eletricidade, por meio de células fotovoltaicas.", correct: false },
            { text: "É a conversão de calor gerado por máquinas em eletricidade, utilizado principalmente em fábricas e indústrias", correct: false },
        ]
    },
    {
        questao: "Como a piezoeletricidade pode ser utilizada em áreas com grande circulação de pessoas??",
        respostas: [
            { text: "A piezoeletricidade pode ser utilizada em áreas de grande circulação de pessoas, como shoppings, onde a energia gerada pelas vibrações dos passos pode ser capturada e convertida em eletricidade.", correct: true },
            { text: "A piezoeletricidade não pode ser usada em áreas de grande circulação de pessoas, pois depende de fontes de energia como vento e sol.", correct: false},
            { text: "Ela pode ser utilizada apenas em áreas rurais, devido à falta de infraestrutura urbana.", correct: false },
            { text: "Ela é útil apenas para gerar calor em grandes cidades, não tendo relação com a eletricidade.", correct: false },
        ]
    },
    {
        questao: "Como o uso diário da piezoeletricidade pode ser economicamente viável em locais como estações de trem?",
        respostas: [
            { text: "", correct: true },
            { text: "A piezoeletricidade não pode ser usada em áreas de grande circulação de pessoas, pois depende de fontes de energia como vento e sol.", correct: false},
            { text: "Ela pode ser utilizada apenas em áreas rurais, devido à falta de infraestrutura urbana.", correct: false },
            { text: "Ela é útil apenas para gerar calor em grandes cidades, não tendo relação com a eletricidade.", correct: false },
        ]
    },
    {
        questao: "Quais são os principais materiais utilizados na tecnologia piezoelétrica?",
        respostas : [
            { text: "Materiais semicondutores, como o silício.", correct: false },
            { text: "Polímeros plásticos usados em embalagens.", correct: false },
            { text: "Cristais e cerâmicas piezoelétricas, como quartzo e titanato de chumbo-zircônio.", correct: true },
            { text: "Metais pesados como ferro e cobre.", correct: false },
        ]
    },
    {
        questao: "Por que a piezoeletricidade é considerada uma solução limpa para geração de energia?",
        respostas: [
            { text: "Porque não emite gases poluentes e utiliza fontes naturais de movimento, como passos e vibrações.", correct: true },
            { text: "Porque depende exclusivamente da energia solar, que é renovável.", correct: false },
            { text: "Porque utiliza combustíveis fósseis de forma mais eficiente.", correct: false },
            { text: "Porque recicla materiais plásticos para gerar energia.", correct: false },
        ]
    },
    {
        questao: "Quais são as limitações da tecnologia piezoelétrica?",
        respostas: [
            { text: "Alto custo inicial e a dependência de vibrações constantes para operar de forma eficiente.", correct: true },
            { text: "Baixa durabilidade dos materiais, que precisam ser substituídos frequentemente.", correct: false },
            { text: "Falta de eficiência em áreas urbanas com grande circulação de pessoas.", correct: false },
            { text: "Dependência de grandes áreas abertas para a instalação dos dispositivos.", correct: false },
        ]
    },
    {
        questao: "Qual público seria mais beneficiado pela implementação da piezoeletricidade?",
        respostas: [
            { text: "Empresas e locais com alta circulação de pessoas, como shoppings e estações de trem.", correct: true },
            { text: "Residências em áreas rurais isoladas.", correct: false },
            { text: "Indústrias que utilizam energia térmica em larga escala.", correct: false },
            { text: "Apenas governos e instituições de pesquisa.", correct: false },
        ]
    },
    {
        questao: "Como a piezoeletricidade pode ajudar na transição energética global?",
        respostas: [
            { text: "Substituindo completamente todas as fontes de energia atuais.", correct: false },
            { text: "Reduzindo a dependência de combustíveis fósseis e complementando outras fontes renováveis em sistemas híbridos.", correct: true },
            { text: "Sendo utilizada exclusivamente em áreas rurais e desertos.", correct: false },
            { text: "Aumentando o uso de energia térmica em países industrializados.", correct: false },
        ]
    },
    {
        questao: "O que torna a piezoeletricidade uma escolha inovadora para o futuro?",
        respostas: [
            { text: "Sua capacidade de gerar energia em locais movimentados, sem necessidade de grandes instalações ou impacto ambiental significativo.", correct: true },
            { text: "A simplicidade de instalação em qualquer tipo de terreno.", correct: false },
            { text: "O fato de ser mais barata que todas as outras fontes renováveis.", correct: false },
            { text: "Sua dependência de materiais abundantes e baratos, como plástico.", correct: false },
        ]
    },
    {
        questao: "Qual é o papel da piezoeletricidade na redução da pegada de carbono global?",
        respostas: [
            { text: "Ela reduz a emissão de gases poluentes ao utilizar vibrações como fonte de energia renovável, diminuindo a dependência de combustíveis fósseis.", correct: true },
            { text: "Aumenta o uso de energia nuclear para compensar a baixa eficiência de outras fontes renováveis.", correct: false },
            { text: "Elimina completamente a necessidade de energia eólica e solar.", correct: false },
            { text: "Apenas substitui fontes de energia não-renováveis em áreas urbanas isoladas.", correct: false },
        ]
    }
    


    
    
];


const questaoElement = document.getElementById("questao");
const answerbuttonElement = document.getElementById("answer-buttons");
const proximobtn = document.getElementById("proximobtn");

let IndiceQuestaoAtual = 0;
let resultado = 0;

function comecarQuiz() {
    IndiceQuestaoAtual = 0;
    resultado = 0;
    proximobtn.innerHTML = "Próximo";
    showQuestion();
}

function showQuestion() {
    resetarestado();
    let questaoAtual = questao[IndiceQuestaoAtual];
    let questaoNao = IndiceQuestaoAtual + 1;
    questaoElement.innerHTML = questaoNao + ". " + questaoAtual.questao;

    questaoAtual.respostas.forEach(respostas => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.innerHTML = respostas.text;
        answerbuttonElement.appendChild(button);
        if (respostas.correct) {
            button.dataset.correct = respostas.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetarestado() {
    proximobtn.style.display = "none";
    while (answerbuttonElement.firstChild) {
        answerbuttonElement.removeChild(answerbuttonElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correto");
        resultado++;
    } else {
        selectBtn.classList.add("incorreto");
    }
    Array.from(answerbuttonElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correto");
        }
        button.disabled = true;
    });
    proximobtn.style.display = "block";
}

function Mostrarresultado() {
    resetarestado();
    questaoElement.innerHTML = `Você acertou ${resultado} de ${questao.length}`;
    proximobtn.innerHTML = "Jogue Novamente";
    proximobtn.style.display = "block";
}

function handleproximobtn() {
    IndiceQuestaoAtual++;
    if (IndiceQuestaoAtual < questao.length) {
        showQuestion();
    } else {
        Mostrarresultado();
    }
}

proximobtn.addEventListener("click", () => {
    if (IndiceQuestaoAtual < questao.length) {
        handleproximobtn();
    } else {
        comecarQuiz();
    }
});

comecarQuiz();

function voltarPaginaPrincipal() {
    window.location.href = "index.html";
}
