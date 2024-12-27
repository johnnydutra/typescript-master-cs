function square(num: number): number {
  return num * num;
}

function greet(person: string = 'stranger'): string {
  return `Hi there, ${person}!`;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {};

square(3);
greet();
greet('Tonya Harding');
doSomething('ChickenFace', 78, false);

function rando(num: number) {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

const add = (x: number, y: number): number => {
  return x + y;
};

const colors = ['red', 'orange', 'yellow'];
colors.map((color) => {
  return color.toUpperCase();
});

function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}
