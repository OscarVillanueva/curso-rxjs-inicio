import { concat, interval, take } from 'rxjs';

const interval$ = interval(1000)
// Se ejecuta cada observable uno detrás de otro
// Es decir el segundo interval se ejecuta hasta que el primer interval termina
concat(
  interval$.pipe( take(3) ),
  interval$.pipe( take(2) ),
  interval$.pipe( take(1) ),
)
.subscribe( console.log )