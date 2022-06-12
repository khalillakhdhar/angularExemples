import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input()
name?:string="";
count=2;
  constructor() { }

  ngOnInit(): void {
  }
increment()
{
  this.count++;
}
}
