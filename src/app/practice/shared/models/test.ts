import { Section } from "./section";

// import { Section } from "./section";

export class Test{
    id: number;
    noOfQuestion: number;
    totalTime: number;
    creationTime: Date;
        
    // Foreign Keys
    section: Section;
}