interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 123, y: 1234 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string;
}

const thomas: Person = {
  first: 'Thomas',
  last: 'Hardy',
  id: 21836,
  sayHi: () => {
    return 'Hello!';
  },
};
