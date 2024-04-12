import { Injectable } from '@nestjs/common';
import { IStudentRepository } from './student-repository.interface';
import { StudentDTO } from '../dtos/student.dto';
import { Student } from '../entities/student.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StudentRespositoryService implements IStudentRepository {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }
  create({ firstName, lastName }: StudentDTO): Promise<Student> {
    const student = this.studentRepository.create({ firstName, lastName });
    return this.studentRepository.save(student);
  }
}
