import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-course',
  templateUrl: './js-course.component.html',
  styleUrls: ['./js-course.component.css']
})
export class JsCourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}




function  helloYou(name) {
  console.log('Hello ' + name)
}

