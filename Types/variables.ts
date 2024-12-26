let movieTitle: string = 'Amadeus';
movieTitle = 'Arrival';
movieTitle = 9;
movieTitle.toUpperCase();

let numCatLives = 9;
numCatLives += 1;
numCatLives = 'zero';

let gameOver: boolean;
gameOver = true;
gameOver = 'true';

null;
undefined;

let nothing: null = null;
let foo: undefined = undefined;

// Type Inference
let tvShow = 'Olive Kitteridge';
tvShow = 'The Other Two';
tvShow = false;

let isFunny = false;
isFunny = true;
isFunny = 'asd';

// The any type
let thing: any = 'hello';
thing = 1;
thing = false;
thing();
thing.toUpperCase();
