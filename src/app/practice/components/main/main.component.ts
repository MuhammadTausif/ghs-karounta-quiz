import { Component, NgZone, OnInit } from '@angular/core';
// import { Router } from "@angular/router";
import {
    NavigationCancel,
    Event,
    NavigationEnd,
    NavigationError,
    NavigationStart,
    Router
} from '@angular/router';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    // Sidenav responsive
    width;
    height;
    mode = 'side';
    // mode: string = 'side';
    open = 'true';
    title = 'School Information System | GHS Karounta';
    navList: NavList[];

    constructor(
        private _loadingBar: SlimLoadingBarService, private _router: Router,
        public ngZone: NgZone,
        public route: Router, ) {
        this._router.events.subscribe((event: Event) => {
            this.navigationInterceptor(event);
        });
        this.navList = [
            {
                categoryName: 'Login', icon: 'power', dropDown: false,
                subCategory:
                    [
                        { subCategoryName: 'Login', listIcon: 'add', subCategoryLink: '/mylogin', visable: true, },
                        { subCategoryName: 'List of Classes', listIcon: 'list',
                         subCategoryLink: '/classes-list-for-students', visable: true, },
                    ]
            },
            {
                categoryName: 'Classes', icon: 'group', dropDown: false,
                subCategory:
                    [
                        { subCategoryName: 'Add Class', listIcon: 'add', subCategoryLink: '/add-class', visable: true, },
                        { subCategoryName: 'List of Classes', listIcon: 'list',
                         subCategoryLink: '/classes-list-for-students', visable: true, },
                    ]
            },
            {
                categoryName: 'Subjects', icon: 'book', dropDown: false,
                subCategory:
                    [
                        { subCategoryName: 'Add Subject', listIcon: 'add', subCategoryLink: '/add-subject', visable: true, },
                        { subCategoryName: 'List of Subjects', listIcon: 'list',
                         subCategoryLink: '/subjects-list-in-classes', visable: true, },
                    ]
            },
            {
                categoryName: 'Chapters', icon: 'book', dropDown: false,
                subCategory:
                    [
                        { subCategoryName: 'Add Chapter', listIcon: 'add', subCategoryLink: '/add-chapter', visable: true, },
                        { subCategoryName: 'List of Chapters', listIcon: 'list',
                         subCategoryLink: '/chapters-list-of-subects', visable: true, },
                    ]
            },
            {
                categoryName: 'Sections', icon: 'book', dropDown: false,
                subCategory:
                    [
                        { subCategoryName: 'Add Section', listIcon: 'add', subCategoryLink: '/add-section', visable: true, },
                        { subCategoryName: 'List of Sactions', listIcon: 'list',
                         subCategoryLink: '/sectioins-list-of-chapters', visable: true, },
                    ]
            },
            {
                categoryName: 'Questions', icon: 'help', dropDown: false,
                subCategory:
                    [
                        { subCategoryName: 'Add Question', listIcon: 'add', subCategoryLink: '/add-question', visable: true, },
                        { subCategoryName: 'List of Questions', listIcon: 'list', subCategoryLink: '/add-question', visable: true, },
                    ]
            },
            {
                categoryName: 'Quiz', icon: 'question_answer', dropDown: false,
                subCategory:
                    [
                        { subCategoryName: 'Take Quiz', listIcon: 'add', subCategoryLink: '/take-quiz', visable: true, },
                        { subCategoryName: 'View Result', listIcon: 'list', subCategoryLink: '/view-result', visable: true, },
                    ]
            },
            {
                categoryName: 'Students', icon: 'face', dropDown: false,
                subCategory:
                    [
                        { subCategoryName: 'Add Student', listIcon: 'add', subCategoryLink: '/add-student', visable: true, },
                        { subCategoryName: 'Classes', listIcon: 'list', subCategoryLink: '/students-list', visable: true, },
                    ]
            },
            {
                categoryName: 'Teachers', icon: 'school', dropDown: false,
                subCategory:
                    [
                        { subCategoryName: 'Add Teacher', listIcon: 'add', subCategoryLink: '/add-teacher', visable: true, },
                        { subCategoryName: 'View Teachers', listIcon: 'list', subCategoryLink: '/teacher-list', visable: true, },
                    ]
            },
            {
                categoryName: 'Tests', icon: 'folder open', dropDown: false,
                subCategory:
                    [
                        { subCategoryName: 'Create Test', listIcon: 'add', subCategoryLink: '/add-test', visable: true, },
                        { subCategoryName: 'Class wise Tests', listIcon: 'list',
                         subCategoryLink: '/classes-list-for-tests', visable: true, },
                        { subCategoryName: 'Subject wise Tests', listIcon: 'list',
                        subCategoryLink: '/subjects-list-for-tests', visable: true, },
                    ]
            },
            {
                categoryName: 'Schools', icon: 'school', dropDown: false,
                subCategory:
                    [
                        { subCategoryName: 'Create School', listIcon: 'add', subCategoryLink: '/add-school', visable: true, },
                        { subCategoryName: 'Schools List', listIcon: 'list', subCategoryLink: '/schools-list', visable: true, },
                    ]
            },
            {
                categoryName: 'Practice', icon: 'close', dropDown: false,
                subCategory:
                    [
                        { subCategoryName: 'Firebase', listIcon: 'firebase', subCategoryLink: '/firebase-in-action', visable: true, },
                        { subCategoryName: 'Dialog', listIcon: 'folder', subCategoryLink: '/dialog-in-action', visable: true, },
                        { subCategoryName: 'ng2-quiz', listIcon: 'folder', subCategoryLink: '/ng2-quiz-master', visable: true, },
                        // routing-progress-bar
                        { subCategoryName: 'Mobile', listIcon: 'folder', subCategoryLink: '/mobile', visable: true, },
                        { subCategoryName: 'TV', listIcon: 'folder', subCategoryLink: '/tv', visable: true, },
                        { subCategoryName: 'AC', listIcon: 'folder', subCategoryLink: '/ac', visable: true, },
                    ]
            },
        ];
        this.changeMode();
        window.onresize = (e) => {
            ngZone.run(() => {
                this.changeMode();
            });
        };
    }

    private navigationInterceptor(event: Event): void {
        if (event instanceof NavigationStart) {
            this._loadingBar.start();
        }
        if (event instanceof NavigationEnd) {
            this._loadingBar.complete();
        }
        if (event instanceof NavigationCancel) {
            this._loadingBar.stop();
        }
        if (event instanceof NavigationError) {
            this._loadingBar.stop();
        }
    }

    ngOnInit() {

    }

    changeMode() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        if (this.width <= 800) {
            this.mode = 'over';
            this.open = 'false';
        }
        if (this.width > 800) {
            this.mode = 'side';
            this.open = 'true';
        }
    }

}

export class NavList {
    categoryName: string;
    icon: string;
    dropDown: boolean;
    subCategory: NavListItem[];
    constructor(_categoryName: string, _icon: string, _dropDown: boolean, _subCategory: NavListItem[]) {
        this.categoryName = _categoryName;
        this.icon = _icon;
        this.dropDown = _dropDown;
        this.subCategory = _subCategory;
    }
}

export class NavListItem {
    subCategoryName: string;
    listIcon: string;
    subCategoryLink: string;
    subCategoryQuery?: any;
    visable: boolean;
}
