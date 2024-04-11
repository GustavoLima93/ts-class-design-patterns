// Base class for the products (vehicles)
abstract class Vehicle {
  abstract start(): void;
  abstract stop(): void;
}

// Concrete classes of the products (car and bicycle)
class Car extends Vehicle {
  start(): void {
      console.log("Car is starting.");
  }

  stop(): void {
      console.log("Car is stopping.");
  }
}

class Bicycle extends Vehicle {
  start(): void {
      console.log("Bicycle is starting.");
  }

  stop(): void {
      console.log("Bicycle is stopping.");
  }
}

// Interface for the Factory Method
interface VehicleFactory {
  createVehicle(): Vehicle;
}

// Concrete implementations of the Factory Method
class CarFactory implements VehicleFactory {
  createVehicle(): Vehicle {
      return new Car();
  }
}

class BicycleFactory implements VehicleFactory {
  createVehicle(): Vehicle {
      return new Bicycle();
  }
}

// Usage example
const carFactory: VehicleFactory = new CarFactory();
const car: Vehicle = carFactory.createVehicle();
car.start();
car.stop();

const bicycleFactory: VehicleFactory = new BicycleFactory();
const bicycle: Vehicle = bicycleFactory.createVehicle();
bicycle.start();
bicycle.stop();
