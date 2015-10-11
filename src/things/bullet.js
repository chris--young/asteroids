/**
 * things/bullet.js
 *
 * @description: Bullet class
 * @author: Chris Young (mail@chrisyou.ng)
 */

import {Vector} from '../utilities/vector.js'
import {Thing} from '../library/thing.js'
import {Model} from '../library/model.js'

export class Bullet extends Thing {

  /**
   * Bullet()
   * @description: Creates a new Bullet based on player position and rotation
   */
  constructor() {
    let position = new Vector(
      player.position.x + Math.cos(player.rotation) + 5,
      player.position.y + Math.sin(player.rotation) + 5
    );

    let velocity = new Vector(
      Math.cos(player.rotation) * 4,
      Math.sin(player.rotation) * 4
    );

    let rotation = player.rotation;

    let model = new Model(2, [
      new Vector(0, 2),
      new Vector(-2, 0),
      new Vector(0, -2),
      new Vector(2, 0)
    ]);

    super({ position: position, velocity: velocity, rotation: rotation, model: model });

    this.shot = Date.now();
    this.shotLength = 1500;
  }

  /**
   * Bullet.check()
   * @description: Determines if a bullet has existed for longer than 1500 milliseconds
   * @returns {Number}
   */
  check() {
    return (Date.now() - this.shot > this.shotLength);
  }

}

