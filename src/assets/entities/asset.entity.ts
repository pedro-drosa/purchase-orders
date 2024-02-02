import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Order } from '../../orders/entities/order.entity';

@Entity({ name: 'assets' })
export class Asset {
  @PrimaryColumn()
  id: number;

  @Column({ unique: true })
  symbol: string;

  @OneToMany(() => Order, (order) => order.asset)
  orders: Order[];
}
