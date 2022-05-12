import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sales {
    @PrimaryGeneratedColumn({ type: 'int', unsigned: true, zerofill: true })
    public id: number;
  
    @Column({ type: 'float', length: 20, nullable: false })
    public amount: number;

    @Column({ type: 'date', length: 20, nullable: false })
    public soldDate: Date;

    public constructor(id: number, amount: number, soldDate: Date) {
      this.id = id;
      this.amount = amount;
      this.soldDate = soldDate;
    }
  }
  