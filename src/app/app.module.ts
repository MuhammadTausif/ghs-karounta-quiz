import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCheckboxModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTabsModule, MatButtonToggleModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatChipsModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatExpansionModule, MatDividerModule, MatDialogModule } from '@angular/material';
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
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
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
    AddStudentClassComponent
  ],
  imports: [
    // ToastrModule.forRoot(),
    HeroesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
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
    MatSelectModule,
    MatDialogModule, MatDividerModule,    MatExpansionModule, MatTabsModule, MatButtonToggleModule, MatStepperModule, MatFormFieldModule, MatInputModule,MatDatepickerModule,MatNativeDateModule,
    MatChipsModule, MatSelectModule, MatCheckboxModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
