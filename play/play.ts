class Car {
    public make:string;
    public model:string;
    
    constructor(make:string, model:string){
        this.make = make
        this.model = model
    }
}

var Mazda = new Car("Mazda","RX-7");

console.log(Mazda instanceof Car)