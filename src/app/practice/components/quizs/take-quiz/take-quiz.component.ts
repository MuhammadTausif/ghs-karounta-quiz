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
import { QuizService } from '../../../shared/services/quiz.service';
import { Student } from '../../../shared/models/student.model';
import { StudentService } from '../../../shared/services/student.service';

@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.css']
})
export class TakeQuizComponent implements OnInit {

  schoolsList: School[];
  studentsClassesList: StudentClass[];
  students: Student[];
  subjectsList: StudentSubject[];
  chaptersList: Chapter[];
  sectionsList: Section[];
  questions: Question[] = [];
  question: Question;

  totalQuestions = this.questions.length;
  startDateTime: string;

  pager = {
    index: 0,
    size: 1,
    count: 1
  };

  // Demo question list must be deleted.
  questionsDemo: Question[] = [
    {
      $key: '1', questionName: 'First Question', optionA: 'A', optionB: 'B', optionC: 'C', optionD: 'D',
      schoolEMIS: '37230015',
      studentClassName: 'Class Test',
      studentSubjectName: 'Islamiat',
      chapterName: 'Namaz',
      sectionName: 'Wajib Namaz'
    },
    {
      $key: '2', questionName: 'Second Question', optionA: 'A', optionB: 'B', optionC: 'C', optionD: 'D',
      schoolEMIS: '37230015',
      studentClassName: 'Class Test',
      studentSubjectName: 'Islamiat',
      chapterName: 'Namaz',
      sectionName: 'Wajib Namaz'
    },
    {
      $key: '3', questionName: 'Thired Question', optionA: 'A', optionB: 'B', optionC: 'C', optionD: 'D',
      schoolEMIS: '37230015',
      studentClassName: 'Class Test',
      studentSubjectName: 'Islamiat',
      chapterName: 'Namaz',
      sectionName: 'Wajib Namaz'
    }
  ];

  // Form Controls
  serialNumber = new FormControl('');
  questionName = new FormControl('');
  optionA = new FormControl('');
  optionB = new FormControl('');
  optionC = new FormControl('');
  optionD = new FormControl('');

  selectedSchoolEMIS = new FormControl('');
  selectedClassName = new FormControl('');
  selectedStudentRollNo = new FormControl('');
  selectedSubjectName = new FormControl('');
  selectedChapterName = new FormControl('');
  selectedSectionName = new FormControl('');
  currentQuestionNumber = new FormControl('');
  currentQuestionText = new FormControl('');
  currentOptionA = new FormControl('');
  currentOptionB = new FormControl('');
  currentOptionC = new FormControl('');
  currentOptionD = new FormControl('');

  selectedQuestion: Question;
  selectedOption = new FormControl('');

  constructor(
    public schoolService: SchoolService,
    public subjectService: SubjectService,
    public studentsClassService: StudentClassService,
    public studenttService: StudentService,
    public chapterService: ChapterService,
    public sectionService: SectionService,
    public questionService: QuestionService,
    public quizService: QuizService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.getSchoolsList();
    this.startDateTime = Date.now().toString();
  }

  // Getting schools list
  getSchoolsList() {
    const x = this.schoolService.getData();
    x.snapshotChanges().subscribe(
      item => {
        this.schoolsList = [];
        item.forEach(element => {
          const y = element.payload.toJSON();
          y['$key'] = element.key;
          this.schoolsList.push(y as School);
        });
      });
  }

  // Getting students classes list
  getStudentsClassesList(selectedSchoolEMIS?: string) {
    const x = this.studentsClassService.getStudentsClassesList(selectedSchoolEMIS);
    x.snapshotChanges().subscribe(
      item => {
        this.studentsClassesList = [];
        item.forEach(element => {
          const y = element.payload.toJSON();
          y['$key'] = element.key;
          this.studentsClassesList.push(y as StudentClass);
        });
      });
  }

  // Getting subjects list
  getSubjectsList(selectedSchoolEMIS?: string, studentClassName?: string) {
    const x = this.subjectService.getSubjectsList(selectedSchoolEMIS, studentClassName);
    x.snapshotChanges().subscribe(
      item => {
        this.subjectsList = [];
        item.forEach(element => {
          const y = element.payload.toJSON();
          y['$key'] = element.key;
          this.subjectsList.push(y as StudentSubject);
        });
      });
    // this.getStudentsList(selectedSchoolEMIS, studentClassName);
  }

  // Getting subjects list
  getStudentsList(selectedSchoolEMIS?: string, studentClassName?: string) {
    const x = this.studenttService.getStudentsList(selectedSchoolEMIS, studentClassName);
    x.snapshotChanges().subscribe(
      item => {
        this.students = [];
        item.forEach(element => {
          const y = element.payload.toJSON();
          y['$key'] = element.key;
          this.students.push(y as Student);
        });
      });
  }

  // Getting chapters list
  getChaptersList(selectedSchoolEMIS?: string, studentClassName?: string, selectedSubjectName?: string) {
    const x = this.chapterService.getChaptersList(selectedSchoolEMIS, studentClassName, selectedSubjectName);
    x.snapshotChanges().subscribe(
      item => {
        this.chaptersList = [];
        item.forEach(element => {
          const y = element.payload.toJSON();
          y['$key'] = element.key;
          this.chaptersList.push(y as Chapter);
        });
      });
  }

  // Getting sections list
  getSactionsList(selectedSchoolEMIS?: string, studentClassName?: string, selectedSubjectName?: string, selectedChapterName?: string) {
    const x = this.sectionService.getSectionsList(selectedSchoolEMIS, studentClassName, selectedSubjectName, selectedChapterName);
    x.snapshotChanges().subscribe(
      item => {
        this.sectionsList = [];
        item.forEach(element => {
          const y = element.payload.toJSON();
          y['$key'] = element.key;
          this.sectionsList.push(y as Section);
        });
      });
  }

  // Getting sections list
  getQuestionsList(
    selectedSchoolEMIS?: string, studentClassName?: string, selectedSubjectName?: string,
    selectedChapterName?: string, selectedSectionName?: string) {
    const x = this.questionService.getQuestionsList(
      selectedSchoolEMIS,
      studentClassName,
      selectedSubjectName, selectedChapterName, selectedSectionName);
    x.snapshotChanges().subscribe(
      item => {
        this.questions = [];
        item.forEach(element => {
          const y = element.payload.toJSON();
          y['$key'] = element.key;
          this.questions.push(y as Question);
          this.totalQuestions = this.questions.length;
        });
      });
    const selectedQuestionIndex = Math.floor(Math.random() * this.questions.length);
    this.selectedQuestion = this.questions[selectedQuestionIndex];
    this.questions.splice(selectedQuestionIndex, 1);
  }

  submitAnswer() {
    if (this.questions.length > 0) {
      this.pager.index++;
      const selectedQuestionIndex = Math.floor(Math.random() * this.questions.length);
      this.selectedQuestion = this.questions[selectedQuestionIndex];
      this.questions.splice(selectedQuestionIndex, 1);
      const answeredQuestion: Question = new Question;
      answeredQuestion.$key = this.selectedQuestion.$key;
      answeredQuestion.questionName = this.selectedQuestion.questionName;
      answeredQuestion.schoolEMIS = this.selectedSchoolEMIS.value;
      answeredQuestion.studentClassName = this.selectedClassName.value;
      answeredQuestion.studentSubjectName = this.selectedSubjectName.value;
      answeredQuestion.chapterName = this.selectedChapterName.value;
      answeredQuestion.sectionName = this.selectedSectionName.value;

      this.quizService.submitAnswer(
        this.selectedStudentRollNo.value, answeredQuestion, this.selectedOption.value, this.startDateTime.toString());
    }
    // this.question = new Question;
    // this.question.$key = this.serialNumber.value;
    // this.question.questionName = this.questionName.value;
    // this.question.optionA = this.optionA.value;
    // this.question.optionB = this.optionB.value;
    // this.question.optionC = this.optionC.value;
    // this.question.optionD = this.optionD.value;

    // this.question.schoolEMIS = this.selectedSchoolEMIS.value;
    // this.question.studentClassName = this.selectedClassName.value;
    // this.question.studentSubjectName = this.selectedSubjectName.value;
    // this.question.chapterName = this.selectedChapterName.value;
    // this.question.sectionName = this.selectedSectionName.value;

    // this.questionService.insertQuestion(this.question);
  }

  tempMethod() {
    const qn = new Question;

    qn.$key = '1';
    qn.chapterName = 'Question';
    qn.optionA = 'A';
    qn.optionB = 'B';
    qn.optionC = 'C';
    qn.optionD = 'D';

    qn.schoolEMIS = '37230015';
    qn.studentClassName = 'Class Test';
    qn.studentSubjectName = 'Islamiat';
    qn.chapterName = 'Namaz';
    qn.sectionName = 'Farz Namaz';
    console.log('called init');
    this.questionService.insertQuestion(qn);
  }

  radioChange() {
    alert('clicked');
  }
}
