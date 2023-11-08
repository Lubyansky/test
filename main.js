import { newArray } from "./newArray.js";
import { changeArray } from "./changeArray.js";

const tank = [
    {id: 1, type: 'mango', price: 35},
    {id: 2, type: 'mango', price: 77},
    {id: 3, type: 'potato', price: 84},
    {id: 4, type: 'potato', price: 25},
    {id: 5, type: 'mango', price: 33},
    {id: 6, type: 'apple', price: 50},
    {id: 7, type: 'mango', price: 89},
    {id: 8, type: 'apple', price: 60},
    {id: 9, type: 'mango', price: 51},
    {id: 10, type: 'apple', price: 82},
];

console.log(tank, tank.length)

const newTank = newArray(tank)

console.log(newTank, newTank.length)

changeArray(tank);

console.log(tank, tank.length)