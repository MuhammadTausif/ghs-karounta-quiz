import { StudentClass } from "./studentClass.model";

export class Subject {
    $key: string;
    name: string;
    
    // Foreign Keys
    studentClassKey: string;
}
