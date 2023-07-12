import { Component, ContentChild, ElementRef, OnInit, TemplateRef,ViewChildren, ViewChild, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.scss']
})
export class ContentProjectionComponent implements OnInit ,AfterViewInit
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.

{
  @ContentChild('admin')
  adminTemplate?:TemplateRef<any>

  ngOnInit(): void {

  }
  @ViewChild('headline')
  headline!: ElementRef;
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.headline.nativeElement.innerHTML)
  }

}
