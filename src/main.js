/**
 * main.js
 *
 * @description: Main script
 * @author: Chris Young (mail@chrisyou.ng)
 */

import {Render} from './library/render.js'
import {Physics} from './library/physics.js'
import {Input} from './library/input.js'

import {Player} from './things/player.js'
import {Asteroid} from './things/asteroid.js'
import {Bullet} from './things/bullet.js'

/**
 * initialize()
 * @description: Sets up the game on window load
 */
function initialize() {
  window.render = new Render();
  window.physics = new Physics();
  window.player = new Player();
  window.input = new Input();

  window.bullets = [];
  window.asteroids = [];

  window.addEventListener("keydown", input.change.bind(input));
  window.addEventListener("keyup", input.change.bind(input));

  loop();
}

/**
 * loop()
 * @description: The main game loop, updates and draws things
 */
function loop() {
  render.clear();

  physics.update(player);
  render.draw(player);

  bullets.forEach((bullet, index1) => {
    if (bullet.check())
      bullets.splice(index1, 1);
    
    physics.move(bullet);
    render.draw(bullet);

    asteroids.forEach((asteroid, index2) => {
      if (physics.check(bullet, asteroid)) {
        asteroids.splice(index2, 1);
        bullets.splice(index1, 1);
        player.score++;
      }
    });
  });

  if (input.pressed.get(space))
    player.shoot();

  asteroids.forEach((asteroid) => {
    physics.move(asteroid);
    render.draw(asteroid);
  });

  if (!asteroids.length)
    generateAsteroids();

  requestAnimationFrame(loop);
}

/**
 * generateAsteroids()
 * @description: Adds a new group of asteroids to the game
 * @param: {Number} amount
 */
function generateAsteroids() {
  for (let count = 0; count < 8; count++)
    asteroids.push(new Asteroid());
}

if (!window.addEventListener) {
  let unsupported = document.querySelector("#unsupported");
  unsupported.style.display = "block";
} else {
  window.addEventListener("load", initialize);
}

