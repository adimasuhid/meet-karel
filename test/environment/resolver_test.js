import assert from 'assert'
import Board from '../../lib/environment/board.js'
import Resolver from '../../lib/environment/resolver.js'

describe('Resolver', () => {
  describe('#resolve', () => {
    describe('move', () => {
      it('moves karel forward', () => {
        const board = new Board({ width: 10, height: 5, boulderCount: 3 })
        const resolver = new Resolver({board})
        const oldCoord = board.karel().coordinates()

        resolver.resolve(function () {
          this.move()
        })

        const newCoord = board.karel().coordinates()

        assert.equal(newCoord.y - oldCoord.y, 1)
        assert.equal(newCoord.x - oldCoord.x, 0)
      })

      it('does not move karel when there is an obstacle', () => {
        const board = new Board({ width: 10, height: 5, boulderCount: 0 })
        const resolver = new Resolver({board})
        const oldCoord = board.karel().coordinates()

        resolver.resolve(function () {
          this.turnLeft()
          this.turnLeft()
          this.move()
        })

        const newCoord = board.karel().coordinates()

        assert.deepEqual(oldCoord, newCoord)
      })
    })

    describe('pickUp', () => {
      it('picks up the object in front', () => {
        const coord = { x: 1, y: 2 }
        const board = new Board({ width: 10, height: 5, boulders: [coord] })
        const resolver = new Resolver({board})

        resolver.resolve(function () {
          this.pickUp()
        })

        assert(board.karel().isCarrying())
      })
    })

    describe('putDown', () => {
      let coord, board, resolver

      beforeEach(() => {
        coord = { x: 1, y: 2 }
        board = new Board({ width: 10, height: 5, boulders: [coord] })
        resolver = new Resolver({board})
      })

      it('puts down a carried object', () => {
        resolver.resolve(function () {
          this.pickUp()
        })

        assert(board.karel().isCarrying())

        resolver.resolve(function () {
          this.putDown()
        })

        assert(!board.karel().isCarrying())
      })

      it('repositions a carried object', () => {
        resolver.resolve(function () {
          this.pickUp()
          this.move()
          this.putDown()
        })

        assert.deepEqual(board.boulders()[0].coordinates(), { x: 1, y: 3 })
      })

      it('does not put down an object when there is no place available', () => {
        resolver.resolve(function () {
          this.pickUp()
          this.move()
          this.move() // There is a tree in front at (1,4)
          this.putDown()
        })

        assert(board.karel().isCarrying())
      })
    })
  })
})
