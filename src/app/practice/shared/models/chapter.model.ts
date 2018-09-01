import { Subject as StudentSubject } from "./subject.model";
import { Teacher } from "./teacher";

export class Chapter {
    $key: string;
    name: string
    serialNumber: number;

    // Foreign Keys
    studentSubjectName: string;
    instructor: Teacher;
}
