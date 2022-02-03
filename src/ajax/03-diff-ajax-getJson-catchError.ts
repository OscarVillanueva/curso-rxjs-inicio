import { catchError, Observable, of } from "rxjs"
import { ajax, AjaxError } from "rxjs/ajax"

const url : string = 'https://httpbisn.org/delay/1'

const handleError = (error: AjaxError) : Observable<{ ok: false, users: [] }>=> {
  
  console.warn(error.message);
  return of({ ok: false, users: [] })
}

// const obs$ = ajax.getJSON(url).pipe(catchError(handleError))
// const obs2$ = ajax(url).pipe(catchError(handleError))

const obs$ = ajax.getJSON(url)
const obs2$ = ajax(url)

obs$
  .pipe(
    catchError(handleError)
  )
  .subscribe({
    next: data => console.log('getJson', data),
    error: console.error,
    complete: () => console.log('complete')
  })
// obs2$.subscribe( data => console.log('ajax', data) )