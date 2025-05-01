document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        {
            question: "Em uma festa, você...",
            answers: [
                { display: "XXX", result: "yours-truly" },
                { display: "XXX", result: "my-everything" },
                { display: "XXX", result: "dangerous-woman" },
                { display: "XXX", result: "sweetener" },
                { display: "XXX", result: "thank-u-next" },
                { display: "XXX", result: "positions" },
                { display: "XXX", result: "eternal-sunshine" }
            ]
        },
        {
            question: "Seu jeito de lidar com um término de namoro é...",
            answers: [
                { display: "XXX", result: "yours-truly" },
                { display: "XXX", result: "my-everything" },
                { display: "XXX", result: "dangerous-woman" },
                { display: "XXX", result: "sweetener" },
                { display: "XXX", result: "thank-u-next" },
                { display: "XXX", result: "positions" },
                { display: "XXX", result: "eternal-sunshine" }
            ]
        },
        {
            question: "Qual frase combina com você?",
            answers: [
                { display: "XXX", result: "yours-truly" },
                { display: "XXX", result: "my-everything" },
                { display: "XXX", result: "dangerous-woman" },
                { display: "XXX", result: "sweetener" },
                { display: "XXX", result: "thank-u-next" },
                { display: "XXX", result: "positions" },
                { display: "XXX", result: "eternal-sunshine" }
            ]
        },
        {
            question: "Em um encontro romântico, você prefere:",
            answers: [
                { display: "XXX", result: "yours-truly" },
                { display: "XXX", result: "my-everything" },
                { display: "XXX", result: "dangerous-woman" },
                { display: "XXX", result: "sweetener" },
                { display: "XXX", result: "thank-u-next" },
                { display: "XXX", result: "positions" },
                { display: "XXX", result: "eternal-sunshine" }
            ]
        },
        {
            question: "Como você reage a críticas?",
            answers: [
                { display: "XXX", result: "yours-truly" },
                { display: "XXX", result: "my-everything" },
                { display: "XXX", result: "dangerous-woman" },
                { display: "XXX", result: "sweetener" },
                { display: "XXX", result: "thank-u-next" },
                { display: "XXX", result: "positions" },
                { display: "XXX", result: "eternal-sunshine" }
            ]
        },
        {
            question: "Seu estilo de se vestir é:",
            answers: [
                { display: "XXX", result: "yours-truly" },
                { display: "XXX", result: "my-everything" },
                { display: "XXX", result: "dangerous-woman" },
                { display: "XXX", result: "sweetener" },
                { display: "XXX", result: "thank-u-next" },
                { display: "XXX", result: "positions" },
                { display: "XXX", result: "eternal-sunshine" }
            ]
        },
        {
            question: "O que mais te motiva?",
            answers: [
                { display: "XXX", result: "yours-truly" },
                { display: "XXX", result: "my-everything" },
                { display: "XXX", result: "dangerous-woman" },
                { display: "XXX", result: "sweetener" },
                { display: "XXX", result: "thank-u-next" },
                { display: "XXX", result: "positions" },
                { display: "XXX", result: "eternal-sunshine" }
            ]
        },
        {
            question: "Em conflitos, você:",
            answers: [
                { display: "XXX", result: "yours-truly" },
                { display: "XXX", result: "my-everything" },
                { display: "XXX", result: "dangerous-woman" },
                { display: "XXX", result: "sweetener" },
                { display: "XXX", result: "thank-u-next" },
                { display: "XXX", result: "positions" },
                { display: "XXX", result: "eternal-sunshine" }
            ]
        },
        {
            question: "Qual seu maior medo no amor?",
            answers: [
                { display: "XXX", result: "yours-truly" },
                { display: "XXX", result: "my-everything" },
                { display: "XXX", result: "dangerous-woman" },
                { display: "XXX", result: "sweetener" },
                { display: "XXX", result: "thank-u-next" },
                { display: "XXX", result: "positions" },
                { display: "XXX", result: "eternal-sunshine" }
            ]
        },
        {
            question: "Como você descreveria sua energia em momentos decisivos?",
            answers: [
                { display: "XXX", result: "yours-truly" },
                { display: "XXX", result: "my-everything" },
                { display: "XXX", result: "dangerous-woman" },
                { display: "XXX", result: "sweetener" },
                { display: "XXX", result: "thank-u-next" },
                { display: "XXX", result: "positions" },
                { display: "XXX", result: "eternal-sunshine" }
            ]
        },
    ];

    const results = {
        "yours-truly": {
            title: "Yours Truly",
            description: "Você é uma alma doce, romântica e cheia de sentimentos profundos.<br>Assim como o primeiro álbum da Ariana, você acredita no amor puro, nos gestos sinceros e no poder das pequenas coisas que aquecem o coração.<br>Seu jeito cativante e seu lado sentimental fazem de você alguém especial, que enxerga a vida com otimismo e afeto."
        },
        "my-everything": {
            title: "My Everything",
            description: "Você é intensa, extrovertida e cheia de energia!<br>Assim como o álbum que mistura pop, R&B e eletrônico, você se adapta a qualquer situação e sempre busca ir além.<br>Seu espírito é extrovertido e ambicioso — não tem medo de brilhar nem de experimentar coisas novas."
        },
        "dangerous-woman": {
            title: "Dangerous Woman",
            description: "Ousada, confiante e dona do seu poder — você não pede permissão para ser quem é!<br>Como esse álbum icônico, você exala sensualidade e confiança, dominando qualquer ambiente com sua presença.<br>Seu jeito é atrevido e irresistível, mas sempre com classe."
        },
        "sweetener": {
            title: "Sweetener",
            description: "Otimista, criativa e cheia de luz — você é a pessoa que transforma dor em algo bonito.<br>Assim como Sweetener, você acredita que até nos dias difíceis existe beleza e esperança.<br>Seu coração é leve, mas sua resiliência é de aço. "
        },
        "thank-u-next": {
            title: "Thank U, Next",
            description: "Independente, sem filtros e dona da sua história!<br>Você já superou o que não servia e hoje vive com atitude e resiliência.<br>Como esse álbum, você não tem medo da verdade e sabe que o autocuidado vem em primeiro lugar."
        },
        "positions": {
            title: "Positions",
            description: "Sedutora, misteriosa e cheia de charme.<br>Você sabe equilibrar vulnerabilidade e confiança como ninguém.<br>Assim como o álbum Positions, você joga o jogo do amor com inteligência e estilo, sempre deixando um ar de mistério no ar."
        },
        "eternal-sunshine": {
            title: "Eternal Sunshine",
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

// Você é o álbum Yours Truly
// Você é uma alma doce, romântica e cheia de sentimentos profundos.
// Assim como o primeiro álbum da Ariana, você acredita no amor puro, nos gestos sinceros e no poder das pequenas coisas que aquecem o coração.
// Seu jeito cativante e seu lado sentimental fazem de você alguém especial, que enxerga a vida com otimismo e afeto.

// Você é o álbum My Everything
// Você é intensa, extrovertida e cheia de energia!
// Assim como o álbum que mistura pop, R&B e eletrônico, você se adapta a qualquer situação e sempre busca ir além.
// Seu espírito é extrovertido e ambicioso — não tem medo de brilhar nem de experimentar coisas novas.

// Você é o álbum Dangerous Woman
// Ousada, confiante e dona do seu poder — você não pede permissão para ser quem é!
// Como esse álbum icônico, você exala sensualidade e confiança, dominando qualquer ambiente com sua presença.
// Seu jeito é atrevido e irresistível, mas sempre com classe.

// Você é o álbum Sweetener
// Otimista, criativa e cheia de luz — você é a pessoa que transforma dor em algo bonito.
// Assim como Sweetener, você acredita que até nos dias difíceis existe beleza e esperança.
// Seu coração é leve, mas sua resiliência é de aço. 

// Você é o álbum Thank U, Next
// Independente, sem filtros e dona da sua história!
// Você já superou o que não servia e hoje vive com atitude e resiliência.
// Como esse álbum, você não tem medo da verdade e sabe que o autocuidado vem em primeiro lugar.

// Você é o álbum Positions
// Sedutora, misteriosa e cheia de charme.
// Você sabe equilibrar vulnerabilidade e confiança como ninguém.
// Assim como o álbum Positions, você joga o jogo do amor com inteligência e estilo, sempre deixando um ar de mistério no ar.

// Você é o álbum Eternal Sunshine
// Sensível, introspectiva e profundamente emocional.
// Você analisa o amor e a vida com maturidade e poesia.
// Assim como o Eternal Sunshine, você navega entre memórias e lições aprendidas, encontrando beleza até na imperfeição.