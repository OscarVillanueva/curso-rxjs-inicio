import { fromEvent, range } from 'rxjs'
import { map, mapTo, pluck } from 'rxjs/operators'

// range(1,5)
//   .pipe(
//     map<number, string>(value => `${value * 10}`)
//   )
//   .subscribe( console.log )

const keyUp$ = fromEvent<KeyboardEvent>( document, 'keyup' );

keyUp$
  .pipe(
    map<KeyboardEvent, string>( event => event.key )
  )
  .subscribe( value => console.log('map', value) )

const keyUpPluck$ = keyUp$.pipe(
  pluck('target', 'baseURI')
)
.subscribe( value => console.log('pluck', value) )

const keyUpMapTo$ = keyUp$.pipe(
  mapTo('tecla presionada')
)
.subscribe( value => console.log('mapTo', value) )
  