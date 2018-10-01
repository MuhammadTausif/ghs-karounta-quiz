import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './practice/students/classes/classes.component';
import { StudentsListComponent } from './practice/students/students-list/students-list.component';
import { AddStudentComponent } from './practice/students/add-student/add-student.component';
import { HeroListComponent } from './practice/routing-and-navigation/heroes/hero-list.component';
import { ListTeachersComponent } from './practice/teachers/list-teachers/list-teachers.component';
import { AddTeacherComponent } from './practice/teachers/add-teacher/add-teacher.component';
import { ClassesListForTestsComponent } from './practice/tests/classes-list-for-tests/classes-list-for-tests.component';
import { AddTestComponent } from './practice/tests/add-test/add-test.component';
import { SubjectsListForTestsComponent } from './practice/tests/subjects-list-for-tests/subjects-list-for-tests.component';
import { ListTestsComponent } from './practice/tests/list-tests/list-tests.component';
import { Angular6FireBase2SetupComponent } from './practice/angular6-fire-base2-setup/angular6-fire-base2-setup.component';
import { ItemFormComponent } from './practice/angular-firebase/items/item-form/item-form.component';
import { ItemsListComponent } from './practice/angular-firebase/items/items-list/items-list.component';
import { RootContainerComponent } from './practice/angular-firebase/employees/root-container/root-container.component';
import { DialogBoxComponent } from './practice/hit-trail/dialog-box/dialog-box.component';
import { AddSchoolComponent } from './practice/components/school/add-school/add-school.component';
import { SchoolsListComponent } from './practice/components/school/schools-list/schools-list.component';
import { SchoolDetailComponent } from './practice/components/school/school-detail/school-detail.component';
import { StudentsClassesListComponent } from './practice/components/students-class/students-classes-list/students-classes-list.component';
import { AddStudentClassComponent } from './practice/components/students-class/add-student-class/add-student-class.component';
import { SubjectsListInClassComponent } from './practice/components/subject/subjects-list-in-class/subjects-list-in-class.component';
import { AddSubjectComponent } from './practice/components/subject/add-subject/add-subject.component';
import { AddChapterComponent } from './practice/components/chapter/add-chapter/add-chapter.component';
import { ChaptersListForTestsComponent } from './practice/tests/chapters-list-for-tests/chapters-list-for-tests.component';
import { AddSectionComponent } from './practice/components/sections/add-section/add-section.component';
import { SectionsListForTestsComponent } from './practice/components/sections/sections-list-for-tests/sections-list-for-tests.component';
import { AddQuestionComponent } from './practice/components/questions/add-question/add-question.component';
import { TakeQuizComponent } from './practice/components/quizs/take-quiz/take-quiz.component';
import { ViewResultComponent } from './practice/components/quizs/view-result/view-result.component';
import { QuizTestComponent } from './practice/ng2-quiz-master/app/quiz-test/quiz-test.component';
import { MobileComponent } from './practice/routing-progress-bar/mobile/mobile.component';
import { TvComponent } from './practice/routing-progress-bar/tv/tv.component';
import { AcComponent } from './practice/routing-progress-bar/ac/ac.component';
import { MyLoginComponent } from './practice/components/my-login/my-login.component';
import { RegisterStudentComponent } from './practice/components/register-student/register-student.component';
import { MyAuthGuard } from './practice/core/my-auth.guard';

const appRoutes: Routes = [

  // List routes
  { path: 'classes', component: ClassesComponent },
  { path: 'student-list', component: StudentsListComponent },
  { path: 'teacher-list', component: ListTeachersComponent },
  { path: 'classes-list-for-students', component: StudentsClassesListComponent },
  { path: 'classes-list-for-tests', component: ClassesListForTestsComponent },
  { path: 'subjects-list-for-tests', component: SubjectsListForTestsComponent },
  { path: 'tests-list-for-tests', component: ListTestsComponent },
  { path: 'schools-list', component: SchoolsListComponent, canActivate: [MyAuthGuard] },
  { path: 'subjects-list-in-classes', component: SubjectsListInClassComponent },
  { path: 'chapters-list-of-subects', component: ChaptersListForTestsComponent },
  { path: 'sectioins-list-of-chapters', component: SectionsListForTestsComponent },

  // Add element routes
  { path: 'add-student', component: AddStudentComponent },
  { path: 'add-teacher', component: AddTeacherComponent },
  { path: 'add-test', component: AddTestComponent },
  { path: 'add-school', component: AddSchoolComponent },
  { path: 'add-class', component: AddStudentClassComponent },
  { path: 'add-subject', component: AddSubjectComponent },
  { path: 'add-chapter', component: AddChapterComponent },
  { path: 'add-section', component: AddSectionComponent },
  { path: 'add-question', component: AddQuestionComponent },

  // detail element routes
  { path: 'school-detail', component: SchoolDetailComponent },

  // Quiz and result
  { path: 'take-quiz', component: TakeQuizComponent },
  { path: 'view-result', component: ViewResultComponent },

  // Practice routes
  { path: 'firebase-in-action', component: Angular6FireBase2SetupComponent },
  { path: 'add-item', component: ItemFormComponent },
  { path: 'view-item', component: ItemsListComponent },
  { path: 'employees', component: RootContainerComponent },
  { path: 'ng2-quiz-master', component: QuizTestComponent },


  { path: 'routing', component: HeroListComponent, outlet: 'second-outlet' },

  { path: 'foo', component: HeroListComponent, outlet: 'secondry' },

  // Dialog box rout
  { path: 'dialog-in-action', component: DialogBoxComponent },

  // routing-progress-bar routs
  {    path: 'mobile',    component: MobileComponent  },
  {    path: 'tv',    component: TvComponent  },
  {    path: 'ac',    component: AcComponent  },

  // addmin rout
  { path: 'mylogin', component: MyLoginComponent},
  { path: 'register-student', component: RegisterStudentComponent },
  // { path: 'mylogin', component: MyLoginComponent, canActivate: [AuthGuard] },
  // { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  // { path: 'user', component: UserComponent,  resolve: { data: UserResolver}}

  // default paths
  { path: '', redirectTo: '/mylogin', pathMatch: 'full' },
  { path: '**', component: MyLoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      //   { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }