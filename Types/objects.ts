const dog = {
  name: 'Elton',
  breed: 'Australian Sheperd',
  age: 0.5,
};

function printName(person: { first: string; last: string }) {
  console.log(`${person.first} ${person.last}`);
}
printName({ first: 'Thomas', last: 'Jenkins' });

// let coordinate: { x: number; y: number } = { x: 34, y: 2 };

// function randomCoordinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }

printName({ first: 'Mick', last: 'Jagger', age: 90 });
const singer = { first: 'Mick', last: 'Jagger', age: 90 };
printName(singer);

type Point = {
  x: number;
  y: number;
};

let coordinate: Point = { x: 34, y: 2 };

function randomCoordinate(): Point {
  return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
  return {
    x: point.x * 2,
    y: point.y * 2,
  };
}

type MyNum = number;
let age: MyNum = 2323;
