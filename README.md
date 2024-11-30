# JS: Torneo

## Obiettivi

- ripasso delle strutture dati
- allenare logica e manipolazione dati
- sfruttare strumenti di debug
- sfruttare la documentazione

## Argomenti da ripassare

- Strutture dati
- Cicli
- Condizioni
- Metodi degli array
- Operatore spread
- Math.random()

## Consegna

📚 esercizio di oggi: **JS: TORNEO**
nome repo: **kata-js-torneo**

Il torneo Boolkaichi è alle porte e in tanti sono giunti per mettersi alla prova in questo speciale evento.
I combattenti che sono riusciti a registrarsi sono stati valutati e accanto al loro nome è stato segnato anche il loro livello di potenza. 
Il torneo si svolgerà in 5 fasi:

- Scelta dell'arma
- Allenamento
- Qualificazione
- Combattimento
- Premiazione

Utilizzando i metodi degli array (map, filter, sort, slice/splice, push) definire l'algoritmo delle 5 fasi e stampare in console il risultato di ognuna di esse.

**Milestone 1 - Scelta dell’arma:**

ogni combattente sceglierà casualmente un'arma dalla relativa lista. Una volta scelta, un'arma non sarà più disponibile per i successivi combattenti.

**Milestone 2 - Allenamento:**

ogni combattente si sottoporrà ad un allenamento che incrementerà (o forse no) la sua potenza, moltiplicandola per un numero casuale tra 1 e 100.

**Milestone 3 - Qualificazione:**

escludiamo dal torneo chi, dopo l'allenamento non è riuscito a raggiungere una potenza di almeno 2000.

**Milestone 4 - Combattimento:**

i combattimenti si svolgeranno tra un partecipante e il successivo dell'elenco, assicurandosi che ognuno combatta una sola volta. 

In ogni scontro vincerà il combattente con la potenza più alta. In caso di parità vincerà chi "gioca in casa", ossia chi viene prima nell'elenco.

**NB:** bisogna assicurarsi che l'elenco contenga un numero pari di combattenti, altrimenti l'ultimo non avrebbe un avversario. Potrebbe essere necessario aggiungere un combattente "Robot" con potenza "4000" all'ultimo minuto.

**Milestone 5 - Premiazione:**

tra tutti i vincitori degli scontri, saliranno sul podio i 3 combattenti con la potenza più alta, in ordine decrescente.

**Bonus:**

Il torneo non finisce qui! Dopo il primo girone di scontri, non passiamo subito alla premiazione, ma facciamo in modo che i vincitori si scontrino ancora e ancora, finchè non ne resterà solo uno!

⚠️ L'elenco dei combattenti è rappresentato dall'array **fighters,** quello delle armi dall’array **weapons**. Questi array non vanno modificati!

# Suggerimenti

- Questo esercizio si svolge interamente nella **console del browser**. Assicurati di stampare il risultato di ogni operazione e di strutturare i messaggi in modo chiaro, esplicitando sempre cosa stai andando a stampare. Dovrebbe essere possibile seguire tutto il flusso dell’applicazione leggendo il **log**.
- *Alcuni **metodi degli array** restituiscono un nuovo array, altri modificano quello originale*. Assicurati di **controllare la documentazione** per evitare sorprese.
- Fai attenzione quando tenti di creare una copia indipendente di un array. L’operatore `=` applicato agli array non trasferisce i valori da una variabile all’altra, ma un effettivo riferimento all’array originale, quindi modificandone uno, si modifica anche l’altro (dal momento che sono in effetti lo stesso array).

# Reference

- [Guida JavaScript MDN - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Guida JavaScript W3S - Data types](https://www.w3schools.com/js/js_datatypes.asp)
