export default class Car {
    public id: string;

    public model: string;

    public brand: string;

    public year: number;

    constructor(id: string, model: string, brand: string, year:number) {
        this.id = id;
        this.model = model;
        this.brand = brand;
        this.year = year;
    }
}