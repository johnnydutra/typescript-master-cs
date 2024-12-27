const dog = {
  name: 'Elton',
  breed: 'Australian Sheperd',
  age: 0.5,
};

function printName(person: { first: string; last: string }) {
  console.log(`${person.first} ${person.last}`);
}
printName({ first: 'Thomas', last: 'Jenkins' });

let coordinate: { x: number; y: number } = { x: 34, y: 2 };

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}
