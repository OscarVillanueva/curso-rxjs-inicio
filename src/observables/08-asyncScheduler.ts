import { asyncScheduler } from 'rxjs'

const sayHi = () => console.log('Hello')
const sayHi2 = name => console.log(`Hello ${name}`)

// asyncScheduler.schedule( sayHi, 2000 )
// asyncScheduler.schedule( sayHi2, 2000, 'Javier' )

const subs = asyncScheduler.schedule( function (state) {
  
  console.log(`state`, state)
  this.schedule(state + 1, 1000)

}, 3000, 0)

asyncScheduler.schedule( () => subs.unsubscribe(), 6000 )