import Board from '../environment/board.js'
import Resolver from '../environment/resolver.js'
import EventLoop from '../environment/event_loop.js'
import Game from '../environment/game.js'
import Cli from '../renderers/cli.js'

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
