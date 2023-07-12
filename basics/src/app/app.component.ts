import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild,ViewChildren } from '@angular/core';
import { ContentProjectionComponent } from './content-projection/content-projection.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit  {
  title = 'myProject';
ngOnInit(): void {

}
@ViewChildren(ContentProjectionComponent)
ContentProject?:QueryList<ContentProjectionComponent>
ngAfterViewInit():void{
  console.log(this.ContentProject)
}

}

