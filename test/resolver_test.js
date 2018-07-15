import assert from 'assert'
import Environment from '../lib/environment.js'
import Resolver from '../lib/resolver.js'

describe('Resolver', () => {
  describe('#resolve', () => {
    it('runs any code given at resolve', () => {
      const environment = new Environment({ width: 10, height: 5, boulderCount: 3 })
      const resolver = new Resolver({environment})
      const oldCoord = environment.karel().coordinates()

      resolver.resolve(function () {
        this.move()
      })

      const newCoord = environment.karel().coordinates()

      assert(oldCoord.y - newCoord.y, 1)
    })
  })
})
