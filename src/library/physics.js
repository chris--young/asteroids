/**
 * library/physics.js
 *
 * @description: Physics class, updates things and checks for collisions
 * @author: Chris Young (mail@chrisyou.ng)
 */

import {Vector} from '../utilities/vector.js'
import {ensureType} from '../utilities/miscellaneous.js'
import {Player} from '../things/player.js'
import {Thing} from './thing.js'

export class Physics {

  /**
   * Phyiscs()
   * @description: Creates a new Phyiscs
   */
  constructor() {
    this.friction = 0.01;
  }

  /**
   * Physics.update()
   * @description: Applies user input, moves player, and applies friction
   * @param: {Player} player
   */
  update(player) {
    ensureType(player, Player);

    if (input.pressed.get(up))
      player.accelerate();

    if (input.pressed.get(right))
      player.rotate(1);

    if (input.pressed.get(left))
      player.rotate(-1);

    if (Math.abs(player.velocity.x) > 0)
      player.velocity.x = (player.velocity.x > 0) ? player.velocity.x - this.friction : player.velocity.x + this.friction;

    if (Math.abs(player.velocity.y) > 0)
      player.velocity.y = (player.velocity.y > 0) ? player.velocity.y - this.friction : player.velocity.y + this.friction;

    this.move(player);
  }

  /**
   * Physics.move()
   * @description: Moves a thing, if it moves off one side of the screen it will come back on the opposite side 
   * @param: {Thing} thing
   */
  move(thing) {
    ensureType(thing, Thing);

    thing.position.x += thing.velocity.x;
    thing.position.y += thing.velocity.y;

    if (thing.position.x > render.canvas.width / 2)
      thing.position.x -= render.canvas.width;
    else if (thing.position.x < render.canvas.width / -2)
      thing.position.x += render.canvas.width;

    if (thing.position.y > render.canvas.height / 2)
      thing.position.y -= render.canvas.height;
    else if (thing.position.y < render.canvas.height / -2)
      thing.position.y += render.canvas.height;
  }

  /**
   * Physics.check()
   * @description: Checks if two things are colliding
   * @param: {Thing} thing1
   * @param: {Thing} thing2
   * @returns: {Boolean{
   */
  check(thing1, thing2) {
    ensureType(thing1, Thing);
    ensureType(thing2, Thing);

    return (Vector.distance(thing1.position, thing2.position) < thing1.model.radius + thing2.model.radius);
  }

}

