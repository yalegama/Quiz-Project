const list=[
    {
        question:"What is the capital of Sri Lanka",
        a:"Colombo",
        b:"Sri Jayawardanapura Kotte",
        c:"Kandy",
        d:"Gampaha"
    },
    {
        question:"What is the national sport in Sri Lanka",
        a:"Cricket",
        b:"VollyBall",
        c:"FootBall",
        d:"BatMinton"
    },
    {
        question:"Who is the priminister of Sri Lanka",
        a:'mahinda',
        b:'ranil',
        c:'sajith',
        d:'patali',
    },
    {
        question:"What is the sum of 2+2",
        a:"4",
        b:'5',
        c:'8',
        d:"7"
    }
];

let answers=["b","b","a"];
let ans=0;



/***selecting  */

let question=document.getElementById('question');
let answer_a=document.getElementById('text_a');
let answer_b=document.getElementById('text_b');
let answer_c=document.getElementById('text_c');
let answer_d=document.getElementById('text_d');
let button=document.getElementById('button');


/***creating variable for loading function */

let currentItem=0;

/***calling loading function */
loading();

/***making loading function */

function loading(){
    const item=list[currentItem];
    question.innerText=item.question;
    answer_a.innerText=item.a;
    answer_b.innerText=item.b;
    answer_c.innerText=item.c;
    answer_d.innerText=item.d;
}

button.addEventListener('click',function(){
    currentItem++;
    if(currentItem>list.length-1){
        alert("You are finish");
    }loading(currentItem);
});
