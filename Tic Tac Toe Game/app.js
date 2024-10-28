let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let count = 0

let turnO = true; //playerX , playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    count=0
    enableBoxes();
    msgContainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "X";
            turnO = false;
        }
        else {
            box.innerText = "O";
            turnO = true;
        }
        count += 1
        box.disabled = true
        checkWinner();
    });
});
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBoxes()
}

const showDraw = () => {
    msg.innerText = "Draw"
    msgContainer.classList.remove("hide")
    disableBoxes()
}


const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != '' && pos1Val === pos2Val && pos2Val === pos3Val) {
            console.log("Winner", pos1Val);

            showWinner(pos1Val);
            return;
        }

        if (count == 9) {
            showDraw();
        }
    }
};

newGamebtn.addEventListener("click", resetGame)
resetbtn.addEventListener("click", resetGame)