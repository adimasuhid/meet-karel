import assert from 'assert'
import Board from '../../lib/environment/board.js'
import Resolver from '../../lib/environment/resolver.js'
import EventLoop from '../../lib/environment/event_loop.js'
import Cli from '../../lib/renderers/cli.js'
import Game from '../../lib/environment/game.js'

describe('Game', () => {
  describe('#resolve', () => {
    it('runs as a game', () => {
      const coord = { x: 1, y: 2 }
      const contents = []

      const eventLoop = new EventLoop({ speed: 5 })
      const board = new Board({ width: 10, height: 5, boulders: [coord] })
      const resolver = new Resolver({board})
      const renderer = new Cli({
        board,
        clearScreen: () => {},
        renderRow: contents.push.bind(contents)
      })
      const game = new Game({resolver, eventLoop, renderer})

      game.resolve(function () {
        this.pickUp()
        this.move()
        this.move() // There is a tree in front at (1,4)
        this.putDown()
      })

      assert(board.karel().isCarrying())

      // Going back so I can drop the boulder
      game.resolve(function () {
        this.turnLeft()
        this.turnLeft()
        this.move()
        this.turnRight()
        this.turnRight()
        this.putDown()
      })

      assert.deepEqual(board.boulders()[0].coordinates(), { x: 1, y: 3 })
      eventLoop.stop()
    })
  })
})
