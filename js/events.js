const gameController = (function () {

}) ()

const screenController = (function () {
    const divBoard = document.querySelector('.board')

    divBoard.addEventListener('click', (event) => {
    const isButton = (event.target.nodeName === 'BUTTON')
    if (!isButton) {
        return
    }

    console.log(event.target.value);
    })

    const hi = () => {console.log("hi")}
    return {
        hi
    }
}) ()

export {
    screenController,
}