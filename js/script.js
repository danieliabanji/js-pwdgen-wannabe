/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
poi chiedi la sua età
Infine scrivi sulla pagina nomecognomecolorepreferito21 (dove il 21 è in questo caso l'età)
*/


const nomeUtente = prompt('Qual è il tuo nome?');
const cognomeUtente = prompt('Qual è il tuo cognome?');
const coloreUtente = prompt('Qual è il tuo colore preferito?');
const etaUtente = prompt('Quanti anni hai?');

const password = `
Questa è la tua password:
<br>
${nomeUtente}${cognomeUtente}${coloreUtente}${etaUtente}
`;

const elemento = document.getElementById('pass');

elemento.innerHTML = password