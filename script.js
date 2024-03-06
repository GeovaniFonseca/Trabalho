// Função para embaralhar o array de perguntas
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const currentQ = questions[currentQuestion];
    
    questionElement.innerText = currentQ.question;
    answersElement.innerHTML = '';
    
    for (const [key, value] of Object.entries(currentQ.answers)) {
      answersElement.innerHTML += `<li><button onclick="checkAnswer('${key}')">${value}</button></li>`;
    }
  }
  
  function checkAnswer(answer) {
    const currentQ = questions[currentQuestion];
    const resultElement = document.getElementById('result');
    
    if (answer === currentQ.correctAnswer) {
      score++;
      resultElement.innerText = 'Resposta correta!';
    } else {
      resultElement.innerText = 'Resposta incorreta!';
    }
    
    document.getElementById('next-btn').style.display = 'block';
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
      document.getElementById('result').innerText = '';
      document.getElementById('next-btn').style.display = 'none';
    } else {
      const container = document.querySelector('.container');
      container.innerHTML = `<h1>Pontuação Final: ${score}/${questions.length}</h1>`;
    }
  }
  
  // Array de perguntas
  const questions = [
    {
      question: "Qual é a complexidade de tempo do pior caso (em termos de O grande) para encontrar um elemento em uma matriz não ordenada de tamanho N usando a pesquisa linear?",
      answers: {
        a: "O(N)",
        b: "O(log N)",
        c: "O(N^2)",
        d: "O(1)"
      },
      correctAnswer: "a"
    },
    {
      question: "Um algoritmo de ordenação tem uma complexidade de tempo de O(N log N) no melhor e no pior caso. Qual algoritmo de ordenação provavelmente está sendo usado?",
      answers: {
        a: "Bubble Sort",
        b: "Quick Sort",
        c: "Insertion Sort",
        d: "Merge Sort"
      },
      correctAnswer: "d"
    },
    {
      question: "Suponha que um software esteja sendo testado com 100 casos de teste. Se os casos de teste levarem 1 minuto cada para serem executados, quanto tempo levará para executar todos os casos de teste?",
      answers: {
        a: "1 hora",
        b: "100 minutos",
        c: "60 minutos",
        d: "100 horas"
      },
      correctAnswer: "b"
    },
    {
      question: "Qual é a principal razão para usar técnicas de análise de valor limite?",
      answers: {
        a: "Para encontrar e corrigir todos os bugs no software",
        b: "Para garantir que o software atenda aos requisitos de desempenho",
        c: "Para garantir que o software seja fácil de usar",
        d: "Para determinar a eficiência do software em condições extremas"
      },
      correctAnswer: "b"
    },
    {
      question: "Qual é a abordagem usada para testar a funcionalidade de um sistema sem conhecimento interno da lógica ou estrutura do código-fonte?",
      answers: {
        a: "Teste de caixa branca",
        b: "Teste de unidade",
        c: "Teste de caixa preta",
        d: "Teste de integração"
      },
      correctAnswer: "c"
    },
    {
      question: "O que é um teste de carga em engenharia de software?",
      answers: {
        a: "Testar a robustez de um software",
        b: "Testar a capacidade de um sistema lidar com uma carga máxima esperada",
        c: "Testar o software em diferentes condições de ambiente",
        d: "Testar a funcionalidade de um software em condições extremas"
      },
      correctAnswer: "b"
    },
    {
      question: "O que são casos de teste de fronteira em teste de software?",
      answers: {
        a: "Casos de teste que testam a funcionalidade principal do software",
        b: "Casos de teste que testam as fronteiras entre diferentes módulos do software",
        c: "Casos de teste que testam as fronteiras entre diferentes classes de equivalência",
        d: "Casos de teste que testam os limites extremos dos dados de entrada"
      },
      correctAnswer: "d"
    },
    {
      question: "Em um diagrama de fluxo de dados, o que representa uma entidade externa?",
      answers: {
        a: "Um processo no sistema",
        b: "Um armazenamento de dados",
        c: "Uma fonte ou destino de dados fora do sistema",
        d: "Uma interface de usuário"
      },
      correctAnswer: "c"
    },
    {
      question: "Qual é a principal finalidade da técnica de particionamento em classes de equivalência em teste de software?",
      answers: {
        a: "Identificar todos os bugs no software",
        b: "Reduzir a quantidade de testes necessários",
        c: "Testar todas as funções do software",
        d: "Encontrar os requisitos não funcionais do software"
      },
      correctAnswer: "b"
    },
    {
      question: "O que é um diagrama de atividades em UML?",
      answers: {
        a: "Um diagrama que mostra as interações entre objetos em um sistema",
        b: "Um diagrama que mostra a estrutura estática de um sistema",
        c: "Um diagrama que mostra o fluxo de controle entre atividades em um processo",
        d: "Um diagrama que mostra a estrutura de classes em um sistema"
      },
      correctAnswer: "c"
    }
  ];
  
  
  // Embaralhar as perguntas antes de carregar
  shuffleQuestions(questions);
  
  // Carregar a primeira pergunta quando a página for carregada
  document.addEventListener('DOMContentLoaded', loadQuestion);
  