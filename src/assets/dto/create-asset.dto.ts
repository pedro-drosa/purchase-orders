import { IsInt, IsPositive, IsString, IsUppercase } from 'class-validator';

export class CreateAssetDto {
  @IsInt()
  @IsPositive()
  id: number;

  @IsString()
  @IsUppercase()
  symbol: string;
}
