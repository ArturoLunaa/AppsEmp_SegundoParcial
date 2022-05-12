export default class Sale {
    public id: string;

    public amount: number;

    constructor(id: string, model: number) {
        this.id = id;
        this.amount = model;
    }
}