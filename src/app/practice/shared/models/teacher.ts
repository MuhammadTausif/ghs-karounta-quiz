import { School } from "./school.model";

export class Teacher {
    id: number;
    name: string;
    fatherName: string;
    designation: string;
    phone: number;
    address: string;
    dateOfPosting: Date;
    school: School;
}
