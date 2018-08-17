import { Chapter } from "./chapter";

export class Section{
    id: number;
    name: string;

    // Foreign Keys
    chapter: Chapter;
}