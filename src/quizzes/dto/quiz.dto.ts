import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  categoryId: number;

  @IsNotEmpty()
  creatorId: number;

  @IsOptional()
  sorting: string;
}
