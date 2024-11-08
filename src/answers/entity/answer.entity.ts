import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';


import { Question } from 'src/questions/entity/question.entity';
import { Result } from 'src/results/entity/result.entity';
import { User } from 'src/users/entity/user.entity';

@Entity('answers')
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  answer: string;

  @Column({ default: false })
  isCorrect: boolean;

  @ManyToOne(() => Question)
  @JoinColumn({ name: 'question_id' })
  question: Question;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Result)
  @JoinColumn({ name: 'results_id' })
  result: Result;
}
