class Resistor {
    r: number = 0;
    constructor(r: number) {
        this.r = r;
    }
    getCurrent(u: number): number {
        return u / this.r;
    }
    getPower(u: number): number {
        return u * this.getCurrent(u);
    }
    getAmps(w: number, v:number): number {
        return  w / v
    }
    getOhms(v: number, w:number): number{
        return v / this.getAmps(w, v);
    }
    getWater(w: number, ml:number): number{
        return Math.floor(20 + (60 /(4.19 * (ml / w))))
    }
}
let r1 = new Resistor(2.5);
console.log(r1.getPower(5));

console.log(r1.getAmps(6,4));

console.log(r1.getOhms(4,6))

console.log(r1.getWater(1000, 1000))

console.log(r1.getAmps(1000, 220))

console.log(r1.getOhms(220, 1000))