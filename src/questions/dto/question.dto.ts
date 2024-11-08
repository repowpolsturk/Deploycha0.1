import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateQuestionDto {
  @ApiProperty({
    description: 'The text of the question',
    example: 'What is the capital of France?',
  })
  @IsNotEmpty()
  @IsString()
  question: string;

  @ApiProperty({
    description: 'The ID of the associated quiz',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  quizId: number;

  @ApiProperty({
    description: 'The ID of the question type',
    example: 2,
  })
  @IsNotEmpty()
  @IsNumber()
  typeId: number;
}
