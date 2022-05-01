import "phaser";

import TestGame from "./TestGame.js";
import LoginMenu from "./LoginMenu.js";

import Boot from './Boot.js';
import Preloader from './Preloader.js';
import MainMenu from './MainMenu.js';
import Settings from './Settings.js';
import Story from './Story.js';
import Game from './Game.js';



export const config: Phaser.Types.Core.GameConfig = {
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 640,
    height: 960
  },
  parent: "phaser-example",
  dom: {
        createContainer: true
    },
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 0
      }
    }
  },  
  scene: [Boot, Preloader, MainMenu, Settings, Story, Game]
 // scene: [LoginMenu]
};

export const game = new Phaser.Game(config);

