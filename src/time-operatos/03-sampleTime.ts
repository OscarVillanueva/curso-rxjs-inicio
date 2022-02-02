// Devuelve el ultimo valor cada 2 segundos si no hay una emisión no devuelve nada
// Es diferente del debounce porque va emitiendo periodicamente
import { fromEvent, map, sampleTime } from "rxjs";

fromEvent<MouseEvent>(document, 'click')
  .pipe(
    sampleTime(2000),
    map(({ x, y }) => ({ x, y })),
  )
  .subscribe( console.log )