import assert from 'assert'
import Environment from '../lib/environment.js'
import Resolver from '../lib/resolver.js'

describe('Resolver', () => {
  describe('#resolve', () => {
    describe('move', () => {
      it('runs any code given at resolve', () => {
        const environment = new Environment({ width: 10, height: 5, boulderCount: 3 })
        const resolver = new Resolver({environment})
        const oldCoord = environment.karel().coordinates()

        resolver.resolve(function () {
          this.move()
        })

        const newCoord = environment.karel().coordinates()

        assert.equal(newCoord.y - oldCoord.y, 1)
        assert.equal(newCoord.x - oldCoord.x, 0)
      })
    })

    describe('pickUp', () => {
      it('picks up the object in front', () => {
      
      }) 
    })
  })
})
