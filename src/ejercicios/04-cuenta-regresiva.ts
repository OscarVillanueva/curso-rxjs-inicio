import { interval, map, takeWhile } from 'rxjs';

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() =>{

  const inicio = 7;
  const countdown$ = interval(700).pipe(
    takeWhile( counter => counter <= inicio ),
    map( counter => inicio - counter )
  );
  

  // No tocar esta línea ==================
  countdown$.subscribe( console.log ); // =
  // ======================================


})();

		