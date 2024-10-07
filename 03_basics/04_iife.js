// Immediately invoked Function Expression (IIFE)

(function chai() {
  console.log(`DB CONNECTED`);
})();

(() => {
  console.log(`DB CONNECTED TWO`);
})();
