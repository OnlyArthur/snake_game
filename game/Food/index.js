import { gameboard, generateRandomBoardPosition } from '../Board/index.js';
import { collision as snakeCollision, expandSnake } from '../Snake/index.js';

const EXPASION_RATE = 2;

let foodPosition = generateRandomPosition();

export function update() {
    if (snakeCollision(foodPosition)) {
        expandSnake(EXPASION_RATE);
        foodPosition = generateRandomPosition();
    }
};

export function draw() {
    // create element
    const foodElement = document.createElement('div');

    //config css
    foodElement.classList.add('food')

    //position
    foodElement.style.gridRowStart = foodPosition.y;
    foodElement.style.gridColumnStart = foodPosition.x;

    //append on DOM
    gameboard.appendChild(foodElement)
};

function generateRandomPosition () {
    let newFoodPosition;

    while (newFoodPosition === undefined || snakeCollision(newFoodPosition)) {
        newFoodPosition = generateRandomBoardPosition();
    }

    return newFoodPosition;
};