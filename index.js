let sWord = [
  "java",
  "php",
  "c#",
  "c++",
  "phython",
  "clanguage",
  "javascript",
  "angular",
  "reactjs",
  "bootstrap",
  "css3",
  "html",
  "html5",
  "tailwind",
  "nodejs",
  "expressjs",
  "vuejs",
  "ES6",
];

//target msg
let msgEl = document.querySelector(".msg");
//target input tag

let inputEl = document.querySelector("input");
//target btn
let btnEl = document.querySelector(".btn");

//globel variable
let play = false;
let getAryWord = "";
let creScramWord = "";

//newWordGenrate function
const newWordGenrate = () => {
  const ranNum = Math.round(Math.random() * sWord.length);
  let storeranNum = sWord[ranNum];
  return storeranNum;
};

//scramble function
const scrambleFun = (ary) => {
  //change word index
  for (let i = ary.length - 1; i > 0; i--) {
    let temp = ary[i];
    //create random number and increase
    let j = Math.round(Math.random() * (i + 1));

    //swipe value
    ary[i] = ary[j];
    ary[j] = temp;
  }
  return ary;
};
// btnEl event and function
btnEl.addEventListener("click", () => {
  if (!play) {
    play = true;
    //change btn text
    btnEl.innerText = "Guess Word";
    //show input field
    inputEl.classList.toggle("hidden");
    //call a function
    getAryWord = newWordGenrate();
    //scramble function call
    creScramWord = scrambleFun(getAryWord.split("")).join("");
    //show message in display
    msgEl.innerText = `${creScramWord}`;
  } else {
    if (getAryWord === inputEl.value) {
      play = false;
      msgEl.innerText = `It's Correct word ${getAryWord} `;
      btnEl.innerText = "Play Again";
      inputEl.value = "";
      inputEl.classList.toggle("hidden");
    } else {
      msgEl.innerText = `It's InCorrect word tray again ${creScramWord} `;
    }
  }
});
