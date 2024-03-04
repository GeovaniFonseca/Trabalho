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
    }
    // Adicione mais perguntas aqui
  ];
  
  // Embaralhar as perguntas antes de carregar
  shuffleQuestions(questions);
  
  // Carregar a primeira pergunta quando a página for carregada
  document.addEventListener('DOMContentLoaded', loadQuestion);
  