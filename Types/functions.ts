function square(num: number) {
  return num * num;
}

function greet(person: string = 'stranger') {
  return `Hi there, ${person}!`;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {};

square(3);
greet();
greet('Tonya Harding');
doSomething('ChickenFace', 78, false);
