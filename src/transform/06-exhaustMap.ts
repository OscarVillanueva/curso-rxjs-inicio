import { fromEvent, interval, take } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';

const interval$ = interval(500).pipe( take(3) )

const click$ = fromEvent(document, 'click')

// Si hay una subscription activa ignora las nuevas que le van llegando
click$
  .pipe(
    exhaustMap( () => interval$ )
  )
  .subscribe(console.log)