const quizData=[
    {
        question: 'What is the national sport in Sri Lanka',
        a: 'Cricket',
        b: 'Vollyball',
        c: 'Football',
        d: 'Batminton',
        correct:'b',
    },
    {
        question: 'Who is the priministar of Sri Lanka',
        a: 'Mahinda Rajapaksa',
        b: 'Ranil Wickramasinghe',
        c: 'Sajith Premadasa',
        d: 'Anura Kumara Dissanayake',
        correct:'a',
    },
    {
        question: 'Answer 1+2=',
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        correct:'c',
    }
]
const questionText=document.getElementById('question');
const answer_a=document.getElementById('text_a');
const answer_b=document.getElementById('text_b');
const answer_c=document.getElementById('text_c');
const answer_d=document.getElementById('text_d');

loadQuiz();

let currentQuiz= 0;

function loadQuiz(){
    currentQuizData=quizData(currentQuiz);

    questionText=currentQuizData.question;
    answer_a=currentQuizData.a;
    answer_b=currentQuizData.b;
    answer_c=currentQuizData.c;
    answer_d=currentQuizData.d;

}

console.log(loadQuiz);

