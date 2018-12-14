import { Exam } from "./exam";
import { Answer } from "./answer.model";

export class Result {
    constructor() {
        
    }

    $key: string;
    schoolEMIS: string;
    studentClassName: string;
    studentRollNo: string;
    studentSubjectName: string;
    chapter: string;
    section: string;
    startDateTime: string;

    answers: Answer[];

    qestion1: string;
    qestion2: string;
    qestion3: string;
    qestion4: string;
    qestion5: string;
    qestion6: string;
    qestion7: string;
    qestion8: string;
    qestion9: string;
    qestion10: string;

    // Foreign Keys
    exam: Exam;
}