var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Base class: Vehicle
var Vehicle = /** @class */ (function () {
    function Vehicle(brand, model, year, rentalPrice) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.rentalPrice = rentalPrice;
    }
    Vehicle.prototype.getRentalPrice = function () {
        return this.rentalPrice;
    };
    return Vehicle;
}());
// Derived class: Car
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, model, year, rentalPrice, numDoors) {
        var _this = _super.call(this, brand, model, year, rentalPrice) || this;
        _this.numDoors = numDoors;
        return _this;
    }
    Car.prototype.getRentalPrice = function () {
        return this.rentalPrice * 1.1; // Car rentals have a 10% additional charge
    };
    return Car;
}(Vehicle));
// Derived class: Bike
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(brand, model, year, rentalPrice, hasHelmet) {
        var _this = _super.call(this, brand, model, year, rentalPrice) || this;
        _this.hasHelmet = hasHelmet;
        return _this;
    }
    Bike.prototype.getRentalPrice = function () {
        return this.rentalPrice * 0.9; // Bike rentals have a 10% discount
    };
    return Bike;
}(Vehicle));
// Customer class
var Customer = /** @class */ (function () {
    function Customer(name, age) {
        this.name = name;
        this.age = age;
    }
    return Customer;
}());
// Rental Service
var RentalService = /** @class */ (function () {
    function RentalService() {
        this.rentals = [];
    }
    RentalService.prototype.rentVehicle = function (customer, vehicle) {
        this.rentals.push({ customer: customer, vehicle: vehicle });
        console.log("".concat(customer.name, " rented a ").concat(vehicle.brand, " ").concat(vehicle.model, " for $").concat(vehicle.getRentalPrice(), " per day."));
    };
    RentalService.prototype.returnVehicle = function (customer, vehicle) {
        this.rentals = this.rentals.filter(function (rental) { return rental.customer !== customer || rental.vehicle !== vehicle; });
        console.log("".concat(customer.name, " returned the ").concat(vehicle.brand, " ").concat(vehicle.model, "."));
    };
    return RentalService;
}());
// Usage Example
var car = new Car("Toyota", "Corolla", 2022, 50, 4);
var bike = new Bike("Yamaha", "YZF", 2021, 30, true);
var customer = new Customer("John Doe", 30);
var rentalService = new RentalService();
rentalService.rentVehicle(customer, car);
rentalService.rentVehicle(customer, bike);
rentalService.returnVehicle(customer, car);
