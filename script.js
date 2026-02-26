let currentLanguage = "en";
let currentQuestionIndex = 0;
let selectedGender = "";
let score = {
    studyGirl: 0,
    socialGirl: 0,
    studyBoy: 0,
    sportBoy: 0
};

function setLanguage(lang) {
    currentLanguage = lang;
    currentQuestionIndex = 0;
    selectedGender = "";
    score = {
        studyGirl: 0,
        socialGirl: 0,
        studyBoy: 0,
        sportBoy: 0
    };
    showGenderSelection();
}

function showGenderSelection() {
    const app = document.getElementById("app");

    document.body.style.background = "linear-gradient(135deg, #4f46e5, #ec4899)";

    app.innerHTML = `
        <h1>Select Gender</h1>
        <button onclick="selectGender('girl')">Girl</button>
        <button onclick="selectGender('boy')">Boy</button>
    `;
}

function selectGender(gender) {
    selectedGender = gender;
    currentQuestionIndex = 0;
    score = {
        studyGirl: 0,
        socialGirl: 0,
        studyBoy: 0,
        sportBoy: 0
    };
    showQuestion();
}

function showQuestion() {
    const app = document.getElementById("app");
    const questions = translations[currentLanguage].questions;

    document.body.style.background = "linear-gradient(135deg, #4f46e5, #ec4899)";

    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const question = questions[currentQuestionIndex];

    let buttonsHTML = "";

    question.options.forEach(option => {
        buttonsHTML += `
            <button onclick="answerQuestion('${option.type}')">
                ${option.text}
            </button>
        `;
    });

    const progressPercent = (currentQuestionIndex / questions.length) * 100;

    app.innerHTML = `
        <div class="question-container">
            <div class="progress-container">
                <div class="progress-bar" style="width:${progressPercent}%"></div>
            </div>

            <h2>${question.text}</h2>
            ${buttonsHTML}
        </div>
    `;
}

function answerQuestion(type) {
    if (score[type] !== undefined) {
        score[type]++;
    }
    currentQuestionIndex++;
    showQuestion();
}

function showResult() {
    const app = document.getElementById("app");

    app.innerHTML = `<h2>Analyzing your personality...</h2>`;

    setTimeout(() => {

        let finalType = "";

        if (selectedGender === "girl") {
            finalType = score.studyGirl >= score.socialGirl ? "studyGirl" : "socialGirl";
        } else {
            finalType = score.studyBoy >= score.sportBoy ? "studyBoy" : "sportBoy";
        }

        const result = translations[currentLanguage].results[finalType];

        app.innerHTML = `
            <div class="result-screen" style="
                background-image: url('${result.background}');
                background-size: cover;
                background-position: center;
            ">
                <div class="result-overlay"></div>

                <div class="result-content">
                    <img src="${result.image}" class="profile-img">
                    <h1>${result.name}</h1>
                    <h3>${result.city}</h3>
                    <p>${result.story}</p>

                    <br>

                    <button onclick="shareResult('${result.name}')">
                        Share Result
                    </button>

                    <button onclick="restartQuiz()">
                        Play Again
                    </button>
                </div>
            </div>
        `;

    }, 1200);
}

function shareResult(name) {
    const text = "I got " + name + " on Teen Mirror! 💫 Try it yourself!";

    if (navigator.share) {
        navigator.share({
            title: "Teen Mirror Result",
            text: text,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(text);
        alert("Result copied to clipboard!");
    }
}

function restartQuiz() {
    location.reload();
}