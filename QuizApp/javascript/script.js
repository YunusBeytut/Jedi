const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const questionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".time-duration");
const resultContainer = document.querySelector(".result-container");

// Result ekranı elementleri
const scorePercentSpan = document.querySelector(".score-percent");
const correctCountSpan = document.querySelector(".correct-count");
const wrongCountSpan = document.querySelector(".wrong-count");
const totalScoreSpan = document.querySelector(".total-score");
const progressCircle = document.querySelector(".progress-ring__circle--animated");
const resultTitle = document.querySelector(".result-title");
const resultMessage = document.querySelector(".result-message p");

// Quiz state variables
const QUIZ_TIME_LIMIT = 10;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;
let quizCategory = "";
let numberOfQuestions = 10;
let currentQuestion = null;
const questionsIndexHistory = [];
let correctAnswerCount = 0;

// Skor animasyonunu başlatır
function animateScoreCircle(percent) {
    const radius = 52;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = circumference;
    // Animasyon için yavaşça güncelle
    let current = 0;
    const step = percent > 0 ? Math.max(1, percent / 30) : 0;
    function animate() {
        if (current < percent) {
            current += step;
            if (current > percent) current = percent;
            scorePercentSpan.textContent = `${Math.round(current)}%`;
            progressCircle.style.strokeDashoffset =
                circumference - (current / 100) * circumference;
            requestAnimationFrame(animate);
        } else {
            scorePercentSpan.textContent = `${percent}%`;
            progressCircle.style.strokeDashoffset = offset;
        }
    }
    animate();
}

// Yüzdeye göre mesajı döndür
function getResultMessage(percent) {
    if (percent === 100) return "Mükemmel! Tüm soruları doğru yaptın 🎉";
    if (percent >= 80) return "Harika iş çıkardın! Çok az hata yaptın.";
    if (percent >= 60) return "Güzel! Biraz daha çalışarak daha iyi olabilirsin.";
    if (percent >= 40) return "Fena değil, daha fazla pratik yapabilirsin.";
    return "Bu harika bir başlangıç! Daha fazla pratik yaparak kendini geliştirebilirsin.";
}

// Skor, doğru/yanlış, mesaj ve animasyonları günceller
function fillResultScreen() {
    const wrongCount = numberOfQuestions - correctAnswerCount;
    const percent = Math.round((correctAnswerCount / numberOfQuestions) * 100);
    const score = correctAnswerCount * 10;

    correctCountSpan.textContent = correctAnswerCount;
    wrongCountSpan.textContent = wrongCount;
    totalScoreSpan.textContent = score;
    resultTitle.textContent = percent >= 80 ? "Mükemmel!" : percent >= 60 ? "Tebrikler!" : "Harika İş Çıkardın!";
    resultMessage.textContent = getResultMessage(percent);
    animateScoreCircle(percent);


    saveScore(); // Skoru kaydet
    displayScoreHistory(); // Geçmişi göster

}

// Quiz sonucu ekranı göster ve skorları doldur
const showQuizResult = () => {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    fillResultScreen();
};

// Timer sıfırla
const resetTimer = () => {
    clearInterval(timer);
    currentTime = QUIZ_TIME_LIMIT;
};

// Timer başlat
const startTimer = () => {
    timer = setInterval(() => {
        currentTime--;
        timerDisplay.textContent = `${currentTime}s`;
        if (currentTime <= 0) {
            clearInterval(timer);
            HighlightCorrectAnswer();
            nextQuestionBtn.style.visibility = "visible";
            quizContainer.querySelector(".quiz-timer").style.background = "#c31402";
            answerOptions.querySelectorAll(".answer-option").forEach(option => {
                option.style.pointerEvents = "none";
            });
        }
    }, 1000);
};

// Soru getir
const getRandomQuestion = () => {
    if (!questions || questions.length === 0) {
        console.error("Sorular yüklenmedi veya boş!");
        return null;
    }
    const categoryQuestions = questions.find(
        cat => cat.category.toLowerCase() === quizCategory.toLowerCase()
    )?.questions || [];
    if (categoryQuestions.length === 0) {
        console.error("Kategoriye ait soru bulunamadı:", quizCategory);
        return null;
    }
    if (questionsIndexHistory.length >= Math.min(categoryQuestions.length, numberOfQuestions)) {
        return showQuizResult();
    }
    const availableQuestions = categoryQuestions.filter(
        (_, index) => !questionsIndexHistory.includes(index)
    );
    const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    questionsIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
    return randomQuestion;
};

// Doğru cevabı vurgula
const HighlightCorrectAnswer = () => {
    const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
    correctOption.classList.add("correct");
    const iconHTML = `<span class="material-symbols-outlined">check_circle</span>`;
    correctOption.insertAdjacentHTML("beforeend", iconHTML)
}

// Cevap seçimini yönet
const handleAnswer = (option, answerIndex) => {
    clearInterval(timer);
    const isCorrect = currentQuestion.correctAnswer === answerIndex;
    option.classList.add(isCorrect ? 'correct' : 'incorrect');
    !isCorrect ? HighlightCorrectAnswer() : correctAnswerCount++;
    const iconHTML = `<span class="material-symbols-outlined">${isCorrect ? 'check_circle' : 'cancel'}</span>`;
    option.insertAdjacentHTML("beforeend", iconHTML)
    answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");
    nextQuestionBtn.style.visibility = "visible";
}

// Soru ekrana bas
const renderQuestion = () => {
    currentQuestion = getRandomQuestion();
    if (!currentQuestion) return;
    resetTimer();
    startTimer();
    answerOptions.innerHTML = "";
    nextQuestionBtn.style.visibility = "hidden";
    quizContainer.querySelector(".quiz-timer").style.background = "#32313c";
    document.querySelector(".question-text").textContent = currentQuestion.question;
    questionStatus.innerHTML = `<b> ${questionsIndexHistory.length} </b> of <b> ${numberOfQuestions} </b> Questions`;
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.classList.add("answer-option");
        li.textContent = option;
        answerOptions.appendChild(li);
        li.addEventListener("click", () => handleAnswer(li, index))
    });
}

// Quiz başlat
const startQuiz = () => {
    quizCategory = configContainer.querySelector(".category-option.active").textContent;
    numberOfQuestions = parseInt(configContainer.querySelector(".question-option.active").textContent);
    configContainer.style.display = "none";
    quizContainer.style.display = "block";
    renderQuestion();
};

// Kategori/soru sayısı seçimlerini yönet
document.querySelectorAll(".category-option, .question-option").forEach(option => {
    option.addEventListener("click", () => {
        const currentActive = option.parentNode.querySelector(".active");
        if (currentActive) {
            currentActive.classList.remove("active");
        }
        option.classList.add("active");
    });
});

// Quiz'i sıfırla
const resetQuiz = () => {
    resetTimer();
    correctAnswerCount = 0;
    questionsIndexHistory.length = 0;
    configContainer.style.display = "block";
    resultContainer.style.display = "none";
    // Skor çemberini sıfırla
    animateScoreCircle(0);
};

nextQuestionBtn.addEventListener("click", renderQuestion);
document.querySelector(".try-again-btn").addEventListener("click", resetQuiz);
document.querySelector(".start-quiz-btn").addEventListener("click", startQuiz);

// Paylaş butonu için örnek clipboard paylaşımı (isteğe bağlı)
const shareBtn = document.querySelector(".share-btn");
if (shareBtn) {
    shareBtn.addEventListener("click", () => {
        const percent = Math.round((correctAnswerCount / numberOfQuestions) * 100);
        const msg = `QuizApp skorumu paylaşmak istiyorum: ${percent}% başarı!`;
        if (navigator.clipboard) {
            navigator.clipboard.writeText(msg);
            shareBtn.textContent = "Kopyalandı!";
            setTimeout(() => { shareBtn.innerHTML = '<i class="fas fa-share-alt"></i> Paylaş'; }, 1200);
        } else {
            alert(msg);
        }
    });
}

// LocalStorage'dan skorları al veya boş array oluştur
function getScores() {
    return JSON.parse(localStorage.getItem('quizScores')) || [];
}

// Skor kaydetme fonksiyonu (script.js içinde)
function saveScore() {
    const score = correctAnswerCount * 10; // 2 doğru = 20 puan
    const scores = JSON.parse(localStorage.getItem('quizScores')) || [];

    scores.unshift({
        category: quizCategory, // Seçilen kategori (Programlama/Coğrafya vb)
        questionCount: numberOfQuestions, // Toplam soru sayısı (10/15 vb)
        score: score
    });

    localStorage.setItem('quizScores', JSON.stringify(scores.slice(0, 5)));
}

// Skorları göster
function displayScoreHistory() {
    const scores = JSON.parse(localStorage.getItem('quizScores')) || [];
    const historyContainer = document.getElementById('scoreHistory');

    historyContainer.innerHTML = scores.map(item => `
    <div class="score-card">
      <span class="score-info">
        <span class="score-category">${item.category}</span>
        <span class="score-count">(${item.questionCount} Soru)</span>
      </span>
      <span class="score-value">${item.score} Puan</span>
    </div>
  `).join('');
}
