import assert from 'assert'
import _ from 'underscore'
import Environment from '../lib/environment.js'

describe('Environment', () => {
  describe('#constructor', () => {
    it('creates boulders', () => {
      const environment = new Environment({ width: 10, height: 5, boulderCount: 3 })

      assert.equal(environment.boulders().length, 3)
    })

    describe('walls', () => {
      it('creates 8 walls given a 3x3 board', () => {
        const environment = new Environment({ width: 3, height: 3, boulderCount: 0 })

        // 0-0 1-0 2-0
        // 0-1     2-1
        // 0-2 1-2 2-2

        const wallCoords = _.map(environment.walls(), (wall) => wall.coordinates())
        assert.deepEqual(wallCoords, [
          { x: 0, y: 0 },
          { x: 1, y: 0 },
          { x: 2, y: 0 },
          { x: 0, y: 1 },
          { x: 2, y: 1 },
          { x: 0, y: 2 },
          { x: 1, y: 2 },
          { x: 2, y: 2 }
        ])

        assert.equal(environment.walls().length, 8)
      })

      it('creates 14 walls given a 5x4 board', () => {
        const environment = new Environment({ width: 5, height: 4, boulderCount: 1 })

        assert.equal(environment.walls().length, 14)
      })
    })

    describe('karel', () => {
      it('creates Karel', () => {
        const environment = new Environment({ width: 5, height: 4, boulderCount: 1 })

        assert(environment.karel() != null)
      })
    })

    describe('getModelFromPosition', () => {
      it('returns model when available', () => {
        const environment = new Environment({ width: 5, height: 4, boulderCount: 1 })
        const coord = { x: 1, y: 1 }

        assert.deepEqual(environment.getModelFromPosition(coord), environment.karel())
      })

      it('returns null when empty', () => {
        const environment = new Environment({ width: 5, height: 4, boulderCount: 0 })
        const coord = { x: 1, y: 2 }

        assert.deepEqual(environment.getModelFromPosition(coord), null)
      })
    })
  })
})
