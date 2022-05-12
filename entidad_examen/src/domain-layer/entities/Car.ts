import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Sales from "./Sales";

@Entity()
export default class Car {
    @PrimaryGeneratedColumn({ type: 'int', unsigned: true, zerofill: true })
    public id: number;
  
    @Column({ type: 'varchar', length: 20, nullable: false })
    public model: string;

    @Column({ type: 'varchar', length: 20, nullable: false })
    public brand: string;
  
    @Column({ type: 'varchar', length: 4, nullable: false })
    public year: number;

    @ManyToOne(() => Sales, sale => sale.id)
    sales: Sales;

    public constructor(id: number, model: string, brand: string, year: number, sales: Sales) {
      this.id = id;
      this.model = model;
      this.brand = brand;
      this.year = year;
      this.sales = sales;
    }
  }
  