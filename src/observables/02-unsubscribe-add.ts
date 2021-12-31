import { Observable, Observer, subscribeOn, Subscription } from 'rxjs'

const observer: Observer<number> = {
  next: value => console.log('next: ', value),
  error: err => console.warn('error: ', err),
  complete: () => console.info('completed')
}

const interval$ = new Observable<number>(subs => {

  // Crear un contador
  let counter : number = 0

  const id = setInterval(() => {

    counter = counter + 1
    subs.next(counter)

    if (counter > 5) {
      // Una vez terminado la subscription automáticamente se ejecuta el return 
      subs.complete()
    }

  }, 1000)
  
  // Esta función se manda llamar cuando el subscriptor de desuscribe
  return () => {
    clearInterval(id)
    console.log("destruido")

    // este no se escucha porque ya se desuscribió el suscriptor 
    subs.complete()
  }

})

// Nos subscribiremos al interval
const subcription : Subscription = interval$.subscribe( observer )

// Cuando te suscribes nuevamente se reinica o se crea otro interval iniciando desde 1
const subcription1 : Subscription  = interval$.subscribe( observer )

// Un ejemplo de terminación en cadena
subcription.add( subcription1 )

setTimeout(() => {
  
  subcription.unsubscribe()
  console.log('terminada')

}, 4000)
