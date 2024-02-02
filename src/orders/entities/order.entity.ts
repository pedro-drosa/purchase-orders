import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { randomUUID } from 'node:crypto';
import { Asset } from '../../assets/entities/asset.entity';

export enum OrderStatus {
  OPEN = 'open',
  PENDING = 'pending',
  CLOSED = 'closed',
}

@Entity({ name: 'orders' })
export class Order {
  @PrimaryColumn()
  id: string = randomUUID();

  @ManyToOne(() => Asset, { eager: true, cascade: ['insert'] })
  @JoinColumn({ name: 'assetId' })
  asset: Asset;

  @Column()
  assetId: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column()
  status: OrderStatus = OrderStatus.OPEN;
}
