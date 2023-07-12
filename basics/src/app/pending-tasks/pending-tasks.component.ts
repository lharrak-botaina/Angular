import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-tasks',
  templateUrl: './pending-tasks.component.html',
  styleUrls: ['./pending-tasks.component.scss','../app.component.scss']
})
export class PendingTasksComponent implements OnInit ,AfterContentInit ,AfterViewInit,AfterViewChecked,OnDestroy{

  roleId:number=0;

  num1 : number=10;
  num2:number=14;

  ngOnInit(): void {
    console.log('Pending Tasks');
    this.sum();
    this.add();
  }
  sum(){
    console.log(this.roleId)
    console.log('this is a sum method')
  }
  add(){
    console.log(this.num1+this.num2)
  }
  ngAfterContentInit(): void {
    console.log('message after content init')
  }
  ngAfterViewInit(): void {
    console.log('message after view init')
  }
  ngAfterViewChecked(): void {
    console.log('after view is checked')
  }
  ngOnDestroy(): void {
    alert('destroying the component')
  }

}
