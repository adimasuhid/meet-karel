import Board from '../../lib/board.js'
import Resolver from '../../lib/resolver.js'
import EventLoop from '../../lib/event_loop.js'
import Game from '../../lib/game.js'
import Cli from '../../lib/renderers/cli.js'

const eventLoop = new EventLoop({ speed: 1000 })
const coord = { x: 1, y: 2 }
const board = new Board({ width: 10, height: 5, boulders: [coord] })
const resolver = new Resolver({board})
const renderer = new Cli({board})
const game = new Game({resolver, eventLoop, renderer})

game.resolve(function () {
  this.pickUp()
  this.move()
  this.move()
  this.putDown()
  this.turnLeft()
  this.turnLeft()
  this.move()
  this.turnRight()
  this.turnRight()
  this.putDown()
})
