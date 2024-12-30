let buttons = document.querySelectorAll(".button");
let screen = document.querySelector(".screen");
const backgroundMusic = document.getElementById("backgroundMusic");
let flag = false;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        backgroundMusic.play();
        if (flag && (button.innerText >= "0" && button.innerText <= "9" || button.innerText === "00")) {
            flag = false;
            screen.innerText = "";
            append(button.innerText);
        }
        else {
            if (button.innerText === "AC") {
                flag = false;
                screen.innerText = "";
            }
            else if (button.innerText === "") {
                flag = false;
                screen.innerText = screen.innerText.slice(0, -1);
            }
            else if (button.innerText === "=") {
                flag = true;
                evaluate();
            }
            else {
                flag = false;
                append(button.innerText);
            }
        }
    })
});

const append = (data) => {
    screen.innerText += data;
}

const evaluate = () => {
    let expression = screen.innerText.replaceAll('×', '*');
    try {
        screen.innerText = eval(expression).toFixed(2);
    }

    catch {
        screen.innerText = "Syntax Error";
    }
}