import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/practice/shared/models/section.model';
import { StudentClass } from 'src/app/practice/shared/models/studentClass.model';
import { SectionService } from 'src/app/practice/shared/services/section.service';
import { ChapterService } from 'src/app/practice/shared/services/chapter.service';
import { StudentClassService } from 'src/app/practice/shared/services/student-class.service';
import { SubjectService } from 'src/app/practice/shared/services/subject.service';
import { Router } from '@angular/router';
import { Question } from 'src/app/practice/shared/models/question.model';
import { QuestionService } from 'src/app/practice/shared/services/question.service';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {

  public questionsList: Question[];
  public studentsClass: StudentClass;
  public studentsClassKey: string = this.studentClassService.selectedStudentClassKey;
  public subejectName: string = this.subjectService.selectedSubjectName;
  public chapterName: string = this.chapterService.selectedChapterName;
  public sectionName: string = this.sectionService.selectedSectionName;

  displayedColumns: string[] = ['number', 'question', 'answer', 'action'];

  constructor(
    private questionService: QuestionService,
    private sectionService: SectionService,
    private chapterService: ChapterService,
    private studentClassService: StudentClassService,
    private subjectService: SubjectService,
    private router: Router
  ) { }

  ngOnInit() {
    this.studentsClassKey = this.studentClassService.selectedStudentClassKey;
    var x = this.questionService.getQuestionsList("37230015", this.studentClassService.selectedStudentClassKey, this.subjectService.selectedSubjectName, this.chapterService.selectedChapterName, this.sectionService.selectedSectionName);
    x.snapshotChanges().subscribe(
      item => {
        this.questionsList = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.questionsList.push(y as Question);
        });
        console.log(this.questionsList);
      });
  }

  openQuestionDetail(selectedSectionName: string) {
    this.chapterService.selectedChapterName = selectedSectionName;
    this.router.navigate(['/questions-list-of-sections']);
  }
}
