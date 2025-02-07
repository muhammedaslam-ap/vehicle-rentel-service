class Vehicle {
    constructor(
        public brand: string,
        public model: string,
        public year: number,
        public rentalPrice: number
    ) {}
    
    getRentalPrice(): number {
        return this.rentalPrice;
    }
}

class Car extends Vehicle {
    constructor(brand: string,model: string, year: number, rentalPrice: number, public numDoors: number) {
        super(brand, model, year, rentalPrice);
    }
    
    getRentalPrice(): number {
        return this.rentalPrice * 1.1; 
    }
}

class Bike extends Vehicle {
    constructor(brand: string, model: string, year: number, rentalPrice: number, public hasHelmet: boolean) {
        super(brand, model, year, rentalPrice);
    }
    
    getRentalPrice(): number {
        return this.rentalPrice * 0.9; 
    }
}

class Customer {
    constructor(public name: string, public age: number) {}
}

class RentalService {
    private rentals: { customer: Customer; vehicle: Vehicle }[] = [];
    
    rentVehicle(customer: Customer, vehicle: Vehicle): void {
        this.rentals.push({ customer, vehicle });
        console.log(`${customer.name} rented a ${vehicle.brand} ${vehicle.model} for $${vehicle.getRentalPrice()} per day.`);
    }
    
    returnVehicle(customer: Customer, vehicle: Vehicle): void {
        this.rentals = this.rentals.filter(rental => rental.customer !== customer || rental.vehicle !== vehicle);
        console.log(`${customer.name} returned the ${vehicle.brand} ${vehicle.model}.`);
    }
}

const car = new Car("Toyota", "Corolla", 2022, 50, 4);
const bike = new Bike("Yamaha", "YZF", 2021, 30, true);
const customer = new Customer("John Doe", 30);
const rentalService = new RentalService();

rentalService.rentVehicle(customer, car);
rentalService.rentVehicle(customer, bike);
rentalService.returnVehicle(customer, car);
