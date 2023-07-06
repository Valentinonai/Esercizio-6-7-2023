// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----Extra 1----");
const checkArray = function (ar) {
  let somma = 0;
  console.log("Numeri maggiori di 5: ");
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] > 5) {
      console.log(ar[i]);
      somma += ar[i];
    }
  }
};
const q = 6;
const arrayGenerator = giveMeRandom(q);
console.log(`Array iniziale: ${arrayGenerator}`);
checkArray(arrayGenerator);

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----Extra 2----");
const shoppingCart = [
  {
    price: 100,
    name: "a",
    id: " ",
    quantity: 4,
  },
  {
    price: 10,
    name: "b",
    id: " ",
    quantity: 6,
  },
  {
    price: 300,
    name: "c",
    id: " ",
    quantity: 10,
  },
  {
    price: 200,
    name: "d",
    id: " ",
    quantity: 2,
  },
];

const shoppingCartTotal = function (ar) {
  let somma = 0;
  for (let i = 0; i < ar.length; i++) {
    somma += ar[i].price * ar[i].quantity;
  }
  return somma;
};
console.log(`La somma totale del carrello è: ${shoppingCartTotal(shoppingCart)}€`);
/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----Extra 3----");
const addToShoppingCart = function (newObj) {
  shoppingCart.push(newObj);
  return shoppingCart.length;
};
const newElement = {
  price: 20,
  name: "e",
  id: " ",
  quantity: 2,
};

console.log(`Il vecchio numero di elementi è: ${shoppingCart.length}`);
console.log(`Il nuovo numero di elementi è: ${addToShoppingCart(newElement)}`);
/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----Extra 4----");
const maxShoppingCart = function (shoppingCart) {
  let sup = Object.assign(shoppingCart[0]);
  for (let i = 1; i < shoppingCart.length; i++) {
    if (shoppingCart[i].price > sup.price) {
      sup = Object.assign(shoppingCart[i]);
    }
  }
  return sup;
};
const mostExpensive = maxShoppingCart(shoppingCart);
console.log(`L'oggetto più costoso è: ${mostExpensive.price}`);
/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----Extra 5----");
const latestShoppingCart = function (shoppingCart) {
  return shoppingCart[shoppingCart.length - 1];
};
const ultimoElemento = latestShoppingCart(shoppingCart);
console.log(`L'ultimo elemento è: ${ultimoElemento.name}`);
/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----Extra 6----");
const loopUntil = function (x) {
  let casuale = 0;
  let cont = 0;
  if (x >= 0 && x < 10) {
    for (let i = 0; i < 3; i++) {
      casuale = Math.floor(Math.random() * 10);
      if (casuale > x) {
        console.log(`Numero ${cont}: ${casuale}`);
        if (cont === 3) {
          return;
        } else {
          cont++;
        }
      } else {
        cont = 0;
        i = -1;
        console.log("Si ricomincia da zero");
      }
    }
  } else {
    console.log("Numero inserito non valido");
  }
};
loopUntil(7);
/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/
console.log("----Extra 7----");
const average = function (x) {
  let somma = 0,
    n = 0,
    av = 0;
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "number") {
      somma += x[i];
      n++;
    }
  }
  return somma / n;
};
const Media = [2, 2, 6, 4];
console.log(`La media è: ${average(Media)}`);
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----Extra 8----");
const longest = function (x) {
  let j = 0;
  for (let i = 1; i < x.length; i++) {
    if (x[j].length < x[i].length) {
      j = i;
    }
  }
  return x[j];
};
const arrayStringhe = ["cane", "gatto", "ippopotamo", "pesce"];
console.log(`Array iniziale: ${arrayStringhe}`);
console.log(`Stringa piu lunga: ${longest(arrayStringhe)}`);

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----Extra 9----");

const antiSpam = function (emailContent) {
  let x = 1;
  let mail = emailContent.toUpperCase();
  if (mail.includes("SPAM") || mail.includes("SCAM")) {
    x = 0;
  }
  return x;
};
const emailContent = "ciao come  SPam stai ";
const B = antiSpam(emailContent);
console.log(`Mail: ${emailContent}`);
if (B === 1) {
  console.log("La mail non è spam");
} else {
  console.log("La mail è SPAM");
}
/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----Extra 10----");
const data = function (d) {
  d2 = new Date();
  const giorno = d.getDate();
  const giorno2 = d2.getDate();
  let giorni = giorno2 - giorno;
  return giorni;
};
const d = new Date("2 July 2023 12:00:00");
console.log(`Giorni passati: ${data(d)}`);

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const matrice = function (x, y) {
  let var1 = [];
  let a = 0;
  for (let i = 0; i < x; i++) {
    var1[i] = [];
    for (let k = 0; k < y; k++) {
      a = i;
      a.toString();
      a += k;
      var1[i][k] = i;
    }
  }
  return var1;
};
console.log(matrice(3, 4));
