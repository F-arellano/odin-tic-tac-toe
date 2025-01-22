
const game = (() => {
    // private variables
    let board = [
        [" ", " ", " "], 
        [" ", " ", " "], 
        [" ", " ", " "]
    ]

    let counterTurn = 0
    let score = [0, 0]
    let gameContinue = true

    const playTurn = function (row, col) {
        const player = counterTurn % 2
        const playerChar = (player == 0) ? 1 : -1
        board[row][col] = playerChar

        if (isWinner()) {
            score[player]++
            gameContinue = false

        }
        counterTurn++ 
    }

    const getState = function () {
        return {
            board,
            score,
            winner: isWinner(),
        }
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

    function resetGame () {
        board = [
            [" ", " ", " "], 
            [" ", " ", " "], 
            [" ", " ", " "]
        ]
        counterTurn = 0
        gameContinue = true
    }


// return game object
    return {
        playTurn,
        getState,
        resetGame,
    }
}) ()

export {
    game
}