import Board from './environment/board.js'
import Resolver from './environment/resolver.js'
import EventLoop from './environment/event_loop.js'
import Game from './environment/game.js'
import Canvas from './renderers/canvas.js'

window.Karel = {Game, Board, Resolver, EventLoop, Canvas}
export default Karel
