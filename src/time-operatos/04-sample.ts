// Para que se ejecute tienen que ejecutarse los dos
import { fromEvent, interval, sample } from "rxjs";

const interval$ = interval(500)
const click$ = fromEvent(document, 'click')

interval$
  .pipe(
    sample(click$)
  )
  .subscribe(console.log)