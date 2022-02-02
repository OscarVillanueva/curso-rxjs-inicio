import { auditTime, fromEvent, pluck, tap } from "rxjs";

fromEvent<MouseEvent>(document, 'click')
  .pipe(
    pluck('x'),
    tap(value => console.log('tap', value)),
    auditTime(2000),
  )
  .subscribe(console.log)