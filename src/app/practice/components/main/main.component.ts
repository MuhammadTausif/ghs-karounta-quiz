import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    //Sidenav responsive
    width;
    height;
    mode: string = 'side';
    open = 'true';
    title = 'School Information System | GHS Karounta';
    navList: NavList[];

    constructor(public ngZone: NgZone,        public route: Router, ) {
        this.navList = [
            {
                categoryName: 'Classes', icon: 'group', dropDown: false,
                subCategory:
                    [
                        { subCategoryName: 'Add Class', listIcon: 'add', subCategoryLink: '/add-class', subCategoryQuery: { title: 'Add New Student' }, visable: true, },
                        { subCategoryName: 'List of Classes', listIcon: 'list', subCategoryLink: '/classes-list-for-students', visable: true, },
                    ]
            },
            {
                categoryName: 'Students', icon: 'face', dropDown: false,
                subCategory:
                    [
                        { subCategoryName: 'Add Student', listIcon: 'add', subCategoryLink: '/add-student', subCategoryQuery: { title: 'Add New Student' }, visable: true, },
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
                categoryName: 'Tests', icon: 'folder open', dropDown: false, //work
                subCategory:
                    [
                        { subCategoryName: 'Create Test', listIcon: 'add', subCategoryLink: '/add-test', visable: true, },
                        { subCategoryName: 'Class wise Tests', listIcon: 'list', subCategoryLink: '/classes-list-for-tests', visable: true, },
                        { subCategoryName: 'Subject wise Tests', listIcon: 'list', subCategoryLink: '/subjects-list-for-tests', visable: true, },
                    ]
            },
            {
                categoryName: 'Schools', icon: 'school', dropDown: false, //work
                subCategory:
                    [
                        { subCategoryName: 'Create School', listIcon: 'add', subCategoryLink: '/add-school', visable: true, },
                        { subCategoryName: 'Schools List', listIcon: 'list', subCategoryLink: '/schools-list', visable: true, },
                    ]
            },
            {
                categoryName: 'Practice', icon: 'close', dropDown: false, //work
                subCategory:
                    [
                        { subCategoryName: 'Firebase', listIcon: 'firebase', subCategoryLink: '/firebase-in-action', visable: true, },
                        { subCategoryName: 'Dialog', listIcon: 'folder', subCategoryLink: '/dialog-in-action', visable: true, },
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
