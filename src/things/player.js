/**
 * things/player.js
 *
 * @description: Player class 
 * @author: Chris Young (mail@chrisyou.ng)
 */

import {ensureType} from '../utilities/miscellaneous.js'
import {Vector} from '../utilities/vector.js'
import {Bullet} from '../things/bullet.js'
import {Thing} from '../library/thing.js'
import {Model} from '../library/model.js'

export class Player extends Thing {
  
  /**
   * Player()
   * @description: Creates a new Player
   */
  constructor() {
    let rotation = Math.PI / -2;

    let model = new Model(10, [
      new Vector(10, 0),
      new Vector(-10, 8),
      new Vector(-10, -8)
    ]);

    super({ rotation: rotation, model: model });

    this.shot;
    this.shotLength = 250;

    this.score = 0;
  }

  /**
   * Player.accelerate()
   * @description: Increases the player's velocity
   */
  accelerate() {
    this.velocity.x = Math.cos(this.rotation) * 2;
    this.velocity.y = Math.sin(this.rotation) * 2;
  }

  /**
   * Player.rotate()
   * @description: Increases the player's rotation based on direction
   * @param: {Number} direction
   */
  rotate(direction) {
    ensureType(direction, "Number");

    if (direction > 0)
      this.rotation = (this.rotation < Math.PI * 2) ? this.rotation + Math.PI / 180 * 6 : 0;
    else
      this.rotation = (this.rotation > 0) ? this.rotation - Math.PI / 180 * 6 : Math.PI * 2;
  }

  /**
   * Player.shoot()
   * @description: Creates a new bullet if enough time has elapsed since the last shot 
   */
  shoot() {
    if (Date.now() - this.shot < this.shotLength)
      return;

    bullets.push(new Bullet());
    this.shot = Date.now();
  }

}

