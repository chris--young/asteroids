/**
 * utilities/vector.js
 *
 * @description: 2D point utilitiy class
 * @author: Chris Young (mail@chrisyou.ng)
 */

import {ensureType} from './miscellaneous.js'

export class Vector {

  /**
   * Vector()
   * @description: Creates a new Vector 
   * @param: {Number} x
   * @param: {Number} y
   */
  constructor(x = 0, y = 0) {
    if (x) ensureType(x, "Number");
    if (y) ensureType(y, "Number");

    this.x = x;
    this.y = y;
  }

  /**
   * Vector.distance()
   * @description: Calculates the distance between two points
   * @param: {Vector} vector1
   * @param: {Vector} vector2
   * @returns: {Number}
   */
  static distance(vector1, vector2) {
    ensureType(vector1, Vector);
    ensureType(vector2, Vector);

    return Math.sqrt(Math.pow(vector1.x - vector2.x, 2) * Math.pow(vector1.y - vector2.y, 2));
  }

}

