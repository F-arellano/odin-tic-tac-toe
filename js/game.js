
const game = (() => {
    // private variables
    const board = [
        [" ", " ", " "], 
        [" ", " ", " "], 
        [" ", " ", " "]
    ]

    let counterTurn = 0
    let gameContinue = true

    // public functions
    const playGame = function () {
        while (counterTurn < 9 && gameContinue) {
            const input = prompt("game coordinates").split(" ")
            playTurn(...input)
        }
    }

    // private functions
    const playTurn = function (i, j) {
        const player = counterTurn % 2
        const playerChar = (player == 0) ? 1 : -1
        board[i][j] = playerChar

        showBoardState()
        if (isWinner()) {
            console.log(`Player ${player + 1} is the winner!`)
            gameContinue = false

        }
        counterTurn++ 
    }

    const showBoardState = function () {
        let state = `${board[0][0]} | ${board[0][1]} | ${board[0][2]}\n`
        state += "---------\n"
        state += `${board[1][0]} | ${board[1][1]} | ${board[1][2]}\n`
        state += "---------\n"
        state += `${board[2][0]} | ${board[2][1]} | ${board[2][2]}`
        console.log(state)
    }

    const isWinner = function () {
        // get the difference of symbols in each row, column or diagonal
        // for example, "x x o" has a 2 - 1 = 1 value, we need a absolute value of 3 to have a winner
        let rows = [0, 0, 0]
        let cols = [0, 0, 0]
        let diags = [0, 0]

        for (let i = 0; i < 3; i++) {
            diags[0] += board[i][i]
            diags[1] += board[i][2-i]
            for (let j = 0; j < 3; j++) {
                rows[i] += board[i][j]
                cols[j] += board[i][j]
            }
        }

        const allLines = rows.concat(cols, diags)

        // return the winner
        if (allLines.includes(3) || allLines.includes(-3)) return true
        return false
    }


// return game object
    return {
        playGame,
    }
}) ()

export {
    game
}