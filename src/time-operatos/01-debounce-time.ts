// Devuelve la última emisión dentro del lapso del tiempo
import { debounceTime, distinct, distinctUntilChanged, fromEvent, pluck } from "rxjs";

fromEvent(document, 'click')
  .pipe(
    debounceTime(3000)
  )
  // .subscribe( console.log )

const input = document.createElement('input') 
document.querySelector('body').append(input)

fromEvent( input, 'keyup' )
  .pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
  )
  .subscribe(console.log)