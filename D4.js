/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----Erecizio 1 D4----");
const area = function (l1, l2) {
  const ris = l1 * l2;
  return ris;
};
console.log(`L'area del rettangolo è: ${area(2, 8)}`);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----Erecizio 2 D4----");
const crazySum = function (v1, v2) {
  if (v1 === v2) {
    const ris = (v1 + v2) * 3;
    return ris;
  } else {
    const ris = v1 + v2;
    return ris;
  }
};
const v1 = 2;
const v2 = 2;
if (v1 === v2) {
  console.log(`La somma dei due numeri moltiplicata per tre è: ${crazySum(v1, v2)}`);
} else {
  console.log(`La somma dei due numeri è: ${crazySum(v1, v2)}`);
}

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----Erecizio 3 D4----");
const crazyDiff = function (v1) {
  const tot = Math.abs(v1 - 19);
  if (v1 > 19) {
    const ris = tot * 3;
    return ris;
  } else {
    return tot;
  }
};
const a = -20;
if (a > 19) {
  console.log(`Differenza assoluta moltiplicata per tre è: ${crazyDiff(a)}`);
} else {
  console.log(`Differenza assoluta è: ${crazyDiff(a)}`);
}
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----Erecizio 4 D4----");
const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----Erecizio 5 D4----");
const epify = function (frase) {
  let supporto = frase.toUpperCase();
  const app = supporto.split(" ");
  if (app[0] === "EPICODE") {
    return frase;
  } else {
    supporto = "EPICODE " + frase;
    return supporto;
  }
};
let frase = "  Ciao come stai";
frase = frase.trim();
console.log(`Frase iniziale: ${frase}`);
console.log(`Frase modificata: ${epify(frase)}`);
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----Erecizio 6 D4----");
const check3and7 = function (num) {
  if (num > 0) {
    if (num % 3 === 0 && num % 7 === 0) {
      console.log("Il numero inserito è multiplio di 3 e di 7");
    } else if (num % 3 === 0) {
      console.log("Il numero inserito è multiplio di 3");
    } else if (num % 7 === 0) {
      console.log("Il numero inserito è multiplio di 7");
    } else {
      console.log("Il numero inserito non è multiplo ne di 3 ne di 7");
    }
  } else {
    console.log("Il numero inserito non è positivo");
  }
};
const num = 21;
console.log(`Il numero inserito è: ${num}`);
check3and7(num);
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----Erecizio 7 D4----");
const reverseString = function (s) {
  let sup = "";
  for (let i = s.length - 1; i >= 0; i--) {
    sup += s.charAt(i);
  }
  return sup;
};
const s = "ciao come stai";
console.log(`La stringa iniziale è: ${s}`);
console.log(`La stringa rovesciata è: ${reverseString(s)}`);
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----Erecizio 8 D4----");
const upperFirst = function (s) {
  let sup = s.split(" ");
  let appoggio = "",
    ris = "",
    app = "";
  for (let i = 0; i < sup.length; i++) {
    appoggio = sup[i][0];
    appoggio = appoggio.toUpperCase();
    app = sup[i].substring(1);
    ris += appoggio + app + " ";
  }
  return ris;
};
const x = "ciao tutto bene?";
console.log(`Frase iniziale: ${x}`);
const risultato = upperFirst(x);
console.log(`Frase con maiuscole: ${risultato}`);
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----Erecizio 9 D4----");
const cutString = function (s) {
  let ris = "";
  for (let i = 1; i < s.length - 1; i++) {
    ris += s.charAt(i);
  }
  return ris;
};
const m = "Ciao come va";
console.log(`Stringa originale: ${m}`);
console.log(`Stringa modificata senza primo e ultimo carattere: ${cutString(m)}`);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----Erecizio 10 D4----");
const giveMeRandom = function (n) {
  let ris = [];
  for (let i = 0; i < n; i++) {
    ris[i] = Math.floor(Math.random() * 11);
  }
  return ris;
};
const n = 11;
console.log(`Lunghezza array: ${n}`);
console.log(`Array: ${giveMeRandom(n)}`);
