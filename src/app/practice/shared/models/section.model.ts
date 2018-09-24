import { Chapter } from "./chapter.model";

export class Section{
    $key: string;
    serialNumber: number;
    name: string;
    chapterName: string;
    studentSubjectName: string;
    studentClassName: string;
    schoolEMIS: string;

    // Foreign Keys
    section: Section;
}