import { Car } from './modal/Car';
import { ParkingLot } from './modal/ParkingLot';
import { Parking } from './usecase/Parking';
import { intro, outro, select, text } from '@clack/prompts';

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

  // console.clear();

  const action = await select({
    message: 'Select Action.',
    options: [
      { value: '1', label: 'Add Car' },
      { value: '2', label: 'Remove Car' },
      { value: '3', label: 'List Car' },
      { value: '4', label: 'Exit' },
    ],
  });


  switch (action) {
    case '1':
      // Get car details
      const addRegNumber = await text({
        message: 'Enter car registration number:',
        defaultValue: ''
      });

      const color = await text({
        message: 'Enter car color:',
      });

      let addRegNumberVal = typeof addRegNumber === 'string' ? addRegNumber : '';
      let colorVal = typeof color === 'string' ? color : '';

      parking.addCar(new Car(addRegNumberVal, colorVal));

      break;
    case '2':
      // Get registration number for removal
      const removeRegNumber = await text({
        message: 'Enter registration number to remove:',
      });

      let removeRegNumberVal = typeof removeRegNumber === 'string' ? removeRegNumber : '';

      parking.removeCar(removeRegNumberVal);

      break;
    case '3':
      parking.listCars();

      break;
    case '4':
      readline.close();
      console.log("\n   Exiting Car Park Management System");

      break;
    default:
      console.log("\n   Invalid action. Please try again.");
  }

  // Continue the loop
  mainLoop();
};

mainLoop();