import { distinct, from, of } from "rxjs";

of(1,1,1,3,3,2,2,4,4,5,3,1)
  .pipe(
    distinct()
  )
  .subscribe(console.log)

interface Person {
  name: string
}

const people: Person[] = [
  { name: 'Javier' },
  { name: 'Lucía' },
  { name: 'X' },
  { name: 'Roberto' },
  { name: 'Andrea' },
  { name: 'X' },
  { name: 'Luis' },
  { name: 'Javier' },
  { name: 'Lucía' },
]

from(people)
  .pipe(
    distinct( person => person.name )
  )
  .subscribe( console.log )