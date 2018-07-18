const DEFAULT_SPEED = 500

class EventLoop {
  constructor ({speed}) {
    this._speed = speed || DEFAULT_SPEED
    this._queue = []
    this._loop = null
  }

  enqueue (fn) {
    this._queue.push(fn)
  }

  run () {
    const fn = this._queue.shift()

    fn.call()
  }

  execute () {
    this._loop = setInterval(this.run.bind(this), this._speed) 
  }

  stop () {
    clearInterval(this._loop) 
  }
}

export default EventLoop
