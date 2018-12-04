import { Component, OnInit } from '@angular/core';
import { Chapter } from 'src/app/practice/shared/models/chapter.model';
import { StudentClass } from 'src/app/practice/shared/models/studentClass.model';
import { ChapterService } from 'src/app/practice/shared/services/chapter.service';
import { StudentClassService } from 'src/app/practice/shared/services/student-class.service';
import { SubjectService } from 'src/app/practice/shared/services/subject.service';
import { Router } from '@angular/router';
import { Section } from 'src/app/practice/shared/models/section.model';
import { SectionService } from 'src/app/practice/shared/services/section.service';
import { TestService } from 'src/app/practice/shared/services/test.service';

@Component({
  selector: 'app-sections-list-for-tests',
  templateUrl: './sections-list-for-tests.component.html',
  styleUrls: ['./sections-list-for-tests.component.css']
})
export class SectionsListForTestsComponent implements OnInit {

  public sectionsList: Section[]
  public studentsClass: StudentClass;
  public studentsClassKey: string = this.studentClassService.selectedStudentClassKey;
  public subejectName: string = this.subjectService.selectedSubjectName;
  public chapterName: string = this.chapterService.selectedChapterName;

  displayedColumns: string[] = ['number', 'name', 'sections', 'action'];

  constructor(
    private sectionService: SectionService,
    private chapterService: ChapterService,
    private studentClassService: StudentClassService,
    private subjectService: SubjectService,
    private testService: TestService,
    private router: Router
  ) { }

  ngOnInit() {
    this.studentsClassKey = this.studentClassService.selectedStudentClassKey;
    var x = this.sectionService.getSectionsList("37230015", this.studentClassService.selectedStudentClassKey, this.subjectService.selectedSubjectName, this.chapterService.selectedChapterName);
    x.snapshotChanges().subscribe(
      item => {
        this.sectionsList = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.sectionsList.push(y as Section);
        });
        console.log(this.sectionsList);
      });
  }

  openQuestionsList(selectedSectionName: string) {
    this.sectionService.selectedSectionName = selectedSectionName;
    this.router.navigate(['/questions-list-of-sections']);
  }

  activateTest(selectedSectionName: string){
    var activeTestKey = "schools/37230015/studentClasses/" + this.studentClassService.selectedStudentClassKey +"/Subjects/"+ this.subjectService.selectedSubjectName +"/chapters/"+ this.chapterService.selectedChapterName+"/sections/"+selectedSectionName;
    var classPath = "schools/37230015/studentClasses/" + this.studentClassService.selectedStudentClassKey+"/tests";
    console.log(activeTestKey);    
    console.log(classPath);    
    this.testService.activateTest(classPath, activeTestKey);
  }

}
