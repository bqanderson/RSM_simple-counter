import React, { useState, useEffect } from 'react'

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem('counterState')
  console.log('Local Storage - Count:', storage)
  if (storage) return JSON.parse(storage).count
  return 0
}

const storeStateInLocalStorage = count => {
  localStorage.setItem('counterState', JSON.stringify({ count }))
  console.log('Update LS - Count:', count)
}

const Counter = ({ min, max, step }) => {
  const [count, setCount] = useState(getStateFromLocalStorage())

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

  useEffect(() => {
    document.title = `Counter: ${count}`
    storeStateInLocalStorage(count)
  }, [count])

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
