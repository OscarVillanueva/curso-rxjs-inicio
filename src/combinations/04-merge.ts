import { fromEvent, merge } from 'rxjs';
import { pluck } from 'rxjs/operators';

const keyUp$ = fromEvent( document, 'keyup')
const click$ = fromEvent( document, 'click')

// Mezcla todos los observables en una sola salida
merge(
  keyUp$.pipe( pluck('type') ),
  click$.pipe( pluck('type') )
).subscribe(console.log)