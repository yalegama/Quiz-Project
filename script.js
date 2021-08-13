quizData=[
    {
        question: 'What is the capital of Sri Lanka',
        a: 'kandy',
        b: 'Sri Jayawardanapura Kotte',
        c: 'Colombo',
        d: 'Galle',
        answer: 'b'
    },
    {
        question: 'Who is the priministar of Sri Lanka',
        a: 'Mahinda Rajapaksa',
        b: 'Ranil Wickramasinghe',
        c: 'sajith Premadasa',
        d: 'Anurakumara Dissanayake',
        answer: 'a'
    },
    {
        question: 'What is the national sport in Sri Lanka',
        a: 'FootBall',
        b: 'Cricket',
        c: 'VollyBall',
        d: 'Batminton',
        answer: 'c'
    }
]

var questions=document.getElementById('question');
var answer_a=document.getElementById('text_a');
var answer_b=document.getElementById('text_b');
var answer_c=document.getElementById('text_c');
var answer_d=document.getElementById('text_d');
var submitButton=document.getElementById('button');

let currentQuestion=0;

loadQuestion();
function loadQuestion(){
    const currentQuestionData=quizData[currentQuestion];

    questions.innerText=currentQuestionData.question;
    answer_a.innerText=currentQuestionData.a;
    answer_b.innerText=currentQuestionData.b;
    answer_c.innerText=currentQuestionData.c;
    answer_d.innerText=currentQuestionData.d;
    currentQuestion++;

}
submitButton.addEventListener('click', ()=>{
    currentQuestion++;
    loadQuestion();
})