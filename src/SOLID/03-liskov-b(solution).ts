// HERENCIA
export abstract class Car {
  abstract getNumberOfSeats(): number;
}

export class Tesla extends Car{
  constructor(private _numberOfSeats: number) {
    super();
  }

  getNumberOfSeats(): number {
    return this._numberOfSeats;
  }
}

export class Audi extends Car  {
  constructor(private _numberOfSeats: number) {
    super();
  }
  getNumberOfSeats(): number {
    return this._numberOfSeats;
  }
}

export class Toyota extends Car {
  constructor(private _numberOfSeats: number) {
    super();
  }
  getNumberOfSeats(): number {
    return this._numberOfSeats;
  }
}

export class Honda extends Car{
  constructor(private _numberOfSeats: number) {
    super();
  }
  getNumberOfSeats(): number {
    return this._numberOfSeats;
  }
}


