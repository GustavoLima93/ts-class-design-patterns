import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentService } from '../service/student.service';
import { StudentDTO } from '../dtos/student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get('/')
  getStudents() {
    return this.studentService.findAll();
  }

  @Post('/')
  createStudent(@Body() student: StudentDTO) {
    return this.studentService.create(student);
  }
}
