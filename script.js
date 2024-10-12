const one = document.querySelector("#one-number");
const two = document.querySelector("#two-number");
const three = document.querySelector("#three-number");
const four = document.querySelector("#four-number");
const five = document.querySelector("#five-number");
const six = document.querySelector("#six-number");
const seven = document.querySelector("#seven-number");
const eight = document.querySelector("#eight-number");
const nine = document.querySelector("#nine-number");
const zero = document.querySelector("#zero-number");

const Dell = document.querySelector("#DELL-number");
const PLUS = document.querySelector("#plus-button");
const MINUIS = document.querySelector("#Minuis-button");
const FLOAT = document.querySelector("#float-button");
const DIVISION = document.querySelector("#division-number");
const Multiple = document.querySelector("#multiple-button");
const Reset = document.querySelector("#reset-button");
const Equal = document.querySelector("#equal-button");
const Result = document.querySelector("#result");

/**----------------------------------------------------------------------- */
one.addEventListener("click", () => {
  Result.textContent += "1";
});

two.addEventListener("click", () => {
  Result.textContent += "2";
});

three.addEventListener("click", () => {
  Result.textContent += "3";
});

four.addEventListener("click", () => {
  Result.textContent += "4";
});
five.addEventListener("click", () => {
  Result.textContent += "5";
});

six.addEventListener("click", () => {
  Result.textContent += "6";
});

seven.addEventListener("click", () => {
  Result.textContent += "7";
});

eight.addEventListener("click", () => {
  Result.textContent += "8";
});

nine.addEventListener("click", () => {
  Result.textContent += "9";
});

zero.addEventListener("click", () => {
  Result.textContent += "0";
});

PLUS.addEventListener("click", () => {
  Result.textContent += "+";
});

MINUIS.addEventListener("click", () => {
  Result.textContent += "-";
});
Multiple.addEventListener("click", () => {
  Result.textContent += "*";
});
DIVISION.addEventListener("click", () => {
  Result.textContent += "/";
});
FLOAT.addEventListener("click", () => {
  Result.textContent += ".";
});

Equal.addEventListener("click", () => {
  let resultexpression = 0;
  resultexpression = eval(Result.textContent);
  Result.textContent = `${eval(resultexpression)}`;
});

Reset.addEventListener("click", () => {
  Result.textContent = "";
});

Dell.addEventListener("click", () => {
  Result.textContent = Result.textContent.slice(0, -1);
});
const butonChangeThemeOne = document.querySelector("#change-theme-one");


const butonChangeThemeTwo = document.querySelector("#change-theme-two");
const butonChangeThemeThree = document.querySelector("#change-theme-three");
const numbersthemes = document.querySelector(".numbers-themes");
const themetext = document.querySelector("#theme-text");
const claclogo = document.querySelector("#clac-logo");
const buttonholder = document.querySelector(".button-holder");
const changeThemeButton = document.querySelector(".changeThemeButton");
const containerTwo =document.querySelector(".container-two");
const containerThree =document.querySelector(".container-three");
const buttonnumber =document.querySelector(".button-number")


/**--------------------------------------------------------------------------------------------- */
butonChangeThemeOne.addEventListener("click", () => {
  document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
  butonChangeThemeOne.style.opacity = "1";
  butonChangeThemeTwo.style.opacity = "0";
  butonChangeThemeThree.style.opacity = "0";
  numbersthemes.style.color = "white";
  themetext.style.color = "white";
  claclogo.style.color = "white";
  buttonholder.style.backgroundColor = "hsl(223, 31%, 20%)";
  containerTwo.style.backgroundColor="hsl(224, 36%, 15%)";
  Result.style.color="white";
  containerThree.style.backgroundColor="hsl(223, 31%, 20%)";
  Dell.style.backgroundColor="#68749c";
  Dell.style.boxShadow="1px 2px 1px 1px #68749c";
  Reset.style.backgroundColor="#616f9f";
  Reset.style.boxShadow="1px 2px 1px 1px #616f9f";
  Equal.style.backgroundColor="hsl(6, 63%, 50%)";
  Equal.style.boxShadow="1px 2px 1px 1px hsl(6, 63%, 50%)";

  one.style.backgroundColor="hsl(0, 3%, 81%)";
  one.style.boxShadow=" 1px 2px 1px 1px gray";
  one.style.color=" hsl(221, 14%, 31%)";

  two.style.backgroundColor="hsl(0, 3%, 81%)";
  two.style.boxShadow=" 1px 2px 1px 1px gray";
  two.style.color=" hsl(221, 14%, 31%)";

  three.style.backgroundColor="hsl(0, 3%, 81%)";
  three.style.boxShadow=" 1px 2px 1px 1px gray";
  three.style.color=" hsl(221, 14%, 31%)";

  four.style.backgroundColor="hsl(0, 3%, 81%)";
  four.style.boxShadow=" 1px 2px 1px 1px gray";
  four.style.color=" hsl(221, 14%, 31%)";

  five.style.backgroundColor="hsl(0, 3%, 81%)";
  five.style.boxShadow=" 1px 2px 1px 1px gray";
  five.style.color=" hsl(221, 14%, 31%)";

  six.style.backgroundColor="hsl(0, 3%, 81%)";
  six.style.boxShadow=" 1px 2px 1px 1px gray";
  six.style.color=" hsl(221, 14%, 31%)";

  seven.style.backgroundColor="hsl(0, 3%, 81%)";
  seven.style.boxShadow=" 1px 2px 1px 1px gray";
  seven.style.color=" hsl(221, 14%, 31%)";

  eight.style.backgroundColor="hsl(0, 3%, 81%)";
  eight.style.boxShadow=" 1px 2px 1px 1px gray";
  eight.style.color=" hsl(221, 14%, 31%)";


  nine.style.backgroundColor="hsl(0, 3%, 81%)";
  nine.style.boxShadow=" 1px 2px 1px 1px gray";
  nine.style.color=" hsl(221, 14%, 31%)";

  PLUS.style.backgroundColor="hsl(0, 3%, 81%)";
  PLUS.style.boxShadow=" 1px 2px 1px 1px gray";
  PLUS.style.color=" hsl(221, 14%, 31%)";

  MINUIS.style.backgroundColor="hsl(0, 3%, 81%)";
  MINUIS.style.boxShadow=" 1px 2px 1px 1px gray";
  MINUIS.style.color=" hsl(221, 14%, 31%)";

  FLOAT.style.backgroundColor="hsl(0, 3%, 81%)";
  FLOAT.style.boxShadow=" 1px 2px 1px 1px gray";
  FLOAT.style.color=" hsl(221, 14%, 31%)";

  DIVISION.style.backgroundColor="hsl(0, 3%, 81%)";
  DIVISION.style.boxShadow=" 1px 2px 1px 1px gray";
  DIVISION.style.color=" hsl(221, 14%, 31%)";

  zero.style.backgroundColor="hsl(0, 3%, 81%)";
  zero.style.boxShadow=" 1px 2px 1px 1px gray";
  zero.style.color=" hsl(221, 14%, 31%)";

  Multiple.style.backgroundColor="hsl(0, 3%, 81%)";
  Multiple.style.boxShadow=" 1px 2px 1px 1px gray";
  Multiple.style.color=" hsl(221, 14%, 31%)";

});

/**--------------------CHANGE THEME TWO-------------------- */



butonChangeThemeTwo.addEventListener("click", () => {
  document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
  butonChangeThemeOne.style.opacity = "0";
  butonChangeThemeTwo.style.opacity = "1";
  butonChangeThemeThree.style.opacity = "0";
  numbersthemes.style.color = "hsl(60, 10%, 19%)";
  themetext.style.color = "hsl(60, 10%, 19%)";
  claclogo.style.color = "hsl(60, 10%, 19%)";
  buttonholder.style.backgroundColor = "#d3cccc";
  butonChangeThemeThree.style.backgroundColor = "hsl(176, 100%, 44%)";
  containerTwo.style.backgroundColor="white";
  Result.style.color="hsl(60, 10%, 19%)";
  containerThree.style.backgroundColor="#d3cccc";
  Dell.style.backgroundColor="hsl(185, 42%, 37%)";
  Dell.style.boxShadow="1px 2px 1px 1px hsl(185, 58%, 25%)";
  Reset.style.backgroundColor="hsl(185, 58%, 25%)";
  Reset.style.boxShadow="1px 2px 1px 1px hsl(185, 58%, 25%)";
  Equal.style.backgroundColor="hsl(25, 98%, 40%)";
  Equal.style.boxShadow="1px 2px 1px 1px hsl(25, 98%, 40%)";



  one.style.backgroundColor="hsl(0, 3%, 81%)";
  one.style.boxShadow=" 1px 2px 1px 1px gray";
  one.style.color=" hsl(221, 14%, 31%)";

  two.style.backgroundColor="hsl(0, 3%, 81%)";
  two.style.boxShadow=" 1px 2px 1px 1px gray";
  two.style.color=" hsl(221, 14%, 31%)";

  three.style.backgroundColor="hsl(0, 3%, 81%)";
  three.style.boxShadow=" 1px 2px 1px 1px gray";
  three.style.color=" hsl(221, 14%, 31%)";

  four.style.backgroundColor="hsl(0, 3%, 81%)";
  four.style.boxShadow=" 1px 2px 1px 1px gray";
  four.style.color=" hsl(221, 14%, 31%)";

  five.style.backgroundColor="hsl(0, 3%, 81%)";
  five.style.boxShadow=" 1px 2px 1px 1px gray";
  five.style.color=" hsl(221, 14%, 31%)";

  six.style.backgroundColor="hsl(0, 3%, 81%)";
  six.style.boxShadow=" 1px 2px 1px 1px gray";
  six.style.color=" hsl(221, 14%, 31%)";

  seven.style.backgroundColor="hsl(0, 3%, 81%)";
  seven.style.boxShadow=" 1px 2px 1px 1px gray";
  seven.style.color=" hsl(221, 14%, 31%)";

  eight.style.backgroundColor="hsl(0, 3%, 81%)";
  eight.style.boxShadow=" 1px 2px 1px 1px gray";
  eight.style.color=" hsl(221, 14%, 31%)";


  nine.style.backgroundColor="hsl(0, 3%, 81%)";
  nine.style.boxShadow=" 1px 2px 1px 1px gray";
  nine.style.color=" hsl(221, 14%, 31%)";

  PLUS.style.backgroundColor="hsl(0, 3%, 81%)";
  PLUS.style.boxShadow=" 1px 2px 1px 1px gray";
  PLUS.style.color=" hsl(221, 14%, 31%)";

  MINUIS.style.backgroundColor="hsl(0, 3%, 81%)";
  MINUIS.style.boxShadow=" 1px 2px 1px 1px gray";
  MINUIS.style.color=" hsl(221, 14%, 31%)";

  FLOAT.style.backgroundColor="hsl(0, 3%, 81%)";
  FLOAT.style.boxShadow=" 1px 2px 1px 1px gray";
  FLOAT.style.color=" hsl(221, 14%, 31%)";

  DIVISION.style.backgroundColor="hsl(0, 3%, 81%)";
  DIVISION.style.boxShadow=" 1px 2px 1px 1px gray";
  DIVISION.style.color=" hsl(221, 14%, 31%)";

  zero.style.backgroundColor="hsl(0, 3%, 81%)";
  zero.style.boxShadow=" 1px 2px 1px 1px gray";
  zero.style.color=" hsl(221, 14%, 31%)";

  Multiple.style.backgroundColor="hsl(0, 3%, 81%)";
  Multiple.style.boxShadow=" 1px 2px 1px 1px gray";
  Multiple.style.color=" hsl(221, 14%, 31%)";


});
/**--------------------CHANGE THEME THREE-------------------- */
butonChangeThemeThree.addEventListener("click", () => {
  document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
  butonChangeThemeOne.style.opacity = "0";
  butonChangeThemeTwo.style.opacity = "0";
  butonChangeThemeThree.style.opacity = "1";
  numbersthemes.style.color = "hsl(52, 100%, 62%)";
  themetext.style.color = "hsl(52, 100%, 62%)";
  claclogo.style.color = "hsl(52, 100%, 62%)";
  buttonholder.style.backgroundColor = "#1f0937";
  butonChangeThemeThree.style.backgroundColor = "hsl(176, 100%, 44%)";
  containerTwo.style.backgroundColor="hsl(268, 47%, 21%)";
  Result.style.color="hsl(52, 100%, 62%)";
  containerThree.style.backgroundColor="#1f0837";
  Dell.style.backgroundColor="#8631b1";
  Dell.style.boxShadow="1px 2px 1px 1px #9328be";
  Reset.style.backgroundColor="#9328be";
  Reset.style.boxShadow="1px 2px 1px 1px #9328be";
  Equal.style.backgroundColor="hsl(176, 100%, 44%)";
  Equal.style.boxShadow="1px 2px 1px 1px hsl(177, 92%, 70%)";

  one.style.backgroundColor="#331a4c";
  one.style.boxShadow=" 1px 2px 1px 1px #802197";
  one.style.color=" hsl(52, 100%, 62%)";

  two.style.backgroundColor="#331a4c";
  two.style.boxShadow=" 1px 2px 1px 1px #802197";
  two.style.color=" hsl(52, 100%, 62%)";

  three.style.backgroundColor="#331a4c";
  three.style.boxShadow=" 1px 2px 1px 1px #802197";
  three.style.color=" hsl(52, 100%, 62%)";

  four.style.backgroundColor="#331a4c";
  four.style.boxShadow=" 1px 2px 1px 1px #802197";
  four.style.color=" hsl(52, 100%, 62%)";

  five.style.backgroundColor="#331a4c";
  five.style.boxShadow=" 1px 2px 1px 1px #802197";
  five.style.color=" hsl(52, 100%, 62%)";

  six.style.backgroundColor="#331a4c";
  six.style.boxShadow=" 1px 2px 1px 1px #802197";
  six.style.color=" hsl(52, 100%, 62%)";

  seven.style.backgroundColor="#331a4c";
  seven.style.boxShadow=" 1px 2px 1px 1px #802197";
  seven.style.color=" hsl(52, 100%, 62%)";

  eight.style.backgroundColor="#331a4c";
  eight.style.boxShadow=" 1px 2px 1px 1px #802197";
  eight.style.color=" hsl(52, 100%, 62%)";


  nine.style.backgroundColor="#331a4c";
  nine.style.boxShadow=" 1px 2px 1px 1px #802197";
  nine.style.color=" hsl(52, 100%, 62%)";

  PLUS.style.backgroundColor="#331a4c";
  PLUS.style.boxShadow=" 1px 2px 1px 1px #802197";
  PLUS.style.color=" hsl(52, 100%, 62%)";

  MINUIS.style.backgroundColor="#331a4c";
  MINUIS.style.boxShadow=" 1px 2px 1px 1px #802197";
  MINUIS.style.color=" hsl(52, 100%, 62%)";

  FLOAT.style.backgroundColor="#331a4c";
  FLOAT.style.boxShadow=" 1px 2px 1px 1px #802197";
  FLOAT.style.color=" hsl(52, 100%, 62%)";

  DIVISION.style.backgroundColor="#331a4c";
  DIVISION.style.boxShadow=" 1px 2px 1px 1px #802197";
  DIVISION.style.color=" hsl(52, 100%, 62%)";

  zero.style.backgroundColor="#331a4c";
  zero.style.boxShadow=" 1px 2px 1px 1px #802197";
  zero.style.color=" hsl(52, 100%, 62%)";

  Multiple.style.backgroundColor="#331a4c";
  Multiple.style.boxShadow=" 1px 2px 1px 1px #802197";
  Multiple.style.color=" hsl(52, 100%, 62%)";


});