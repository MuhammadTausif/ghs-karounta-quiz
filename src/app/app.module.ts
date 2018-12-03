import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http/';

import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCheckboxModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTabsModule, MatButtonToggleModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatChipsModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatExpansionModule, MatDividerModule, MatDialogModule, MatRadioModule } from '@angular/material';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MyTableComponent } from './my-table/my-table.component';
import { MyTestNavComponent } from './my-test-nav/my-test-nav.component';
import { TestPageComponent } from './practice/test-page/test-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
// Import NgStickyDirective
// import { NgStickyDirective } from 'ng-sticky';
// import { ItemsListComponent } from './practice/angular2FirebaseCRUD/items/items-list/items-list.component';
// import { ItemsDetailComponent } from './practice/angular2FirebaseCRUD/items/items-detail/items-detail.component';
// import { ItemsFormComponent } from './practice/angular2FirebaseCRUD/items/items-form/items-form.component';
import { Angular6FireBase2SetupComponent } from './practice/angular6-fire-base2-setup/angular6-fire-base2-setup.component';
// import { CustomerDetailsComponent } from './practice/customers/customer-details/customer-details.component';
// import { CustomersListComponent } from './practice/customers/customers-list/customers-list.component';
// import { CreateCustomerComponent } from './practice/customers/create-customer/create-customer.component';
// import { CustomerComponent } from './practice/customers/customer/customer.component';
import { AppRoutingModule } from './app-routing.module';
import { AddTeacherComponent } from './practice/teachers/add-teacher/add-teacher.component';
import { ListTeachersComponent } from './practice/teachers/list-teachers/list-teachers.component';
import { TeacherDetailComponent } from './practice/teachers/teacher-detail/teacher-detail.component';
import { HeroesModule } from './practice/routing-and-navigation/heroes/heroes.module';
import { ClassesComponent } from './practice/students/classes/classes.component';
import { StudentsListComponent } from './practice/students/students-list/students-list.component';
import { AddStudentComponent } from './practice/students/add-student/add-student.component';
import { StudentsClassesComponent } from './practice/students/students-classes/students-classes.component';
import { ClassesListForTestsComponent } from './practice/tests/classes-list-for-tests/classes-list-for-tests.component';
import { SubjectsListForTestsComponent } from './practice/tests/subjects-list-for-tests/subjects-list-for-tests.component';
import { ChaptersListForTestsComponent } from './practice/tests/chapters-list-for-tests/chapters-list-for-tests.component';
import { ListTestsComponent } from './practice/tests/list-tests/list-tests.component';
import { AddTestComponent } from './practice/tests/add-test/add-test.component';
import { ItemDetailComponent } from './practice/angular-firebase/items/item-detail/item-detail.component';
import { ItemFormComponent } from './practice/angular-firebase/items/item-form/item-form.component';
import { ItemsListComponent } from './practice/angular-firebase/items/items-list/items-list.component';
import { EmployeeComponent } from './practice/angular-firebase/employees/employee/employee.component';
import { EmployeeListComponent } from './practice/angular-firebase/employees/employee-list/employee-list.component';
import { RootContainerComponent } from './practice/angular-firebase/employees/root-container/root-container.component';
import { LandingComponent } from './practice/components/landing/landing.component';
import { MainComponent } from './practice/components/main/main.component';
import { DialogBoxComponent } from './practice/hit-trail/dialog-box/dialog-box.component';
import { SchoolsListComponent } from './practice/components/school/schools-list/schools-list.component';
import { AddSchoolComponent } from './practice/components/school/add-school/add-school.component';
import { SchoolDetailComponent } from './practice/components/school/school-detail/school-detail.component';
import { StudentsClassesListComponent } from './practice/components/students-class/students-classes-list/students-classes-list.component';
import { AddStudentClassComponent } from './practice/components/students-class/add-student-class/add-student-class.component';
import { AddSubjectComponent } from './practice/components/subject/add-subject/add-subject.component';
import { SubjectsListInClassComponent } from './practice/components/subject/subjects-list-in-class/subjects-list-in-class.component';
import { AddChapterComponent } from './practice/components/chapter/add-chapter/add-chapter.component';
import { AddSectionComponent } from './practice/components/sections/add-section/add-section.component';
import { SectionsListForTestsComponent } from './practice/components/sections/sections-list-for-tests/sections-list-for-tests.component';
import { AddQuestionComponent } from './practice/components/questions/add-question/add-question.component';
import { TakeQuizComponent } from './practice/components/quizs/take-quiz/take-quiz.component';
import { ViewResultComponent } from './practice/components/quizs/view-result/view-result.component';
import { QuizTestComponent } from './practice/ng2-quiz-master/app/quiz-test/quiz-test.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { MobileComponent } from './practice/routing-progress-bar/mobile/mobile.component';
import { AcComponent } from './practice/routing-progress-bar/ac/ac.component';
import { TvComponent } from './practice/routing-progress-bar/tv/tv.component';
import { MyLoginComponent } from './practice/components/my-login/my-login.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UserLoginComponent } from './practice/components/users/user-login/user-login.component';
import { UserProfileComponent } from './practice/components/users/user-profile/user-profile.component';
import { MyAuthService } from './practice/core/my-auth.service';

// Angular Firebase Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { LoginPracticeComponent } from './practice/auth-practice/login-practice/login-practice.component';
import { UserPracticeComponent } from './practice/auth-practice/user-practice/user-practice.component';
import { RegisterPracticeComponent } from './practice/auth-practice/register-practice/register-practice.component';
import { RegisterStudentComponent } from './practice/components/register-student/register-student.component';
import { QuestionsListComponent } from './practice/components/questions/questions-list/questions-list.component';

@NgModule({
  declarations: [
    // NgStickyDirective,
    AppComponent,
    MyNavComponent,
    MyDashboardComponent,
    MyTableComponent,
    MyTestNavComponent,
    TestPageComponent,
    ClassesComponent,
    StudentsListComponent,
    AddStudentComponent,
    // ItemsListComponent,
    // ItemsDetailComponent,
    // ItemsFormComponent,
    Angular6FireBase2SetupComponent,
    // CustomerDetailsComponent,
    // CustomersListComponent,
    // CreateCustomerComponent,
    // CustomerComponent,
    AddTeacherComponent,
    ListTeachersComponent,
    TeacherDetailComponent,
    StudentsClassesComponent,
    ClassesListForTestsComponent,
    SubjectsListForTestsComponent,
    ChaptersListForTestsComponent,
    ListTestsComponent,
    AddTestComponent,
    // Item component
    ItemDetailComponent,
    ItemFormComponent,
    ItemsListComponent,
    EmployeeComponent,
    EmployeeListComponent,
    RootContainerComponent,
    LandingComponent,
    MainComponent,
    DialogBoxComponent,
    SchoolsListComponent,
    AddSchoolComponent,
    SchoolDetailComponent,
    StudentsClassesListComponent,
    AddStudentClassComponent,
    AddSubjectComponent,
    SubjectsListInClassComponent,
    AddChapterComponent,
    AddSectionComponent,
    SectionsListForTestsComponent,
    AddQuestionComponent,
    TakeQuizComponent,
    ViewResultComponent,
    QuizTestComponent,
    MobileComponent,
    AcComponent,
    TvComponent,
    MyLoginComponent,
    UserLoginComponent,
    UserProfileComponent,
    LoginPracticeComponent,
    UserPracticeComponent,
    RegisterPracticeComponent,
    RegisterStudentComponent,
    QuestionsListComponent
  ],
  imports: [
    // ToastrModule.forRoot(),
    HeroesModule,
    HttpClientModule,

    // Angular Firebase Import
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features

    BrowserModule,
    LayoutModule,
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule ,
    MatSelectModule, MatRadioModule, MatProgressSpinnerModule,
    MatDialogModule, MatDividerModule,    MatExpansionModule, MatTabsModule, MatButtonToggleModule,
     MatStepperModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
    MatChipsModule, MatSelectModule, MatCheckboxModule, MatGridListModule, MatCardModule, MatMenuModule
    , MatTableModule, MatPaginatorModule, MatSortModule,
    // Routing progress bar
    SlimLoadingBarModule,
  ],
  providers: [MyAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
