import { from, fromEvent, range } from 'rxjs'
import { filter, map, pluck } from 'rxjs/operators'

// range(1, 10).pipe(
//   filter( (value, idx) => {
//     console.log(`index`, idx)
//     return value % 2 === 1
//   })
// ).subscribe( console.log );

type Character = {
  type: string,
  name: string
}

const characters : Character[] = [
  {
    type: 'hero',
    name: 'Spiderman'
  },
  {
    type: 'hero',
    name: 'Thor'
  },
  {
    type: 'villain',
    name: 'SandMan'
  },
]

from( characters )
  .pipe(
    filter( character => character.type !== 'hero' ),
    pluck('name')
  )
  .subscribe( console.log )

fromEvent<KeyboardEvent>( document, 'keyup' )
    .pipe(
      map( event => event.key ),
      filter( code => code === 'Enter' )
    )
    .subscribe( console.log )
