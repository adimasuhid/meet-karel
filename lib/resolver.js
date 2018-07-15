let _environment, _karel

class Resolver {
  constructor ({environment}) {
    _environment = environment
    _karel = _environment.karel()
  }

  resolve (actions) {
    actions.call(this)
  }

  move () {
    _karel.move()
  }
}

export default Resolver
