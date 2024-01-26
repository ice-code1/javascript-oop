// 1). creating of a class
class Vehicle{
    tyres = 4
    brakes = "quick"
    chairs = " comfortable"

    static engine = "Loud"
}

// accessing an object
const car = new Vehicle()
console.log(car.tyres)
// accessing a class
console.log(Vehicle.engine)