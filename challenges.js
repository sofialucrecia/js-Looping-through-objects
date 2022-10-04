/*------------------
1)
El següent loop imprimeix les keys de l'objecte "person".
Modifica'l per què n'imprimeixi els valors. 
------------------*/
const person = {
  name: "Sofia",
  age: 30,
  location: "Barcelona",
  hairColor: "brown",
  coder: true,
};

for (let features in person) {
  console.log(person[features]);
}

/*------------------
2)
Escriu un loop que imprimeixi tots els valors
de "pet": ("Spot", 2, "dog", "brown").
------------------*/

const pet = {
  name: "Spot",
  age: 2,
  animal: "dog",
  color: "brown",
};
for (let features in pet) {
  console.log(pet[features]);
}
/*------------------
3)
Afegeix un mínim de QUATRE propietats (features)
a l'objecte "car".

Després crea un loop que imprimeixi els valors
de l'objecte "car" a la consola.
------------------*/

const car = {
  model: "Virtus",
  year: 2018,
  transmition: "automatic",
  color: "blue",
};
for (let features in car) {
  console.log(`${features}: ${car[features]}`);
}
/*------------------
4)
Ara imprimirem totes les propietats (features) de 
l'objecte "car" de l'exercici anterior en  UN sol string
en comptes de cadascun per separat.
Fes servir un loop per afegir cada valor a
l'string "carFeatures". 

Bonus #1: afegeix una coma entre cada feature per
què el resultat sembli una frase real.

Bonus #2: assegura't de què cada feature està separada
per una coma però que la frase acabi amb un ".".
Per exemple: 'white, citroen, c1, 2016.'

Pista - Al Bonus #2 hauràs de comprovar si el loop
es troba a l'última key i, si és així, tractar-la
diferent de com ho hem fet al Bonus #1.
------------------*/

let carFeatures = "";

for (let features in car) {
  carFeatures= carFeatures + " " + car[features];
}

console.log(carFeatures);

let carFeatures1 = "";

for (let features in car) {
  carFeatures1= carFeatures1 + car[features] + ", ";
}

let carFeatures2= carFeatures1.substring(0, carFeatures1.length -2);
carFeatures2=carFeatures2 + ".";
console.log(carFeatures2);

/*------------------
5)
Crea un loop que afegeixi cada valor de l'objecte "address"
a l'string de "fullAddress".

Hauria d'imprimir: "Carrer de CodeOp, 42, Barcelona, Spain."
Les comes i els punts són bonus, així que també està bé:
"Carrer de CodeOp 42 Barcelona Spain."
------------------*/

const address = {
  line1: "Carrer de CodeOp",
  line2: 42,
  city: "Barcelona",
  country: "Spain",
};

let fullAddress = "";

for (let features in address) {
  fullAddress= fullAddress + address[features] + ", ";
}
let fullAddress1= fullAddress.substring(0, fullAddress.length -2);
fullAddress1=fullAddress1 + ".";
console.log(fullAddress1);

/*------------------
6)
Escriu un loop que actualitzi tots els valors de l'objecte "address"
que siguin strings a majúscules.

El resultat hauria de ser: "CARRER DE CODEOP 42 BARCELONA SPAIN".

FES SERVIR UN LOOP, és més senzill fer-ho sense un loop, però
la pràctica et farà millorar!

Pista: fes servir "typeof" per determinar si el valor és un string
i fes servir ".toUpperCase()" per commutar tot un string a majúscules.
------------------*/
const direccion = {
  line1: "Carrer de CodeOp",
  line2: 42,
  city: "Barcelona",
  country: "Spain",
};

let fulldireccion = "";

for (let features in direccion) {
  fulldireccion= fulldireccion + direccion[features] + ", ";
}
let fulldireccion1= fulldireccion.substring(0, fulldireccion.length -2);
fulldireccion1=fulldireccion1 + ".";
console.log(fulldireccion1.toUpperCase());


/*------------------
7)
Escriu un loop que afegeixi un any a les edats de totes les persones.
Hauria d'imprimir: {
  pedro: 31,
  sofia: 39,
  mia: 41,
  lucy: 28,
}
------------------*/

const friendsAges = {
  pedro: 30,
  sofia: 38,
  mia: 40,
  lucy: 27,
};
for (let ages in friendsAges) {
  friendsAges[ages] += 1;
}
console.log(friendsAges);

/*------------------
8)
Ara farem el mateix però aquest cop hauràs d'accedir
a la key "age" de cada objecte. 

Ja hem començat l'exercici per tu.
Pista: fes servir "typeof" per determinar si una key
és un número. Si ho és, incrementa el seu valor per 1.
------------------*/

const groupOfFriends = {
  a: {
    name: "Pedro",
    relationship: "school",
    age: 30,
  },
  b: {
    name: "Sofia",
    relationship: "work",
    age: 38,
  },
  c: {
    name: "Mia",
    relationship: "school",
    age: 40,
  },
  d: {
    name: "Lucy",
    relationship: "work",
    age: 27,
  },
};

for (let friend in groupOfFriends) {
  for (let features in groupOfFriends[friend]) {
    console.log(groupOfFriends[friend][features]);
    if (typeof(groupOfFriends[friend][features]) == "number"){  
      console.log(groupOfFriends[friend][features] + 1)
      } else {console.log(groupOfFriends[friend][features])}
    }
}
/*------------------
9)
Quines són les amistats de la feina i quines les de l'escola?
Crea un loop que introdueixi els noms a l'string corresponent.
------------------*/

let workFriends = "";
let schoolFriends = "";

console.log(
  `The person's work friends are ${workFriends} and school friends are ${schoolFriends}.`
);

/*------------------
10)
Recorre l'objecte "chores" i afegeix cada tasca de la llar (chore)
a l'string del dia corresponent.
Quan hagis acabat, imprimeix "mondayChores" i "wednesdayChores"
a la consola.

Procura que la frase imprimida sigui el més natural possible.
Per exemple: "Monday's chores are: tidying, vacuuming, bills."
------------------*/

let mondayChoresTasks = [];
let wednesdayChoresTasks = [];

for ( let task in chores ) {
  if ( chores[task] === "Monday" ) {
    mondayChoresTasks.push(task);
  } else if ( chores[task] === "Wednesday" ) {
    wednesdayChoresTasks.push(task);
  }
}
mondayChores = "Monday's chores are: " + mondayChoresTasks.join(", ") + ".";
wednesdayChores = "Wednesday's chores are: " + wednesdayChoresTasks.join(", ") + ".";

console.log(mondayChores);
console.log(wednesdayChores);