import { range } from 'rxjs'
import { tap, map } from 'rxjs/operators'

range(1, 5)
  .pipe(
    tap( x => console.log('tap - antes', x) ),
    map( val => val * 10 ),
    tap({
      next: val => console.log(`despues`, val),
      complete: () => console.log('se termino')
    }),
  )
  .subscribe( val => console.log(`subscribe`, val) )