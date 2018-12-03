import { Component, OnInit } from '@angular/core';
import { Chapter } from '../../../shared/models/chapter.model';
import { School } from '../../../shared/models/school.model';
import { StudentClass } from '../../../shared/models/studentClass.model';
import { Subject as StudentSubject } from '../../../shared/models/subject.model';
import { FormControl } from '@angular/forms';
import { SchoolService } from '../../../shared/services/school.service';
import { SubjectService } from '../../../shared/services/subject.service';
import { StudentClassService } from '../../../shared/services/student-class.service';
import { ChapterService } from '../../../shared/services/chapter.service';
import { Router } from '@angular/router';
import { SectionService } from '../../../shared/services/section.service';
import { Section } from '../../../shared/models/section.model';
import { QuestionService } from '../../../shared/services/question.service';
import { Question } from '../../../shared/models/question.model';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  schoolsList: School[];
  studentsClassesList: StudentClass[];
  subjectsList: StudentSubject[];
  chaptersList: Chapter[];
  sectionsList: Section[];
  question: Question;
  questionsNumberList: any[];
  lastNumber: number;

  public studentsClassKey: string = this.studentsClassService.selectedStudentClassKey;
  public subejectName: string = this.subjectService.selectedSubjectName;
  public chapterName: string = this.chapterService.selectedChapterName;
  public sectionName: string = this.sectionService.selectedSectionName;

  // Form Controls
  serialNumber = new FormControl('');
  questionName = new FormControl('');
  optionA = new FormControl('');
  optionB = new FormControl('');
  optionC = new FormControl('');
  optionD = new FormControl('');

  selectedSchoolEMIS = new FormControl('');
  selectedClassName = new FormControl('');
  selectedSubjectName = new FormControl('');
  selectedChapterName = new FormControl('');
  selectedSectionName = new FormControl('');

  constructor(
    public schoolService: SchoolService,
    public subjectService: SubjectService,
    public studentsClassService: StudentClassService,
    public chapterService: ChapterService,
    public sectionService: SectionService,
    public questionService: QuestionService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.getSchoolsList();
    this.getQuestionsNumberList();
  }

  // Getting schools list
  getSchoolsList() {
    var x = this.schoolService.getData();
    x.snapshotChanges().subscribe(
      item => {
        this.schoolsList = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.schoolsList.push(y as School);
        });
      });
  }

  // Getting students classes list
  getStudentsClassesList(selectedSchoolEMIS?: string) {
    var x = this.studentsClassService.getStudentsClassesList(selectedSchoolEMIS);
    x.snapshotChanges().subscribe(
      item => {
        this.studentsClassesList = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.studentsClassesList.push(y as StudentClass);
        });
      });
  }

  // Getting subjects list
  getSubjectsList(selectedSchoolEMIS?: string, studentClassName?: string) {
    var x = this.subjectService.getSubjectsList(selectedSchoolEMIS, studentClassName);
    x.snapshotChanges().subscribe(
      item => {
        this.subjectsList = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.subjectsList.push(y as StudentSubject);
        });
      });
  }

  // Getting chapters list
  getChaptersList(selectedSchoolEMIS?: string, studentClassName?: string, selectedSubjectName?: string) {
    var x = this.chapterService.getChaptersList(selectedSchoolEMIS, studentClassName, selectedSubjectName);
    x.snapshotChanges().subscribe(
      item => {
        this.chaptersList = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.chaptersList.push(y as Chapter);
        });
      });
  }

  // Getting sections list
  getSactionsList(selectedSchoolEMIS?: string, studentClassName?: string, selectedSubjectName?: string, selectedChapterName?: string) {
    var x = this.sectionService.getSectionsList(selectedSchoolEMIS, studentClassName, selectedSubjectName, selectedChapterName);
    x.snapshotChanges().subscribe(
      item => {
        this.sectionsList = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.sectionsList.push(y as Section);
        });
      });
  }

  // Getting sections list
  getQuestionsNumberList() {
    var x = this.questionService.getQuestionsList(
      "37230015",
      this.studentsClassService.selectedStudentClassKey,
      this.subjectService.selectedSubjectName,
      this.chapterService.selectedChapterName,
      this.sectionService.selectedSectionName);
    x.snapshotChanges().subscribe(
      item => {
        this.questionsNumberList = [];
        item.forEach(element => {
          this.questionsNumberList.push(element.key);
        });
        // console.log(this.questionsNumberList);
    
        this.lastNumber = parseInt( this.questionsNumberList[this.questionsNumberList.length - 1]);
        if(this.questionsNumberList.length == 0){ this.lastNumber = 0;}
        this.lastNumber = this.lastNumber + 1;
        // console.log("New Number is: " + lastNumber) ;        
      });
  }


  insertQuestion() {
    this.question = new Question;
    this.question.$key = this.lastNumber.toString();
    this.question.questionName = this.questionName.value;
    this.question.optionA = this.optionA.value;
    this.question.optionB = this.optionB.value;
    this.question.optionC = this.optionC.value;
    this.question.optionD = this.optionD.value;

    this.question.schoolEMIS = "37230015";
    this.question.studentClassName = this.studentsClassService.selectedStudentClassKey;
    this.question.studentSubjectName = this.subjectService.selectedSubjectName;
    this.question.chapterName = this.chapterService.selectedChapterName;
    this.question.sectionName = this.sectionService.selectedSectionName;

    this.questionService.insertQuestion(this.question);
    this.router.navigate(['/questions-list-of-sections']);
  }


  tempMethod() {
    var qn = new Question;

    qn.$key = "1";
    qn.chapterName = "Question";
    qn.optionA = "A";
    qn.optionB = "B";
    qn.optionC = "C";
    qn.optionD = "D";

    qn.schoolEMIS = "37230015";
    qn.studentClassName = "Class Test";
    qn.studentSubjectName = "Islamiat";
    qn.chapterName = "Namaz";
    qn.sectionName = "Farz Namaz";
    console.log('called init');
    this.questionService.insertQuestion(qn);
  }
}
