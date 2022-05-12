import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Sales {
    @PrimaryGeneratedColumn({ type: 'int', unsigned: true, zerofill: true })
    public id: number;

    @Column({ type: 'date', length: 20, nullable: false })
    public soldDate: Date;

    public constructor(id: number, soldDate: Date) {
      this.id = id;
      this.soldDate = soldDate;
    }
  }
  