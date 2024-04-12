import { Module } from '@nestjs/common';
import { StudentController } from './controllers/student.controller';
import { StudentService } from './service/student.service';
import { StudentRespositoryService } from './repositories/student-respository.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { STUDENT_REPOSITORY } from './repositories/student-repository.interface';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StudentController],
  providers: [
    StudentService,
    { useClass: StudentRespositoryService, provide: STUDENT_REPOSITORY },
  ],
})
export class StudentsModule {}
