class EventLoop {
  constructor ({speed}) {
    this._speed = speed 
    this._queue = []
    this._loop
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
