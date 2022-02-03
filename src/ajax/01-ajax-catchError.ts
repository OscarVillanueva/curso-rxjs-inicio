import { catchError, of, pluck } from 'rxjs'
import { ajax, AjaxError } from 'rxjs/ajax'

const url = 'https://api.github.com/users?per_page=5'

ajax( url )
  .pipe(
    pluck('response'),
    catchError((err: AjaxError) => {
      console.warn(err.message);
      return of([])
    })
  )
  .subscribe( users => console.log('users', users) )