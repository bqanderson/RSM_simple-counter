import React, { Component } from 'react'

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem('counterState')
  if (storage) return JSON.parse(storage)
  return { count: 0 }
}

const setLocalStorageAndTitle = (state) => {
  localStorage.setItem('counterState', JSON.stringify(state))
  document.title = `Count: ${JSON.stringify(state.count)}`
}

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = getStateFromLocalStorage()

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
  }

  increment() {
    this.setState(
      (state, props) => {
        const { max, step } = props
        if (state.count >= max) return
        return { count: state.count + step }
      },
      () => setLocalStorageAndTitle(this.state),
    )
  }

  decrement() {
    this.setState(
      (state, props) => {
        const { max, step } = props
        if (state.count <= max * -1) return
        return { count: state.count - step }
      },
      () => setLocalStorageAndTitle(this.state),
    )
  }

  reset() {
    this.setState({ count: 0 }, () => setLocalStorageAndTitle(this.state))
  }

  render() {
    const { count } = this.state
    return (
      <div className='Counter'>
        <p className='count'>{count}</p>
        <section className='controls'>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </div>
    )
  }
}

export default Counter
