
const game = (() => {
    const board = [
        [" ", " ", " "], 
        [" ", " ", " "], 
        [" ", " ", " "]
    ]

    const showBoardState = function () {
        let state = `${board[0][0]} | ${board[0][1]} | ${board[0][2]}\n`
        state += "---------\n"
        state += `${board[1][0]} | ${board[1][1]} | ${board[1][2]}\n`
        state += "---------\n"
        state += `${board[2][0]} | ${board[2][1]} | ${board[2][2]}`
        console.log(state)
    }

    return {
        showBoardState
    }
// 
}) ()

export {
    game
}