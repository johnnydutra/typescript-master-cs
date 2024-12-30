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

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: 'Blue Suede Shoes',
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: 'Elton',
  age: 0.5,
  breed: 'Australian Shepherd',
  bark() {
    return 'WOOF WOOF!';
  },
};
