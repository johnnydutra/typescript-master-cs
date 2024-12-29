const color: [number, number, number] = [255, 0, 255];

type HttpResponse = [number, string];

const goodRes: HttpResponse = [200, 'OK'];

const responses: HttpResponse[] = [[404, 'Not Found'], goodRes];
