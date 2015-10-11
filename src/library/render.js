/**
 * library/render.js
 *
 * @description: Render class
 * @author: Chris Young (mail@chrisyou.ng)
 */

import {ensureType} from '../utilities/miscellaneous.js'
import {Thing} from './thing.js'

export class Render {

  /**
   * Render()
   * @description: Create a new Render
   */
  constructor() {
    this.canvas = document.querySelector("canvas");
    this.context = this.canvas.getContext("2d");

    if (!this.context) {
      document.querySelector("#unsupported").style.display = "block";
      throw new Error("Unsupported browser: failed to initialize CanvasRenderingContext2D");
    }

    this.canvas.height = document.body.clientHeight;
    this.canvas.width = document.body.clientWidth;

    this.backgroundColor = "#000";
    this.foregroundColor = "#fff";

    this.context.font = "18px Hyperspace";
    this.context.lineWidth = 1.5;
  }

  /**
   * Render.clear()
   * @description: Clears the canvas with a black rectangle
   */
  clear() {
    this.context.fillStyle = this.backgroundColor;
    this.context.fillRect(0, 0, document.body.clientWidth, document.body.clientHeight);

    this.context.fillStyle = this.foregroundColor;
    this.context.fillText(player.score, 10, 25);
  }

  /**
   * Render.draw()
   * @description: Paints a Thing on the canvas
   * @param: {Thing} thing
   */
  draw(thing) {
    ensureType(thing, Thing);

    this.context.save();

    this.context.translate(this.canvas.width / 2 + thing.position.x, this.canvas.height / 2 + thing.position.y);
    this.context.rotate(thing.rotation);
    this.context.beginPath();

    this.context.moveTo(thing.model.vectors[0].x, thing.model.vectors[0].y);
    for (var index = 1; index < thing.model.vectors.length; index++)
      this.context.lineTo(thing.model.vectors[index].x, thing.model.vectors[index].y);

    this.context.closePath();
    this.context.strokeStyle = this.foregroundColor;
    this.context.stroke();

    this.context.restore();
  }

}

