import { game } from "./game.js"

const screenController = (function () {
    const divBoard = document.querySelector('.board')
    const resetButton = document.querySelector(".reset")

    let { board, score, winner } = game.getState()

    divBoard.addEventListener('click', (event) => {
    const isButton = (event.target.nodeName === 'BUTTON')
    if (!isButton) return

    const col = event.target.value % 3
    const row = Math.floor(event.target.value / 3)
    play(row, col)
    })

    resetButton.addEventListener("click", resetScreen)

    function play (row, col) {
        ({ board } = game.getState())
        if (board[row][col] != 0 || !!winner) return

        game.playTurn(row, col)
        updateScreen()
    }
    
    function updateScreen () {
        ({ board, score, winner } = game.getState())
        const allButtons = document.querySelectorAll(".cell")

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

        if (winner) {
            const scoreSpan = document.querySelector(".score")
            scoreSpan.textContent = `Score: ${score[0]} - ${score[1]}`
        }
    }

    function resetScreen () {
        const allX = document.querySelectorAll(".x")
        const allO = document.querySelectorAll(".o")

        game.resetGame();
        ({ board, score, winner } = game.getState())

        if (!!allX) {
            for (let i = 0; i < allX.length; i++) {
                allX[i].classList.remove("x")
                allX[i].textContent = " "
            }
        }

        if (!!allO) {
            for (let i = 0; i < allO.length; i++) {
                allO[i].classList.remove("o")
                allO[i].textContent = " "
            }
        }
    }
}) ()