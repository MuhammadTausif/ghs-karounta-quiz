import { Test } from "./test";

export class Question {
    constructor() {
        
    }

    question: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;

    // Foreign Key
    test: Test;
}