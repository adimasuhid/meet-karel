import assert from 'assert'
import Environment from '../lib/environment.js'
import Resolver from '../lib/resolver.js'
import EventLoop from '../lib/event_loop.js'
import Cli from '../lib/renderers/cli.js'
import Game from '../lib/game.js'

describe('Game', () => {
  describe('#resolve', () => {
    it('runs as a game', (done) => {
      const coord = { x: 1, y: 2 }
      const contents = []

      const eventLoop = new EventLoop({ speed: 5 })
      const environment = new Environment({ width: 10, height: 5, boulders: [coord] })
      const resolver = new Resolver({environment})
      const renderer = new Cli({
        environment,
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

      eventLoop.enqueue(() => {
        assert(environment.karel().isCarrying())
      })

      // Going back so I can drop the boulder
      game.resolve(function () {
        this.turnLeft()
        this.turnLeft()
        this.move()
        this.turnRight()
        this.turnRight()
        this.putDown()
      })

      eventLoop.enqueue(() => {
        assert.deepEqual(environment.boulders()[0].coordinates(), { x: 1, y: 3 })
        eventLoop.stop()
        done()
      })
    })
  })
})
