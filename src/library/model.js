/**
 * library/model.js
 *
 * @description: Model class, contains a vector array for drawing a line segment and radius for checking collisions
 * @author: Chris Young (mail@chrisyou.ng)
 */

import {ensureType, ensureArrayType} from '../utilities/miscellaneous.js'
import {Vector} from '../utilities/vector.js'

export class Model {

  /**
   * Model()
   * @description: Creates a new Model
   * @param: {Number} radius
   * @param: {Vector Array} vectors
   */
  constructor(radius = 0, vectors = []) {
    ensureType(radius, "Number");
    ensureType(vectors, "Array");
    ensureArrayType(vectors, Vector);

    this.radius = radius;
    this.vectors = vectors
  }

}

