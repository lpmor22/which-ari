document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        {
            question: "Em uma festa, você:",
            answers: [
                { display: "Ajuda a todos a se divertir!", result: "sweetener" },
                { display: "Fica com as amigas e dá foras para quem não merece.", result: "thank-u-next" },
                { display: "Dança até o chão! Gosta de ser o centro das atenções.", result: "my-everything" },
                { display: "Deixa todo mundo sem reação com seu look!", result: "dangerous-woman" },
                { display: "Observa mais do que participa da festa.", result: "eternal-sunshine" },
                { display: "Flerta discretamente com alguém e prefere um clima mais intimista.", result: "positions" },
                { display: "Possui timidez, mas se solta com seus meus amigos.", result: "yours-truly" }
            ]
        },
        {
            question: "Seu jeito de lidar com um término de namoro é:",
            answers: [
                { display: "Apagar todas as memórias ruins e guardar o que foi bom como aprendizado.", result: "eternal-sunshine" },
                { display: "Ouvir muitas músicas de superação.", result: "thank-u-next" },
                { display: "Focar em outras coisas que me tragam bem-estar para transformar a dor em novas emoções.", result: "sweetener" },
                { display: "Procurar mostrar que está melhor sem a pessoa.", result: "dangerous-woman" },
                { display: "Dar um gelo na pessoa, mas deixo a porta aberta para reencontros.", result: "positions" },
                { display: "Escrever uma carta que nunca vau enviar para a pessoa.", result: "yours-truly" },
                { display: "Jogar tudo pro alto e sair com os amigos para superar a dor.", result: "my-everything" },
            ]
        },
        {
            question: "Qual frase combina com você?",
            answers: [
                { display: "Amo como nos romances antigos.", result: "yours-truly" },
                { display: "Gosto de mistério e sedução.", result: "positions" },
                { display: "A vida é doce se você deixar!", result: "sweetener" },
                { display: "Minha melhor versão vem depois do caos.", result: "thank-u-next" },
                { display: "Sou ambiciosa e não tenho medo de brilhar!", result: "my-everything" },
                { display: "Memórias boas ficam, as ruins viram aprendizado.", result: "eternal-sunshine" },
                { display: "Não peço permissão para ser eu mesma.", result: "dangerous-woman" }
            ]
        },
        {
            question: "Em um encontro romântico, você prefere:",
            answers: [
                { display: "Algo íntimo, como um jantar em casa com música.", result: "positions" },
                { display: "Um encontro com algo ousado, misteriosos e sensual.", result: "dangerous-woman" },
                { display: "Algo como cozinhar juntos e rir muito.", result: "sweetener" },
                { display: "Um passeio mais cultural, como visitar lugares importantes para a gente.", result: "eternal-sunshine" },
                { display: "Um passeio no parque de mãos dadas.", result: "yours-truly" },
                { display: "Um happy hour com drinks divertidos.", result: "thank-u-next" },
                { display: "Um encontro surpresa, cheio de emoção.", result: "my-everything" }
            ]
        },
        {
            question: "Como você reage a críticas?",
            answers: [
                { display: "Pergunto a opinião de quem confio.", result: "positions" },
                { display: "Penso se isso diz mais sobre mim ou sobre quem criticou.", result: "eternal-sunshine" },
                { display: "Agrado quem importa, o resto não me define.", result: "thank-u-next" },
                { display: "Sorrio e continuo, porque sei meu valor.", result: "dangerous-woman" },
                { display: "Preciso de um abraço para me recompor.", result: "yours-truly" },
                { display: "Mostro que posso ser ainda melhor", result: "my-everything" },
                { display: "Respiro fundo e penso em coisas boas.", result: "sweetener" }
            ]
        },
        {
            question: "Seu estilo de se vestir é:",
            answers: [
                { display: "Preto, couro, ousadia e sensualidade.", result: "dangerous-woman" },
                { display: "Seda, babados e um toque sensual.", result: "positions" },
                { display: "Trendy e com bastante estilo", result: "my-everything" },
                { display: "Looks românticos e tonalidades pasteís.", result: "yours-truly" },
                { display: "Confortável, cores claras e vibe descontraída.", result: "sweetener" },
                { display: "Minimalista e sofisticado, com uma vibe de menos é mais.", result: "eternal-sunshine" },
                { display: "De forma bem despojada, misturando moletom e acessórios chamativos.", result: "thank-u-next" }
            ]
        },
        {
            question: "O que mais te motiva?",
            answers: [
                { display: "Espalhar luz por onde passo.", result: "sweetener" },
                { display: "Sucesso e reconhecimento.", result: "my-everything" },
                { display: "Conexões intensas, mas sem pressa.", result: "positions" },
                { display: "Me priorizar acima de tudo.", result: "thank-u-next" },
                { display: "Quebrar expectativas.", result: "dangerous-woman" },
                { display: "Amor e conexões verdadeiras.", result: "yours-truly" },
                { display: "Crescimento e autoconhecimento.", result: "eternal-sunshine" }
            ]
        },
        {
            question: "Em conflitos, você:",
            answers: [
                { display: "Oferece um abraço para acalmar os ânimos.", result: "sweetener" },
                { display: "Evita repetir padrões do passado.", result: "eternal-sunshine" },
                { display: "Dá a volta por cima e deixa claro quem manda.", result: "dangerous-woman" },
                { display: "Não recua até ser ouvida.", result: "my-everything" },                
                { display: "Chora e depois tenta resolver.", result: "yours-truly" },
                { display: "Não perde tempo com gente tóxica.", result: "thank-u-next" },
                { display: "Escuta e pondera, tentando sempre manter a elegância.", result: "positions" }
            ]
        },
        {
            question: "Qual seu maior medo no amor?",
            answers: [
                { display: "Ser controlada pela outra pessoa.", result: "dangerous-woman" },
                { display: "O relacionamento estagnar.", result: "my-everything" },
                { display: "Me prender a quem não merece.", result: "thank-u-next" },
                { display: "O amor não ser correspondido.", result: "yours-truly" },
                { display: "Não ser prioridade.", result: "positions" },                
                { display: "Repetir padrões tóxicos.", result: "eternal-sunshine" },
                { display: "O amor virar dor.", result: "sweetener" }
            ]
        },
        {
            question: "Como você descreveria sua energia em momentos decisivos?",
            answers: [
                { display: "Emocional e coragem.", result: "yours-truly" },
                { display: "Autoconfiante acima de tudo.", result: "thank-u-next" },
                { display: "Analiso todas as opções antes de agir.", result: "positions" },
                { display: "Vou conquisar o mundo.", result: "my-everything" },
                { display: "Acredito que tudo vai dar certo.", result: "sweetener" },
                { display: "Penso nas consequências a longo prazo.", result: "eternal-sunshine" },
                { display: "Calculista e estratégica", result: "dangerous-woman" }
            ]
        },
    ];

    const results = {
        "yours-truly": {
            title: "Yours Truly",
            cover: "images/yours-truly.webp",
            description: "Você é uma alma doce, romântica e cheia de sentimentos profundos.<br>Assim como o primeiro álbum da Ariana, você acredita no amor puro, nos gestos sinceros e no poder das pequenas coisas que aquecem o coração.<br>Seu jeito cativante e seu lado sentimental fazem de você alguém especial, que enxerga a vida com otimismo e afeto."
        },
        "my-everything": {
            title: "My Everything",
            cover: "images/my-everything.webp",
            description: "Você é intensa, extrovertida e cheia de energia!<br>Assim como o álbum que mistura pop, R&B e eletrônico, você se adapta a qualquer situação e sempre busca ir além.<br>Seu espírito é extrovertido e ambicioso — não tem medo de brilhar nem de experimentar coisas novas."
        },
        "dangerous-woman": {
            title: "Dangerous Woman",
            cover: "images/dangerous-woman.webp",
            description: "Ousada, confiante e dona do seu poder — você não pede permissão para ser quem é!<br>Como esse álbum icônico, você exala sensualidade e confiança, dominando qualquer ambiente com sua presença.<br>Seu jeito é atrevido e irresistível, mas sempre com classe."
        },
        "sweetener": {
            title: "Sweetener",
            cover: "images/sweetener.webp",
            description: "Otimista, criativa e cheia de luz — você é a pessoa que transforma dor em algo bonito.<br>Assim como Sweetener, você acredita que até nos dias difíceis existe beleza e esperança.<br>Seu coração é leve, mas sua resiliência é de aço. "
        },
        "thank-u-next": {
            title: "Thank U, Next",
            cover: "images/thank-u-next.webp",
            description: "Independente, sem filtros e dona da sua história!<br>Você já superou o que não servia e hoje vive com atitude e resiliência.<br>Como esse álbum, você não tem medo da verdade e sabe que o autocuidado vem em primeiro lugar."
        },
        "positions": {
            title: "Positions",
            cover: "images/positions.webp",
            description: "Sedutora, misteriosa e cheia de charme.<br>Você sabe equilibrar vulnerabilidade e confiança como ninguém.<br>Assim como o álbum Positions, você joga o jogo do amor com inteligência e estilo, sempre deixando um ar de mistério no ar."
        },
        "eternal-sunshine": {
            title: "Eternal Sunshine",
            cover: "images/eternal-sunshine.webp",
            description: "Sensível, introspectiva e profundamente emocional.<br>Você analisa o amor e a vida com maturidade e poesia.<br>Assim como o Eternal Sunshine, você navega entre memórias e lições aprendidas, encontrando beleza até na imperfeição."
        }
    };

    const quizContainer = document.getElementById('quiz');
    const nextButton = document.getElementById('next');
    let currentQuestionIndex = 0;
    let userAnswers = [];
    
    function showQuestion(questionIndex) {
            const question = questions[questionIndex];
            quizContainer.innerHTML = '';
    
            const questionElement = document.createElement('div');
            questionElement.classList.add('question');
            questionElement.textContent = question.question;
            quizContainer.appendChild(questionElement);
    
            const optionsContainer = document.createElement('div');
            optionsContainer.classList.add('options-container');
            
            question.answers.forEach((option, index) => {
                const optionContainer = document.createElement('div');
                optionContainer.classList.add('option-container');
                
                const optionElement = document.createElement('input');
                optionElement.type = 'radio';
                optionElement.id = 'option-' + index;
                optionElement.name = 'question';
                optionElement.value = option.result;
                optionElement.addEventListener('change', () => selectAnswer(option.result));
                
                const labelElement = document.createElement('label');
                labelElement.htmlFor = 'option-' + index;
                labelElement.textContent = option.display;
                
                optionContainer.appendChild(optionElement);
                optionContainer.appendChild(labelElement);
                optionsContainer.appendChild(optionContainer);
            });
    
            quizContainer.appendChild(optionsContainer);
    
            if (questionIndex < questions.length - 1) {
                nextButton.style.display = 'block';
                nextButton.textContent = 'Próxima';
            } else {
                nextButton.textContent = 'Ver Resultado';
            }
        }
    
        function selectAnswer(answer) {
            userAnswers[currentQuestionIndex] = answer;
        }
    
        nextButton.addEventListener('click', () => {
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                showQuestion(currentQuestionIndex);
            } else {
                showResult();
            }
        });
    
        function showResult() {
            const finalResult = calculateResult();
            const result = results[finalResult];
            
            quizContainer.innerHTML = `
                <h3>Você é o álbum ${result.title}</h3>
                <img src="${result.cover}" alt="${result.title}" style="max-width: 300px; border-radius: 10px; margin: 20px 0;">
                <p>${result.description}</p>
            `;
            nextButton.style.display = 'none';
        }
    
        function calculateResult() {
            const resultCounts = {};
            userAnswers.forEach(answer => {
                resultCounts[answer] = (resultCounts[answer] || 0) + 1;
            });
            
            let maxCount = 0;
            let finalResult = '';
            for (const [result, count] of Object.entries(resultCounts)) {
                if (count > maxCount) {
                    maxCount = count;
                    finalResult = result;
                }
            }
            
            return finalResult;
        }
    
        showQuestion(0);
    });