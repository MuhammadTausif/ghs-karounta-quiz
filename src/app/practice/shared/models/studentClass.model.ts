import { Teacher } from "./teacher";
import { ClassRoom } from "./classRoom";

export class StudentClass {
    $key: string;
    name: string;
    session: string;
    // foreign keys
    incharge: string;
    clssRoom: string;
}