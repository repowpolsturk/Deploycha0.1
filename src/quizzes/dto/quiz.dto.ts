import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // Импортируем декоратор для Swagger

export class CreateQuizDto {
  @ApiProperty({
    description: 'The title of the quiz', // Описание поля
    type: String, // Указываем тип
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Category ID for the quiz', // Описание поля
    required: false, // Поле не обязательно
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  categoryId: number;

  @ApiProperty({
    description: 'Creator ID of the quiz', // Описание поля
    type: Number,
  })
  @IsNotEmpty()
  @IsNumber()
  creatorId: number;

  @ApiProperty({
    description: 'Sorting preference for the quiz', // Описание поля
    required: false, // Поле не обязательно
    type: String,
  })
  @IsOptional()
  @IsString()
  sorting: string;
}
