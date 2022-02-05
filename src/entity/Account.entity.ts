/**
 * Transaction entity
 */
import { TransactionType } from '@/enum/account.enum';
import { BaseEntity } from '@entity/Base.entity';
import { Profile } from '@entity/Profile.entity';
import { IsString } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Transaction extends BaseEntity {
  @Column()
  @IsString()
  description: string;

  @Column()
  @IsString()
  amount: string;

  @Column()
  @IsString()
  type: string;

  @Column({ type: 'enum', enum: TransactionType, default: TransactionType.Income })
  @IsString()
  status: TransactionType;

  @Column()
  @IsString()
  date: string;

  @Column()
  @IsString()
  account: string;

  @ManyToOne(type => Profile)
  @JoinColumn({ name: 'user' })
  profile: Profile;
}
