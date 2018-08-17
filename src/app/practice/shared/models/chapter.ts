import { Subject } from "./subject";
import { Teacher } from "./teacher";

export class Chapter {
    id: number;
    name: string

    // Foreign Keys
    subject: Subject;
    instructor: Teacher;
}
