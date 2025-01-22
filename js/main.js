import { game } from "./game.js"

const screenController = (function () {
    const divBoard = document.querySelector('.board')

    divBoard.addEventListener('click', (event) => {
    const isButton = (event.target.nodeName === 'BUTTON')
    if (!isButton) return

    const col = event.target.value % 3
    const row = Math.floor(event.target.value / 3)
    play(row, col)
    })

    function play (row, col) {
        game.playTurn(row, col)
        updateScreen()
    }
    
    function updateScreen () {
        const board = game.getState()
        const allButtons = document.querySelectorAll("button")

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                const button = allButtons[3*row + col]
                if (board[row][col] == 1) {
                    button.textContent = "❌"
                    button.classList.add("x")
                }
                if (board[row][col] == -1) {
                    button.textContent = "⭕"
                    button.classList.add("o")
                }
            }
        }
        console.log("h1")
    }
}) ()