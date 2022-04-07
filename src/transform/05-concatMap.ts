import { fromEvent, interval, take } from 'rxjs';
import { concatMap } from 'rxjs/operators';

const interval$ = interval(500).pipe( take(3) )

const click$ = fromEvent(document, 'click')

// lo que hace el concatMap es que cuando llega un observable nuevo lo mete a la cola
// y lo ejecuta hasta que se termine el que esta activo
click$
  .pipe(
    concatMap( () => interval$ )
  )
  .subscribe(console.log)