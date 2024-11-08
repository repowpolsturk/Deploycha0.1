import { IsNotEmpty, IsString, IsBoolean, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // Импортируем декоратор для Swagger

export class CreateAnswerDto {
  @ApiProperty({
    description: 'The answer text provided by the user', // Описание поля
    type: String, // Указываем тип
  })
  @IsNotEmpty()
  @IsString()
  answer: string;

  @ApiProperty({
    description: 'Indicates if the answer is correct or not', // Описание поля
    type: Boolean, // Указываем тип
  })
  @IsNotEmpty()
  @IsBoolean()
  isCorrect: boolean;

  @ApiProperty({
    description: 'The ID of the question to which this answer belongs', // Описание поля
    type: Number, // Указываем тип
  })
  @IsNotEmpty()
  @IsNumber()
  questionId: number;

  @ApiProperty({
    description: 'The ID of the user who provided the answer', // Описание поля
    type: Number, // Указываем тип
  })
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @ApiProperty({
    description: 'The ID of the results record related to this answer', // Описание поля
    type: Number, // Указываем тип
  })
  @IsNotEmpty()
  @IsNumber()
  resultsId: number;
}
