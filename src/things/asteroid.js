/**
 * things/asteroid.js
 *
 * @description: Asteroid class
 * @author: Chris Young (mail@chrisyou.ng)
 */

import {Vector} from '../utilities/vector.js'
import {Thing} from '../library/thing.js'
import {Model} from '../library/model.js'

export class Asteroid extends Thing {

  /**
   * Asteroid()
   * Creates a new Asteroid
   */
  constructor() {
    let position = new Vector(
      Math.floor(Math.random() * render.canvas.width) - render.canvas.width / 2,
      Math.floor(Math.random() * render.canvas.height) - render.canvas.height / 2 
    );

    let velocity = new Vector(
      Math.floor(Math.random() * 4) - 2,
      Math.floor(Math.random() * 4) - 2
    );

    let rotation = Math.PI / 4 * Math.floor(Math.random() * 5) + 1;

    let model = models[Math.random() * models.length | 0];

    super({ position: position, velocity: velocity, rotation: rotation, model: model });
  }

}

const models = [

  new Model(10, [
    new Vector(1, 6),
    new Vector(-6, 12),
    new Vector(-13, 6),
    new Vector(-13, -5),
    new Vector(-7, -11),
    new Vector(4, -11),
    new Vector(13, -6),
    new Vector(10, 1),
    new Vector(13, 6),
    new Vector(7, 12)
  ]),

  new Model(10, [
    new Vector(-1, 8),
    new Vector(-6, 12),
    new Vector(-13, 6),
    new Vector(-9, 1),
    new Vector(-13, -6),
    new Vector(-6, -12),
    new Vector(-3, -8),
    new Vector(6, -11),
    new Vector(13, -3),
    new Vector(6, 3),
    new Vector(13, 6),
    new Vector(6, 12)
  ]),

  new Model(10, [
    new Vector(-8, 12),
    new Vector(-4, 8),
    new Vector(-4, 6),
    new Vector(-13, 6),
    new Vector(-13, -3),
    new Vector(-6, -11),
    new Vector(3, -8),
    new Vector(7, -11),
    new Vector(13, -5),
    new Vector(4, 1),
    new Vector(13, 5),
    new Vector(4, 12)
  ])

];

