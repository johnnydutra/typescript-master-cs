let age: number | string = 21;
age = 23;
age = '24';

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  lng: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.213, lng: 23.334 };

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

printAge(23);
printAge('eighty seven');

function calculateTax(price: number | string, tax: number) {
  if (typeof price === 'string') {
    price = parseFloat(price.replace('$', '')) * tax;
  }

  return price * tax;
}

const nums: number[] = [1, 2, 3, 4];
const stuff: any[] = [1, 2, 3, 4, true, 'asdas', {}];

const things: (number | string)[] = [2, 'asd'];

const coords: (Point | Loc)[] = [];
coords.push({ lat: 321.213, lng: 23.334 });
coords.push({ x: 213, y: 31 });

let zero: 0 = 0;
let mood: 'Happy' | 'Sad' = 'Happy';
mood = 'Sad';

type DayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

let today: DayOfWeek = 'Sunday';
