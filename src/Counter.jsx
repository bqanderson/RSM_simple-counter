import React, { useState } from 'react'

const Counter = ({ min, max, step }) => {
  const [count, setCount] = useState(0)

  const increment = () =>
    setCount(c => {
      if (c >= max) return c
      return c + step
    })
  const decrement = () =>
    setCount(c => {
      if (c <= min) return c
      return c - step
    })
  const reset = () => setCount(0)

  return (
    <div className='Counter'>
      <p className='count'>{count}</p>
      <section className='controls'>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  )
}

export default Counter
