import { Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
