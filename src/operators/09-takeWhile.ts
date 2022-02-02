// Hacer las emisiones cuando solo se cumpla la condición y si no se cumple la condición
// Se completa el observable 
import { fromEvent, map, takeWhile } from "rxjs";

// fromEvent<MouseEvent>(document, 'click')
//   .pipe(
//     map(({ x, y }) => ({ x, y })),
//     takeWhile( ({ y }) => y <= 150 )
//   )
//   .subscribe({
//     next: value => console.log(`next: `, value),
//     complete: () => console.log('complete')
//   })

// True es el valor de inclusive para mandar el ultimo valor que rompió el observable
fromEvent<MouseEvent>(document, 'click')
  .pipe(
    map(({ x, y }) => ({ x, y })),
    takeWhile( ({ y }) => y <= 150, true )
  )
  .subscribe({
    next: value => console.log(`next: `, value),
    complete: () => console.log('complete')
  })