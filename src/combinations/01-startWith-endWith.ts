import { endWith, of, startWith } from "rxjs";

// La primera emisión sera lo que tenga startWith
// La ultima emisión sera lo que tenga endWith z
const numbers$ = of(1,2,3).pipe(
  startWith('a', 'b', 'c'),
  endWith('x', 'y', 'z')
)

numbers$.subscribe( console.log )