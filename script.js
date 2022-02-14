// Questions that will be asked
const Questions = [{
    id: 0,
    q: "What is Harry's Middle Name?",
    a: [{ text: "Remus", isCorrect: false },
        { text: "Sirius", isCorrect: false },
        { text: "James", isCorrect: true },
        { text: "Peter", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What is the name of Harry's School?",
    a: [{ text: "Durmstrang", isCorrect: false,  },
        { text: "Ilvermore", isCorrect: false },
        { text: "Bouxbaxtons", isCorrect: false },
        { text: "Hogwarts", isCorrect: true }
    ]

},
{
    id: 2,
    q: "What was the name of Harry's Owl?",
    a: [{ text: "Crookshanks", isCorrect: false },
        { text: "Scabbers", isCorrect: false },
        { text: "Hedwig", isCorrect: true },
        { text: "Pigwedgeon", isCorrect: false }
    ]

},
{
    id: 3,
    q: "Whats the Goblins name that took Harry into the Vault?",
    a: [{ text: "Griphook", isCorrect: true },
        { text: "Dobby", isCorrect: false },
        { text: "Tolken", isCorrect: false },
        { text: "Maryweather", isCorrect: false }
    ]

},
{
    id: 4,
    q: "What position did Harry Play in Quidditch?",
    a: [{ text: "Beater", isCorrect: false },
        { text: "Seeker", isCorrect: true },
        { text: "Chaser", isCorrect: false },
        { text: "Goalie", isCorrect: false }
    ]

},
{
    id: 5,
    q: "What was the Street Harry Lived on?",
    a: [{ text: "Secret Drive", isCorrect: false },
        { text: "Parsley Drive", isCorrect: false },
        { text: "Private Drive", isCorrect: true },
        { text: "Potter Drive", isCorrect: false }
    ]

},
{
    id: 6,
    q: "Who was Harry's God Father?",
    a: [{ text: "Sirius", isCorrect: true },
        { text: "Dumbledore", isCorrect: false },
        { text: "Remus", isCorrect: false },
        { text: "Snape", isCorrect: false }
    ]

},
{
    id: 7,
    q: "What shape does harry's Patronous take?",
    a: [{ text: "Otter", isCorrect: false },
        { text: "Dog", isCorrect: false },
        { text: "Horse", isCorrect: false },
        { text: "Stag", isCorrect: true }
    ]

},

]

// Set Start 
var start = true;

//Iterate 
function iterate(id) {
  
    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
  
    // Getting the question
    const question = document.getElementById("question");
  
  
    // Setting the question text
    question.innerText = Questions[id].q;
  
    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
  
  
    // Providing option text 
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
  
    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;
  
    var selected = "";
  
    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "#2A623D";
        op2.style.backgroundColor = "#2A623D";
        op3.style.backgroundColor = "#2A623D";
        op4.style.backgroundColor = "#2A623D";
        selected = op1.value;
    })
  
    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "#2A623D";
        op2.style.backgroundColor = "#2A623D";
        op3.style.backgroundColor = "#2A623D";
        op4.style.backgroundColor = "#2A623D";
        selected = op2.value;
    })
  
    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "#2A623D";
        op2.style.backgroundColor = "#2A623D";
        op3.style.backgroundColor = "#2A623D";
        op4.style.backgroundColor = "#2A623D";
        selected = op3.value;
    })
  
    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "#2A623D";
        op2.style.backgroundColor = "#2A623D";
        op3.style.backgroundColor = "#2A623D";
        op4.style.backgroundColor = "#2A623D";
        selected = op4.value;
    })
  
    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");
  
    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "lightgreen";
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    })
}
  
if (start) {
    iterate("0");
}
  
// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;
  
next.addEventListener("click", () => {
    start = false;
    if (id < 10) {
        id++;
        iterate(id);
        console.log(id);
    }
  
})


