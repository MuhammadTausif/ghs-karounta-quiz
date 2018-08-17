import { StudentClass } from "./studentClass.model";

export class Subject {
    id: number;
    name: string;
    
    // Foreign Keys
    studentClass: StudentClass;
}
