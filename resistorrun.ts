class Resistor {
    r: number = 0;
    maxPower: number = 0;
    //maxVoltage: number = 0;  maxVoltage: number
    constructor(r: number, maxPower: number,) {
        this.r = r;
        this.maxPower = maxPower;
        //this.maxVoltage = maxVoltage;
    }
    getCurrent(u: number): number {
        return u / this.r;
    }
    getPower(u: number): number {
        return u * this.getCurrent(u);
    }
    checkVoltage(u: number): boolean {
        return this.getPower(u) <= this.maxPower;
    }
}

let r1 = new Resistor(220, 550);
console.log(r1.checkVoltage(5));
console.log(r1.checkVoltage(400));

