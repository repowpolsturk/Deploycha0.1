import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './users/entity/user.entity';
import { Role } from './roles/entity/role.entity';
import { UserRole } from './user_role/entity/user_role.entity';
import { Quiz } from './quizzes/entity/quizzes.entity';
import { Category } from './cotegory/entities/cotegory.entity';
import { Review } from './reviews/entity/review.entity';
import { Question } from './questions/entity/question.entity';
import { Answer } from './answers/entity/answer.entity';
import { Result } from './results/entity/result.entity';
import { Type } from './types/entity/type.entity';
import { UserModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { UserRoleModule } from './user_role/user_role.module';
import { QuizModule } from './quizzes/quizzes.module';
import { ReviewsModule } from './reviews/reviews.module';
import { QuestionModule } from './questions/questions.module';
import { TypeModule } from './types/types.module';
import { ResultsModule } from './results/results.module';
import { AnswersModule } from './answers/answers.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './cotegory/cotegory.module';
import { OtpModule } from './otp/otp.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [
          User,
          Role,
          UserRole,
          Quiz,
          Category,
          Review,
          Question,
          Answer,
          Result,
          Type,
        ],
        synchronize: process.env.NODE_ENV === 'development', // Optional: auto-sync in dev
        logging: process.env.NODE_ENV !== 'production', // Enable logging in dev
      }),
    }),
    UserModule,
    RolesModule,
    UserRoleModule,
    QuizModule,
    CategoryModule,
    ReviewsModule,
    QuestionModule,
    AnswersModule,
    ResultsModule,
    TypeModule,
    AuthModule,
    OtpModule,
  ],
})
export class AppModule {}
