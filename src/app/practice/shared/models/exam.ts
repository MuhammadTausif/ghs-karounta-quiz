import { Test } from "./test";
import { Student } from "./student.model";

export class Exam{
    id: number;
    timeAndDate: Date;

    // Foriegn Keys
    test: Test;
    student: Student;
}