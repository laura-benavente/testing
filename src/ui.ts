import { pointsDisplay } from "./main";
import { estadoPartida, setPoints, setGameOver, setStay, MIN } from "./model";
import { decreasePoints, handlePideCartaClick, increasePoints, mapearCartaImagen, obtenerEstadoPartida } from "./motor";

export function muestraPuntuacion() {
    pointsDisplay.textContent = `Puntos: ${estadoPartida.points}`;
}


export const showMessage = (): void => {

    stayManageButtons()

    const message = obtenerEstadoPartida(estadoPartida.points)
    window.alert(message)
};

const increaseButton = document.getElementById('increaseButton') as HTMLButtonElement;
const decreaseButton = document.getElementById('decreaseButton') as HTMLButtonElement;
const stayButton = document.getElementById('stayButton') as HTMLButtonElement;
const newGameButton = document.getElementById('newGameButton') as HTMLButtonElement;
const nextMoveButton = document.getElementById('nextMoveButton') as HTMLButtonElement;


if (increaseButton !== null && increaseButton !== undefined) {
    increaseButton.addEventListener('click', increasePoints);
}
else {
    console.log("El boton no existe")
}
if (decreaseButton !== null && decreaseButton !== undefined) {
    decreaseButton.addEventListener('click', decreasePoints);
}
else {
    console.log("El boton no existe")
}
if (stayButton !== null && stayButton !== undefined) {
    stayButton.addEventListener('click', showMessage);
}
else {
    console.log("El boton no existe")
}
if (newGameButton !== null && newGameButton !== undefined) {
    newGameButton.addEventListener('click', newGame);
}

else {
    console.log("El boton no existe")
}
if (nextMoveButton !== null && nextMoveButton !== undefined) {
    nextMoveButton.addEventListener('click', handlePideCartaClick)
}
else {
    console.log("El boton no existe")
}

const pideCartaButton = document.getElementById('randomCardButton') as HTMLButtonElement;


if (pideCartaButton !== null && pideCartaButton !== undefined) {
    pideCartaButton.addEventListener('click', handlePideCartaClick);
}
else {
    console.log("El boton no existe")
}

export function newGame() {
    setPoints(MIN);
    muestraPuntuacion();
    setGameOver(false);
    setStay(false);
    mostrarCarta(MIN)
    muestraPuntuacion()
    newGameManageButtons()
}

export function mostrarCarta(valor: number) {
    const cartaImagen = document.getElementById('cartaImagen') as HTMLImageElement;
    cartaImagen.src = mapearCartaImagen(valor);
}


export const newGameManageButtons = () => {
    newGameButton?.classList.add('hiden')
    newGameButton?.classList.remove('show')
    nextMoveButton?.classList.add('hiden')
    nextMoveButton?.classList.remove('show')
    stayButton?.classList.add('show')
    stayButton?.classList.remove('hiden')
};

export const stayManageButtons = () => {
    newGameButton?.classList.add('show')
    newGameButton?.classList.remove('hiden')
    nextMoveButton?.classList.add('show')
    nextMoveButton?.classList.remove('hiden')
    stayButton?.classList.add('hiden')
    stayButton?.classList.remove('show')
};

export const gameOverManageButtons = () => {
    newGameButton?.classList.add('show')
    nextMoveButton?.classList.add('hiden')
    stayButton?.classList.add('hiden')
};