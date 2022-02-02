// Devuelve la primera emisión dentro de ese lapso de tiempo
import { asyncScheduler, distinctUntilChanged, fromEvent, pluck, throttleTime } from "rxjs";

fromEvent(document, 'click')
  .pipe(
    throttleTime(3000)
  )
  // .subscribe( console.log )

const input = document.createElement('input') 
document.querySelector('body').append(input)

fromEvent( input, 'keyup' )
  .pipe(
    throttleTime(1000, asyncScheduler, {
      leading: true,
      trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
  )
  .subscribe(console.log)