import assert from 'assert'
import Environment from '../lib/environment.js'
import Resolver from '../lib/resolver.js'

describe('Resolver', () => {
  describe('#resolve', () => {
    describe('move', () => {
      it('moves karel forward', () => {
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

      it('does not move karel when there is an obstacle', () => {
        const environment = new Environment({ width: 10, height: 5, boulderCount: 0 })
        const resolver = new Resolver({environment})
        const oldCoord = environment.karel().coordinates()

        resolver.resolve(function () {
          this.turnLeft()
          this.turnLeft()
          this.move()
        })

        const newCoord = environment.karel().coordinates()

        assert.deepEqual(oldCoord, newCoord)
      })
    })

    describe('pickUp', () => {
      it('picks up the object in front', () => {
        const coord = { x: 1, y: 2 }
        const environment = new Environment({ width: 10, height: 5, boulders: [coord] })
        const resolver = new Resolver({environment})

        resolver.resolve(function () {
          this.pickUp()
        })

        assert(environment.karel().isCarrying())
      })
    })
  })
})
