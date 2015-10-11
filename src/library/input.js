/**
 * library/input.js
 * 
 * @description: Input class and global symbols
 * @author: Chris Young (mail@chrisyou.ng)
 */

window.space = Symbol.for('space');
window.left = Symbol.for('left');
window.up = Symbol.for('up');
window.right = Symbol.for('right');

export class Input {

  /**
   * Input()
   * @description: Creates a new Input
   */
  constructor() {
    this.pressed = new Map();

    this.keys = {
      32: space,
      37: left,
      38: up,
      39: right
    };
  }

  /**
   * Input.change()
   * @description: Keeps track of which relevant keys are currently being pressed
   * @param: {Object} event
   */
  change(event) {
    let key = this.keys[event.which];

    if (key) {
      event.preventDefault();
      this.pressed.set(key, event.type == "keydown");
    }
  }

}

