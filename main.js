function createGame(player1, hour, player2) {
    return `
        <li>
            <img src="assets/icon-${player1}.svg" alt="Bandeira${player1}">
            <strong>${hour}</strong>
            <img src="assets/icon-${player2}.svg" alt="Bandeira${player2}">
        </li>
    `
}

let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
    `
}
document.querySelector('#cards').innerHTML = 

    createCard(
        "24/11", "quinta", createGame('switzerland', '07:00', 'camaroon')
    + createGame('portugal', '13:00', 'ghana') + createGame('brazil', '16:00', 'servia')
    ) +
    createCard(
        "28/11", "segunda", createGame('coreiadosul', '10:00', 'camaroon') + createGame('switzerland', '13:00', 'brazil') + createGame('portugal', '16:00', 'uruguai')
    ) +
    createCard(
        "02/12", "segunda", createGame('portugal', '12:00', 'coreiadosul') + createGame('servia', '16:00', 'switzerland') + createGame('brazil', '16:00', 'camaroon')
    )
        
