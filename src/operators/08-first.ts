// Terminar el observable cuando el primer cumpla la condición
import { first, fromEvent, pluck } from "rxjs";

// No emite el valor esta que cumpla la condición
fromEvent<MouseEvent>( document, 'click')
  .pipe(
    pluck('clientY'),
    first<number>( clientY => clientY >= 150)
  )
  .subscribe({
    next: value => console.log(value),
    complete: () => console.log('completo')
  })