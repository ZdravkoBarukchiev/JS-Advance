class Circle {
    constructor(radius) {
        this.radius = radius
    }
    get diameter() {
        let d = this.radius * 2;
        return d;
    }
    set diameter(value) {
        this.radius = value / 2
    }
    get area() {
        let a = Math.PI * this.radius ** 2;
        return a;
    }
    set area(value) {
        this.radius = Math.sqrt(value / Math.PI)
    }


}

let c = new Circle(2);

console.log(`Radius: ${c.radius}`);

console.log(`Diameter: ${c.diameter}`);

console.log(`Area: ${c.area}`);