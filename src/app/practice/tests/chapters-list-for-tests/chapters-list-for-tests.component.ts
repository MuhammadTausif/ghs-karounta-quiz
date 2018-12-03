import { Component, OnInit } from '@angular/core';
import { StudentClass } from '../../shared/models/studentClass.model';
import { ChapterService } from '../../shared/services/chapter.service';
import { StudentClassService } from '../../shared/services/student-class.service';
import { Router } from '@angular/router';
import { Chapter } from '../../shared/models/chapter.model';
import { SubjectService } from '../../shared/services/subject.service';

@Component({
  selector: 'app-chapters-list-for-tests',
  templateUrl: './chapters-list-for-tests.component.html',
  styleUrls: ['./chapters-list-for-tests.component.css']
})
export class ChaptersListForTestsComponent implements OnInit {

  public chaptersList: Chapter[]
  public studentsClass: StudentClass;
  public studentsClassKey: string;
  public subejectName: string = this.subjectService.selectedSubjectName;

  displayedColumns: string[] = ['number', 'name', 'sections', 'action'];

  constructor(
    private chapterService: ChapterService,
    private studentClassService: StudentClassService,
    private subjectService: SubjectService,
    private router: Router
  ) { }

  ngOnInit() {
    this.studentsClassKey = this.studentClassService.selectedStudentClassKey;
    var x = this.chapterService.getChaptersList("37230015", this.studentClassService.selectedStudentClassKey, this.subjectService.selectedSubjectName );
    x.snapshotChanges().subscribe(
      item => {
        this.chaptersList = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.chaptersList.push(y as Chapter);
        });
        console.log(this.chaptersList);
      });
  }
  
  openSectionsList(selectedChapterName: string){
    this.chapterService.selectedChapterName = selectedChapterName;
    this.router.navigate(['/sections-list-of-chapters']);
  }
}
