import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asset } from './entities/asset.entity';
import { CreateAssetDto } from './dto/create-asset.dto';

@Injectable()
export class AssetsService {
  constructor(
    @InjectRepository(Asset)
    private ordersRepository: Repository<Asset>,
  ) {}

  create(createAssetDto: CreateAssetDto) {
    const newAsset = this.ordersRepository.create(createAssetDto);
    return this.ordersRepository.save(newAsset);
  }

  findAll() {
    return this.ordersRepository.find();
  }

  findOne(id: number) {
    return this.ordersRepository.findOneBy({ id });
  }
}
