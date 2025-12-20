//Funcion random piedra papel o tijera
let getComputerChoice = () => {
    let value = Math.floor(Math.random() * 3);
    return (value === 0) ? "piedra"
        : (value === 1) ? "papel"
            : "tijera";
};

//Funcion jugar cantidad de rondas
function playGame(rounds) {
    let humanScore = 0;
    let computerScore = 0;

    //Funcion juego general
    function gameRockPaperScissors(userChoice) {
        let computerChoice = getComputerChoice();
        userChoice = userChoice.toLowerCase();
        let result;

        if (userChoice == computerChoice) {
            result = "Empate";
        } else if (
            (userChoice == "papel" && computerChoice == "piedra") ||
            (userChoice == "tijera" && computerChoice == "papel") ||
            (userChoice == "piedra" && computerChoice == "tijera")
        ) {
            humanScore++;
            result = "Ganaste";
        } else {
            computerScore++;
            result = "Perdiste";
        }

        return `${result} - La computadora eligió ${computerChoice}
        Puntajes

        Computadora: ${computerScore}
        Humano: ${humanScore}
        `;
    }

    for (let i = 0; i < rounds; i++) {

        //Cuadro petición al usuario y mostrar resultados
        let inputUsuario = prompt(`Ronda ${i + 1}: Elige piedra, papel o tijera`);

        alert(gameRockPaperScissors(inputUsuario));
    }
}

/*     playGame(5); */