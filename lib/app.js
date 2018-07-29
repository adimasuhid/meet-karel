import Board from './environment/board.js'
import Resolver from './environment/resolver.js'
import EventLoop from './environment/event_loop.js'
import Game from './environment/game.js'
import Canvas from './renderers/canvas.js'

const Karel = {Game, Board, Resolver, EventLoop, Canvas}
window.Karel = Karel
export default Karel
