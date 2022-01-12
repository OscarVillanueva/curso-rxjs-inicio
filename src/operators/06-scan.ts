import { from, pluck, reduce, scan } from "rxjs";

const numbers = [1,2,3,4,5]

const getTotal = (acc: number, cur: number) : number => acc + cur

from(numbers)
  .pipe(
    reduce( getTotal, 0 )
  )
  .subscribe( console.log )

// Scan va emitiendo los valores que va teniendo a diferencia del reduce que emite unicamente
// el valor final
from(numbers)
  .pipe(
    scan( getTotal, 0 )
  )
  .subscribe( console.log )

// Redux a grandes rasgos
type User = {
  id ?: string,
  authenticated ?: boolean,
  token ?: string,
  age ?: number
}
const user : User[] = [
  { id: '143', authenticated: false, token: null },
  { id: '143', authenticated: true, token: 'abc' },
  { id: '143', authenticated: true, token: 'ab123c' },
]

const state$ = from(user).pipe(
  scan<User, User>( (acc, current) => {
    return {
      ...acc,
      ...current
    }
  }, { age: 23 })
)

const id$ = state$.pipe( pluck('id') )
id$.subscribe( console.log )