/* eslint-disable camelcase */
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Encomenda from './Encomenda';

@Entity('trajetos')
class Trajeto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  local: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  encomenda_id: string;

  @ManyToOne(() => Encomenda)
  @JoinColumn({ name: 'encomenda_id' })
  encomenda: Encomenda;
}

export default Trajeto;
