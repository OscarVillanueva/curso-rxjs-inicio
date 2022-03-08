import { mergeMap, of, interval, take, map, fromEvent, takeUntil } from 'rxjs';

const letters$ = of('a', 'b', 'c')
letters$ .pipe(
  mergeMap( 
    val => interval(1000)
      .pipe(
        take(3), 
        map( i => ({ val, i }) )
      ) 
    )
)
// .subscribe({
//   next: console.log,
//   complete: () => console.log('complete')
// })

const interval$ = interval()
const mouseUp$ = fromEvent(document, 'mouseup')
const mouseDown$ = fromEvent(document, 'mousedown')

// Verificamos cuanto tiempo estuvo dando el usuario dando clic izquierdo algo así como un longpress
// mergeMap lo que hace es si hay observables anterior mantiene las subscriptions
mouseDown$.pipe(
  mergeMap(() => interval$.pipe(
    takeUntil(mouseUp$)
  ))
).subscribe( console.log )
