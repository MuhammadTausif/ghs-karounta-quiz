import { Question } from './question.model';
import { Answer } from './answer.model';

export class Quiz {
    $key: string;
    dateAndTime: string;
    questions: Question[];
    answers: Answer[];

    schoolEMIS: string;
    studentClassName: string;
    studentRollNo: number;
    studentSubjectName: string;
    chapterName: string;
    sectionName: string;
    questionSerialNo: number;
    answeredOption: string;
}
