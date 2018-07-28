import Board from './environment/board.js'
import Resolver from './environment/resolver.js'
import EventLoop from './environment/event_loop.js'
import Game from './environment/game.js'
import Canvas from './renderers/canvas.js'

const eventLoop = new EventLoop({ speed: 1000 })
const coord = { x: 1, y: 2 }
const board = new Board({ width: 15, height: 10, boulders: [coord] })
const resolver = new Resolver({board})
const renderer = new Canvas({board})
const game = new Game({resolver, eventLoop, renderer})

window.Karel = {}
window.Karel.game = game
export default game
