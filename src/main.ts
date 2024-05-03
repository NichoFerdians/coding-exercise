import { Car } from './modal/Car';
import { ParkingLot } from './modal/ParkingLot';
import { Parking } from './usecase/Parking';

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const parkingLot = new ParkingLot();
const parking = new Parking(parkingLot);

const mainLoop = async () => {

  // exit if readline is closed
  if (readline.closed) {
    return;
  }

  console.log(
`
======================= Car Management System =======================
1. Add Car
2. Remove Car
3. List Car
4. Exit
`
  );


  // Get user action
  const action = await new Promise((resolve) => readline.question(
    "Choose action : ",
    resolve
  ));

  console.log(`\n=====================================================================\n`);

  switch (action) {
    case '1':
      // Get car details
      const addRegNumber: string = await new Promise((resolve) => readline.question("Enter car registration number: ", resolve));
      const color: string = await new Promise((resolve) => readline.question("Enter car color: ", resolve));

      parking.addCar(new Car(addRegNumber, color));

      break;
    case '2':
      // Get registration number for removal
      const removeRegNumber: string = await new Promise((resolve) => readline.question("Enter registration number to remove: ", resolve));

      parking.removeCar(removeRegNumber);

      break;
    case '3':
      parking.listCars();

      break;
    case '4':
      readline.close();
      console.log("Exiting Car Park Management System");

      break;
    default:
      console.log("Invalid action. Please try again.");
  }

  console.log(`\n=====================================================================\n`);

  // Continue the loop
  mainLoop();
};

mainLoop();
