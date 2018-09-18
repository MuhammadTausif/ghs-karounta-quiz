import { School } from './school.model';

export class ClassRoom {
    id: number;
    name: string;
    dimensionX: number;
    dimensionY: number;
    schoolId: School;
}
