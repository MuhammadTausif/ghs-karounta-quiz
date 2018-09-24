import { Section } from "./section.model";

// import { Section } from "./section";

export class Test{
    $key: string;
    testNumber: number;
    noOfQuestions: number;
    totalTime: number;
    creationTime: Date;
    chapterSections: string;

    schoolEMIS: string;
    studentClassName: string;
    studentSubjectName: string;
    chapterName: string;

    // Foreign Keys
    section: Section;
}