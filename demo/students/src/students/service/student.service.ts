import { Inject, Injectable } from '@nestjs/common';
import {
  IStudentRepository,
  STUDENT_REPOSITORY,
} from '../repositories/student-repository.interface';
import { StudentDTO } from '../dtos/student.dto';

@Injectable()
export class StudentService {
  constructor(
    @Inject(STUDENT_REPOSITORY)
    private readonly studentRepository: IStudentRepository,
  ) {}

  findAll() {
    return this.studentRepository.findAll();
  }

  create(student: StudentDTO) {
    return this.studentRepository.create(student);
  }
}
