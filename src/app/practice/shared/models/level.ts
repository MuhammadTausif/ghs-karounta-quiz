import { School } from "./school.model";

export class Level{
    id: number;
    sectionLevel: string;
    totalClasses: number;

    // Foreign Keys
    school: School;
}