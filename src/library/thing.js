/**
 * library/thing.js
 *
 * @description: Thing base class for game objects
 * @author: Chris Young (mail@chrisyou.ng)
 */

import {Vector} from '../utilities/vector.js'
import {ensureType} from '../utilities/miscellaneous.js'
import {Model} from './model.js'

export class Thing {

  /**
   * Thing()
   * @description: Creates a new Thing
   */
  constructor({ position = new Vector(), velocity = new Vector(), rotation = 0, model = new Model() } = {}) {
    ensureType(position, Vector);
    ensureType(velocity, Vector);
    ensureType(rotation, "Number");
    ensureType(model, Model);

    this.position = position;
    this.velocity = velocity;
    this.rotation = rotation;
    this.model = model;
  }

}

