import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { Asset } from '../assets/entities/asset.entity';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    @InjectRepository(Asset)
    private assetsRepository: Repository<Asset>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const { asset, price } = createOrderDto;
    const assetExists = await this.assetsRepository.findOneBy({
      symbol: asset.symbol,
    });
    const newOrder = this.ordersRepository.create({
      asset: assetExists || { id: asset.id, symbol: asset.symbol },
      price,
    });
    return this.ordersRepository.save(newOrder);
  }

  findAll() {
    return this.ordersRepository.find();
  }

  findOne(id: string) {
    return this.ordersRepository.findOneBy({ id });
  }
}
