import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './students/entities/student.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: '123456',
      database: 'students',
      synchronize: true,
      logging: true,
      entities: [Student],
    }),
    StudentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
