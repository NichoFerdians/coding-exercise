import { Car } from '../modal/Car';
import { ParkingLot } from '../modal/ParkingLot';

// Interface for Parking
interface ParkingInterface {
    addCar(car: Car): void;
    removeCar(registrationNumber: string): void;
    listCars(): void;
}

// Implementation of Parking Attendant
export class Parking implements ParkingInterface {
    constructor(private parkingLot: ParkingLot) { }

    /**
     * The function `addCar` adds a car to a parking lot and logs a success message, or logs an error
     * message if the car cannot be added.
     * @param {Car} car
     */
    addCar(car: Car): void {
        try {
            this.parkingLot.addCar(car);
            console.log(`\n   Car with registration number ${car.registrationNumber} parked successfully.`);
        } catch (error: any) {
            console.error(error.message);
        }
    }

    /**
     * The function `removeCar` removes a car from a parking lot by registration number and logs a message
     * indicating the removal.
     * @param {string} registrationNumber
     */
    removeCar(registrationNumber: string): void {
        try {
            this.parkingLot.removeCar(registrationNumber);
            console.log(`\n   Car with registration number ${registrationNumber} removed from parking lot.`);
        } catch (error: any) {
            console.error(error.message);
        }
    }

    /**
     * The `listCars` function in TypeScript lists all parked cars with their registration numbers and
     * colors, handling the case where no cars are parked.
     */
    listCars(): void {
        this.parkingLot.listCars();
    }
}