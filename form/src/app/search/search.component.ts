import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  id=0;
  color="";
  constructor(private activatedRoute : ActivatedRoute){
    this.activatedRoute.queryParams.subscribe((params)=>{
      this.color=params['color']
      this.id=params['id']
    })
  }

}
