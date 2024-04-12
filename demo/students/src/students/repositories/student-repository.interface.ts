import { StudentDTO } from '../dtos/student.dto';
import { Student } from '../entities/student.entity';

export const STUDENT_REPOSITORY = 'STUDENT_REPOSITORY';

export interface IStudentRepository {
  findAll(): Promise<Student[]>;
  create(student: StudentDTO): Promise<Student>;
}
