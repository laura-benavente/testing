import { estadoPartida, setPoints, setGameOver, MAX, CardPath, DEFAULT_CARD_IMG_PATH, RANDOM_NUMBER_UNTIL_10 } from "./model";
import { gameOverManageButtons, mostrarCarta, muestraPuntuacion, stayManageButtons } from "./ui";

// Función para obtener una carta aleatoria entre 1 y 12, excluyendo 8 y 9
export function dameCarta(randomCardNumber: number): number {

    return randomCardNumber > 7 ? randomCardNumber + 2 : randomCardNumber;
}

export function checkIfGameOver() {
    return estadoPartida.points > MAX 
}

export function getValueToSum(valor: number): number {
    if (valor === 10 || valor === 11 || valor === 12) {
        return 0.5
    }

    return valor
}

export function sumarValorCarta(cardNumber: number) {
    setPoints(estadoPartida.points + getValueToSum(cardNumber));
    muestraPuntuacion();
    setTimeout(() => {
        if(checkIfGameOver()) {
            setGameOver(true)
            gameOverManageButtons()
            window.alert('Game Over')
        }
    }, 1);

}

export function handlePideCartaClick() {
    const carta = dameCarta(RANDOM_NUMBER_UNTIL_10)
    mostrarCarta(carta);
    sumarValorCarta(carta)
}


export function increasePoints() {
    setPoints(estadoPartida.points + 1)
    muestraPuntuacion();
}


export function decreasePoints() {
    if (estadoPartida.points > 0) {
        setPoints(estadoPartida.points - 1)
        muestraPuntuacion();
    }
}

// Función para mapear el valor de la carta a su imagen correspondiente
export function mapearCartaImagen(valor: number): string {
    const formattedValue: string = `_${valor}`;
    return CardPath[formattedValue as keyof typeof CardPath] || DEFAULT_CARD_IMG_PATH
}

export const obtenerEstadoPartida = (points: number) => {
    let status = ''
    stayManageButtons()

    switch (true) {
        case points < 4:
            status = 'Has sido muy conservador';
            break;
        case points === 5:
            status = 'Te ha entrado el canguelo eh?';
            break;
        case (points >= 6 &&
            points <= 7):
            status = 'Casi casi...';
            break;
        case points === MAX:
            status = '¡ Lo has clavado! ¡Enhorabuena!';
            break;
        case points > MAX:
            status = 'Game Over';
            break;
    }
    return status;
}

