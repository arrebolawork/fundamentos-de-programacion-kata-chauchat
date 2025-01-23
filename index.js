/*1. Por un lado habrás de crear una variable `cargador` 
donde habrá de guardar unos 7 **_"pium!"_** */
const cargador = "pium!\n".repeat(3);

/*2. El otro elemento será nuestra **chauchat**, que "hace cosas", 
y será donde pondremos el cargador para que haga cosas.*/

const chauchat = {
  cargador: cargador,
};

/* 3 Digamos que existe un 80% de probabilidad de que se quede "pillada":*/
function disparar() {
  const probabilidad = Math.random() < 0.8;
  if (probabilidad) {
    console.log("Illo, me he quedao pillá!");
    return;
  }
  return console.log(`${chauchat.cargador}\n${chauchat.cargador}\n${chauchat.cargador}`);
}
disparar();
