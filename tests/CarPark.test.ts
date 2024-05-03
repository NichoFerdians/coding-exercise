import { Car } from '../src/modal/Car';
import { ParkingLot } from '../src/modal/ParkingLot';


test('should create a new Car object', () => {
  const car = new Car('AAA', 'Red');
  expect(car.registrationNumber).toBe('AAA');
  expect(car.color).toBe('Red');
});

test('should add a car to the ParkingLot', () => {
  const parkingLot = new ParkingLot();
  const car = new Car('BBB', 'Blue');
  parkingLot.addCar(car);
  expect(parkingLot.cars.length).toBe(1);
  expect(parkingLot.cars[0]).toBe(car);
});

test('should throw error for duplicate registration number', () => {
  const parkingLot = new ParkingLot();
  const car1 = new Car('CCC', 'Green');
  const car2 = new Car('CCC', 'Yellow');
  parkingLot.addCar(car1);
  expect(() => parkingLot.addCar(car2)).toThrowError('Car with registration number already exists');
});

test('should remove a car from the ParkingLot', () => {
  const parkingLot = new ParkingLot();
  const car1 = new Car('DDD', 'Black');
  const car2 = new Car('EEE', 'White');
  parkingLot.addCar(car1);
  parkingLot.addCar(car2);
  parkingLot.removeCar('DDD');
  expect(parkingLot.cars.length).toBe(1);
  expect(parkingLot.cars[0]).toBe(car2);
});

test('should throw error for non-existent registration number removal', () => {
  const parkingLot = new ParkingLot();
  expect(() => parkingLot.removeCar('ZZZ')).toThrowError('Car with given registration number not found');
});
