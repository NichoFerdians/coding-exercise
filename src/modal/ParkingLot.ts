import { Car } from './Car';

export class ParkingLot {
  public cars: Car[] = [];

  /**
  * The function `addCar` adds a new car to a collection while validating for duplicate
  * registration numbers.
  * @param {Car} car
  */
  addCar(car: Car): void {

    // validate duplicate cars
    if (this.cars.find((c) => c.registrationNumber === car.registrationNumber)) {
      throw new Error("Car with registration number already exists");
    }

    // add car
    this.cars.push(car);
  }

  /**
   * The function `removeCar` removes a car from a list of cars based on its registration number.
   * @param {string} registrationNumber
   */
  removeCar(registrationNumber: string): void {

    // find car by registration number
    const carIndex = this.cars.findIndex((c) => c.registrationNumber === registrationNumber);

    // throw error if registration number not found
    if (carIndex === -1) {
      throw new Error("Car with given registration number not found");
    }

    // remove car
    this.cars.splice(carIndex, 1);
  }

  /**
   * The `listCars` function in TypeScript lists all parked cars with their registration numbers and
   * colors, handling the case where no cars are parked.
   */
  listCars(): void {

    // validate parked cars, throw error if no car parked
    if (this.cars.length === 0) {
      console.log("No cars parked currently");
      return;
    }

    // list all parked cars
    console.log("Parked Cars:");
    this.cars.forEach((car) => {
      console.log(`Registration Number: ${car.registrationNumber}, Color: ${car.color}`);
    });
  }
}