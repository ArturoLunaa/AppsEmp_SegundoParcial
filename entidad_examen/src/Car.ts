export default class Person {
    public id: string;
  
    public model: string;

    public brand: string;
  
    public year: number;

    
  
    public constructor(id: string, model: string, brand: string, year: number) {
      this.id = id;
      this.model = model;
      this.brand = brand;
      this.year = year;
    }
  }
  