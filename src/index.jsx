import React from 'react'
import { render } from 'react-dom'

import Counter from './Counter'

import './styles.scss'

const App = () => {
  return (
    <main className='Application'>
      <section className='Counters'>
        <Counter min={-15} max={15} step={5} />
      </section>
    </main>
  )
}

render(<App />, document.getElementById('root'))
