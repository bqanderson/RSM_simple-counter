import React from 'react'
import { render } from 'react-dom'

import Counter from './Counter'

import './styles.scss'

const App = () => {
  return (
    <main className='Application'>
      <section className='Counters'>
        <Counter min={-20} max={20} step={1} />
      </section>
    </main>
  )
}

render(<App />, document.getElementById('root'))
