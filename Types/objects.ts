const dog = {
  name: 'Elton',
  breed: 'Australian Sheperd',
  age: 0.5,
};

function printName(person: { first: string; last: string }) {
  console.log(`${person.first} ${person.last}`);
}
printName({ first: 'Thomas', last: 'Jenkins' });
